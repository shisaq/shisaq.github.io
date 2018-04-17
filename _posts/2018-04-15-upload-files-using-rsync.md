---
author: shisaq
comments: true
date: 2018-04-15 15:47:12+00:00
layout: post
title: 使用rsync上传文件
categories:
- fullstack
---

> 亲测，rsync可以替代ftp服务了~速度杠杠的~

## 基本代码

`rsync options source destination`

* -v : verbose(显示详细信息)
* -r : copies data recursively (but don’t preserve timestamps and permission while transferring data)(递归传送文件，忽略时间戳和权限)
* -a : archive mode, archive mode allows copying files recursively and it also preserves symbolic links, file permissions, user & group ownerships and timestamps(上传附带时间戳和权限信息的完整文件)
* -z : compress file data(压缩文件数据)
* -h : human-readable, output numbers in a human-readable format(输出可阅读的格式)
* -e : 设定一个特殊的协议(如要设定端口号，则需要这一个参数)

## 例子

`rsync -rvze 'ssh -p 2222' --progress . user@1.2.3.4:/home/user/folder`

## 解释

1. ssh端口号为2222，以user为用户名，ssh连接到1.2.3.4服务器；
2. 传输当前文件夹的内容到服务器的/home/user/folder文件夹下；
3. 传输的文件忽略时间戳和权限信息，尽可能压缩文件数据，显示上传进度。

## 参考连接

[rsync local remote file synchronization commands](https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/)
