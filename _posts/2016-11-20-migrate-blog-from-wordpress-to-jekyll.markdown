---
author: shisaq
comments: true
date: 2016-11-20 17:09:29+00:00
layout: post
link: http://shisaq.com/migrate-blog-from-wordpress-to-jekyll.html
slug: migrate-blog-from-wordpress-to-jekyll
title: 怎么把博客文章从WordPress搬到jekyll
categories:
- 前端学习笔记
---

> 由于没有深究WordPress，我一直没对我的个人WordPress博客优化过。最近找到了一个从WordPress搬到jekyll的方法，在这里总结一下。

## 为什么搬家？

WordPress是全球知名的博客框架，甚至已经超脱了博客范畴——无数个人网站、企业网站在丰富的WordPress插件带来的便利下，通过WordPress真正做到了低成本建站。截止2016年10月1日，使用WordPress搭建的网站占总网站数的27.1%(数据来源[w3techs](https://w3techs.com/))，也就是每4个网页中，就有一个是WordPress网页。

但也正因为这样，才使得它在程序猿看来显得很臃肿。由于我的博客没什么优化，我每次打开我的博客的时候，都要空白卡顿那么几秒钟。推测原因主要有2个：

1. 大部分加载文件被放到了`<head>`下，阻塞渲染了；
2. 毕竟PHP也是后端语言，没有静态文件那么方便加载。

另外，我买主机空间也要每年撒点银子啊。于是某一天不经意瞟到了jekyll——

大家都知道，GitHub这玩意儿就是程序猿界的Facebook，它有个jekyll可以帮我们免费搭建一个静态博客，你要是对域名要求不苛刻，GitHub就能让你零成本搞定搭建个人博客的理想。于是我决定搬家了。

## 怎么搬家？

满足如下条件：

1. 有WordPress博客，并已经发布了一些文章(说白了就是把这些文章搬到jekyll嘛)
2. 有GitHub账号，并且已经在自己的GitHub空间搭建好了jekyll(这一点展开后就又是一篇文章了。我放一篇Google找来的[文章](http://cenalulu.github.io/jekyll/how-to-build-a-blog-using-jekyll-markdown/)，留下的坑请自己踩吧)。

首先我们来分析一下问题：

1. “从WordPress搬到jekyll”也就是“把WordPress的文章搬到jekyll”；
2. WordPress的文章是HTML格式，jekyll的文章是Markdown格式；
3. jekyll文章对文件名有要求，必须是`日期+名称.md`，日期也得是`20xx-xx-xx`的格式；
4. **也就是说，问题的核心是把html转换成Markdown，并利用原有html中的某些字段，按固定格式重命名Markdown的文件名**。

我找到了这样一个[转换工具](https://github.com/thomasf/exitwp)，专门解决上述问题。其实这个转换工具的readme里面已经写得挺详细了。这里补充一些东西，再填一下坑。

## 准备工作

1. 登录WordPress后台，在菜单栏选择“工具-导出”，如图所示。
  ![导出工具](http://7xpx1z.com1.z0.glb.clouddn.com/export.png)
2. 选择“文章-下载导出的文件”，即可得到关于文章的xml备份文件了。先留着备用。
  ![导出文件界面](http://7xpx1z.com1.z0.glb.clouddn.com/export2.png)

## 操作流程（大概是按转换工具的readme操作）

1. [下载](https://github.com/thomasf/exitwp/zipball/master)该转换工具，或者直接在终端用`git clone https://github.com/thomasf/exitwp.git`
2. 打开下载的工具根目录，把WordPress的xml备份文件放入`wordpress-xml`文件夹中
  ![文件夹视图](http://7xpx1z.com1.z0.glb.clouddn.com/exitwplist.png)
3. 安装依赖环境，包括[python2.7](http://python.org/)、[PyYAML](http://pyyaml.org/wiki/PyYAML)、[Beautiful soup](https://www.crummy.com/software/BeautifulSoup/#Download)(html2text原作者已经下载过，不用再安装了)。这里重点说一下PyYAML和Beautiful soup的安装，毕竟要是没有接触过Python的话，很容易因为没有exe或dmg文件导致不知道下一步该怎么办。
  * **确保已经安装了Python2.7**，并把Python环境变量已经配置好了(可参照[这篇文章](http://www.runoob.com/python/python-install.html)中的“环境变量配置”一节)；
  * 用**终端**进入PyYAML文件夹的根目录;
  * 键入`$ python setup.py install`，你应该能在终端看到执行步骤与完成提示。
  * Beautiful soup的方法与PyYAML相同。
4. 回到我们下载的转换工具的根目录，在终端输入`$ python exitwp.py`
5. 等该任务执行完毕后，打开转换工具的根目录，打开`build/jekyll`，会有一个属于你的文件夹，所有转换完成的Markdown格式的文章都会安安静静地躺在里面啦！
6. 把这些文章保存到你GitHub博客中`_posts`文件夹下，推送到服务器，1分钟之后，你应该就能看到顺利搬家的文章了(这一步需要一点点git的操作，如果你能顺利部署你的GitHub博客，这一点应该不是问题)。

## 已知问题

1. 在原有WordPress文章中的图片如果不是保存在类似七牛云这样的图床中，我们可能需要手工重新添加了；
2. 转换工具在处理代码段时，会带上html和css，需要手工修改；
3. 对图片注释没有顺利转换。

## 总结

这个转换工具能够帮我们完成大部分的转换工作，但还不能做到完美。当然技术无止境，我们可以把这个工具fork过来，自己按需要调整一下配置。但其实还有一种完美的状态，就是自己再把每一篇写过的文章看一遍，改正格式错误的同时，还能巩固知识，相信做完这些后，自己会对曾经总结出的收获有进一步的认识。
