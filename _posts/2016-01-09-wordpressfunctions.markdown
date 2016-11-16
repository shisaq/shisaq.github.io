---
author: shisaq
comments: false
date: 2016-01-09 09:02:22+00:00
layout: post
link: http://shisaq.com/wordpressfunctions.html
slug: wordpressfunctions
title: 初识WordPress函数
wordpress_id: 31
categories:
- 前端学习笔记
---

这两天在仿站过程中，用到了如下5个函数，做个笔记，便于今后翻阅：






	
  1. 




    
    <span style="color: #cd2828;"><?php</span> <span style="color: #d0d0d0;">bloginfo(</span> <span style="color: #ed9d13;">'stylesheet_url'</span> <span style="color: #d0d0d0;">);</span> <span style="color: #cd2828; font-weight: bold;">?></span>
    







**个人理解：**打印该主题下的style.css文件路径




**示例：**







    
    <span style="color: #d0d0d0;"><</span><span style="color: #24909d;">link</span> <span style="color: #d0d0d0;">href=</span><span style="color: #ed9d13;">"<?php bloginfo( 'stylesheet_url' ); ?>"</span> <span style="color: #d0d0d0;">rel=</span><span style="color: #ed9d13;">"stylesheet"</span> <span style="color: #d0d0d0;">type=</span><span style="color: #ed9d13;">"text/css"</span> <span style="color: #d0d0d0;">/></span>
    





	
  2. 




    
    <span style="color: #cd2828;"><?php</span> <span style="color: #d0d0d0;">bloginfo(</span><span style="color: #ed9d13;">'template_directory'</span><span style="color: #d0d0d0;">);</span> <span style="color: #cd2828; font-weight: bold;">?></span>
    







**个人理解：**打印该主题的绝对根目录




**示例：**







    
    <span style="color: #d0d0d0;"><img</span> <span style="color: #d0d0d0;">src=</span><span style="color: #ed9d13;">"<?php bloginfo('template_directory'); ?>/images/logo.png"</span><span style="color: #d0d0d0;">></span>
    





	
  3. 




    
    <span style="color: #cd2828;"><?php</span> <span style="color: #d0d0d0;">get_header()</span><span style="color: #cd2828; font-weight: bold;">?></span>
    







**个人理解：**放在index.php的最上方，接收header.php的所有内容，目的可能是保持导航栏（包含在header.php中）不变的同时，切换文章内容的效果。




	
  4. 




    
    <span style="color: #cd2828;"><?php</span> <span style="color: #d0d0d0;">get_footer()</span><span style="color: #cd2828; font-weight: bold;">?></span>
    







**个人理解：**放在index.php的最上方，意思同3。




	
  5. 




    
    <span style="color: #cd2828;"><?php</span> <span style="color: #d0d0d0;">wp_footer()</span><span style="color: #cd2828; font-weight: bold;">?></span>
    







**用法：**放在footer.php的</body>之前。




**个人理解：**这个我也不太理解，只知道需要这样放。







另外，我也学习到function.php中可放入一些功能函数，现在学到了其中2个，有1个很适合在门内使用，因为Google字体你懂的。







    
     <span style="color: #cd2828;"><?php</span>
        <span style="color: #999999; font-style: italic;">//取消谷歌字体</span>
    
        <span style="color: #6ab825; font-weight: bold;">function</span> <span style="color: #447fcf;">wp_remove_open_sans_from_wp_core</span><span style="color: #d0d0d0;">()</span> <span style="color: #d0d0d0;">{</span>
    
            <span style="color: #d0d0d0;">wp_deregister_style(</span> <span style="color: #ed9d13;">'open-sans'</span> <span style="color: #d0d0d0;">);</span>
    
            <span style="color: #d0d0d0;">wp_register_style(</span> <span style="color: #ed9d13;">'open-sans'</span><span style="color: #d0d0d0;">,</span> <span style="color: #6ab825; font-weight: bold;">false</span> <span style="color: #d0d0d0;">);</span>
    
            <span style="color: #d0d0d0;">wp_enqueue_style(</span><span style="color: #ed9d13;">'open-sans'</span><span style="color: #d0d0d0;">,</span><span style="color: #ed9d13;">''</span><span style="color: #d0d0d0;">);</span>
    
        <span style="color: #d0d0d0;">}</span>
    
        <span style="color: #d0d0d0;">add_action(</span> <span style="color: #ed9d13;">'init'</span><span style="color: #d0d0d0;">,</span> <span style="color: #ed9d13;">'wp_remove_open_sans_from_wp_core'</span><span style="color: #d0d0d0;">);</span> 
    
        <span style="color: #999999; font-style: italic;">//登陆用户不显示Wordpress仪表盘的工具栏</span>
        <span style="color: #d0d0d0;">add_filter(</span><span style="color: #ed9d13;">'show_admin_bar'</span><span style="color: #d0d0d0;">,</span> <span style="color: #ed9d13;">'__return_false'</span><span style="color: #d0d0d0;">);</span>
    
     <span style="color: #cd2828; font-weight: bold;">?></span>
    







另外我在写这篇文章的时候，总感觉直接放代码太不美观，于是找到了一个sublime插件和相关用法，把代码段和颜色生成html代码再粘贴过来就可以了。感谢@刘哇勇 老师！[链接](http://www.cnblogs.com/Wayou/p/highlight_code_with_sublimetext_style.html)附上。
