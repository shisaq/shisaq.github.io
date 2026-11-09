---
title: "Exporting Azure Speech on macOS with OBS and Blackhole"
subtitle: "Investment Notes"
date: 2022-02-25
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["macOS", "OBS", "Blackhole", "Azure", "text-to-speech"]
original: _posts/2022-02-25-13-53-在macOS用OBS和Blackhole把Azure语音导出.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
> The old Azure [demo](https://azure.microsoft.com/zh-cn/services/cognitive-services/text-to-speech/#overview) has been shut down, and the new [link](https://speech.microsoft.com/audiocontentcreation) has been updated. You can only generate 500 characters at a time.

## How it works

Record the screen with OBS, play back the recognized speech with Azure in Chrome, capture the system audio with Blackhole and pass it on to OBS, then export it from OBS as a video file and extract the audio. This method captures only the sound the system plays, avoiding interference from the microphone.

## What you need

* macOS
* Chrome browser
* [OBS](https://obsproject.com)
* [Blackhole](https://github.com/ExistentialAudio/BlackHole)

## Steps

1. Open Audio MIDI Setup in System - Utilities, click the plus sign in the bottom left corner - `Create Multi-Output Device`, and check the boxes for both the device that plays system audio and Blackhole;![Audio-MIDI-Setup](https://github.com/shisaq/images/blob/master/images/Audio-MIDI-Setup.jpg?raw=true)
2. Open OBS, and in Settings-Audio-Global Audio Devices-Mic/Auxiliary Audio select `Blackhole`;![OBS-Blackhole](https://github.com/shisaq/images/blob/master/images/OBS-Blackhole.jpg?raw=true)
3. Add any file as the video content to record (OBS can't record just audio);
4. Prepare the text to be recognized, then open [Azure](https://speech.microsoft.com/audiocontentcreation), listen to it and make sure it's correct;
5. Start `recording`, then click `play` in Azure;
6. After the audio finishes playing, click `stop recording` in OBS;
7. The audio in the recording you just made is the audio you want.
8. (Optional) Use ffmpeg to extract the audio from the mp4:

`ffmpeg -i $HOME/Downloads/input.mp4 -b:a 320K -vn $HOME/Downloads/output.mp3`
