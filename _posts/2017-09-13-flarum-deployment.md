---
author: shisaq
comments: true
date: 2017-09-13 15:57:41+00:00
layout: post
title: 用Flarum搭建尤克里里轻论坛
categories:
- fullstack
---

> 前段时间想要开始做自己的个人品牌了。想想自己的技能树：歌手、尤克里里老师、视频剪辑师、摄像师、导演、演员、设计师、前端工程师、全栈工程师、作家... 能把这些都串起来的，就是围绕`尤克里里`来玩了。我有一个微信公众号：`优客李李`，所以就打算以此为基石，做一个汇集网站、论坛、公众号、app(未来)、直播(待定)的多平台乐园。我知道目前其实最缺的还是稳定输出的内容，但先搭好平台也没什么坏处呀。这样内容就可以在这平台的基础上快活地与世界连接了。所以这篇文章就是在我购买了一个[域名](https://uulili.com)和[空间](https://fastcomet.com)，并搭建了一个简单的Wordpress后，开始折腾的事情了。

## Flarum

[Flarum](http://flarum.org/)这个论坛框架是我近期调查很久最终选定的。它有如下几个特点：

 1. 好看，简洁；
 2. 基于php运行环境；
 3. 新颖，不会有太多垃圾机器人造访；
 4. 测试版，所以会有不少漏洞；
 5. 中文SEO优化不友好。

本来想用更成熟的框架[Discourse](https://www.discourse.org/)的，但它运行环境是Ruby on Rails，想要在php环境下运行的话，可能还需要折腾一阵子(比如装个Docker？)，另一方面个人觉得Flarum比Doscourse更好看一点。

## 准备工作

### Mac系统或Windows+Putty

这里示范的是Mac系统的操作。只要顺利配置好ssh，之后其实没有什么区别。

### 有一个运行apache, MySQL和php的空间

我是在fastcomet购买的空间，每月$2.95，还能赠送域名，性价比挺好的。由于是共享空间，fastcomet自动帮我做了一些基本配置如下：

| 名称                 | 版本            |
| -------------------- | -------------- |
| cPanel               | 66.0(build 19) |
| Apache               | 2.2.31         |
| PHP                  | 5.5.37         |
| MySQL                | 5.6.37         |

### 配置ssh登录

在cPanel后台的搜索框中键入`ssh`，就能找到：

![ssh access](https://i.loli.net/2017/09/15/59bae68387609.png)

具体配置过程，我写了另一篇文章[如何配合cPanel使用SSH免密登录](/fullstack/2017/09/14/how-to-setup-cpanel-ssh.html)。

### 配置子域名

以我的子域名[forum.uulili.com](https://forum.uulili.com)为例：

1. 在cPanel配置域名地址及对应文件夹目录，这里注意，要把forum对应的文件夹放到`public_html`目录下，否则会安装失败。此乃一坑。

![cpanel subdomain](https://i.loli.net/2017/09/15/59baaf411bb07.png)

2. 在域名商/云解析提供商(具体看你用的namespace是哪家。我的域名商是Godaddy，但我用了DNSPOD做云解析，所以就在DNSPOS配置)配置子域名解析，增加一条A记录，名称是`forum`，记录值和主页记录值一样即可。

![parse subdomain](https://i.loli.net/2017/09/15/59baafc7dfa26.png)

## 安装Flarum

好了，做完这些准备工作，就可以开始安装Flarum了。这里附上步骤，你也可以去[http://flarum.org/docs/installation/](http://flarum.org/docs/installation/)参考官方文档安装。你也可以[安装中文版](http://flarum.org.cn/docs/using/installation.html)，可以适当省去一些麻烦，比如语言包、搜索语言等。

1. 打开终端，ssh连接服务器
2. `$ mkdir composer && cd composer // 在根目录创建composer文件夹并进入`
3. 安装composer

```sh
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

4. `$ cd ../public_html && mkdir forum && cd forum // 回到public_html文件夹，创建论坛文件夹forum，并进入`
5. `$ composer create-project flarum/flarum . --stability=beta // 安装Flarum`
6. 添加如下代码到`.htaccess`文件，并保证父目录的`.htaccess`权限设置与之不冲突：

```php
<Directory "/path/to/your/forum">
    AllowOverride All
</Directory>
```

7. 此时打开`forum.yourdomain.com`就应该出现Flarum的服务器配置界面了。

## 遇到问题怎么办

如果安装过程中，遇到问题，请尝试以下3种方法：

1. `$ chmod 755 ./public_html/forum`, `$ chmod 644 ./public_html/forum/index.php`更改forum文件夹及index.php的读取和写入权限(可能也需要更改admin.php及api.php的权限，方法同index.php一样)；
2. 去[installation tag](https://discuss.flarum.org/t/installation)或[求助区](http://discuss.flarum.org.cn/t/support)搜索或提问；
3. 在Apache错误日志或Flarum错误日志查询错误信息，然后去Google。这里放几个可能会有用的链接：

### apache error log
`$ cat /usr/local/apache/logs/error_log`

### php config
`$ sudo nano /usr/local/lib/php.ini`

### grand permission of folder and all files to a user
`$ chown -R username /path/to/folder/`

### apache system config
`$ sudo nano /etc/httpd/conf/httpd.conf`
### apache user config
`$ sudo nano /etc/httpd/conf.d/userdir.conf`

## 安装插件

Flarum之所以是个轻论坛，就是因为它除了基本的论坛功能，没有其他功能。如果想要其他功能，我们可以尝试[寻找现有插件](https://github.com/moutonnoireu/flarumextlist/wiki/Extension-List)，或自行开发。截至目前(Flarumv0.1.0-beta.7)，新的插件安装都需要用composer完成。所以先普及一个基础知识：**在论坛文件夹(我的是`public_html/forum`)下运行composer命令。**

### 举例

如果我的论坛文件夹是`public_html`下的`forum`，我想安装简体中文的语言包：

`$ cd public_html/forum`

`$ composer require jsthon/flarum-ext-simplified-chinese`

### 推荐插件

* Akismet 抵挡垃圾信息侵入。 (系统自带，需要自行配置)
* [Image Header](https://discuss.flarum.org/d/2679-image-header) 在导航条设置背景图片
* [Custom Footer](https://discuss.flarum.org/d/2926-davis-custom-footer) 自定义添加页脚。
* [Google Login](https://discuss.flarum.org/d/3117-google-oauth-plugin)
* Github Login 系统自带，需要自行配置
* Facebook Login 系统自带，需要自行配置
* [微信登录](https://github.com/stanleysong/flarum-ext-auth-wechat)
* [Markdown Editor](https://github.com/ganuonglachanh/flarum-ext-markdown-editor)
* [emoji picker](https://github.com/clarkwinkelmann/flarum-ext-emojionearea)
* [视频自动插入](https://github.com/s9e/flarum-ext-mediaembed)
