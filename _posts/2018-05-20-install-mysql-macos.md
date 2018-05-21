---
author: shisaq
comments: true
date: 2018-05-20 20:01:01+00:00
layout: post
title: 在macOS安装和配置mysql
categories:
- fullstack
---

> 本文为在macOS安装mysql的快速存档。

## 准备工作

* macOS
* [Homebrew](https://brew.sh/index_zh-cn)

## 安装与配置步骤

1. `$ brew install mysql // 使用Homebrew安装mysql`
2. `$ brew services list // 查看Homebrew正在运行的服务`
3. `$ brew services start mysql // 启动mysql`
4. `$ mysqladmin -u root password 'yourpassword' // 设置mysql登录密码为yourpassword。注意用单引号`
5. `$ mysql -uroot -p // 输入密码，即可在终端登录mysql`
6. 使用完毕后，可以：`$ brew services stop mysql // 停止mysql服务`

## mysql可视化工具推荐

* [Sequel Pro](http://www.sequelpro.com/)
