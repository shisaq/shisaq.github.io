---
author: shisaq
comments: true
date: 2016-12-22 16:17:13+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(五)
categories:
- 前端学习笔记
---

> 通过上一篇文章，我们已经部署了Flask本地服务器环境，这一篇文章主要谈谈我当时在学习SocketIO时的思路。

## 阅读本文所需技能点

 * Python已经入门
 * Flask环境已经搭建完毕
 * HTML和jQuery基础知识

## SocketIO简介

这种知识随便Google一下就能有一火车皮。我用自己的语言简单介绍一下，欲知详情请自行Google。

Socket是“插座”的意思，但是这里我们最好把它理解为宽带网。大家都知道POST吧，把一段数据发送到服务器，服务器接收到数据，经过处理后，得到另一段数据。所以POST就相当于快递员，每次你都要把信给他，让他带给服务器才行。每次都得找快递员送信，效率自然不高。

SocketIO就是一个宽带网，你以后写信不需要再用快递员了，直接有一个专门的绿色通道，一直监控你的状态。只要你发信件，它就第一时间拿到，并超光速发送给服务器。

结合到我们这个项目可以看出，聊天室的本质就是实时通信。能够实时看到对方发出的信息，就多亏了这样一个绿色通道：SocketIO。

## 准备阶段

其实我当时在部署完Flask后，第一个感觉是心里不踏实，因为万里长征只开始了第一步，Flask到底要学到什么程度，我是一点都不知道。这时候就面临一个抉择：**直接上手SocketIO还是继续啃Flask官方文档？**

我心想，这SocketIO终究是要部署到Flask上的，我要学的关于Flask的东西也就应该只是怎么部署SocketIO。所幸需求文档中有这样[一篇教程](https://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent)，是用Flask-SocketIO插件的使用方法。于是能达到我的目的的事情就明确了：啃掉这篇Flask-SocketIO插件的教程。期间遇到什么坑就填什么坑好了。

## 配置Flask-SocketIO

首先启动Flask服务器，还记得那3个步骤吗？

* `$ . venv/bin/activate`
* `$ export FLASK_APP=run.py`
* `$ flask run`

然后，用pip安装Flask-SocketIO（跟npm安装插件感觉很像）：`$ pip install flask-socketio`

接下来，首次接触Flask-SocketIO，自然有大片不懂的东西了。先复制粘贴教程中的关键代码吧！打开`run.py`，把如下代码放进去：

```python
from flask import Flask, render_template
from flask.ext.socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('my event', namespace='/test')
def test_message(message):
    emit('my response', {'data': message['data']})

@socketio.on('my broadcast event', namespace='/test')
def test_message(message):
    emit('my response', {'data': message['data']}, broadcast=True)

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app)
```

 不知你注意到没有，我们原有在`run.py`里的代码跟上面的代码有一些类似的部分：

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Chat Server!'
```

简单介绍一下，`from flask import Flask`就是引入Flask；`app = Flask(__name__)`就是初始化。这里由于要用Flask-SocketIO，所以初始化的方法更新了：

```python
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)
...
if __name__ == '__main__':
    socketio.run(app)
```

那么，把原有初始化的方法替换掉，我们就成功配置了Flask-SocketIO。接下来注意，最开始我们只是在`def index():`下return了一句简单的字符串，现在要return一个html文件了。**这个文件要放在`./templates/`目录下**(这里涉及到一丢丢jinja2的知识，要知道jinja2是包含在Flask中的。不过不用了解那么多，在项目根目录新建一个文件夹`templates`，把`index.html`放那里即可)。

## index与jQuery配置

关于SocketIO的核心代码如下：

```javascript
$(document).ready(function(){
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    socket.on('my response', function(msg) {
        $('#log').append('<p>Received: ' + msg.data + '</p>');
    });
    $('form#emit').submit(function(event) {
        socket.emit('my event', {data: $('#emit_data').val()});
        return false;
    });
    $('form#broadcast').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
        return false;
    });
});
```

在index.html中，我们当然还需要做如下2点：
 1. 构建基础HTML(表单与id要与上文代码中对应起来)；
 2. 添加CDN，包括jQuery和socket.io。

## jQuery是弯路

回头看看，我尝试用jQuery那一段其实没有必要，因为后来我要用到的React是组件化思维，index.html里什么都不会放。但是在这一步，我主要把socketIO的工作方式跟大家分享一下：

 * `@socketio.on('connect')`：这是个python的装饰器。名词不重要，重要的是这句代码代表**当socketIO连接的时候**，接下来会发生的事情。
 * `@socketio.on('my event')`：`connect`是默认事件，但是我们也可以自定义事件。这句代码就是接到了名为`my event`的事件。
 * `emit('my response', {'data': 'Connected'})`：后端发射一个事件，并把一个数据包一起发送出去。前端定义接收事件的方法：`socket.on('my response, function(data) {console.log(data)};`这样就实现了前后端的互动。

## 归纳

总结来说，流程是这样的：

 * 前端在socketIO连接成功时，发送给后端数据；后端收到数据后，给出反馈。
 * 前端在用户作出某个动作时，发送给后端数据，后端收到数据后，给出反馈。
 * 发送数据是`emit()`，前后端只是具体写法不同，但功能相同。
 * 接收数据是`socket.on()`，前后端只是具体写法不同，但功能相同。

打开Chrome dev tools，如果socket尝试连接，但连接失败，控制台会持续报错；如果连接成功，那就根据我们的调试方法实现功能吧。

希望你能顺利部署socketIO。中间的坑会有很多，如有疑问，欢迎关注我的微信公众号跟我互动：shisaquan。