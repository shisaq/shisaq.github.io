---
title: "How to Download Blob-Encrypted Videos"
subtitle: ""
date: 2020-01-15
author: "Pixel Li"
header-img: "img/home-bg-geek.jpg"
tags: ["blob", "m3u8", "ffmpeg", "video-download", "chrome-devtools"]
original: _posts/2020-01-15-how-to-download-blob-videos.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
## Preparation

1. [ffmpeg command-line tool](https://www.ffmpeg.org/)
2. Chrome browser

## Steps

1. On the page with the video you want to download, press F12 to open the developer tools. In Network, find the Request URL ending in `m3u8` and copy it;
2. Using a terminal, go into the folder where you want to download the video, and replace the example URL `http://xxx.m3u8` in the command line below

```
$ ffmpeg -protocol_whitelist file,http,https,tcp,tls,crypto -i "http://xxx.m3u8" -c copy video.mp4
```

After ffmpeg has been busy for a while, a video named `video.mp4` should already be sitting in the folder your terminal is currently in.

## Reference

[https://stackoverflow.com/questions/42901942/how-do-we-download-a-blob-url-video](https://stackoverflow.com/questions/42901942/how-do-we-download-a-blob-url-video)
