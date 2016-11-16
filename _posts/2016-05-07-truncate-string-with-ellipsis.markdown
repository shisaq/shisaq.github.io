---
author: shisaq
comments: true
date: 2016-05-07 13:43:25+00:00
layout: post
link: http://shisaq.com/truncate-string-with-ellipsis.html
slug: truncate-string-with-ellipsis
title: Truncate String with Ellipsis 用省略号缩短文本长度
wordpress_id: 146
categories:
- 前端学习笔记
---

All the following are required, so the text must be in a single straight line that overflows a box where that overflow is hidden.

以下所有条件均须满足：1，单行长文本；2，文本在一个有宽度限制的盒子里；3，此盒子超出部分会隐藏。

Related CSS：

相关CSS代码：

    
    <code class=" language-css"><span class="token selector"><span class="token class">.truncate</span> </span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">250</span>px<span class="token punctuation">; /Set a width limit 设置一个宽度限制</span>
      <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">; /Not allow to change line 不允许换行</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">; /Hide the overflow part 隐藏超出的部分</span>
      <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">; /Use ellipsis to replace the hidden part 用省略号代替隐藏的部分</span>
    <span class="token punctuation">}</span></code>


实测发现这个class须放在直接相关的HTML中（p, h1, span等）才能生效，不能放在父HTML中（如div）。

A bunch of more techniques [here](http://html5hub.com/ellipse-my-text/), including multi-line ellipsis.

其他技术详见[这里](http://html5hub.com/ellipse-my-text/)，包含多行文本的情况。



Reference: [https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)
