---
author: shisaq
comments: true
date: 2016-12-20 9:53:12+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(三)
categories:
- 前端学习笔记
---

> 这篇文章主要介绍一下我的开发环境和参考资料，以及前期筹备过程。
 
## 开发环境

 * 操作系统 macOS Sierra 10.12.2 Beta (不同操作系统会在不同阶段面临不同的坑)
 * 编辑器 Sublime Text 3
 * 终端 iTerm2 + Oh My Zsh + Homebrew (这一套东西在做这个项目的时候弥补了服务器端的很大不足)
 * 浏览器(均为最新版) Chrome+Chrome Canary+Firefox+Safari (不同用户基于互相独立的localStorage)
 * Git/GitHub(它让我大刀阔斧修改代码而无后顾之忧)
 * 科学地上网(我的React主要是通过YouTube的视频教程学习的)

## 主要参考资料

 * Python: Learn Python in Y minutes(https://learnxinyminutes.com/docs/python/)，建议把这些知识点至少练习一遍。**光看没用**。有JavaScript做基础，这些不会很难。
 * Flask: 官方文档(http://flask.pocoo.org/docs/0.11/)，大家可以看中文版()，入门安装配置完毕就差不多了。
 * SocketIO: Easy WebSockets with Flask and Gevent(https://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent)，这个是Flask-SocketIO的作者写的文章，此人在GitHub回复神速，我遇到的疑问很快得到了解答，赞一个。
 * React视频教程: (https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)，不得不说，国内视频多以娱乐为主，国外视频教程(可以Google“某技术 + tutorial”)数不胜数。一进一出，如果只在中文世界里，信息会相对匮乏和不准确。

## 万事开头难

我在第一篇文章中写过，通过分析，我的学习计划是：

`Python-Flask-SocketIO-React`

那么第一步就是用上面的参考资料——"Y分钟入门Python"了。虽然不知道要学到什么程度，但是至少这篇文章要仔细研读才能保证入门。其实刚开始我用的Windows(之前MBP被盗了)，所以系统并无Python。不要过度纠结2.7还是3.6(这是12月份最新版本)，我的目的只是入门Python。

1. 安装Python
https://www.python.org/downloads/release/python-2713/
2. 打开"Y分钟入门Python"网页和Sublime开始逐行实现。

我一共花了7个番茄时钟才基本完成以上的任务。文章最后介绍的语法糖和装饰器由于资质平平，搞了很久还是没有透彻理解。我在后来配置React和SocketIO的时候，用到了装饰器。事实证明2点：
 1. 入门知识早晚是要补回来的；
 2. 练习时间和质量不能脱离实践。

下一章会和大家介绍入门Python，了解基本语法后，开始学习Flask时，对Flask的配置细节，从零到后台环境的基本搭建，敬请期待。