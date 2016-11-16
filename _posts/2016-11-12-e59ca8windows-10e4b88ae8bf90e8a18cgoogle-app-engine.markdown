---
author: shisaq
comments: true
date: 2016-11-12 23:53:32+00:00
layout: post
link: http://shisaq.com/%e5%9c%a8windows-10%e4%b8%8a%e8%bf%90%e8%a1%8cgoogle-app-engine.html
slug: '%e5%9c%a8windows-10%e4%b8%8a%e8%bf%90%e8%a1%8cgoogle-app-engine'
title: 在Windows 10上运行Google APP Engine
wordpress_id: 247
categories:
- 前端学习笔记
---

Google各方面都更新得很快。Udacity上的视频也不算老，但是已经跟不上Google的更新速度了。举例来说，前段时间在学习Chrome Dev Tools的时候，由于Google的更新，我必须放弃Udacity视频，去查阅官方文档和StackOverflow。

这次在学习Web Development课程，目的是搭建一个功能完整的博客——这就意味着需要后台介入了——Python，数据库，服务器。虽然本博客也是一个功能完整的博客，但是这是站在巨人的肩膀(Wordpress)上搞定的。

Udacity的教程使用Python作为后端语言，Google APP Engine（GAE）作为服务器。Python好安装，就略过了；GAE有点头大，参考的资料如下：




    
  * [Windows Installation for GAE](https://storage.googleapis.com/supplemental_media/udacityu/48403788/Windows%20Installation%20Guide%20for%20App%20Engine.pdf)

    
  * [Google app engine python 2.7 tutorial won't run](http://stackoverflow.com/questions/17515144/google-app-engine-python-2-7-tutorial-wont-run)

    
  * [GAE对Python的官方文档](https://cloud.google.com/appengine/docs/python/tools/using-local-server)



总结如下：


    
  1. 确保Python安装版本是2.7；

    
  2. 用自己的账号登录Google；

    
  3. 在[https://console.developers.google.com/](https://console.developers.google.com/)新建一个自己将要用的项目（Google帮我把命名改为udacitywebdevelopment-149320了）备用；

    
  4. 下载GAE对Python 2.7的[SDK](https://cloud.google.com/sdk/docs/)，安装完毕后自动启动初始化程序，根据提示步骤关联之前的项目（我的是udacitywebdevelopment-149320）；

    
  5. 在自己喜欢的位置新建一个文件夹，命名为helloworld；

    
  6. 在helloworld文件夹下新建名为`app.yaml` 的文件，复制以下内容并保存（**记得把application改成跟自己的项目名称一样的名字**）；

    
    <code><span class="pln">application</span><span class="pun">:</span><span class="pln"> udacity</span><span class="pln">
    version</span><span class="pun">:</span> <span class="lit">1</span><span class="pln">
    runtime</span><span class="pun">:</span><span class="pln"> python27
    api_version</span><span class="pun">:</span> <span class="lit">1</span><span class="pln">
    threadsafe</span><span class="pun">:</span><span class="pln"> true
    
    handlers</span><span class="pun">:</span>
    <span class="pun">-</span><span class="pln"> url</span><span class="pun">:</span> <span class="pun">/.*</span><span class="pln">
      script</span><span class="pun">:</span><span class="pln"> helloworld</span><span class="pun">.</span><span class="pln">application</span></code>




    
  7. 在helloworld文件夹下新建名为`helloworld.py` 的文件，复制以下内容并保存；

    
    <code><span class="kwd">import</span><span class="pln"> webapp2
    </span><span class="kwd">class</span> <span class="typ">MainPage</span><span class="pun">(</span><span class="pln">webapp2</span><span class="pun">.</span><span class="typ">RequestHandler</span><span class="pun">):</span>
        <span class="kwd">def</span><span class="pln"> get</span><span class="pun">(</span><span class="pln">self</span><span class="pun">):</span><span class="pln">
            self</span><span class="pun">.</span><span class="pln">response</span><span class="pun">.</span><span class="pln">headers</span><span class="pun">[</span><span class="str">'Content-Type'</span><span class="pun">]</span> <span class="pun">=</span> <span class="str">'text/plain'</span><span class="pln">
            self</span><span class="pun">.</span><span class="pln">response</span><span class="pun">.</span><span class="pln">write</span><span class="pun">(</span><span class="str">'Hi'</span><span class="pun">)</span><span class="pln">
    application </span><span class="pun">=</span><span class="pln"> webapp2</span><span class="pun">.</span><span class="typ">WSGIApplication</span><span class="pun">([</span>
        <span class="pun">(</span><span class="str">'/'</span><span class="pun">,</span> <span class="typ">MainPage</span><span class="pun">),</span>
    <span class="pun">],</span><span class="pln"> debug</span><span class="pun">=</span><span class="kwd">True</span><span class="pun">)</span></code>




    
  8. 打开Windows PowerShell，运行 `python 'GAE安装路径中dev_appserver.py的路径' helloworld文件夹的路径`
我的是这样的：
`$ python 'D:\Google\Cloud SDK\google-cloud-sdk\bin\dev_appserver.py' C:\Users\Jing\Documents\coding\helloworld`



如果没有失误的话，打开http://localhost:8080后，就能显示如下结果了。

[caption id="" align="aligncenter" width="404"]![hello world](http://7xpx1z.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720161112175933.png) hello world[/caption]

随后按照Udacity的提示，将该服务器部署到GAE上（以下是我的代码）：

`$ python 'D:\Google\Cloud SDK\google-cloud-sdk\platform\google_appengine\appcfg.py' update C:\Users\Jing\Documents\coding\helloworld`

然后打开浏览器，键入`项目名称.appspot.com`，就能在网络上访问了。

[caption id="" align="aligncenter" width="508"]![成功发布](http://7xpx1z.com1.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720161112184909.png) 成功发布[/caption]

最后一步其实我也没有搞太明白，感觉来来回回踩了好几个坑，总之多试试，按GAE的操作步骤，结合Udacity的[那篇文章](https://storage.googleapis.com/supplemental_media/udacityu/48403788/Windows%20Installation%20Guide%20for%20App%20Engine.pdf)，出错了再按错误内容分析一下原因，终究会搞定。
