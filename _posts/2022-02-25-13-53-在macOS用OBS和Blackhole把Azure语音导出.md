---
layout: post
title: "在macOS用OBS和Blackhole把Azure语音导出"
subtitle: "投资笔记"
date: 2022-02-25
author: "shisaq"
header-img: "img/about-bg-walle.jpg"
tags: [howto]
---

## 原理

用OBS录制屏幕，用Chrome里的Azure播放识别出来的声音，用Blackhole收集系统声音，传递到OBS，最后OBS导出为视频文件，并提取音频。此方法可以仅收取系统播放的声音，规避麦克风带来的干扰。

## 准备工作

* macOS
* Chrome浏览器
* [OBS](https://obsproject.com)
* [Blackhole](https://github.com/ExistentialAudio/BlackHole)

## 步骤

1. 打开系统-工具(utilities)里的 Audio MIDI Setup，点击左下角的加号 - `Create Multi-Output Device`，把播放系统声音的设备和 Blackhole 都勾上；![Audio-MIDI-Setup](https://github.com/shisaq/images/blob/master/images/Audio-MIDI-Setup.jpg?raw=true)
2. 打开OBS，在 Settings-Audio-Global Audio Devices-Mic/Auxiliary Audio 中选择 `Blackhole`；![OBS-Blackhole](https://github.com/shisaq/images/blob/master/images/OBS-Blackhole.jpg?raw=true)
3. 随便添加一个文件作为需要录制的视频内容(OBS无法仅录制音频)；
4. 准备好要识别的文字，打开[Azure](https://azure.microsoft.com/zh-cn/services/cognitive-services/text-to-speech/)，试听并确认无误；
5. 开始 `录制` ，然后点击Azure的 `播放`；
6. 声音播放完成后，在OBS点击 `停止录制`；
7. 生成的录制文件的音频即为想要的音频。
8. (可选)用 ffmpeg 把 mp4 中的音频导出：

`ffmpeg -i $HOME/Downloads/input.mp4 -b:a 320K -vn $HOME/Downloads/output.mp3`