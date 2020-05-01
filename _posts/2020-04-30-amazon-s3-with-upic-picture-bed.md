---
author: shisaq
comments: true
date: 2020-04-30 23:50:00+00:00
layout: post
title: 用Amazon S3 实现快速上传图床
categories:
  - personal_dev
---

> 在用Markdown写作时，往往会有想要配图的时候。但是图片的网址从哪来？得先上传到网络图床才行啊。但每有一张配图，就得打开图床网站，上传，再回来，这时候我早就忘了要写什么东西了。

最近找到了一款好用的工具：[uPic](https://github.com/gee1k/uPic)，它可以让我按几个快捷键，然后就能通过command + v 把需要的图片的markdown代码直接粘贴到我的编辑器里面了！

## 准备材料

1. 一台运行macOS的电脑(其他操作系统的小伙伴可以尝试这个工具[[PicGo](https://github.com/Molunerfinn/PicGo)](https://github.com/Molunerfinn/PicGo))
2. Amazon S3账户(本文主要配置这个图床，但你可以用其他的图床)
   ![2020-04-30-23-06-10-4nVLKe](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-06-10-4nVLKe.png)

## 操作步骤

### 在Amazon S3新建一个bucket

![2020-04-30-23-13-44-z2XIMd](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-13-44-z2XIMd.png)
![2020-04-30-23-15-09-GblWyd](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-15-09-GblWyd.png)

### 安全起见，新建一个[IAM账户](https://console.aws.amazon.com/iam/home#/users)，专门用来对接S3存储空间

![2020-04-30-23-16-59-wS4lQV](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-16-59-wS4lQV.png)
![2020-04-30-23-18-14-xE87lL](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-18-14-xE87lL.png)

![2020-04-30-23-19-16-olsGnl](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-19-16-olsGnl.png)

![2020-04-30-23-20-24-qkkcmA](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-20-24-qkkcmA.png)

这时group已经创建完成，然后在新建user的第2步，选择这个group：

![2020-04-30-23-24-00-zBGqVB](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-24-00-zBGqVB.png)

一路下一步，user创建完成后，记录下Access Key ID和**Secret access key**。切记，Secret access key只在这里出现一次，之后就不会再出现了，一定要记下来。

### 安装Homebrew(如已安装，请略过)：

`$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

### 下载安装uPic

`$ brew cask install upic`

### 配置uPic

安装完成后，在Application里找到uPic，进入Preference设置：

![2020-04-30-23-34-35-MlW6wU](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-34-35-MlW6wU.png)

在这里添加Amazon S3图床：

![2020-04-30-23-35-31-fwdpog](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-35-31-fwdpog.png)

这里有6个输入框，其中Domain不必自己填写，Amazon会给你分配一个；其他5个：

Region和Bucket：在Amazon S3的Buckets列表里有。

![2020-04-30-23-38-50-KzoV7U](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-38-50-KzoV7U.png)

Access Key和SecretKey：在创建user的时候已经记录下来了。

保存路径：主要是自定义配置存储的文件路径和名称。这个根据你的需求来吧。

详细说明：[https://blog.svend.cc/upic/tutorials/amazon_s3/](https://blog.svend.cc/upic/tutorials/amazon_s3/)

最后点validate，一张样例图片就会上传到你的Amazon S3空间里了，同时链接也会复制到剪贴板。如果需要markdown语法的链接，需要在这里勾选markdown：

![2020-04-30-23-45-45-M4jtCI](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-45-45-M4jtCI.png)

### 自定义快捷键

根据自己的需求，配置想要的快捷键吧：

![2020-04-30-23-47-12-UJt1sy](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2020-04-30-23-47-12-UJt1sy.png)

## 实操

比如此时我在写作，忽然想从我本地文件选一张好看的图，那我就可以选中这个图，然后点“control + option + s”(我自己配置的快捷键)，这时候图片就自动上传到S3里了，同时我回到markdown编辑器内，按“command + v”，图片就躺好啦。是不是快多了？

## uPic介绍

[https://blog.svend.cc/2020/01/05/upic/](https://blog.svend.cc/2020/01/05/upic/)