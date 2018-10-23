---
author: shisaq
comments: true
date: 2018-10-23 10:42:01+00:00
layout: post
title: Photoshop Gif 图制作
categories:
  - personal_dev
---

> 以前学过 PS 的大部分工具，但最近遇到了一些需求，需要做特定尺寸的 gif 图。临阵磨枪，使用了“PPT + HandBrake + Gif Brewery 3”的组合，做了出来，不过工具略多，总体流程较复杂。所以决定研究一下 PS 下 gif 图的制作方法。

## 2 种方法优劣

PS：制作简单动图方便快速，但做复杂动效不太方便
PPT + HandBrake + Gif Brewery 3：流程复杂，但可引用 PPT 中自带的复杂动效

## PS 制作视频

1. 准备好原始静态 PSD 文件
2. 点击 window - timeline 调出时间线窗口
3. 选择 `video(mp4)`(我选的 video)

![Snip20181023_9.png](https://i.loli.net/2018/10/23/5bcea4e7be866.png)

4. 将需要转换的图层改为智能图像

![Snip20181023_12.png](https://i.loli.net/2018/10/23/5bcea4e81d858.png)

5. 选择关键帧，按下 `⌘ + T` 或 `ctrl + T` 变形

![Snip20181023_13.png](https://i.loli.net/2018/10/23/5bcea4e775eb0.png)

![Snip20181023_15.png](https://i.loli.net/2018/10/23/5bcea4e7ed721.png)

6. 导出视频

![Snip20181023_16.png](https://i.loli.net/2018/10/23/5bcea4e81e963.png)

![Snip20181023_17.png](https://i.loli.net/2018/10/23/5bcea9397d5c2.png)

7. 导出 gif(可选)

File - Export - Save for Web(Legacy) (快捷键是`⌘ + alt + shift + s`) 另存为 gif 图。

## 参考链接

[Simple GIF Animation - Photoshop Tutorial](https://www.youtube.com/watch?v=13owc4iGJH4)
