#!/usr/bin/env python3
"""把一篇中文博客文章翻成英文版，写到 _en/，等人审过再发布。

用法：
  python3 scripts/translate_post.py _posts/2026-10-17-xxx.md
  python3 scripts/translate_post.py <发布包里的.md> --original _posts/2026-10-20-xxx.md
  python3 scripts/translate_post.py _posts/xxx.md --provider local --model <本地模型名> --base-url http://127.0.0.1:<端口>/v1

模型（都走 OpenAI 兼容的 /chat/completions）：
  deepseek  默认。key 读 ~/.config/deepseek/api-key
  local     本地模型（oMLX 等）。--base-url、--model 必填，或用环境变量 LOCAL_LLM_BASE_URL、LOCAL_LLM_MODEL；
            key 读 ~/.config/omlx-local/api-key（没有就不带）
  其他 OpenAI 兼容服务（GPT 等）：--base-url、--model、--key-file 三个一起给

审稿（第二遍）：
  python3 scripts/translate_post.py --polish _en/2026-10-17-xxx.md
  把中文原文和英文稿一起交给模型，按英语母语编辑的标准挑问题：对照原文查漏译错译，改掉中式英语。
  模型逐条给“原句 → 改句 → 理由”，脚本只替换在稿子里正好出现一次的原句，改动清单打印出来。
  （让模型整篇重写时它几乎原样照抄，所以改成逐条挑错。）
  改完在 front matter 记 polished_by，原稿备份到 /tmp/translate_post-backup/。

只写本地文件，不 commit、不 push。front matter 里 translated_by / polished_by 只做记录，页面上不显示。
"""
from pathlib import Path
import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

REPO = Path(__file__).resolve().parent.parent
EN_DIR = REPO / '_en'
CHUNK_CHARS = int(os.environ.get('CHUNK_CHARS', 5000))  # 按二级标题切块（按中文字数算），保证一次输出不被截断；代码多的长文审稿被截断时调小

PROVIDERS = {
    'deepseek': {'base_url': 'https://api.deepseek.com/v1', 'model': 'deepseek-chat',
                 'key_file': '~/.config/deepseek/api-key'},
    'local': {'base_url': os.environ.get('LOCAL_LLM_BASE_URL'), 'model': os.environ.get('LOCAL_LLM_MODEL'),
              'key_file': '~/.config/omlx-local/api-key'},
}

STYLE = """You translate blog posts by Pixel Li, a Chinese video editor and hobbyist who writes about local AI on a Mac mini, home servers and small automations.

Write natural, plain English, the way a modest engineer writes on a personal blog:
- First person. Short, direct sentences. No hype, no marketing tone, no added jokes.
- Translate faithfully. Do not add advice, summaries, conclusions or calls to action that are not in the original. Do not drop facts or numbers.
- Keep every number, unit and model name exactly (GB vs GiB, token/s, ¥ prices stay as they are).
- Chinese-only things (apps, platforms, slang): keep the name and add a few words of explanation the first time, e.g. "Xiaohongshu (a Chinese social app)".
- The label 博客版 ("blog edition") marks text that differs from the WeChat version. Leave the label out.

Markdown rules (strict):
- Keep the Markdown structure exactly: headings, lists, tables, blockquotes, bold, line breaks.
- Do not change anything inside code blocks or inline code, except translating Chinese comments inside code.
- Keep every URL, image path and HTML tag unchanged. Translate image alt text and link text.
- Keep Liquid tags such as {% raw %} unchanged.
- Output only the translated Markdown. No preface, no notes, no surrounding code fence."""

POLISH = """You are a native English editor. You get a Chinese blog post and its English translation by Pixel Li, a Chinese video editor and hobbyist who writes about local AI on a Mac mini and home servers.

Find every place where the English should be improved so it reads like a modest engineer wrote it in English in the first place:
- Fix anything that sounds translated: Chinese word order, literal idioms (e.g. "7x24" -> "24/7"), stiff lists, missing articles, odd collocations.
- Check it against the Chinese. Fix mistranslations and restore anything left out. Do not add facts, advice, jokes or conclusions that are not in the Chinese.
- Keep the voice: first person, short and plain, no hype. Do not make it more formal or more salesy.
- Keep every number, unit, model name, command and setting exactly.
- Chinese source names (media outlets, apps): give the English name if one exists, otherwise pinyin plus a short explanation.

Be thorough: a translated post usually needs 20 to 60 edits. Go through it paragraph by paragraph, including headings, table cells and image alt text.

Return a JSON object: {"edits": [{"find": "...", "replace": "...", "reason": "..."}]}
- "find" must be copied exactly from the English text (same punctuation and spacing), long enough to be unique, and within one line.
- Never edit code, inline code, URLs, image paths, HTML tags or Markdown syntax characters.
- "reason": a few words, e.g. "unidiomatic", "mistranslation: 原文是…", "missing: …".
Return only the JSON."""

META_PROMPT = """Below is a Chinese blog post title, subtitle and opening, followed by its English translation's opening.
Return a JSON object with:
- "title": English title, faithful to the Chinese title, under 70 characters, no clickbait
- "subtitle": English subtitle, faithful to the Chinese subtitle (empty string if none)
- "slug": URL slug, lowercase ASCII words joined by hyphens, 3 to 7 words
- "tags": 3 to 5 short English tags
Return only the JSON."""

WECHAT_FOOTER = re.compile(r'\n-{3,}\n+本文首发于微信公众号.*\Z', re.S)
CJK = re.compile(r'[一-鿿]')


class Truncated(RuntimeError):
    pass


def read_key(path):
    p = Path(path).expanduser()
    return p.read_text().strip() if p.is_file() else None


def chat(cfg, messages, json_mode=False, retries=2):
    # 推理模型（deepseek-reasoner 等）的 max_tokens 包含思考过程，要留足；它也不支持 JSON 模式
    reasoner = 'reason' in cfg['model']
    body = {'model': cfg['model'], 'messages': messages, 'max_tokens': 32000 if reasoner else 8000}
    if not reasoner:
        body['temperature'] = 0.7
    if json_mode and not reasoner:
        body['response_format'] = {'type': 'json_object'}
    headers = {'Content-Type': 'application/json'}
    if cfg['key']:
        headers['Authorization'] = f'Bearer {cfg["key"]}'
    req = urllib.request.Request(cfg['base_url'].rstrip('/') + '/chat/completions',
                                 data=json.dumps(body).encode(), headers=headers)
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                data = json.load(r)
            choice = data['choices'][0]
            if choice.get('finish_reason') == 'length':
                raise Truncated('模型输出被截断（finish_reason=length），用环境变量 CHUNK_CHARS=2000 调小分块再试')
            return choice['message']['content']
        except urllib.error.HTTPError as e:
            detail = e.read().decode(errors='replace')[:300]
            if attempt == retries or e.code in (400, 401, 403):
                raise RuntimeError(f'请求失败 HTTP {e.code}：{detail}')
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt == retries:
                raise RuntimeError(f'请求失败：{e}')
        time.sleep(5 * (attempt + 1))


def split_front(text):
    m = re.match(r'---\n(.*?)\n---\n', text, re.S)
    if not m:
        sys.exit('文章没有 front matter')
    return m.group(1), text[m.end():]


def field(front, name):
    m = re.search(rf'^{re.escape(name)}:\s*(.*)$', front, re.M)
    return m.group(1).strip().strip('"\'') if m else ''


def sections(body):
    """按代码块外的二级标题切节。"""
    out, cur, in_code = [], [], False
    for line in body.split('\n'):
        if line.lstrip().startswith('```'):
            in_code = not in_code
        if not in_code and line.startswith('## ') and cur:
            out.append('\n'.join(cur))
            cur = []
        cur.append(line)
    out.append('\n'.join(cur))
    return [s for s in out if s.strip()]


def groups(secs):
    """把相邻小节拼到 CHUNK_CHARS 以内，返回每块的小节下标范围。"""
    out = []
    for i, s in enumerate(secs):
        if out and sum(len(secs[j]) for j in range(*out[-1])) + len(s) < CHUNK_CHARS:
            out[-1] = (out[-1][0], i + 1)
        else:
            out.append((i, i + 1))
    return out


def chunks(body):
    secs = sections(body)
    return ['\n'.join(secs[a:b]) for a, b in groups(secs)]


def strip_fence(text):
    t = text.strip()
    m = re.match(r'```(?:markdown|md)?\n(.*)\n```$', t, re.S)
    return m.group(1) if m else t


def counts(text):
    return {'代码块': len(re.findall(r'^\s*```', text, re.M)),
            '图片': len(re.findall(r'!\[', text)),
            '链接': len(re.findall(r'\]\(', text)),
            '表格行': len(re.findall(r'^\|', text, re.M)),
            '标题': len(re.findall(r'^#{1,6} ', text, re.M))}


def leftover_cjk(text):
    lines, in_code = [], False
    for i, line in enumerate(text.split('\n'), 1):
        if line.lstrip().startswith('```'):
            in_code = not in_code
            continue
        # 图片路径、链接地址里的中文不算（文件名本来就是中文）
        visible = re.sub(r'\]\([^)]*\)|src="[^"]*"', '', line)
        if not in_code and CJK.search(visible):
            lines.append(f'  第 {i} 行：{line.strip()[:80]}')
    return lines


def yaml_str(s):
    return json.dumps(s, ensure_ascii=False)


def existing_for(original):
    for p in sorted(EN_DIR.glob('*.md')):
        front, _ = split_front(p.read_text(encoding='utf-8'))
        if field(front, 'original') == original:
            return p


def report(zh_body, en_body, out):
    """结构核对：中英文的代码块、图片、链接、表格行、标题数量应该一致。"""
    a, b = counts(zh_body), counts(en_body)
    diffs = [f'  {k}：中文 {a[k]}，英文 {b[k]}' for k in a if a[k] != b[k]]
    cjk = leftover_cjk(en_body)
    print(f'\n写好了：{out.relative_to(REPO)}', file=sys.stderr)
    if diffs:
        print('结构不一致，要看一下：\n' + '\n'.join(diffs), file=sys.stderr)
    if cjk:
        print(f'英文版里还有中文（{len(cjk)} 行，代码块除外）：\n' + '\n'.join(cjk[:15]), file=sys.stderr)
    if not diffs and not cjk:
        print('结构核对通过，没有残留中文。', file=sys.stderr)


def polish(path, cfg):
    text = path.read_text(encoding='utf-8')
    front, en_body = split_front(text)
    original = field(front, 'original')
    if not (REPO / original).is_file():
        sys.exit(f'中文原文不在仓库里：{original}（先把中文版同步到博客）')
    _, zh_body = split_front((REPO / original).read_text(encoding='utf-8'))
    zh_body = WECHAT_FOOTER.sub('', zh_body.rstrip()) + '\n'
    en_body = en_body.rstrip() + '\n'

    # 长文一次审不完（推理模型的思考也占输出额度），按二级标题把中英文对齐后分块审
    zh_secs, en_secs = sections(zh_body), sections(en_body)
    if len(zh_secs) == len(en_secs):
        pairs = [('\n'.join(zh_secs[a:b]), '\n'.join(en_secs[a:b])) for a, b in groups(zh_secs)]
    else:
        pairs = [(zh_body, en_body)]
    print(f'{path.name}：用 {cfg["model"]} 对照原文审稿，分 {len(pairs)} 块…', file=sys.stderr)
    edits = []
    for i, (zh, en) in enumerate(pairs, 1):
        print(f'  第 {i}/{len(pairs)} 块…', file=sys.stderr)
        msg = f'Chinese original:\n\n{zh}\n\n=====\n\nEnglish translation to review:\n\n{en}'
        messages = [{'role': 'system', 'content': POLISH}, {'role': 'user', 'content': msg}]
        json_mode = cfg['base_url'].startswith('https://api.deepseek.com')
        try:
            raw = chat(cfg, messages, json_mode=json_mode)
        except Truncated:
            # 推理模型偶尔在某一块上想太久把输出额度用光，这一块退回 deepseek-chat
            if 'reason' not in cfg['model'] or not json_mode:
                raise
            print('    这一块推理模型输出被截断，改用 deepseek-chat 审', file=sys.stderr)
            raw = chat({**cfg, 'model': 'deepseek-chat'}, messages, json_mode=True)
        m = re.search(r'\{.*\}', raw, re.S)
        edits += json.loads(m.group(0) if m else raw).get('edits', [])

    new_body, applied, skipped = en_body, [], []
    for e in edits:
        find, repl = e.get('find', ''), e.get('replace', '')
        n = new_body.count(find) if find else 0
        if find == repl:
            continue  # 模型把没问题的句子原样抄了回来
        if n != 1 or '](' in find or '`' in find:
            skipped.append(f'  跳过（原句出现 {n} 次，或碰到代码/链接）：{find[:60]}')
            continue
        new_body = new_body.replace(find, repl)
        applied.append(f'  - {find}\n    → {repl}（{e.get("reason", "")}）')
    print(f'模型给了 {len(edits)} 处，改了 {len(applied)} 处：\n' + '\n'.join(applied), file=sys.stderr)
    if skipped:
        print('\n'.join(skipped), file=sys.stderr)

    backup = Path('/tmp/translate_post-backup')
    backup.mkdir(exist_ok=True)
    (backup / path.name).write_text(text, encoding='utf-8')
    front = re.sub(r'^polished_by:.*\n?', '', front, flags=re.M).rstrip('\n') + f'\npolished_by: {cfg["model"]}'
    path.write_text(f'---\n{front}\n---\n{new_body}', encoding='utf-8')
    report(zh_body, new_body, path)
    print(f'原稿备份：{backup / path.name}', file=sys.stderr)


def main():
    ap = argparse.ArgumentParser(description='中文博客文章 → _en/ 英文版待审稿')
    ap.add_argument('source', help='中文文章 .md（_posts/ 里的，或公众号发布包里的）')
    ap.add_argument('--original', help='中文原文在仓库里的路径，如 _posts/2026-10-20-xxx.md；source 在 _posts/ 里时可省略')
    ap.add_argument('--provider', default='deepseek', choices=PROVIDERS)
    ap.add_argument('--model')
    ap.add_argument('--base-url')
    ap.add_argument('--key-file')
    ap.add_argument('--slug', help='自定义英文地址；默认让模型起')
    ap.add_argument('--force', action='store_true', help='这篇已有英文版时覆盖')
    ap.add_argument('--polish', action='store_true', help='审稿：source 给 _en/ 里的英文稿')
    args = ap.parse_args()

    base = PROVIDERS[args.provider]
    cfg = {'base_url': args.base_url or base['base_url'], 'model': args.model or base['model'],
           'key': read_key(args.key_file or base['key_file'])}
    if not cfg['base_url'] or not cfg['model']:
        sys.exit('local 需要 --base-url 和 --model（或环境变量 LOCAL_LLM_BASE_URL / LOCAL_LLM_MODEL）')
    if args.provider == 'deepseek' and not cfg['key'] and not args.base_url:
        sys.exit('没找到 DeepSeek key：~/.config/deepseek/api-key')
    if args.polish:
        return polish(Path(args.source).expanduser().resolve(), cfg)

    src = Path(args.source).expanduser().resolve()
    text = src.read_text(encoding='utf-8')
    front, body = split_front(text)

    original = args.original
    if not original:
        try:
            original = str(src.relative_to(REPO))
        except ValueError:
            sys.exit('source 不在博客仓库里，请用 --original 指明中文原文发布后的路径（_posts/xxx.md）')
    if not original.startswith('_posts/'):
        sys.exit(f'--original 应该是 _posts/ 下的路径：{original}')
    if not (REPO / original).is_file():
        print(f'提醒：{original} 还不在仓库里。英文版的“中文原文”链接要等中文版同步到博客后才会出现。', file=sys.stderr)

    old = existing_for(original)
    if old and not args.force:
        sys.exit(f'这篇已经有英文版：{old.relative_to(REPO)}（要重翻加 --force）')

    body = WECHAT_FOOTER.sub('', body.rstrip()) + '\n'
    title, subtitle = field(front, 'title'), field(front, 'subtitle')
    parts = chunks(body)
    print(f'{src.name}：{len(body)} 字，分 {len(parts)} 块，用 {cfg["model"]} 翻译', file=sys.stderr)

    translated = []
    for i, part in enumerate(parts, 1):
        print(f'  第 {i}/{len(parts)} 块（{len(part)} 字）…', file=sys.stderr)
        msg = (f'Article title: {title}\n\nTranslate this part of the article (part {i} of {len(parts)}) into English:'
               f'\n\n{part}')
        translated.append(strip_fence(chat(cfg, [{'role': 'system', 'content': STYLE},
                                                  {'role': 'user', 'content': msg}])))
    en_body = '\n\n'.join(translated).strip() + '\n'

    raw = chat(cfg, [{'role': 'system', 'content': META_PROMPT},
                     {'role': 'user', 'content': f'Title: {title}\nSubtitle: {subtitle}\n\n'
                                                 f'Chinese opening:\n{body[:1500]}\n\nEnglish opening:\n{en_body[:1500]}'}],
               json_mode=args.provider == 'deepseek')
    m = re.search(r'\{.*\}', raw, re.S)
    meta = json.loads(m.group(0) if m else raw)
    slug = args.slug or re.sub(r'[^a-z0-9]+', '-', meta['slug'].lower()).strip('-')

    date = field(front, 'date')[:10] or src.name[:10]
    lines = ['---',
             f'title: {yaml_str(meta["title"])}',
             f'subtitle: {yaml_str(meta.get("subtitle", ""))}',
             f'date: {date}',
             f'author: "Pixel Li"']
    if field(front, 'header-img'):
        lines.append(f'header-img: {yaml_str(field(front, "header-img"))}')
    lines += [f'tags: {json.dumps(meta.get("tags", []), ensure_ascii=False)}',
              f'original: {original}',
              f'translated_by: {cfg["model"]}',
              '---', '']

    EN_DIR.mkdir(exist_ok=True)
    out = EN_DIR / f'{date}-{slug}.md'
    if old and old != out:
        old.unlink()
    out.write_text('\n'.join(lines) + en_body, encoding='utf-8')
    report(body, en_body, out)
    print(out)


if __name__ == '__main__':
    main()
