---
author: shisaq
comments: false
date: 2016-01-10 12:57:41+00:00
layout: post
link: http://shisaq.com/upgrade-git-by-terminal.html
slug: upgrade-git-by-terminal
title: 使用终端（Terminal）升级git
wordpress_id: 43
categories:
- 前端学习笔记
---

刚从Windows转到Mac OS X，这些天看了不少教程和攻略，终于让Mac越来越顺手了，反观Windows，我几乎都不愿意开了（虽然我装了虚拟机）。




今天打算开始学版本控制大王——Git，查到了网上的安装教程，打开终端，命令如下（前提是已经安装了[Homebrew](http://brew.sh/))：







    
    <span style="color: #d0d0d0;">brew</span> <span style="color: #d0d0d0;">install</span> <span style="color: #d0d0d0;">git</span>
    







但是，手贱的我心想，都说Mac集成环境不错，是不是本身就自带呢？或者我不经意之间已经装过了呢？于是就先来了如下的命令：







    
    <span style="color: #d0d0d0;">git</span> <span style="color: #d0d0d0;">--version</span>
    







果然装了，版本是2.5.x。应该是在装Xcode的时候默认给装上了。但是现在的版本都2.7.0了，出于强迫症，我打算升级到最新版本，于是在网上找起答案来。最后在[stack overflow](https://stackoverflow.com/questions/28633983/upgrading-git-with-brew-gives-no-such-file-or-directory-usr-local-cellar-git/28682586#28682586?newreg=950a4e7fa7394d5dace7f66427971c88)上找到了方法，整理如下：






	
  * 找到已经安装的git所在目录：






    
    <span style="color: #d0d0d0;">which</span> <span style="color: #d0d0d0;">git</span>








	
  * 删除该目录下的git：






    
    <span style="color: #d0d0d0;">sudo</span> <span style="color: #d0d0d0;">rm</span> <span style="color: #d0d0d0;">-rf</span> <span style="color: #a61717; background-color: #e3d2d2;">刚才的路径</span>
    








	
  * 这时候旧版本应该没了，然后安装新版本吧：






    
    <span style="color: #d0d0d0;">brew</span> <span style="color: #d0d0d0;">install</span> <span style="color: #d0d0d0;">git</span>
    







这样就完成了。可以再运行git --version检测一下。其他参考方法：




[HOW TO: 升级Mac OS X上的GIT](http://jeeker.net/article/how-to-upgrade-git-on-mac-os/)
[Mac OS X 下 git 如何升级](http://yang3wei.github.io/blog/2013/02/01/mac-os-x-xia-git-ru-he-sheng-ji/)
[Mac OS X Lion 下 Git 如何升级？](https://segmentfault.com/q/1010000000095119)
[Mac OS git升级记](https://www.phodal.com/blog/use-brew-cleanup-clean-old-git/)




某些版本已经年代久远，仅供参考。
