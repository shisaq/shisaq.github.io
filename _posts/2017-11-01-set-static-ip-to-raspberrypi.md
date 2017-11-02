---
author: shisaq
comments: true
date: 2017-11-01 21:31:13+00:00
layout: post
title: 给你的树莓派设置静态ip
categories:
- fullstack
---

> 本文只设置局域网的静态ip。公网ip可能需要用到花生壳，不过暂时还没有开始折腾，略过。

## 现状

1. 已经安装好树莓派，并连接到局域网；
2. 可以ssh到该树莓派。

## 步骤

1. ssh到树莓派。
2. `$ sudo nano /etc/dhcpcd.conf`
3. 将下列内容粘贴到文件底部：

```sh
# wired static ip
interface eth0

static ip_address=192.168.0.199/24
static routers=192.168.1.1
static domain_name_servers=75.75.75.75 75.75.76.76

# wireless static ip
interface wlan0

static ip_address=192.168.0.200/24
static routers=192.168.1.1
static domain_name_servers=75.75.75.75 75.75.76.76
```

`static ip_address`: 打算设置的静态ip地址(自己指定)。
`static routers`: 路由器的ip地址，请自行查一下自己的路由器(一般是192.168.0.1或192.168.1.1)或查看[这篇文章](https://www.lifewire.com/what-is-the-ip-address-of-a-broadband-router-818379)。
`static domain_name_servers`: DNS服务器地址(自己指定或使用现有DNS)。可参考[这篇文章](https://www.cs.cmu.edu/~help/networking/check-dns-settings.html)查询当前DNS。

4. `ctrl + O`保存该文件。
5. `ctrl + X`退出。
6. `$ sudo reboot`

重新ssh连接时，使用之前设定的静态ip地址即可。

## 参考

* [How to give your Raspberry Pi a Static IP Address](https://www.modmypi.com/blog/how-to-give-your-raspberry-pi-a-static-ip-address-update)
* [raspberry doc](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)
