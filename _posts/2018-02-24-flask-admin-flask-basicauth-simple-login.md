---
author: shisaq
comments: true
date: 2018-02-24 17:24:22+00:00
layout: post
title: Flask-BasicAuth简单登录Flask-admin后台
categories:
- fullstack
---

> 本文简单介绍了一个以[Flask-admin](https://flask-admin.readthedocs.io/en/latest/)作为后台、[Flask-BasicAuth](https://flask-basicauth.readthedocs.io/en/latest/)作为简单登录方式的例子。主要解决的问题是：**仅使用Flask-BasicAuth登录后台，而其他页面不需要登录即可查看**。

## 示例代码

<script src="https://gist.github.com/shisaq/37987bc31f140643c47905adcbc9e5b1.js"></script>

## 准备工作

安装flask/flask-admin/flask-basicauth/SQLAlchemy

```sh
$ pip install Flask
$ pip install Flask-Admin
$ pip install Flask-BasicAuth
$ pip install Flask-SQLAlchemy
$ pip install SQLAlchemy
```

## 运行项目

在项目根目录下创建`app.py`文件，把示例代码粘贴过来并运行：

`$ python app.py`

### 打开浏览器

无需登录即可访问localhost:8000

![index page](https://i.loli.net/2018/02/25/5a91f58535f3e.png)

### 打开admin后台

localhost:8000/admin，需要登录：

![admin login](https://i.loli.net/2018/02/25/5a91f584cce48.png)

输入后台设置的密码`username`和`password`，即可登录后台：

![admin page](https://i.loli.net/2018/02/25/5a91f584c828a.png)

### 退出登录

打开localhost:8000/logout

![log out](https://i.loli.net/2018/02/25/5a91f584178e0.png)

## 注意事项

* python2和python3版本的代码有所不同，主要是因为super()的用法不同。示例代码已涵盖python2和python3，如需python3，请注释掉python2。
* Flask-BasicAuth登录方式**不安全**，建议放在SSL下使用，或使用flask-login或flask-security。
* 使用wsgi和apache在服务器上运行时，需要在wsgi文件中添加`WSGIPassAuthorization On`，否则flask-basicauth会被apache忽略从而无法工作。

## 参考文章

* [Secure flask-admin using flask-basicauth](https://computableverse.com/blog/flask-admin-using-basicauth)
* [TypeError: super() takes at least 1 argument (0 given)](https://stackoverflow.com/a/38963433/5769598)
* [How to access Apache Basic Authentication user in Flask](https://stackoverflow.com/a/24128485/5769598)
