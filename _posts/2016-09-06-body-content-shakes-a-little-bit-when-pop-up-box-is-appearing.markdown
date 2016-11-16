---
author: shisaq
comments: true
date: 2016-09-06 22:17:24+00:00
layout: post
link: http://shisaq.com/body-content-shakes-a-little-bit-when-pop-up-box-is-appearing.html
slug: body-content-shakes-a-little-bit-when-pop-up-box-is-appearing
title: Body Content Shakes A Little Bit When Pop-up Box Is Appearing?
wordpress_id: 214
categories:
- 前端学习笔记
---

<blockquote>This article is about the effect of the pop-up box.</blockquote>





## Hypothetically, we have this condition:







  1. We have a web page, set body style `margin: 0 auto`, to make content automatically center; but we have no idea about the height of it -- maybe it has scroll bar, or maybe not;


  2. We see a button, which could occur an event to pop up a box, with a dark overlap;


  3. When popping up the box, we want to keep the position of the body where we reached to.





## Let's start!



I believe we have finished the first step when we reached this article. So now let's make a button pop up a box!

There are plenty ways to make it. Pure CSS, Bootstrap,JavaScript, jQuery, KnockoutJs... I'll show the jQuery example:



When clicking the `bomb` button, the pop-up box appears; when clicking the `x` of the pop-up box, or simply clicking the black area, the box disappears. It seems we have done what we need.



## But...



If you pay attention to the details, you could find there is a design not friendly: When having shown the pop-up box, we must have focused on the pop-up box. At this moment, **we need just scroll the pop-up box, without affecting the current position of the body page**. In order to do this, we need to add `overflow: hidden;` to the `body` tag:





## Body content doesn't scroll! But it shakes a little bit when toggling the pop-up box...



As you can see from the previous snippet, either clicking the `bomb` button or closing the pop-up box, the `body` content shakes a little bit. What's wrong with it?



## The reason



It's because of `overflow: hidden;` . Because this code hides the scroll bar. But actually, the scroll bar is a part of the whole body, if it disappears, the width will increase to fill the screen, **because we used `margin: 0 auto;` to the `#container`  before**.



## 3 ways to solve






    
  1. 


### A simple but not perfect way


We can simply make the background of the `overlay` class into `black` , and delete the transition when toggling. In this case, it's impossible to see the change of the body shake anymore:

But anyway, I'm not so satisfied with it. As a front-end engineer, I want to bring the best experience.

    
  2. 


### Give a padding-right of the body when toggling


Let's see the result first:

This way is much better. The reason we give the `padding-right: 15px;` (or `margin-right: 15px` ) to the `body` , is the width of the scroll bar in most browsers is 15px. Meanwhile, because I added the `padding-right` to `body`, the pop-up box began to shake. I fixed the shake by changing `transition: all 0.5s ease;` into `transition: opacity 0.5s ease;`, and added CSS Prefix to fit different browsers.
Seems good this time, huh? Actually, if you're satisfied with this effect, you can stop here! But if you think deeper, you should know **different browsers have different width of the scroll bar**. In another word, 15px is hard coding. You can hard code for every browser ( reference: [StackOverflow](http://stackoverflow.com/questions/30099310/how-to-fix-background-content-shaking-issue-on-desktop-browser-triggered-by-scro)), but you cannot make sure if any browser changes the width in future. We'd better calculate the width to make the `padding-right` smarter. Here we go!

    
  3. 


### Perfect solution


This solution aims to help us calculate the scroll bar's width. When clicking the `bomb` button, we make the `padding-right` of `body` equals to the scroll bar's width ( reference: [StackOverflow](http://stackoverflow.com/a/19960528/5769598)):

We built a function to get the width of the scroll bar, so that it can dynamically change the `padding-right` of `body`, depending on different browsers. _Chrome, Safari, Firefox and IE9+_ passed the test. The function is referenced by [于江水的博客](http://yujiangshui.com/review-how-to-make-popup-mask-effect/) and [前端博客](http://qianduanblog.com/post/js-learning-40-get-scrollbar-width.html). I added the distinguish of IE and other browsers. But we have to read on, because...





## Now it seems really perfect, but actually not



When the page is not high enough to have a scroll bar, the bug will come: The page shakes again... Cuz we don't need the `padding-right` in this case. So what we need to do, is judge if the page has a scroll bar -- on the other hand, we judge if the page height is greater than the screen height:



This is the key: `document.documentElement.clientHeight < document.documentElement.offsetHeight-4`.

`document.documentElement.clientHeight` means the height of the visible area;

`document.documentElement.offsetHeight-4` means the height of the browser ( 4px is because the border of browsers is 2px).



## Problem fixed



Are you satisfied with it? Or you just want to use some ready-made templates? It's up to you.



## Other references



[JS,Jquery获取各种屏幕的宽度和高度](https://segmentfault.com/a/1190000000728046)



[JS判断页面是否出现滚动条](http://www.cnblogs.com/yazdao/archive/2010/12/06/1897742.html)





[Bootstrap bug fix](https://github.com/twbs/bootstrap/pull/13103/files)



[纯CSS让overflow:auto页面滚动条出现时不跳动](http://www.zhangxinxu.com/wordpress/2015/01/css-page-scrollbar-toggle-center-no-jumping/)
