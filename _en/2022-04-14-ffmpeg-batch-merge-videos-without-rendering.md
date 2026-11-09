---
title: "Batch merging videos with ffmpeg without rendering"
subtitle: "Editing notes"
date: 2022-04-14
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["ffmpeg", "video-editing", "batch-processing", "concat", "python"]
original: _posts/2022-04-14-ffmpeg批处理合并视频，不需要渲染.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
## Merging 2 videos (requires rendering)

> Reference: [FFmpeg split video and merge back](https://superuser.com/a/1230097)

Suppose `1.mp4` needs all its segments, `2.mp4` needs the segment after 3 seconds, and both audio tracks are kept. Then the following code works. But this method **requires re-rendering**.

* `[0:v]` refers to the video of the 1st input
* `[0:a]` refers to the audio of the 1st input
* `[v0]` refers to saving this line as `[v0]`
* `[v0][a0][v1][a1]` indicates the export order
* `concat=n=2` means the merged video has 2 segments
* `:v=1:a=1` means both audio and video are exported
* `-map "[outv]"` means redefining the timestamps of `[outv]`

```bash
$ ffmpeg -i 1.mp4 -i 2.mp4 -filter_complex "\
[0:v]trim=start=0,setpts=PTS-STARTPTS[v0]; \
[0:a]atrim=start=0,asetpts=PTS-STARTPTS[a0]; \
[1:v]trim=start=3,setpts=PTS-STARTPTS[v1]; \
[1:a]atrim=start=3,asetpts=PTS-STARTPTS[a1]; \
[v0][a0][v1][a1]concat=n=2:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]" output.mp4
```

## Removing the first 3 seconds

> Reference: [Cut part from video file from start position to end position with FFmpeg](https://superuser.com/a/377407)

```bash
$ ffmpeg -ss [start] -i in.mp4 -t [duration] -c copy out.mp4
```

If you only need to remove the first 3 seconds of `1.mp4` and save the rest to `output.mp4`, you can omit `-t [duration]`:

```bash
$ ffmpeg -ss 3 -i 1.mp4 -c copy output.mp4
```

## Merging 2 videos (no rendering needed)

> Reference: [How to Merge two videos without re-encoding](https://stackoverflow.com/a/49373401)

You must make sure the two videos have the same basic settings — **codec, dimensions, fps** and so on — or they won't merge correctly!

```bash
ffmpeg -f concat -fase 0 -i list.txt -c copy output.mp4
```

`list.txt` needs to be in the current folder, with the following content format:

```txt
file '1.mp4'
file '2.mp4'
```

## Batch-processing the files that need merging in the current folder with Python

Suppose every 2 files need to be merged, with files named `1.mp4` and `1-intro.mp4`. Then you first need to create 1 txt file for each batch:

```python
# -*- coding: utf-8 -*-
import os

files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
    if (f.endswith(".mp4"):
        with open("%s.txt" % f, "w") as file:
            intro = f.rsplit('.', 1)[0]
            file.write("file '%s-intro.mp4'\nfile '%s'" % (intro,f))
```
The result is a `1.mp4.txt` file with the content:

```txt
file '1-intro.mp4'
file '1.mp4'
```

Now we can merge `1-intro.mp4` and `1.mp4` into 1 file via `1.mp4.txt`:

```python
# -*- coding: utf-8 -*-
import os
import subprocess

files = [f for f in os.listdir('.') if os.path.isfile(f)]

for f in files:
    if (f.endswith(".mp4") and "intro" not in f):
        filename = f.rsplit('.', 1)[0]
        cmd = "ffmpeg -f concat -safe 0 -i '%s.txt' -c copy '%s-final.mp4'" % (f, filename)
        print(cmd)
        p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p.wait()
    else:
        continue
```

The generated file is `1-final.mp4`, along with other file groups named in the same format.
