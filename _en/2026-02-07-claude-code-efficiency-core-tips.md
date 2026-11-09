---
title: "10 Core Tips for Boosting Efficiency in Claude Code"
subtitle: "10 Core Tips for Boosting Efficiency in Claude Code"
date: 2026-02-07
author: "Pixel Li"
header-img: "img/home-bg-o.jpg"
tags: ["Claude Code", "CLI", "productivity", "tips", "AI coding"]
original: _posts/2026-02-07-Claude-Code-提升效率的-10-个核心技巧.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
# 10 Core Tips for Improving Efficiency in Claude Code

Claude Code is a powerful CLI tool released by Anthropic. After using it extensively, I've summarized the following 10 core tips that can significantly speed up your work.

## 1. Switch between run modes easily
Press `shift + tab` to quickly switch between three modes:
- **Default mode (`? for shortcuts`)**: The most cautious; asks you before modifying files.
- **Auto mode (`accept edits on`)**: Modifies files automatically, good for quick fixes.
- **Plan mode (`plan mode on`)**: Only discusses the plan and doesn't modify files, good for early-stage planning.

## 2. Terminal commands and background tasks
- Before you enter a prompt, type `! ` to run a local shell command directly.
- Use `⌃ + b` to send an already running task (such as `npm run dev`) to the background while you continue talking to Claude.
- Type `/tasks` to view background tasks; once inside, press `k` to close the selected task.

## 3. Multi-line prompt editing
If you need to type a long, complex prompt, press `⌃ + g` to open a temporary file in VS Code for editing; when you save, it syncs back to the terminal automatically.

## 4. Sudo mode, fully unleashed
If you're confident in your system's security and want maximum efficiency, you can use:
`claude --dangerously-skip-permissions`
In this mode, Claude no longer asks before creating or modifying files or running commands. Very powerful, but use it with care.

## 5. Graceful rollback and management
Claude Code can't roll back perfectly (for example, newly created files can't be undone), so **I recommend using it together with Git**.
- `/rewind`: Undo the last action.
- Press `esc` twice: Enter interactive rollback selection mode.

## 6. A small trick for uploading images
- Simply drag and drop the image file into the terminal window.
- On macOS, even images copied with `command + c` have to be pasted into the terminal with `ctrl + v`.

## 7. Resuming sessions
- Inside Claude Code: `/resume`.
- From outside Claude Code, go straight back into the last session: `claude -c`.

## 8. Context compression and cleanup
When the context gets too long and responses slow down or token usage gets too high:
- `/compact [optional description]`: Compress the current context. Afterwards, press `⌃ + o` to view the compressed result.
- `/clear`: Completely clear the current session context.

## 9. Build system-level memory
With the `/init` command, Claude creates a `CLAUDE.md` file in the current directory. The instructions and project rules in this file are read automatically each time a conversation starts.

## 10. Managing your personal preferences (`/memory`)
Type `/memory` to set:
- **Project memory**: For the current project (saved in `./CLAUDE.md`).
- **User memory**: Applies globally (saved in `~/.claude/CLAUDE.md`), a good place for your personal coding habits and background.

---

I hope these tips help you get a better handle on Claude Code and add a little sunshine to your development life.
