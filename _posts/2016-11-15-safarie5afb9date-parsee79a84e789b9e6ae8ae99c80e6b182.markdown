---
author: shisaq
comments: true
date: 2016-11-15 18:55:41+00:00
layout: post
link: http://shisaq.com/safari%e5%af%b9date-parse%e7%9a%84%e7%89%b9%e6%ae%8a%e9%9c%80%e6%b1%82.html
slug: safari%e5%af%b9date-parse%e7%9a%84%e7%89%b9%e6%ae%8a%e9%9c%80%e6%b1%82
title: Safari对Date.parse()的需求更严格
wordpress_id: 259
categories:
- 前端学习笔记
---

最近应老婆的需求，做了一个炒鸡简单的[倒计时网页](http://shisaq.github.io/my-count-down-clock/)。[附上源码](https://gist.github.com/shisaq/1f62d8439771f494fc0730b327438042)。没什么功能，连deadline都需要从后台写。不过至少能开始一个百天计划了。以后酌情优化。

但是使用的时候，大多数浏览器都木有问题，只有Safari默默地罢工了。本应该显示日期、时、分、秒的地方，它统统显示为`NaN（如下图）`。

[caption id="" align="aligncenter" width="689"]![错误截图](http://7xpx1z.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720161115134636.png) 错误截图[/caption]

最后发现我写入deadline的格式不太标准，我写成了：

`var deadline = 'Thu, Feb 22 2017 23:59:59 GMT -0500';`

多了一个空格。正确的写法应该是：

`var deadline = 'Thu, Feb 22 2017 23:59:59 GMT-0500';`

修改后，终于正常显示了：

[caption id="" align="aligncenter" width="703"]![正常数字](http://7xpx1z.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720161115134710.png) 正常数字[/caption]

附上MDN关于日期解析的[页面](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)，供以后参考；同时StackOverflow上的一个[问答](http://stackoverflow.com/a/6427318/5769598)也说明了Chrome和Safari对日期解析的处理可能也有所不同。不过这个问答已经是5年前的了，可能只是历史问题而已。至少现在只要按MDN推荐的格式来写，就不会有问题。


