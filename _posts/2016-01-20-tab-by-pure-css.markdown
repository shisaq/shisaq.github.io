---
author: shisaq
comments: false
date: 2016-01-20 14:21:05+00:00
layout: post
link: http://shisaq.com/tab-by-pure-css.html
slug: tab-by-pure-css
title: 纯CSS实现tab切换
wordpress_id: 61
categories:
- 网络资源摘录
---




# 纯CSS实现tab切换




转自：[纯CSS实现tab切换](http://zhengrenzhe.gitcafe.io/2015/03/27/csstab1/)














tab切换的核心就是找出被选中的元素，显示与之对应的内容显示，这一过程可以方便的用js实现，但用纯CSS实现显得更加简洁。
CSS虽然无法知道一个元素要对应的显示内容，但配合input元素CSS就可以知道那个元素被选中了。纯CSS实现tab切换的原理就是：
当一个type为radio的input元素被选中时，使用`:checked`选择符可以知道是哪个radio被选中了，这时可以使用`+`选择符选中这个被点击元素的相邻元素，并将它显示，以模拟按钮对应内容的显示与隐藏，这就完成了tab切换的模拟，下面是实现代码：




<table class=" alignleft" >
<tbody >
<tr >

<td class="gutter" >

    
    <span class="line">1</span>
    <span class="line">2</span>
    <span class="line">3</span>
    <span class="line">4</span>
    <span class="line">5</span>
    <span class="line">6</span>
    <span class="line">7</span>
    <span class="line">8</span>
    <span class="line">9</span>
    <span class="line">10</span>
    <span class="line">11</span>
    <span class="line">12</span>
    <span class="line">13</span>
    <span class="line">14</span>
    <span class="line">15</span>
    <span class="line">16</span>
    <span class="line">17</span>
    <span class="line">18</span>
    <span class="line">19</span>
    <span class="line">20</span>
    <span class="line">21</span>
    <span class="line">22</span>
    <span class="line">23</span>
    <span class="line">24</span>
    <span class="line">25</span>
    <span class="line">26</span>
    <span class="line">27</span>
    <span class="line">28</span>
    <span class="line">29</span>
    <span class="line">30</span>
    <span class="line">31</span>
    <span class="line">32</span>
    <span class="line">33</span>
    <span class="line">34</span>
    <span class="line">35</span>
    <span class="line">36</span>
    <span class="line">37</span>
    <span class="line">38</span>
    <span class="line">39</span>
    <span class="line">40</span>
    <span class="line">41</span>
    <span class="line">42</span>
    <span class="line">43</span>
    <span class="line">44</span>
    <span class="line">45</span>
    <span class="line">46</span>
    <span class="line">47</span>
    <span class="line">48</span>



</td>

<td class="code" >

    
    <span class="line"><span class="doctype"><!DOCTYPE html></span></span>
    <span class="line"><span class="tag"><<span class="title">html</span> <span class="attribute">lang</span>=<span class="value">"en"</span>></span></span>
    <span class="line"><span class="tag"><<span class="title">head</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">title</span>></span>css<span class="tag"></<span class="title">title</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">style</span>></span>
    <span class="line">    <span class="comment">/*选中被点击的input的相邻元素，完成被点击后对应内容出现的功能。*/</span></span>
    <span class="line">    <span class="rule"><span class="attribute">input</span>:<span class="value">checked + .tabinfo {</span>
    <span class="line">      display: block</span></span>;</span>
    <span class="line">    }</span>
    <span class="line">    <span class="comment">/*选中被点击的input的元素的label，高亮显示*/</span></span>
    <span class="line">    <span class="rule"><span class="attribute">input</span>:<span class="value">checked ~ label{</span>
    <span class="line">      color: red</span></span>;</span>
    <span class="line">    }</span>
    <span class="line">    <span class="comment">/*将内容显示区域及input元素隐藏，内容显示区域将在对应input被点击后显示*/</span></span>
    <span class="line">    <span class="class">.tabinfo</span>, <span class="class">.tabradio</span><span class="rules">{</span>
    <span class="line">      <span class="rule"><span class="attribute">display</span>:<span class="value"> none</span></span>;</span>
    <span class="line">    }</span></span>
    <span class="line">    <span class="class">.tabbox</span><span class="rules">{</span>
    <span class="line">      <span class="rule"><span class="attribute">position</span>:<span class="value"> relative</span></span>;</span>
    <span class="line">      <span class="rule"><span class="attribute">padding-top</span>:<span class="value"> <span class="number">20px</span></span></span>;</span>
    <span class="line">      <span class="rule"><span class="attribute">border</span>:<span class="value"> <span class="number">1px</span> solid <span class="hexcolor">#bfbfbf</span></span></span>;</span>
    <span class="line">    }</span></span>
    <span class="line">    <span class="tag">label</span><span class="rules">{</span>
    <span class="line">      <span class="rule"><span class="attribute">position</span>:<span class="value"> absolute</span></span>;</span>
    <span class="line">      <span class="rule"><span class="attribute">top</span>:<span class="value"> <span class="number">0</span></span></span>;</span>
    <span class="line">      <span class="rule"><span class="attribute">left</span>:<span class="value"> <span class="number">0px</span></span></span>;</span>
    <span class="line">    }</span></span>
    <span class="line">    <span class="tag">label</span><span class="attr_selector">[for="hehe"]</span><span class="rules">{</span>
    <span class="line">      <span class="rule"><span class="attribute">left</span>:<span class="value"> <span class="number">30px</span></span></span>;</span>
    <span class="line">    }</span></span>
      <span class="tag"></<span class="title">style</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">head</span>></span></span>
    <span class="line"><span class="tag"><<span class="title">body</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">div</span> <span class="attribute">class</span>=<span class="value">"tabbox"</span>></span></span>
    <span class="line">    <span class="tag"><<span class="title">div</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">input</span> <span class="attribute">type</span>=<span class="value">"radio"</span> <span class="attribute">class</span>=<span class="value">"tabradio"</span> <span class="attribute">id</span>=<span class="value">"lala"</span> <span class="attribute">name</span>=<span class="value">"tab"</span> <span class="attribute">checked</span>=<span class="value">"true"</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">div</span> <span class="attribute">class</span>=<span class="value">"tabinfo"</span>></span>lalala<span class="tag"></<span class="title">div</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">label</span> <span class="attribute">for</span>=<span class="value">"lala"</span>></span>lala<span class="tag"></<span class="title">label</span>></span></span>
    <span class="line">    <span class="tag"></<span class="title">div</span>></span></span>
    
    <span class="line">    <span class="tag"><<span class="title">div</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">input</span> <span class="attribute">type</span>=<span class="value">"radio"</span> <span class="attribute">class</span>=<span class="value">"tabradio"</span> <span class="attribute">id</span>=<span class="value">"hehe"</span> <span class="attribute">name</span>=<span class="value">"tab"</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">div</span> <span class="attribute">class</span>=<span class="value">"tabinfo"</span>></span>hehehe<span class="tag"></<span class="title">div</span>></span></span>
    <span class="line">      <span class="tag"><<span class="title">label</span> <span class="attribute">for</span>=<span class="value">"hehe"</span>></span>hehe<span class="tag"></<span class="title">label</span>></span></span>
    <span class="line">    <span class="tag"></<span class="title">div</span>></span></span>
    <span class="line">  <span class="tag"></<span class="title">div</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">body</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">html</span>></span></span>



</td>
</tr>
</tbody>
</table>





# 纯CSS实现tab切换之二












前一篇说到了使用`:checked`伪类来实现切换tab，还有一种纯CSS切换tab的方法，就是使用`:target`伪类，使用:target实现切换tab相比前一种结构上简单，只需div和a就能实现。这种实现方法的核心在于:target伪类，他能选择a指向的元素（比如#aaa就是指向id为aaa的元素）。

下面是实现代码：


<table >
<tbody >
<tr >

<td class="gutter" >

    
    <span class="line">1</span>
    <span class="line">2</span>
    <span class="line">3</span>
    <span class="line">4</span>
    <span class="line">5</span>
    <span class="line">6</span>
    <span class="line">7</span>
    <span class="line">8</span>
    <span class="line">9</span>
    <span class="line">10</span>
    <span class="line">11</span>
    <span class="line">12</span>
    <span class="line">13</span>
    <span class="line">14</span>
    <span class="line">15</span>
    <span class="line">16</span>
    <span class="line">17</span>
    <span class="line">18</span>
    <span class="line">19</span>
    <span class="line">20</span>
    <span class="line">21</span>
    <span class="line">22</span>
    <span class="line">23</span>
    <span class="line">24</span>
    <span class="line">25</span>



</td>

<td style="text-align: left;" class="code" >

    
    <span class="line"><span class="doctype"><!DOCTYPE html></span></span>
    <span class="line"><span class="tag"><<span class="title">html</span> <span class="attribute">lang</span>=<span class="value">"en"</span>></span></span>
    <span class="line"><span class="tag"><<span class="title">head</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">title</span>></span>css<span class="tag"></<span class="title">title</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">style</span>></span>
    <span class="line">    <span class="comment">/*所有tab都隐藏*/</span></span>
    <span class="line">    <span class="class">.tab</span><span class="rules">{</span>
    <span class="line">      <span class="rule"><span class="attribute">display</span>:<span class="value"> none</span></span>;</span>
    <span class="line">    }</span></span>
    <span class="line">    <span class="comment">/*当a被点击后，a指向的元素取消隐藏*/</span></span>
    <span class="line">    <span class="rule"><span class="attribute">.tab</span>:<span class="value">target{</span>
    <span class="line">      display: block</span></span>;</span>
    <span class="line">      <span class="rule"><span class="attribute">border</span>:<span class="value"> <span class="number">1px</span> solid <span class="hexcolor">#bfbfbf</span></span></span>;</span>
    <span class="line">    }</span>
      <span class="tag"></<span class="title">style</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">head</span>></span></span>
    <span class="line"><span class="tag"><<span class="title">body</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">a</span> <span class="attribute">href</span>=<span class="value">"#a"</span>></span>aaa<span class="tag"></<span class="title">a</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">a</span> <span class="attribute">href</span>=<span class="value">"#b"</span>></span>bbb<span class="tag"></<span class="title">a</span>></span></span>
    <span class="line">  <span class="tag"><<span class="title">div</span> <span class="attribute">class</span>=<span class="value">"tabbox"</span>></span></span>
    <span class="line">    <span class="tag"><<span class="title">div</span> <span class="attribute">id</span>=<span class="value">"a"</span> <span class="attribute">class</span>=<span class="value">"tab"</span>></span>aaa<span class="tag"></<span class="title">div</span>></span></span>
    <span class="line">    <span class="tag"><<span class="title">div</span> <span class="attribute">id</span>=<span class="value">"b"</span> <span class="attribute">class</span>=<span class="value">"tab"</span>></span>bbb<span class="tag"></<span class="title">div</span>></span></span>
    <span class="line">  <span class="tag"></<span class="title">div</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">body</span>></span></span>
    <span class="line"><span class="tag"></<span class="title">html</span>></span></span>



</td>
</tr>
</tbody>
</table>



{<1>}![tab](https://dn-droiz.qbox.me/textarea11.png)


{<2>}![tab](https://dn-droiz.qbox.me/textarea12.png)











