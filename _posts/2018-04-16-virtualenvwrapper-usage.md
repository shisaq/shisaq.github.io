---
author: shisaq
comments: true
date: 2018-04-16 20:57:12+00:00
layout: post
title: 使用virtualenvwrapper管理虚拟环境
categories:
- fullstack
---

> virtualenv在我们运行项目的时候，帮我们方便地创建虚拟环境，是个神器。但如果同一台服务器中，运行的项目不止一个，如何做到在一个地方同一管理不同的虚拟环境呢？virtualenvwrapper绝对是一个好的选择。在这里整理一些好用的命令，方便日后使用。

## 安装virtualenvwrapper

[https://virtualenvwrapper.readthedocs.io/en/latest/](https://virtualenvwrapper.readthedocs.io/en/latest/)

可以从官方文档的Introduction中实现*安装、环境变量设置*：

```sh
$ pip install virtualenvwrapper
$ export WORKON_HOME=~/Envs
$ mkdir -p $WORKON_HOME
$ source /usr/local/bin/virtualenvwrapper.sh
```

## 好用的命令

* `$ mkvirtualenv foo` 创建名为`foo`的虚拟环境，并运行该虚拟环境
* `$ cdvirtualenv` 跳转到当前虚拟环境的目录下
* `$ workon` 列出所有已安装的虚拟环境
* `$ workon bar` 跳转到名为`bar`的虚拟环境下
* `$ deactivate` 退出当前虚拟环境
* `$ lssitepackages` 列出当前虚拟环境下所有已安装的包
* `$ cdsitepackages` 跳转到当前虚拟环境下所有安装包的目录
* `$ setvirtualenvproject` *设置当前文件夹为当前虚拟环境对应的项目根目录。设置完成后，每次我们`work on foo`，就会运行名为`foo`的虚拟环境，并跳转到该虚拟环境对应的项目根目录*

## 例子：在apache下用wsgi自动运行该虚拟环境

举个例子，比如我们已经在服务器中名为user的用户设置好virtualenvwrapper，那virtualenvwrapper的目录应为：

> `/home/user/Envs`

我们新建一个名为foo的virtualenv，则该虚拟环境的目录应为：

> `/home/user/Envs/foo`

我们把项目所在文件夹设为project，并放到当前用户名user下，则项目目录应为：

> `home/user/project`；

以ubuntu为例，Apache的配置文件在：/etc/apache2/sites-enabled/000-default.conf；我们在该配置文件中设置对应wsgi：

```
<VirtualHost *:80>
        ServerName example.com
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        WSGIScriptAlias / /var/www/html/bar.wsgi

        <Directory /home/user/project>
            Require all granted
        </Directory>
</VirtualHost>
```

成功设置了域名、文档根目录、wsgi路径及项目目录后，我们接着配置wsgi文件，使其运行虚拟环境，并运行我们的项目：

```python
# virtualenv的目录
python_home = '/home/user/Envs/foo'

# 运行该虚拟环境
activate_this = python_home + '/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

# 指定项目目录
import sys
sys.path.insert(0, '/home/user/project')

# 假定项目入口文件为application.py，则通过如下代码运行项目
from application import app as application
```

此时我们打开example.com，应该就可以看到我们的项目啦。如果有错误，可以通过如下命令查看错误日志：

> `$ sudo cat /var/log/apache2/error.log`

## 参考资料

* [Python Power Tools: virtualenvwrapper](https://www.youtube.com/watch?v=UcbUXq0wd-8)
* [Flask Working with Virtual Environments](http://flask.pocoo.org/docs/0.12/deploying/mod_wsgi/#working-with-virtual-environments)
