---
author: shisaq
comments: true
date: 2017-10-30 17:05:23+00:00
layout: post
title: 科学上网-AWS和Shadowsocks给你自由
categories:
- fullstack
---

> 本文主要分享的是ubuntu 16.04下安装shadowsocks并配置运行的过程。

## 准备工作

1. 一个绑定了信用卡的AWS账号
2. 一台能打开终端、能上网的电脑

## 服务器选择

新建一个AWS的服务器实例。有各种各样的可选方案，我这里推荐AWS新出的的lightsail轻量级VPS，每个月$5：[https://lightsail.aws.amazon.com](https://lightsail.aws.amazon.com/)。

要点：

 * 保证是海外服务器
 * 安装ubuntu系统(14和16都可以)

![ubuntu](https://i.loli.net/2017/11/01/59f912ff110a3.png)

实例建好了以后，打开lightsail的首页，类似这样：

![实例截图](https://i.loli.net/2017/11/01/59f90f9bd2e3e.png)

_注：选择其他空间商也可以，安装ubuntu即可。推荐[vultr](https://www.vultr.com/?ref=7244667)， [Digital Ocean](https://www.digitalocean.com/)和[Linode](https://www.linode.com/)。_

## 系统基础配置

点击Networking，在public IP下方点击`create static IP`按钮，生成一个静态IP，并绑定到当前实例：

![静态ip](https://i.loli.net/2017/11/01/59f913388def0.png)

同样在Networking里，在防火墙(Firewall)开放shadowsocks端口(可在0-65535之间自选一个，建议大于8000)：

![port](https://i.loli.net/2017/11/01/59f91445e754f.png)

(可选)配置SSH登录：

如果感兴趣，可以看[这篇文章](https://shisaq.github.io/fullstack/2017/09/14/how-to-setup-cpanel-ssh.html)。如果赶时间，可以用AWS提供的SSH登录：

![ssh login](https://i.loli.net/2017/11/01/59f9162890265.png)

## 安装shadowsocks

参考shadowsocks[官方文档](https://github.com/shadowsocks/shadowsocks/wiki/Shadowsocks-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)。

确保ssh连接了服务器后，在终端安装shadowsocks(如果不是超级用户，记得在前面加上sudo)：

`$ apt-get update`

`$ apt-get upgrade`

`$ apt-get install python-pip`

`$ pip install shadowsocks`

## 查看帮助

`$ ssserver --help`

## 配置shadowsocks

新建配置文件`$ /etc/shadowsocks.json`。举例：

```javascript
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"mypassword",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

有2点要注意：

1. "server_port"是刚才在防火墙设置的端口号；
2. "server"写`0.0.0.0`。

以上需要一些Linux基本操作：

 * 新建文件： `$ touch filename.json`
 * 修改文件： `$ nano filename.json`
 * 保存文件(在nano打开该文件后)：`ctrl + O`
 * 退出文件(在保存后)： `ctrl + X`

## 后台启动shadowsocks

`$ ssserver -c /etc/shadowsocks.json -d start`

## 查看是否已经启动(假设端口号是8388)

`$ netstat -an | grep 8388`

如果已启动，会有如下结果：

```bash
tcp        0      0 0.0.0.0:8388            0.0.0.0:*               LISTEN
udp        0      0 0.0.0.0:8388            0.0.0.0:*
```

## 设置非root用户运行ss

```bash
$ sudo useradd ssuser // 添加一个ssuser用户
$ sudo ssserver [other options] --user ssuser // 用ssuser启动shadowsocks
```

## 把shadowsocks设置为开机启动

编辑`/etc/rc.local`文件，在末尾的`exit 0`之前添加如下命令行：

`ssserver -c /etc/shadowsocks.json -d start --user ssuser`

*至此，服务器端配置完成。*

## 下载客户端

[链接](https://sourceforge.net/projects/shadowsocksgui/files/dist/)

打开客户端，新建一个shadowsocks，把之前的配置信息写进去，然后把协议改为系统PAC(只把shadowsocks用在需要翻墙的网站)，就可以科学上网啦。

## 踩坑

* 由于自己是用ufw手动配置的防火墙，当时在防火墙运行的状态又添加的shadowsocks端口，一直没有起作用。后来才知道，需要重启一下防火墙：`$ sudo ufw reload`。
* server要写成`0.0.0.0`而不是公网IP。参考[这篇文章](https://github.com/shadowsocks/shadowsocks/issues/298)。
* 如果遇到了不科学的上网状况，可以查看错误日志：`$ cat /var/log/shadowsocks.log`。

## 感谢

[shadowsocks](https://shadowsocks.org/)
[shadowsocks折腾记](https://thief.one/2017/02/22/Shadowsocks%E6%8A%98%E8%85%BE%E8%AE%B0/)
