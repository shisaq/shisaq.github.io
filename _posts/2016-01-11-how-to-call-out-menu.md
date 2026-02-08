---
layout: post
title: "Wordpress如何把仪表盘里的［菜单］选项调出来"
date: 2016-01-11 09:10:02+00:00
author: "shisaq"
header-img: "img/home-bg.jpg"
tags: ["前端开发"]
categories: ["技术遗产"]
---
Wordpress里，我对［菜单］［分类目录］［页面］的概念总是混淆不清。好不容易理顺了一些，去找［菜单］的时候，却发现：





## It has disappeared！




不过还好最终找到了解决方案：






	
  1. 打开functions.php；

	
  2. 添加如下代码（可在如下数组中添加多个。下面多代码只添加了一个，将用作head.php中最主要的导航条）：




    
    <span style="color: #6ab825; font-weight: bold;">if</span> <span style="color: #d0d0d0;">(</span> <span style="color: #24909d;">function_exists</span><span style="color: #d0d0d0;">(</span><span style="color: #ed9d13;">'register_nav_menus'</span><span style="color: #d0d0d0;">)</span> <span style="color: #d0d0d0;">)</span> <span style="color: #d0d0d0;">{</span>
        <span style="color: #d0d0d0;">register_nav_menus(</span><span style="color: #6ab825; font-weight: bold;">array</span><span style="color: #d0d0d0;">(</span>
            <span style="color: #ed9d13;">'primary'</span> <span style="color: #d0d0d0;">=></span> <span style="color: #ed9d13;">'导航菜单'</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #d0d0d0;">));</span>
    <span style="color: #d0d0d0;">}</span>
    





	
  3. 保存退出，刷新仪表盘页面即可看到菜单。可新建一个，勾选［导航菜单］即可。


