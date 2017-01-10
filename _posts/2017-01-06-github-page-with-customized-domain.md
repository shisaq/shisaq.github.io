---
author: shisaq
comments: true
date: 2017-01-06 21:35:09+00:00
layout: post
title: GitHub博客自定义域名——从尝试到放弃
categories:
- frontend
---

> 记录一下我最近折腾GitHub自定义域名的过程。简单地说，一句话：鱼和熊掌不可得兼。

## 前言

我的博客最早是用Wordpress搭建的，当时买了域名和空间，shisaq.com。到现在刚好有一年了。不过期间接触到了GitHub的博客，4个特点：

 * 免费空间
 * 免费域名
 * markdown
 * https

这么多优势，让我不得不动心。于是在2016年，相当长的一段时间内，我都在同时用着2个博客。后来找到了一个方法，把Wordpress写过的文章全部导出，转译成markdown(参考[这篇文章](https://shisaq.github.io/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/2016/11/20/migrate-blog-from-wordpress-to-jekyll.html)，再也不用对原来的Wordpress博客有什么牵挂了。

## 目标

眼看主机空间到期了，我自然也没有续费的冲动——明摆着以后都要用GitHub博客了嘛。但是域名还是想留着，毕竟用了一年，而且自己英文名都是shisaq，所以还是更倾向shisaq.com，而不是GitHub强行给我的[shisaq.github.io](https://shisaq.github.io)。所以我的目标就是：

 * 用GitHub博客空间
 * 用shisaq.com的自定义域名
 * https小绿锁

## 尝试

有了目标，就分条实现吧。第一条我已经实现了，第二条参照[GitHub官方的说明](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/)，也很容易：

 1. 得到现在我GitHub博客的IP： `ping shisaq.github.io` ![](http://oj4a2ov8j.bkt.clouddn.com/pinggithub.png)
 2. 把我的域名解析设置成现在GitHub博客的IP(我用的阿里云的万网)：![](http://oj4a2ov8j.bkt.clouddn.com/dnschange.jpg)
 3. 在GitHub博客的仓库中点击`settings`: ![](http://oj4a2ov8j.bkt.clouddn.com/customdomaingithub.png)
 4. 在`Custom domain`选项中，填入我的域名shisaq.com，并保存。

## 结果

做完上面那几步，万网速度还是挺快的，从此我再打开shisaq.com，就是我的GitHub博客了。不过我惊奇地发现，小绿锁(https)没了！

又仔细看了看GitHub的文档，人家大概是说：你都不用我给你批的域名了，那我也不负责给你加锁了。你自己看着搞吧。

心想Chrome在2017年很快就要把没有小绿锁的网站标识为"不安全"了，我必须要争取这个小绿锁。

## 再尝试

2种思路：

 1. 申请一个免费https证书，然后安装到GitHub博客；
 2. 给GitHub博客找个婆家，婆家提供https，用户访问到婆家，就能有https了。

首先说方法1，一般的主机空间(cPanel / nginx／apache等等)都是可以安装https证书的，但是GitHub就是不支持。所以我折腾出了赛门铁克的1年免费证书后，发现白折腾了。。

方法2呢，就有点独特了。其实本身我不知道这个方法的。只是在Google"Github blog custmized domain https"时，发现了这样的方法。而这个婆家其实也没什么选择，目前找到的就是[cloudflare](https://www.cloudflare.com/)。他们提供的方法如下：

 1. 免费申请cloudflare账户；
 2. 把原来域名绑定的DNS解析换成他们要求的；
 3. 在设置中添加https，等待若干小时，解析和设置生效后，任务完成。

说实话这个方法挺不错的，因为它全程免费，让我用了GitHub博客的同时，设置了自定义域名，同时还给我加了一把小绿锁。我差点就高兴地吃饭去了。谁知——

## 结局

我国内的朋友反映：我的网站间歇性抽风了。如果情况良好，网络通畅，网站需要30秒左右才能加载出来。作为一个中文用户占很大比例的网站，实在是难以忍受。但是又没办法，cloudflare的免费DNS确实没有给国内优化，权衡利弊，我只能又放弃了这条路。

总结一下：

 1. 如果你想要GitHub博客+自定义域名+小绿锁，最好的方法是给cloudflare付费购买更可以优化的DNS；
 2. 如果你不在乎是否是GitHub博客，那最好是买个主机空间，再免费申请一个https证书，安装到主机空间后即可；
 3. 如果你又想要GitHub博客+自定义域名+小绿锁，还不想花钱，那就放弃国内的用户。

总之，要么交钱，要么放弃一些东西，至少目前，没有那么完美的事儿了。我最终放弃了自定义域名，改成了传统的GitHub博客，不需要购买任何东西，只是GitHub对百度收录支持不好。但好歹国内访问速度目前还不错，就先这样吧。放个https://shisaq.com小绿锁的截图，作个纪念。

![](http://oj4a2ov8j.bkt.clouddn.com/shisaqhttps.png)

写这篇文章给有不同需求，能接受不同段位的网站玩家，希望能有所帮助。如果你发现了更好的解决方案，欢迎给我留言。