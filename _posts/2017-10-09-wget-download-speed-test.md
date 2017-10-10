---
author: shisaq
comments: true
date: 2017-10-09 22:22:22+00:00
layout: post
title: 用wget测试文件下载速度
categories:
- fullstack
---

前几天遇到一个国内发来的文件，但不知道北美这边下载速度有多少。Google了一下，找到了如下方法：

`wget -O /dev/null http://example.com/large.file`

用这个方法，可以在本地`/dev/null`的帮助下，无痕测试文件下载速度。记录一下。

Windows下，可以尝试安装[Cygwin](https://cygwin.com/install.html)，一个有Linux感觉的Windows命令行工具。

安装的时候要记得装上wget插件，详见[stackoverflow](https://superuser.com/questions/693284/wget-command-not-working-in-cygwin)。
