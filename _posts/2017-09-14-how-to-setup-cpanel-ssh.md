---
author: shisaq
comments: true
date: 2017-09-14 16:48:11+00:00
layout: post
title: 如何配合cPanel使用SSH免密登录
categories:
- fullstack
---

> 前几天在[搭建自己尤克里里论坛](/fullstack/2017/09/13/flarum-deployment.html)的时候，遇到了ssh登录远程主机进行操作的需求。从完全没接触过，到开始掌握，差了一次实践和一次总结。实践已经做完，现在是时候总结一下了。这篇文章不写能直接Google到的内容，只写我自己的理解。

## 什么是ssh

ssh是帮助我们安全地连接服务器的一种验证技术。如果想详细了解，有2篇文章可以读一读：

* [SSH原理与运用（一）：远程登录](http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)
* [图解SSH原理](http://www.jianshu.com/p/33461b619d53)

## 为什么需要使用ssh

因为我需要连接我的Linux服务器，而Linux服务器一般都是命令行操作，我们很多时候都需要直接通过命令行运行一些代码，比如修改权限、安装脚本、对文件增删查改等。这时候我就不能用ftp这种办法操作了，最好的办法就是ssh。

## ssh原理

这里有2个术语：公钥、私钥。不得不承认，第一眼看过去还是比较发懵的。连`钥`字都不知道该怎么读。但想要用ssh，这哥俩还是必须认识一下的。

### 公钥

是一个保存在服务器上的、可以解密字符串的“门岗老大爷”(以下简称老大爷)。有了他的帮助，我们可以在收到一个想进门的用户请求后，发给他一个随机字符串，然后等着接收他加密后的字符串。收到之后，老大爷就用公钥把该字符串解密，得到一个新的字符串。最后，把这个字符串和自己曾经发送出去的字符串做个检查，如果一样，就让这个用户进门了。

### 私钥

是一个保存在用户手里的“钥匙”。这个钥匙可以把老大爷发过来的字符串加密，并返回给老大爷。如果你钥匙上面的齿不对，那加密的字符串也不会对，从而就会被老大爷挡在门外了。

## 创建ssh

通过上面的描述，我们不难发现：公钥和私钥是有某种神秘联系的；换句话说，是配对的。那我们该如何生成并使用它们呢？答案是：用`ssh-keygen`。这是一个Linux命令，Mac也自带。使用方法就是打开终端：

`$ ssh-keygen`

接下来根据提示，ssh会要求你填一些必要的信息，包括：

* 保存ssh key的文件路径及文件名(默认保存在 /home/username/.ssh/id_rsa)
* 密码短语(给你的ssh再加个密码，防止有人拿到了你的ssh偷偷使用)

如果你不自定义路径和文件名，输入完成后，就会生成如下2个文件：

* id_rsa(这个就是私钥)
* id_rsa.pub(这个就是公钥)

想了解更多信息，可以看[这个链接](https://www.ssh.com/ssh/keygen/)。

## cPanel

其实cPanel只是帮我们创建了ssh，并把门岗老大爷(公钥)妥善放到了服务器的相应位置。这是步骤：

1. 打开cPanel后台，找到ssh ![ssh tool](https://i.loli.net/2017/09/15/59bb19163ca51.png)

2. 生成一组ssh key ![generate key](https://i.loli.net/2017/09/15/59bb193278288.png) _请注意_，这里在设置的password，就是我们要安装私钥时使用的passphrase。 ![passphrase](https://i.loli.net/2017/09/15/59bb199da14be.png)

3. 如果顺利生成，则会出现类似下图所示 ![successfully generated](https://i.loli.net/2017/09/15/59bb1a19919e0.png)

4. 让门岗老大爷开始干活(让ssh公钥生效) ![authorize ssh](https://i.loli.net/2017/09/15/59bb1d054772e.png)

这时cPanel已经成功帮我们生成了ssh，把它们放在了妥善位置，并已经生效。

## 公钥登录

如果你顺利做到这里，其实已经可以通过服务器配置好的公钥和你在服务器的用户名进行ssh登录了，格式如下：

`$ ssh username@domain.com`

如果有特定的端口，则需要按如下格式填写：

`$ ssh username@domain.com -p11111`

通过调查我的空间商fastcomet开放的ssh端口，我了解到我要用的端口是17177。如果你不清楚端口，可以联系你的空间商。

## 配置私钥

通过公钥登录，我们可以顺利实现ssh登录远程服务器。但是每次都像这样输入用户名和密码登录，未免有点复杂；特别是你用了复杂密码的时候。实际上，服务器密码肯定需要复杂密码的。这时候就应该请私钥出场了。

* 从cPanel下载我们需要的私钥
* 用终端打开私钥所在文件夹，添加到本地的ssh-agent中，并保存到钥匙串：

 `$ ssh-add -K id_rsa`

 `ssh-add`可以帮我们添加私钥；`-K`保存到钥匙串；`id_rsa`是我们私钥的文件名。

* 根据提示，我们需要输入passphrase。请输入我们之前在生成ssh的时候设置的password。

如果没有意外，此时私钥已经成功安装到本地了。具体位置一般在 `/home/username/.ssh`下。这时候就可以**免密码直接登录远程服务器啦**！

`$ ssh username@domain.com`

## 优化

真是不容易。当然我们还可以继续简化一下。比如说我用的是iTerm终端和.zshrc配置文件，我就可以打开.zshrc文件，为上面这个ssh增加一个别名：

`alias uulili="ssh username@domain.com -p17177"`

这样，以后我只要在终端输入：

`uulili`

就可以顺利登入远程服务器愉快地操作啦！

## 已知错误及解决办法

在安装私钥的时候(`$ ssh-add -K id_rsa`)，系统提示：

```
Permissions 0777 for '/Users/username/.ssh/id_rsa' are too open.
It is recommended that your private key files are NOT accessible by others.
This private key will be ignored.
```

这是因为我们从cPanel上下载的id_rsa文件读写权限被放得太公开。我们需要做的是更改读写权限：

`$ chmod 400 id_rsa`

你也可以事先通过`stat`命令查看id_rsa的当前权限。Mac/Linux/Win具体命令不太一样，所以还是Google去吧。

如果想了解更多，可以查看stackoverflow的[这篇文章](https://stackoverflow.com/a/9270753/5769598)。

(全文完)
