---
author: shisaq
comments: true
date: 2017-05-30 23:20:29+00:00
layout: post
title: ffmpeg使用笔记
categories:
- frontend
---

> 最近搭建Shopify网站时，我打算把背景视频压缩掉，并只在桌面版显示，在尝试生成webm文件时，我找到了ffmpeg这个工具。其实以前在学习的时候也遇到过，但不知啥原因，最后没用着。这次用了之后才发现，这简直是命令行版的Handbrake！不禁也让我想起了imagemagick，哈哈。

## 未静音webm版
`ffmpeg -i input.mp4 -c:v libvpx -preset slow -s 1280x540 -qmin 0 -qmax 50 -b:v 400K -c:a libvorbis output.webm`

## 静音webm版
`ffmpeg -i input.mp4 -c:v libvpx -preset slow -s 1280x540 -qmin 0 -qmax 50 -b:v 400K -an output3.webm`

## 静音mp4版
`ffmpeg -i input.mp4 -c:v libx264 -preset slow -s 1280x540 -an -b:v 370K homepage.mp4`

## 静音ogv版
`ffmpeg -i input.mp4 -s 1280x540 -b:v 400K -an output3.ogv`

原本26秒的视频，大概有7M，我以为已经挺小了；这下通过ffmpeg处理后，居然不到1.5M了。真爽 :)

在尝试生成的时候，我遇到了一些坑：

1. 使用Homebrew安装ffmpeg之后，在尝试转换webm时，提示出错，原来是没有安装必备插件导致。附上[stackoverflow链接](https://stackoverflow.com/questions/19454509/ffmpeg-unable-to-find-encoder-libvorbis)，可以重新安装，并加上这两个插件： `libvpx` 负责webm格式， `libvorbis`负责该格式的声音处理。

2. 之前参考的是[这篇文章](https://www.imarc.com/blog/ffmpeg)中的命令行安装的，在webm格式转换时总是出错(`Codec AVOption preset...`)。

### 文章推荐命令：
`ffmpeg -i original.mp4 -c:v libvpx -preset slow -s 1024x576 -qmin 0 -qmax 50 -an -b:v 400K -pass 1 homepage.webm`

### 我修改之后的命令：
`ffmpeg -i 26s.mp4 -c:v libvpx -preset slow -s 1280x540 -qmin 0 -qmax 50 -b:v 400K -an output3.webm`

在ffmpeg3.3.1下，安装了刚才说过的2个插件后，亲测可行。

## 常用命令行资源

<script src="https://gist.github.com/shisaq/13b35ef7aea487790880a393e8b8e398.js"></script>
