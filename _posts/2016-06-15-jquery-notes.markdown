---
author: shisaq
comments: true
date: 2016-06-15 19:51:17+00:00
layout: post
link: http://shisaq.com/jquery-notes.html
slug: jquery-notes
title: jQuery Notes
wordpress_id: 182
categories:
- 前端学习笔记
---

I've learned "Intro to jQuery" in Udacity. Here is the link: [Intro to jQuery](https://www.udacity.com/course/intro-to-jquery--ud245).


## What I've learned





 	
  1. jQuery is a function as well as an object. It's a JavaScript library.

 	
  2. $ === jQuery.

 	
  3. `$(string)` or `$(function)` or `$(DOM Element)`

 	
  4. 3 ways to load jQuery:
1. local file;  `// <script src="js/jquery.js"></script>`
2. [jQuery official](http://code.jquery.com/);  `// <script src="http://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>`
3. [Content Delivery Network](http://jquery.com/download/#using-jquery-with-a-cdn)(CDN), such as Google, Microsoft and so on. Or some [Chinese friendly](http://www.bootcdn.cn/): `// <script src="//cdn.bootcss.com/jquery/3.0.0/core.js"></script>`

 	
  5. jQuery Selector: `$('tag')` `$('.class')` `$('#ID')`

 	
  6. `$('#shisaq').parent()` // chose the element who is the first level of #shisaq's parent. 选择它上一级的元素
`$('#shisaq').parents()` // chose all the elements who is the parent of #shisaq. We can specify a parent that we want, to add it into the parenthesis. 选择它的所有父级。可在括号中指定具体父级元素
`$('#shisaq').children()` // chose it's closest children. 选择它的直接下一级
`$('#shisaq').find()` // chose all the children of #shisaq, or, if there is a specify element inside the parenthesis, we chose that one. 选择所有子元素。可在括号中指定具体子元素
`$('#shisaq').siblings()` // chose brothers and sisters. 选择平级元素

 	
  7. [`.addClass()`](http://api.jquery.com/addClass/):
1. add a class name into a tag or a property. 括号里是假如的class名称。 e.g: `$('body').addClass('blue'); // <body class="blue"></body>
`2. We can add a function inside the parenthesis. But the function must return a string so that the string can be added as a class. 我们可以在括号里加入一个function。此function必须返回一个字符串，以便此字符串可以作为一个class名称加入

 	
  8. [.toggleClass()](http://api.jquery.com/toggleClass/) :
Switch class. Cut the class if there exists; Add it if there is no. 切换class。如果有，就去掉；如果没有就加上。
e.g: `$('blue').toggleClass();
`We can also add parameters into the second parenthesis:
1. `$('#shisaq').toggleClass(className, addOrRemove);`
is equal to:
`if (addOrRemove) {`
`  $('#shisaq').addClass(className);`
`} else {`
`  $('#shisaq').removeClass(className);`
`}`
2. Add function:
`$('#shisaq').toggleClass(function() {`
`  if ( $(this).parent().is("nav") {`
`    return "happy";`
`  } else {`
`    return "sad";`
`  }` // This will make a judgement on whether `#shisaq`'s parent is `nav` . If it is, add class "happy" to `#shisaq`; If not, add "sad". 判断shisaq的父元素是否是nav。如果是，加上happy给shisaq；如果不是，加sad给shisaq。

 	
  9. [`.next()`](http://api.jquery.com/next/) :
Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector. 获取下一个平级（兄弟）元素。如果括号中有提供一个元素，则选中下一个可以匹配此内容的元素。





`<ul>`










`<li>list item 1</li>`










`<li>list item 2</li>`










`<li class="third-item">list item 3</li>`










`<li>list item 4</li>`










`<li>list item 5</li>`










`</ul>`





If we begin at the third item, we can find the element which comes just after it:


`$( "li.third-item" ).next().css( "background-color", "red" );`


 	
  10. [`.attr()`](http://api.jquery.com/attr/) :
Get the value of the selected element, or change the value into other.
`$('.shisaq').attr('href');` // get the value of href in .shisaq 返回在shisaq中href的值
`$('.shisaq').attr('href', 'yeah');` // change the value of href into "yeah" 把shisaq的href的值改为“yeah”

 	
  11. [`.css()`](http://api.jquery.com/css/) :
Similar with `.attr()` ,  but it adds values into `style`. 和`attr()`类似，不过它是向`style`里添加内容

 	
  12. [`.html()`](http://api.jquery.com/html/) and [`.text()`](http://api.jquery.com/text/) :
`.html()` returns the whole html, yet `.text()` returns the content inside the html. `.html()`返回选中元素的整个html，`.text()`返回选中元素的html里的内容

 	
  13. [`.val()`](http://api.jquery.com/val/) :
get the value of the selected element 取选中元素的值

 	
  14. `[.remove()](http://api.jquery.com/remove/)` :
Remove the selected element from the DOM.
e.g: `$('nav').remove();` // remove the nav 移除nav
`$('nav').remove('li');` // remove all the li in the nav. 移除所有在nav里面的li

 	
  15. [`.append()`](http://api.jquery.com/append/) and [`.prepend()`](http://api.jquery.com/prepend/) :
`.append()`(`.prepend()`) inserts content to the end(beginning) of the selected element 在选中元素的末尾（prepend是开头）加入括号中的内容

 	
  16. [`.insertAfter()`](http://api.jquery.com/insertAfter/) and [`.insertBefore()`](http://api.jquery.com/insertBefore/) :
`$( "<p>Test</p>" ).insertAfter( ".inner" );` // insert `<p>Test</p>` after every `.inner` class. 在每一个`inner`后面加入`<p>Test</p>`代码段

 	
  17. [.click()](http://api.jquery.com/click/) :
A function will execute after clicked the selected element. 括号中的function会在被选中的元素被鼠标点击时执行。
e.g: `$("#target").click(function() {`





` alert("Hello world!");`










`}); // after clicked the #target element, the alert window will show.
// 点击#target元素后，alert窗口会弹出`







