---
author: shisaq
comments: false
date: 2016-01-20 04:25:09+00:00
layout: post
link: http://shisaq.com/css-align-center.html
slug: css-align-center
title: CSS 居中完全指南
wordpress_id: 55
categories:
- 网络资源摘录
---

# CSS 居中完全指南







<blockquote>

> 
> 本文翻译自：[《Centering in CSS: A Complete Guide》](https://css-tricks.com/centering-css-complete-guide/)
> 
> 
</blockquote>




使用 CSS 实现效果困难吗？显然不是。实际上有许多方法可以实现居中效果，但在具体情况中，我们往往无法判断哪种方法最合适。




所以让我们来创建一个层次结构的方法集，帮助你解决选择困难症~





<blockquote>

> 
> 本文摘抄自：[CSS居中指南－简书](http://www.jianshu.com/p/61c431fd924a)
> 
> 
</blockquote>




## 水平居中




### 行内或类行内元素（比如文本和链接）




在块级父容器中让行内元素居中，只需使用 `text-align: center;`：




<p data-height="268" data-theme-id="0" data-slug-hash="HulzB" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering Inline Elements](http://codepen.io/chriscoyier/pen/HulzB/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




这种方法可以让 inline/inline-block/inline-table/inline/flex 等类型的元素实现居中。





### 块级元素




让块级元素居中的方法就是设置 `margin-left` 和 `margin-right` 为 `auto`（前提是已经为元素设置了适当的 `width` 宽度，否则块级元素的宽度会被拉伸为父级容器的宽度）。常见用法如下所示：




    
    <code class="css"><span class="hljs-class">.center-me</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span> auto</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="eszon" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering Single Block Level Element](http://codepen.io/chriscoyier/pen/eszon/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on[CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




无论父级容器和块级元素的宽度如何变化，都不会影响块级元素的居中效果。




请注意，`float` 属性是不能实现元素居中的。如果你想知道使用 `float` 实现居中的非常规方案，可以参考[这篇文章](http://pinggod.net/2015/08/11/%25E4%25BD%25BF%25E7%2594%25A8-CSS-%25E4%25BC%25AA%25E5%2585%2583%25E7%25B4%25A0%25E6%25A8%25A1%25E6%258B%259F-float-center/)。





### 多个块级元素




如果要让多个块级元素在同一水平线上居中，那么可以将它们的 `display` 类型。这里有两个示例，其中一个使用了 `inline-block` 的显示方式，另一个使用了 `flexbox` 的显示方式：




<p data-height="268" data-theme-id="0" data-slug-hash="ebing" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering Row of Blocks](http://codepen.io/chriscoyier/pen/ebing/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




如果要让多个块级元素实现垂直方向上的居中，那么仍然可以通过设置 `margin-left` 和 `margin-right` 为 `auto` 来实现：




<p data-height="268" data-theme-id="0" data-slug-hash="haCGt" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering Blocks on Top of Each Other](http://codepen.io/chriscoyier/pen/haCGt/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on[CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





## 垂直居中




使用 CSS 实现垂直居中需要一些技巧。





### 行内或类行内元素（比如文本和链接）




一、单行




对于单行行内或者文本元素，只需为它们添加等值的 `padding-top` 和 `padding-bottom` 就可以实现垂直居中：




    
    <code class="css"><span class="hljs-class">.link</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">padding-top</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">padding-bottom</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="ldcwq" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering text (kinda) with Padding](http://codepen.io/chriscoyier/pen/ldcwq/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




如果因为某些原因我们不能使用 `padding` 属性来实现垂直居中，而且已知文本不会换行，那么就可以让 `line-height` 和 `center` 相等，从而实现垂直居中：




    
    <code class="css"><span class="hljs-class">.center-text-trick</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">line-height</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">white-space</span>:<span class="hljs-value"> nowrap</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="LxHmK" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering a line with line-height](http://codepen.io/chriscoyier/pen/LxHmK/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




二、多行




对于多行文本，同样可以使用等值 `padding-top` 和 `padding-bottom` 的方式实现垂直居中。如果你在使用过程中发现这种方法没见效，那么你可以通过 CSS 为文本设置一个类似 `table-cell` 的父级容器，然后使用 `vertical-align` 属性实现垂直居中：




<p data-height="268" data-theme-id="0" data-slug-hash="ekoFx" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Centering text (kinda) with Padding](http://codepen.io/chriscoyier/pen/ekoFx/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




此外，你还可以使用 `flexbox` 实现垂直居中，对于父级容器为 `display: flex` 的元素来说，它的每一个子元素都是垂直居中的：




    
    <code class="css"><span class="hljs-class">.flex-center-vertically</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> flex</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">justify-content</span>:<span class="hljs-value"> center</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">flex-direction</span>:<span class="hljs-value"> column</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">400px</span></span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="uHygv" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Vertical Center Multi Lines of Text with Flexbox](http://codepen.io/chriscoyier/pen/uHygv/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




值得注意的是，上述方法只适用于父级容器拥有确定高度的元素。




如果上述方法都不起作用，那么你就需要使用被称为`幽灵元素（ghost element）`的非常规解决方式：在垂直居中的元素上添加伪元素，设置伪元素的高等于父级容器的高，然后为文本添加 `vertical-align: center;` 样式，即可实现垂直居中。




    
    <code class="css"><span class="hljs-class">.ghost-center</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    <span class="hljs-rule"><span class="hljs-attribute">.ghost-center</span>:<span class="hljs-value">:before {
      content: <span class="hljs-string">" "</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> inline-block</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">vertical-align</span>:<span class="hljs-value"> middle</span></span>;
    }
    <span class="hljs-class">.ghost-center</span> <span class="hljs-tag">p</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> inline-block</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">vertical-align</span>:<span class="hljs-value"> middle</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="EjJBRQ" data-default-tab="result" data-user="pinggod" class='codepen'>See the Pen [Ghost Centering Multi Line Text](http://codepen.io/pinggod/pen/EjJBRQ/) by Sean Sun ([@pinggod](http://codepen.io/pinggod)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





### 块级元素




一、已知元素的高度




无法获知元素的具体高度是非常常见的一种状况，比如：视区宽度变化，会触发布局重绘，从而改变高度；对文本施加不同的样式会改变高度；文本的内容量不同会改变高度；当宽度变化时，对于宽高比例固定的元素（比如图片），也会自动调整高度……




如果我们知道元素的高度，可以这样来实现垂直居中：




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    <span class="hljs-class">.child</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> -<span class="hljs-number">50px</span></span></span>; <span class="hljs-comment">/* account for padding and border if not using box-sizing: border-box; */</span>
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="HiydJ" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Fixed Height](http://codepen.io/chriscoyier/pen/HiydJ/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




二、未知元素的高度




如果我们不知道元素的高度，那么就需要先将元素定位到容器的中心位置，然后使用 `transform` 的 `translate` 属性，将元素的中心和父容器的中心重合，从而实现垂直居中：




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    <span class="hljs-class">.child</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">translateY</span>(-<span class="hljs-number">50%</span>)</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="lpema" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Unknown Height](http://codepen.io/chriscoyier/pen/lpema/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




三、flexbox




使用 `flexbox` 实现垂直居中非常简单：




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> flex</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">flex-direction</span>:<span class="hljs-value"> column</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">justify-content</span>:<span class="hljs-value"> center</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="FqDyi" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Unknown Height with Flexbox](http://codepen.io/chriscoyier/pen/FqDyi/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





## 水平且垂直居中




通过组合水平居中和垂直居中的技巧，可以实现非常完美的居中效果。我觉得可以将它们分为三种类型：





### 宽高固定元素




设定父级容器为相对定位的容器，设定子元素绝对定位的位置 `position: absolute; top: 50%; left: 50%`，最后使用负向 `margin` 实现水平和垂直居中，`margin` 的值为宽高（具体的宽高需要根据实际情况计算 `padding`）的一半。




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    
    <span class="hljs-class">.child</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">300px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">20px</span></span></span>;
    
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
    
      <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> -<span class="hljs-number">70px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> -<span class="hljs-number">170px</span></span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="JGofm" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Fixed Height and Width](http://codepen.io/chriscoyier/pen/JGofm/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on[CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





### 宽高不固定元素




如果无法获取确定的宽高，同样需要设定父级容器为相对定位的容器，设定子元素绝对定位的位置 `position: absolute; top: 50%; left: 50%`。不同的是，接下来需要使用 `transform: translate(-50%, -50%);` 实现垂直居中：




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    <span class="hljs-class">.child</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>)</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="lgFiq" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Unknown Height and Width](http://codepen.io/chriscoyier/pen/lgFiq/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on[CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>




使用 `transform` 有一个缺陷，就是当计算结果含有小数时（比如 0.5），会让整个元素看起来是模糊的，一种解决方案就是为父级元素设置 `transform-style: preserve-3d;` 样式：




    
    <code class="css"><span class="hljs-class">.parent-element</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">-webkit-transform-style</span>:<span class="hljs-value"> preserve-<span class="hljs-number">3</span>d</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">-moz-transform-style</span>:<span class="hljs-value"> preserve-<span class="hljs-number">3</span>d</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">transform-style</span>:<span class="hljs-value"> preserve-<span class="hljs-number">3</span>d</span></span>;
    }</span>
    
    <span class="hljs-class">.element</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">50%</span></span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">translateY</span>(-<span class="hljs-number">50%</span>)</span></span>;
    }</span></code>




### flexbox




使用 flexbox 实现水平和垂直居中，只需使用两条居中属性即可：




    
    <code class="css"><span class="hljs-class">.parent</span> <span class="hljs-rules">{
      <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> flex</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">justify-content</span>:<span class="hljs-value"> center</span></span>;
      <span class="hljs-rule"><span class="hljs-attribute">align-items</span>:<span class="hljs-value"> center</span></span>;
    }</span></code>




<p data-height="268" data-theme-id="0" data-slug-hash="msItD" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen[Center Block with Unknown Height and Width with Flexbox](http://codepen.io/chriscoyier/pen/msItD/) by Chris Coyier ([@chriscoyier](http://codepen.io/chriscoyier)) on [CodePen](http://codepen.io/).</p>




<script async src="//assets.codepen.io/assets/embed/ei.js"></script>





## 结论




你看，使用 CSS 可以让任何元素实现居中效果。





###### 参考资料





	
  * [Vertical align anything with just 3 lines of CSS](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/)



