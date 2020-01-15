---
author: shisaq
comments: true
date: 2020-01-15 11:08:00+00:00
layout: post
title: 如何下载blob加密的视频
categories:
  - personal_dev
---

## 准备工作

1. [ffmpeg 命令行工具](https://www.ffmpeg.org/)
2. Chrome 浏览器

## 步骤

1. 在要下载视频的网页，按F12打开开发者工具，在 Network 里，找到以`m3u8`结尾的Request URL并复制；
2. 使用终端进入想要下载视频的文件夹，替换如下命令行的示例URL `http://xxx.m3u8`

```
$ ffmpeg -protocol_whitelist file,http,https,tcp,tls,crypto -i "http://xxx.m3u8" -c copy video.mp4
```

经过 ffmpeg 的一阵忙碌，一个名为 `video.mp4` 的视频应该已经躺在终端此时所在的文件夹里了。

## 参考

[https://stackoverflow.com/questions/42901942/how-do-we-download-a-blob-url-video](https://stackoverflow.com/questions/42901942/how-do-we-download-a-blob-url-video)