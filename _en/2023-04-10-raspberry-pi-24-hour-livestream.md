---
title: "24/7 Livestreaming with a Raspberry Pi"
subtitle: ""
date: 2023-04-10
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["Raspberry Pi", "ffmpeg", "livestreaming", "supervisor", "Bilibili"]
original: _posts/2023-04-10-用树莓派实现24小时持续直播.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
Recently I wanted to loop the videos from my "10-minute piano practice series" on a live streaming platform, and at first I planned to do it with a cloud server. But the Raspberry Pi that had been gathering dust at home said: "Just leave this to me, and it won't cost you a cent!" And that's how this came about.

## Live stream link

[http://live.bilibili.com/3544257](http://live.bilibili.com/3544257)

## Connecting to the Raspberry Pi over SSH

```sh
$ ssh pi@192.168.x.x

# default password raspberry
```

## Uploading the video files

Upload the videos from your local computer to the `/home/pi/Videos/` folder on the Raspberry Pi:

```sh
$ scp video.mp4 pi@192.168.x.x:/home/pi/Videos/
```

## Core code for looping playback

Create an executable file named `stream.sh` in the `/home/pi/` directory and paste in the following contents:

```sh
#!/bin/bash

RTMP_URL="rtmp://live-push.bilivideo.com/live-bvc/?streamname=example"
VIDEO_DIR="/home/pi/Videos"

while true; do
  for VIDEO_FILE in $VIDEO_DIR/*.mp4; do
    ffmpeg -re -i "$VIDEO_FILE"\
           -c:v copy -c:a aac \
           -b:a 192k -strict -2 \
           -f flv $RTMP_URL
  done
done
```

It's really just using ffmpeg to push the live stream. You'll need to get the RTMP_URL here yourself from the streaming platform you're using. The `-c:v copy` means the Raspberry Pi doesn't have to decode the video again, since its performance is pretty modest. I'd suggest processing the videos ahead of time with [HandBrake](https://handbrake.fr) or some other format conversion tool; I processed mine at 720p with Constant Quality set to 30.

Finally, don't forget to change the file permissions, otherwise the process manager won't be able to run it:

```sh
$ chmod +x stream.sh
```

## Process manager

Using `supervisorctl` makes it easy to run it in the background, so even if we close the current terminal session, the stream keeps running. If you don't have it yet, install it first:

```sh
sudo apt install supervisor
```

Here are a few common control commands:

```sh
sudo supervisorctl start play
sudo supervisorctl stop play
sudo supervisorctl status
```

## Configuring paths and content

It covers the working directory, the script to run, the fault-tolerance mechanism, and log storage.

> /etc/supervisor/conf.d/play.conf

```conf
[program:play]
directory=/home/pi
command=./stream.sh
autostart=true
autorestart=true
startretries=10
redirect_stderr=true
stdout_logfile=/home/pi/stream.log
stdout_logfile_maxbytes=512KB
stdout_logfile_backups=2
environment=ASPNETCORE_ENVIRONMENT="Development"
```
