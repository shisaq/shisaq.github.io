---
title: "For Audiobook Lovers: Convert Ebooks to MP3 with Python"
subtitle: ""
date: 2023-04-07
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["python", "edge-tts", "text-to-speech", "ebook", "mp3"]
original: _posts/2023-04-07-听书党福利：用Python把电子书转换成mp3.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
## Prerequisites

* An ebook in .txt format
* Internet access
* [edge-tts](https://github.com/rany2/edge-tts) installed `$ pip install edge-tts`
* Python 3 installed

## Basic usage

`$ edge-tts --text "Hello, world!" --write-media hello.mp3 --write-subtitles hello.vtt`

For more usage, see [Edge-tts Usage](https://github.com/rany2/edge-tts#usage).

## Using Python to split the ebook into small chapters

Suppose we have an ebook named "白鹿原.txt" (White Deer Plain). In the same directory as the ebook, create a file named "split.py" and paste the code below into it.

```python
# Open the ebook
with open("白鹿原.txt", "r") as input_file:
    # Read the contents of the ebook
    file_contents = input_file.read()
    
    # Use "\n\n第" to separate the chapters (different ebooks have different structures, confirm the separator manually)
    file_chunks = file_contents.split("\n\n第")
    
    # Split the ebook
    for i, file_chunk in enumerate(file_chunks):
        # Name the output ebook
        output_filename = f"白鹿原_{i+1}.txt"
        
        # Open the output ebook
        with open(output_filename, "w") as output_file:
            # Write the split content and print the result in the command line
            output_file.write("第" + file_chunk)
            print("\n finishing %s" % output_file)

# Done
print ("done.")
```

## Using edge-tts to convert the chapters to mp3

Put all the chapter .txt files you output into a folder named "splitted". In that folder, create a file named "txt_to_audio.py" and paste the code below into it:

```python
import os
import subprocess

# Specify the working directory and output folder
txt_path = "./"
output_folder = "output"

# Create the output folder
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Iterate over all txt files in the directory
for txt_file in os.listdir(txt_path):
    # Check whether it is a txt file
    if txt_file.endswith(".txt"):
        # Create the terminal command (see the edge-tts command)
        cmd = f"edge-tts -f {txt_path}/{txt_file} --write-media {output_folder}/{txt_file[:-4]}.mp3 --write-subtitles {output_folder}/{txt_file[:-4]}.vtt --voice zh-CN-XiaoxiaoNeural --rate=+10%"
        # Execute the terminal command and print the status
        print('file %s is being processed...' % txt_file)
        subprocess.run(cmd, shell=True)
        print('file %s completed.' % txt_file)
```

## Wait for it to finish

This uses online text-to-speech technology. Just wait for the task to finish, and you'll have the mp3 files.

## List of available languages

Only Chinese and English are included here; see here for the full list:

`$ edge-tts --list-voices`

```
Name: zh-CN-XiaoxiaoNeural (versatile)
Gender: Female

Name: zh-CN-XiaoyiNeural
Gender: Female

Name: zh-CN-YunjianNeural
Gender: Male

Name: zh-CN-YunxiNeural
Gender: Male

Name: zh-CN-YunxiaNeural
Gender: Male

Name: zh-CN-YunyangNeural (steady)
Gender: Male

Name: zh-CN-liaoning-XiaobeiNeural
Gender: Female

Name: zh-CN-shaanxi-XiaoniNeural
Gender: Female

Name: zh-HK-HiuGaaiNeural
Gender: Female

Name: zh-HK-HiuMaanNeural
Gender: Female

Name: zh-HK-WanLungNeural
Gender: Male

Name: zh-TW-HsiaoChenNeural
Gender: Female

Name: zh-TW-HsiaoYuNeural
Gender: Female

Name: zh-TW-YunJheNeural
Gender: Male

Name: en-US-AnaNeural (child voice)
Gender: Female

Name: en-US-AriaNeural
Gender: Female

Name: en-US-ChristopherNeural
Gender: Male

Name: en-US-EricNeural
Gender: Male

Name: en-US-GuyNeural
Gender: Male

Name: en-US-JennyNeural
Gender: Female

Name: en-US-MichelleNeural
Gender: Female

Name: en-US-RogerNeural
Gender: Male

Name: en-US-SteffanNeural
Gender: Male
```
