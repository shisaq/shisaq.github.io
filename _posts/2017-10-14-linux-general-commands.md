---
author: shisaq
comments: true
date: 2017-10-14 20:49:12+00:00
layout: post
title: Linux(Ubuntu)常用命令
categories:
- fullstack
---

## 基本命令

* `cd` 打开一个文件夹
* `pwd` 显示当前文件目录
* `ls` 显示当前文件夹的文件
* `ls -a` 显示当前文件夹包含隐藏文件在内的文件
* `touch` 新建文件
* `mkdir` 新建文件夹
* `cp` 复制文件/文件夹
* `mv` 重命名/剪切文件或文件夹
* `rm` 删除文件
* `rm -rf` 删除整个文件夹
* `cat` 显示当前文件内容
* `passwd` 修改密码
* `man` 查看一个命令的用法(manual)
* `su` 更换用户
* `shutdown -r now` 重启
* `shutdown -h now` 关机
* `adduser` 添加用户

## 特定命令

### SSH相关

* `ssh-keygen` 生成ssh公钥和密钥
* `ssh username/host (-p 1234)` ssh连接服务器
* `ssh-add -K file` 添加一个ssh key(-K为Mac系统将该key添加到钥匙串keychain的参数)
* `ssh-add -d file` 移除已经通过`ssh-add`添加过的ssh key

### `nano` 修改文件

1. `ctrl + o` 保存文件
2. `ctrl + x` 退出文件

### `chmod` 文件权限修改

以当前文件夹下的一个文件`example`为例：

`ls -al` 列出该文件夹下所有文件详细信息，每个文件前面都会有类似 `-rw-r--r--` 的权限说明。

`-rwxrw-r-- 1 owner group 220 Oct 12 23:32 example`

* 第一个如果是`-`，代表它是一个文件，如果是`d`，代表它是一个文件夹；
* `rwx`代表拥有者(owner)可以读(r)写(w)和执行(x，执行文件或打开文件夹)该文件；
* `rw-`代表特定用户组(group)可以读(r)写(w)该文件，但不能执行(x)该文件；
* `r--`代表所有人(everyone)只可以读(r)该文件，但不能写(w)或执行(x)该文件。
* `owner` 代表对应owner的名称
* `group` 代表所在group的名称

其中，r = 4, w = 2, x = 1。
所以example当前权限应该是：
owner: 4+2+1 = 7;
group: 4+2 = 6;
everyone: 4.
也就是`764`。

更多例子：

* `-rw-r--r--`: 644
* `-rwxrwxrwx`: 777
* `drwxr-xr-x`: 755
* `-rw-------`: 600

#### 更改owner或group

* `chown` 更改owner

 `chown otherowner filename`

* `chgrp` 更改组

 `chgrp othergroup filename`

### 安装文件

* `cat /etc/apt/sources.list` 查看目前安装过的文件
* `sudo apt-get install packagename` 安装文件
* `sudo apt-get update` 查看目前所有软件状态，但不会对当前系统有任何修改
* `sudo apt-get upgrade` 更新目前所有软件

### 防火墙(firewall)

* `sudo ufw status` 查看目前防火墙状态
* `sudo ufw default deny incoming` 把默认值改为拒绝接收任何端口的连接
* `sudo ufw default allow outgoing` 把默认值改为允许发出信息
* `sudo ufw allow ssh` 允许ssh连接
* `sudo ufw allow 2222/tcp` 允许连接2222端口
* `sudo ufw allow www` 允许基本http连接
* `sudo ufw enable` 开启防火墙

### vi编辑文件

[参考这篇文章](http://www.control-escape.com/linux/editing-vim.html)

### 服务器时间设置

`sudo dpkg-reconfigure tzdata`

信息保存在`/etc/timezone`下。

### apache服务器

* 重启 `sudo apache2ctl restart`
* 配置文件路径 `/etc/apache2/sites-enabled/000-default.conf`
* 错误日志 `sudo cat /var/log/apache2/error.log`

### virtualenvwrapper

* 切换并激活虚拟环境 `workon venvname`

python_home = '/home/grader/Envs/catalog/bin'

### 下载服务器的catalog.db文件到当前文件夹下
`scp -P 2200 grader@18.216.18.12:/home/grader/fsnd_catalog/tmp/catalog.db .`
