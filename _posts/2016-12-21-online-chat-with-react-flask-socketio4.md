---
author: shisaq
comments: true
date: 2016-12-21 9:47:33+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(四)
categories:
- 前端学习笔记
---

> 这一篇默认你已经本身自带Python技能，或者按照上一篇的描述，实际操作过“Y分钟入门Python”了。否则本文看起来会很吃力。
 
## 安装Flask

 * 打开[Flask官网](http://flask.pocoo.org/docs/0.11/)。简单浏览一下目录，知道Flask是Python下的一个框架(类似Vue是JavaScript的一个框架)即可。对它感兴趣的可以多研究研究文档，但是别忘了搭建在线聊天室才是首要目标。
 * 安装[Flask](http://flask.pocoo.org/docs/0.11/installation/#installation)。如果你更喜欢中文版文档，可以根据[这个](http://docs.jinkan.org/docs/flask/)。不过还是推荐英文版，至少在stack workflow搜答案的时候，中文实在是不管用。说一下macOS下的安装方法(Windows下记得浏览安装页面的底部，有专门的安装方法)：
  1. 先安装pip(Python的包管理器，类似JavaScript下的npm)，[网址附上](https://pip.pypa.io/en/stable/installing/)。通过该网址可以看出，一些新版本的Python已经自带了pip，只需要更新即可。如果没有，就运行：`python get-pip.py`。
  2. 安装virtualenv(也就是虚拟环境，确保你安装的文件和全局文件配置互不干扰)：`$ sudo pip install virtualenv`。
  3. 在你打算开始该项目的地方新建一个该项目的文件夹，安装vitualenv(上一步的虚拟环境)：

     ```
     $ mkdir myproject
     $ cd myproject
     $ virtualenv venv
     New python executable in venv/bin/python
     Installing setuptools, pip, wheel...done.
     ```

  此时再看你的项目文件夹，会发现一个新文件夹`/venv`躺在里面待命了。

  4. 此时运行virtualenv：`$ . venv/bin/activate`(Windows在这里可能有坑，虽然官网给的命令是`$ venv\scripts\activate`，但是你可以试试看，如果不奏效，试试这个`$ venv/Scripts/activate`，总之要找到正确的activate文件目录)。
  5. 在这个虚拟环境下安装Flask：`$ pip install Flask`。进度条读完，Flask安装完成。

## Flask基础配置

在项目根目录新建一个`myproject.py`文件(我自定义为`run.py`)，复制如下代码并保存：

```python
from flask import Flask
app = Flask(__name__)
    
@app.route('/')
def hello_world():
  return 'Hello, Chat Server!'
```

关于Flask的基础代码已经配置完成了。此时只需要告诉Flask这个文件是要运行的文件即可：

```
$ export FLASK_APP=run.py
$ flask run
 * Running on http://127.0.0.1:5000/
```

好了，打开Chrome，输入`localhost:5000`，Flask服务器搭建完成。

请自己做几个笔记，**在每次项目启动服务器的时候**，都要在终端运行刚才几个已经输入过的命令(由于多次输入，我已经可以背默了)：

* `. venv/bin/activate`
* `export FLASK_APP=run.py`
* `flask run`

## 可选操作

* 可以把上文的3个命令保存到`start.sh`文件中，每次赋予权限后，自动完成这几个命令。关于`sh`(shell script)文件的内容，我不展开说了，大家可以参考我[源码的写法](https://github.com/shisaq/chat-server/blob/master/run.sh)，或者自行研究[这里](http://linuxcommand.org/wss0010.php)。
* 可以考虑用`git`进行版本控制，提高GitHub活跃度的同时，也能自由自在修改代码，强烈推荐！

## 小结

我就这样从不认识Flask，到成功搭建Flask。虽然文章写得正常，文档也挺详细，但是毕竟是初识，难免会在某些地方卡壳。这都是正常现象，我在这种情况下会对自己说，别着急放弃，多给自己一些耐心。回过头来看，其实Flask也就安装配置好就基本完事了，重头戏还是在React。

下一篇文章我会结合一篇官方文档，分享Flask-SocketIO插件的用法。如果对我对写作风格有什么意见或建议，也欢迎指点。