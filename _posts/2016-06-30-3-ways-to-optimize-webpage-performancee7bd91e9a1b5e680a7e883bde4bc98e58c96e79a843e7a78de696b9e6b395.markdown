---
author: shisaq
comments: true
date: 2016-06-30 20:17:16+00:00
layout: post
link: http://shisaq.com/3-ways-to-optimize-webpage-performance%e7%bd%91%e9%a1%b5%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%843%e7%a7%8d%e6%96%b9%e6%b3%95.html
slug: 3-ways-to-optimize-webpage-performance%e7%bd%91%e9%a1%b5%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%843%e7%a7%8d%e6%96%b9%e6%b3%95
title: 3 Ways To Optimize Webpage Performance(网页性能优化的3种方法)
wordpress_id: 193
categories:
- 前端学习笔记
---

<blockquote>

> 
> **Udacity课程链接**
> 
> 

> 
> [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)
> 
> 
</blockquote>




**工具**




Chrome Dev Tools里的Timeline可用Flame Chart（火焰图）将网页渲染过程清晰显示出来。其中有3条垂直虚线：






 	
  * 红色：load事件

 	
  * 蓝色：DomContentLoaded事件

 	
  * 绿色：第一次paint事件


[caption id="" align="aligncenter" width="1148"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160630_2.png) flame chart[/caption]


**3个最主要的优化方法**






 	
  1. ******压缩HTML、CSS、JS的体积
**在请求一个页面后，页面的建立遵循如下顺序： DOM -- CSSOM -- Render Tree -- Layout DOM和CSSOM的体积占了很关键的角色。也就是HTML／CSS／JS。**_最小化_** 文件和 **_删除注释_** 可以减少浏览器加载的文件大小，从而优化性能。

 	
  2. ******用**media queries**(针对CSS)和**defer/async**(针对JS)避免无关代码对关键渲染路径对干扰**

 	
    * media queries可以将针对不同屏幕的CSS分到不同的CSS文件中，并在HTML中对相应CSS添加media属性，从而告知浏览器仅加载必须的CSS即可

 	
    * defer/asunc可以将与构建网页无关的JS文件异步执行，或者等待网页渲染完毕后执行，从而达到不干扰网页渲染的效果。两者用法均为：**_在HTML的script标签中增加该属性_**。例子：<script src="js/sample.js" async></script>

 	
    * 关于defer和async的区别，详见此文：[script的defer和async](http://ued.ctrip.com/blog/script-defer-and-async.html)。也可参考MDN中[script标签的解释](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)。




 	
  3. ******减少渲染请求次数**

 	
    * 若CSS是一个单独文件，则浏览器先请求HTML；读到CSS文件名的时候，会再请求一次，导致请求次数为2。

 	
    * 若将CSS直接写到HTML中，则得到HTML和CSS时，请求次数仅为1。







**术语**






 	
  * fps: frames per second

 	
  * DOM: Document object model

 	
  * TL;DR: Too long, don't read，一般用在一篇文章的总述部分，只读这些，其他都不必读

 	
  * CRP: critical rendering path 关键呈现（渲染）路径

 	
  * 101: 最基本

 	
  * orientation: portrait/landscope: 屏幕：竖屏／横屏

 	
  * curl: Mac OS X中terminal的一个命令，用法：curl https://google.com 即可获得Google的html，并复制到terminal中


