---
author: shisaq
comments: false
date: 2016-01-21 14:06:35+00:00
layout: post
link: http://shisaq.com/wordpressnotes-seo-category.html
slug: wordpressnotes-seo-category
title: WordPress学习笔记－SEO、自定义工具栏、仪表盘下新增分类
wordpress_id: 65
categories:
- 前端学习笔记
---

今天晚上学了两个知识：






	
  1. SEO智能注入meta标签的方法；

	
  2. 自定义工具栏，在［文章编辑］下方添加自定义工具栏，用以添加文章简介、原文链接等信息；

	
  3. 仪表盘下新增一个目录（本文用［公告］举例），并实现其功能，使其区分与［文章］［页面］等。




<blockquote>

> 
> SEO注入meta标签的方法是：
> 
> 
</blockquote>





	
  1. 将已有的seo.php文件（这文件还是我自己保管着吧）拷贝到主题目录下，如（主题根目录/inc/seo.php）；

	
  2. 在header.php中引入该文件，具体方法是用<?php get_template_part( 'inc/seo' ); ?>替换其中title到meta的所有标签。
![Snip20160121_17](http://shisaq.com/wp-content/uploads/2016/01/Snip20160121_17-400x206.png)




<blockquote>

> 
> 自定义工具栏的方法是：
> 
> 
</blockquote>





	
  1. 将metabox.php拷贝到主题目录下，如（主题根目录/inc/seo.php）；

	
  2. 在function.php中添加钩子，引入该函数（require_once get_stylesheet_directory() . '/inc/metabox.php';）；

	
  3. 保存后，新建文章或页面后，即可发现自定义工具栏，并进行编辑。若已做过SEO注入meta标签，则此内容将会显示在该文章的meta中。
![Snip20160121_18](http://shisaq.com/wp-content/uploads/2016/01/Snip20160121_18-400x252.png)




<blockquote>

> 
> 仪表盘下新增一个目录的方法是：
> 
> 
</blockquote>





	
  1. 将post-type.php拷贝到主题目录下，如（主题根目录/inc/seo.php），将taxonomy-bulletin.php、single-bulletin.php拷贝到主题根目录下；

	
    1. post-type.php：创建该目录的所有内容，比如如下部分截图即为创建所有与［公告］相关的内容，如需添加其他目录，可替换红框部分；
![Snip20160121_19](http://shisaq.com/wp-content/uploads/2016/01/Snip20160121_19-400x320.png)

	
    2. taxonomy-bulletin.php：该类别所属的分类目录，类似category.php；

	
    3. single-bulletin.php：该类别文章显示的具体内容，类似single.php。




	
  2. 在functions.php中创建钩子，连接post-type.php（require_once get_stylesheet_directory() . '/inc/post-type.php';）；

	
  3. 分别复制category.php和single.php的内容到taxonomy-bulletin.php和single-bulletin.php中；

	
  4. 在single-bulletin.php中比较明显的位置，添加一些信息，以在调试的时候和正常single.php区分开来；

	
  5. 打开仪表盘－设置－固定链接，直接点击［保存更改］（目的是加载［公告］）；

	
  6. 保存所有文件，回到仪表盘，尝试写一篇［公告］下的文章，添加该文章的分类目录，并查看，如果正常显示，且有在第3步添加的调试内容，则成功。
![Snip20160121_20](http://shisaq.com/wp-content/uploads/2016/01/Snip20160121_20-400x354.png)

	
  7. 此时，［公告］的后台还未添加自定义工具栏，需要在metabox.php中添加［公告］的信息。至于如何添加，我还不知道。




好了，是时候做最重要的事情了——多练习。
