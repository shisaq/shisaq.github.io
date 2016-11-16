---
author: shisaq
comments: true
date: 2016-05-23 15:01:51+00:00
layout: post
link: http://shisaq.com/javascript%e5%9c%a8for-in%e5%be%aa%e7%8e%af%e4%b8%ad%ef%bc%8c%e7%94%a8%e7%82%b9%e8%bf%98%e6%98%af%e4%b8%ad%e6%8b%ac%e5%8f%b7%ef%bc%9f.html
slug: javascript%e5%9c%a8for-in%e5%be%aa%e7%8e%af%e4%b8%ad%ef%bc%8c%e7%94%a8%e7%82%b9%e8%bf%98%e6%98%af%e4%b8%ad%e6%8b%ac%e5%8f%b7%ef%bc%9f
title: JavaScript在for-in循环中，用点还是中括号？
wordpress_id: 155
categories:
- 前端学习笔记
---

初学JS。在用for in循环的时候，对用点还是用中括号产生了困惑。

困惑阐述：



 	
  1. 定义一个对象，含若干属性名称及属性值：




    
    <span style="color: #6ab825; font-weight: bold;">var</span> <span style="color: #d0d0d0;">bio</span> <span style="color: #d0d0d0;">=</span> <span style="color: #d0d0d0;">{</span>
      <span style="color: #ed9d13;">"name"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"shisaq lee"</span><span style="color: #d0d0d0;">,</span>
      <span style="color: #ed9d13;">"role"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"Front-end Developer"</span><span style="color: #d0d0d0;">,</span>
      <span style="color: #ed9d13;">"contacts"</span><span style="color: #d0d0d0;">:</span> <span style="color: #d0d0d0;">{</span>
        <span style="color: #ed9d13;">"mobile"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"123-456-7890"</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #ed9d13;">"email"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"123@gmail.com"</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #ed9d13;">"twitter"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"@123"</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #ed9d13;">"github"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"1234"</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #ed9d13;">"blog"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"123.com"</span><span style="color: #d0d0d0;">,</span>
        <span style="color: #ed9d13;">"location"</span><span style="color: #d0d0d0;">:</span> <span style="color: #ed9d13;">"Pittsburgh, PA, USA"</span>
      <span style="color: #d0d0d0;">}</span>
    <span style="color: #d0d0d0;">}</span>





 	
  2. 用 `for in` 循环遍历此对象的名称及属性值：




    
      <span style="color: #6ab825; font-weight: bold;">for</span> <span style="color: #d0d0d0;">(contact</span> <span style="color: #6ab825; font-weight: bold;">in</span> <span style="color: #d0d0d0;">bio.contacts)</span> <span style="color: #d0d0d0;">{</span>
        <span style="color: #6ab825; font-weight: bold;">if</span> <span style="color: #d0d0d0;">(bio.contacts.hasOwnProperty(contact))</span> <span style="color: #d0d0d0;">{</span>
          <span style="color: #d0d0d0;">console.log(contact);</span>
          <span style="color: #d0d0d0;">console.log(bio.contacts.contact);</span>
        <span style="color: #d0d0d0;">}</span>
      <span style="color: #d0d0d0;">}</span>
    





 	
  3. 猜输出结果是什么？
![](http://shisaq.com/wp-content/uploads/2016/05/Snip20160523_9.png)


这就是困扰我的问题， `bio.contacts.contact` 没有被定义，所以没有正常输出。

**思考**：`contact`代表的是`bio.contacts`这个对象里每个属性的名称。当 `for in` 循环遍历到第1个时，`contact`代表的是`mobile`？_**不，其实是`"mobile"`**_。因此，当代码进行到 `console.log(bio.contacts.contact);` 的时候，其实对应的是 `console.log(bio.contacts."mobile");` 。但因其带有双引号，所以这时候用 `.` 是取不到`mobile`的值的。此时要想取mobile的值，就是用另一种方法的时候了。

将`for in` 循环中的问题代码**微调**一下：




    
      <span style="color: #6ab825; font-weight: bold;">for</span> <span style="color: #d0d0d0;">(contact</span> <span style="color: #6ab825; font-weight: bold;">in</span> <span style="color: #d0d0d0;">bio.contacts)</span> <span style="color: #d0d0d0;">{</span>
        <span style="color: #6ab825; font-weight: bold;">if</span> <span style="color: #d0d0d0;">(bio.contacts.hasOwnProperty(contact))</span> <span style="color: #d0d0d0;">{</span>
          <span style="color: #d0d0d0;">console.log(contact);</span>
          <span style="color: #d0d0d0;">console.log(bio.contacts<span style="color: #ff0000;">[</span>contact<span style="color: #ff0000;">]</span>);</span>
        <span style="color: #d0d0d0;">}</span>
      <span style="color: #d0d0d0;">}</span>
    





我仅把 `.` 换成了  `[ ]` 。

此时重新运行代码，结果如下：

![](http://shisaq.com/wp-content/uploads/2016/05/Snip20160523_10.png)

看到正确结果，此时我的内心是激动的😄😄

当时改完，自己还挺不理解，`[ ]` 不是用在数组中的么？怎么能用在对象中呢？

在JavaScript里，有2种方法显示对象中某个属性的值：



 	
  1. 对象.属性 === 该属性的值，用本文例子就是：`bio.contacts.mobile === "123-456-7890"`

 	
  2. 对象["属性"] === 该属性的值。用本文例子就是：`bio.contacts["mobile"] === "123-456-7890"`


关于以上两种方法的区别，请参考如下这篇文章：[http://www.dev-archive.net/articles/js-dot-notation/](http://www.dev-archive.net/articles/js-dot-notation/)。虽然是英文，但是不长，总结起来就是：



 	
  1. **用 `.` 速度更快，阅读也更容易；**

 	
  2. **用 `[ ]` 可以允许含有特殊字符的属性名称。**


结合到本文我就明白了，我在循环中犯了一个错误，`contact`代表的是`"mobile"` 而不是`mobile`。双引号当然是特殊字符，所以这里我只能用 `[ ]` ，而不能用 `.` 来获取`mobile`的值了。同时用中括号，仍然是对**对象**进行操作，并没有对数组进行操作。



换言之，在 `for in` 循环中，选取属性名称和属性值的时候一定要谨慎。若`for in` 的目标是一个对象而不是一个数组，那就只能用中括号了。换言之，如果要操作一个数组，其实是有更好的方法的： `for循环` 或 `forEach循环` 。参见：[Udacity关于`for-in`循环的参考指南](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop)。并且，在火狐MDN关于for in的例子中，也用的是中括号，参见这里：[Mozila Developer Network for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)（中文版）。



如果对这两种表示方法感兴趣，可以读一读如下文章：

    
    1. <a href="http://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets" class="question-hyperlink">JavaScript property access: dot notation vs. brackets?
    </a>



    
    2. <a href="https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d#.kp9uzdmao">JS dot-notation vs. bracket notation</a>
