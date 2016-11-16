---
author: shisaq
comments: true
date: 2016-08-29 03:28:06+00:00
layout: post
link: http://shisaq.com/font-issues-about-ie-embedding-and-font-spider.html
slug: font-issues-about-ie-embedding-and-font-spider
title: Font Issues about IE Embedding and Font-Spider
wordpress_id: 206
categories:
- 前端学习笔记
---

Recently I tried to use a font family called futura , which is just in Mac system. While I opened IE to test, it was replaced.

I first tried [Font-Spider](http://font-spider.org), an awesome app with 2 major functions: font format transferring, font compressing.



 	
  1. My system is Mac OS X, and I've already had `npm`, `Grunt` and `Node.js`. So I followed the installation steps from [GitHub](https://github.com/aui/grunt-font-spider) (very clear steps);

[caption id="" align="aligncenter" width="398"]![configure](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160828_34.png) configure[/caption]

 	
  2. after installed, configured, I added some info into my CSS and Gruntfile.js;

 	
  3. I ran `grunt` in my terminal, the new, mini, related font family files with different kinds were created, contains `eot``, woff``,` `ttf` and `svg`. Nice!

[caption id="" align="aligncenter" width="388"]![success process](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160828_37.png) success process[/caption]

 	
  4. But then I found the new font was **NOT** like the original one. It's just a public font family, a little similar with `Helvetica` and `Arial`.

 	
  5. I tested a Chinese font, and it worked, that means both my configure and processes are right.

 	
  6. So I think Font-Spider **doesn't** support English fonts.


Actually, there is no need for Font-spider to support English fonts: their sizes are too small to pay attention. So I decided to load the original font file to make the compatibility work:
`@font-face {`
`font-family: 'futura';`
`src: url('../font/futura.ttf') format('truetype');`
`}`



 	
  1. I used `@font-face`  to embed the font source. But it seemed IE9 got some problem, it doesn't allow me to load.

[caption id="" align="aligncenter" width="921"]![ie9 error](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160828_33.png) ie9 error[/caption]

 	
  2. I got 2 articles to help me with this problem: [Make Adobe fonts work with CSS3 @font-face in IE9](http://stackoverflow.com/a/9885826/5769598), [CSS3114: @font-face 未能完成 OpenType 嵌入权限检查](http://blog.csdn.net/shore_w/article/details/8976188).

 	
  3. So I changed my code to this:
`@font-face {`
`font-family: 'futura';`
`src: url('../font/futura.eot');`
`src:`
`/* 此行是为了获取IE嵌入权限 */`
`url('../font/futura.eot?#iefix') format('embedded-opentype'),`
`/* 此行是为了嵌入正常ttf字体文件，供大多数浏览器使用 */`
`url('../font/futura.ttf') format('truetype');`
`}`

 	
  4. It works! IE9 successfully used the `futura` font! But it still threw an error on the `ttf` file.

 	
  5. Lastly, I put `eot` beyond `ttf`, then it works without error.
`@font-face {`
`font-family: 'futura';`
`src: url('../font/futura.eot');`
`src:`
`/* 此行是为了嵌入正常ttf字体文件，供大多数浏览器使用 */`
`url('../font/futura.ttf') format('truetype'),
/* 此行是为了获取IE嵌入权限 */
url('../font/futura.eot?#iefix') format('embedded-opentype');`
`}`


From these issues above, I come up with 2 conclusions:

 	
  1. In the future, Font-Spider will be a great partner to help me deal with Chinese fonts;

 	
  2. IE9 needs some special settings to make the embedded fonts work, and the setting should be appropriated among all fonts.


