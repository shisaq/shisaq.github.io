---
author: shisaq
comments: true
date: 2016-12-19 21:11:09+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(二)
categories:
- 前端学习笔记
---

> 这篇文章主要是关于Chat Server的GIF图，呈现各个状态下的效果，让着急的看官有个大概的印象——觉得有意思的继续关注文章进度，觉得小儿科的也不用在这里耽误时间了。
 
## 主界面

输入用户名，回车提交后，可在在线用户列表中找到该用户名。友情提示：Foo/Bar/Baz这几个名字我会经常拿来作为示例。这几个名字在读代码时很常用，中文简单翻译为“甲乙丙”即可。感兴趣的同学可以Google一下这几个名字的来源。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverinit.gif)

## 新用户登录时，用户列表动态刷新

在打开用户列表的情况下，如果有新用户登录，我们能直接从列表中找到该用户。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverdynamicrefreshuserlist.gif)

## 在用户列表中选择用户，弹出聊天窗口

在用户列表选中要聊天的用户，聊天窗口会直接在下方弹出。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverselectuser.gif)

这里以Foo和Bar为例，Foo和Bar的聊天窗口是一起弹出的。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverpopuptogether.gif)

> 在这里，用户无法和自己聊天——这个在解读源码时再详细讨论。

## 输入信息，回车发送

在聊天室的输入框输入信息，按回车发送。得益于SocketIO的实时传输功能，对方立即就能收到信息。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverreceiveintime.gif)

## 聊天互不干涉

Baz给Foo发了一条信息，可以看出Bar被蒙在鼓里，什么也不知道。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverprivate.gif)

## 用户下线，列表自动更新

![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserver/chatserverofflinerefresh.gif)

## 小结
以上就是这个聊天室的效果了。作为一个刚踏入React，Flask和SocketIO的人来说，一个月之前我自己是没有任何底气能做出来的。一个月之后，它确实被我做出来了。想来有点不敢相信，但一个月真的能改变很多事情。下一篇文章我会从开发环境、参考资料等方面讲一讲我的前期准备工作。