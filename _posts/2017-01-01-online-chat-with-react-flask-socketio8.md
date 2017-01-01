---
author: shisaq
comments: true
date: 2017-01-01 09:25:06+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(八)
categories:
- 前端学习笔记
---

> 在React的世界，初学的时候总是会遇到一些新奇的名词：Flux，Redux等。因为React并不是一个完整的前端框架，它只是一个可以创建虚拟DOM的View层。所以要想实现完整的前端框架，它就需要一些朋友帮忙，一个典型的框架就是Backbone。不过Flux和Redux这样的朋友是Facebook自己推出的，这篇文章主要介绍一下[Flux](https://facebook.github.io/flux/)这个朋友。这个在线聊天室就是根据Flux的思想架构起来的。理解了它，你就会发现`js`文件夹下的文件结构很清晰了。

## 什么是Flux

引用Flux官网的说法：

> Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

意译过来就是：

> Flux是Facebook出品的，用来构建前端结构的工具。它利用单项数据流实现和React组件的无缝对接。说它是工具，但其实它只是一种模式，没必要对它产生恐惧，因为它基本没有什么新的代码。

## 解读

当然了，光听Facebook这么安抚，我们是不会立即消退对新事物对恐惧感的，上一张图可能更容易理解它：

![](http://7xpx1z.com1.z0.glb.clouddn.com/fjlux.png)

从上图可以看出，Flux就是一个`组件-动作-调度-存储-组件`的单向数据循环：

 * 一个组件只负责监听和启动动作(Actions)，并从存储(Stores)中读取数据并更新。
 * 无论什么动作，都发送给调度员(Dispatcher)。
 * 调度员(Dispatcher)统一调配，发给需要的存储(Stores)。
 * 存储(Stores)只负责接收调度员发过来的匹配的信息，更新数据，发给它管辖的组件。

通过这种方法，Flux给了我们这样一个调度员，我们就不用再劳神在组件中管理数据的存取了，只需要把数据发送给调度员即可。

## 回顾文件结构

这时候，再来看在线聊天室的`js`文件夹，你会发现：

 * 调度员(Dospatcher)在`js`文件夹的根目录，方便所有组件、动作和存储调用；
 * 组件、动作和存储分别被放入对应的文件夹，保持结构的整洁；
 * 每一个组件对应的动作和存储，都会以相同文件名关联起来，方便我们调试、搜索和维护(如`Rooms.js`组件对应的动作文件是`RoomsActions.js`，对应的存储文件是`RoomsStore.js`)。![](http://7xpx1z.com1.z0.glb.clouddn.com/fluxrelationship.png)

## 安装与配置Flux

有了Flux提供的调度员这个好帮手，我们要做的就是：

 * 用npm安装它：`npm i -S flux`
 * 在js根目录创建一个`dispatcher.js`文件，复制粘贴如下代码并保存：

```javascript
import { Dispatcher } from 'flux';

export default new Dispatcher;
```

## 实例

现在我们已经了解了Flux，并成功安装了它，但是它究竟是如何运行的呢？我还是把`Rooms`的组件、动作与存储拿出来做个说明：

首先我们已经有了`Rooms.js`组件：[https://github.com/shisaq/chat-server/blob/master/static/js/components/Rooms.js](https://github.com/shisaq/chat-server/blob/master/static/js/components/Rooms.js)

注意看它的`constructor`，在20行关于State的代码：

```javascript
constructor() {
    super();
    this.state = {
        rooms: RoomsStore.getAll()
    };
}
```

我们在这里把`Rooms`组件的数据托管到了`RoomsStore.js`中。在`RoomsStore`内部：

```javascript
constructor() {
    super();
    this.rooms = [];
}

getAll() {
    return this.rooms;
}
```

这样就实现了通过在`RoomsStore`中添加所需的function管理数据，进而更新到`Rooms`组件中。

这里有几点要注意：

 1. `Rooms`组件既然要使用`RoomsStore`，就不要忘记在头部引入：`import RoomsStore from '../stores/RoomsStore';`
 2. `RoomsStore`既然要被调度员管理，就要引入调度员：`import dispatcher from '../dispatcher';`
 3. `RoomsStore`发送和监听数据是靠`EventEmitter`实现的，所以记得先引入`EventEmitter`：`import { EventEmitter } from 'events';`

### 关于EventEmitter

[EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)是Node.js下的东西，我们已经安装了npm，所以Node.js也早就有了。不需要安装额外的东西。它的主要作用就是：

从`RoomsStore`的一个方法发送一个自定义名称的事件，在`Rooms`配置一个同名称的监听事件。通过这种方法，`Rooms`组件就能动态且顺利地接收到`RoomsStore`的数据了。这个方法其实和SocketIO很像。栗子：

`RoomsStore`发送一个名为`addNewRoom`的事件，并把数据发送给`Rooms`：

`this.emit('addNewRoom', data);`

`Rooms`在`componentWillMount()`(React状态管理，渲染前要执行的代码)中添加监听事件：

```javascript
RoomsStore.on('addNewRoom', (data) => {
        this.setState({
            rooms: RoomsStore.getAll()
        });
        this.props.socket.emit('join_private_room', data);
    });
}
```

配置好了`Rooms`和`RoomsStore`，还剩下一个`RoomsActions`需要配置。在`Actions`文件夹下的`RoomsActions.js`文件中：

```javascript
import dispatcher from '../dispatcher';

export function matchUser(data) {
    dispatcher.dispatch({
        type: 'MATCH_USER',
        data
    })
}
```

我们看到，一个名为`matchUser`的function被建立，同时被配置了一个`type`。这个`type`就是调度员识别这究竟是哪个function的标志。注意`type`名称全是大写。回到`RoomsStore`中，32行：

```javascript
handleActions(action) {
    switch(action.type) {
        case 'MATCH_USER': {
            this.matchUser(action.data);
        }
    }
}
```

在这里我们接收到了`type`为`MATCH_USER`的事件与数据。这里要注意2个地方：

 1. `RoomsActions`和`Rooms`也是直接关联的，关联的方法很简单，在`RoomsActions`中的function名，被`Rooms`直接引用即可：`RoomsActions.matchUser(data);`
 2. `RoomsStore`中，我们用了名为`handleActions`的function接收调度员发来的事件，但这个function需要被注册到调度员那里：`dispatcher.register(roomsStore.handleActions.bind(roomsStore));`

## 小结

我们通过Flux给React的不同组件添加了一个尽忠职守的调度员，从此不同的组件更能各司其职，不必在乎跟它无关的事情。初学Flux时，难点在于：
 * 有一些新名词，如Flux，EventEmitter，Dispatcher等；
 * 配置不容易掌握，每个关联的文件都有一系列配置。建议依葫芦画瓢，更建议再观摩一下这个[视频教程](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)；
 * 文件结构与引入路径容易搞错或忘记。建议根据配置错误的提示信息按图索骥。

## 收获

其实这个在线聊天室可以被拆分成3个Todo：

 * 用户列表
 * 房间列表
 * 信息列表

每一个Todo都有自己的增删功能与显示方法。增删功能通过Flux实现；显示方法通过React实现。与其他用户的数据交互通过后台配置SocketIO实现。由于我也是初学，对React的状态管理还一知半解，同时后面还有更精彩的内容Redux可以深造。这个在线聊天室的项目暂时告一段落，其中关于对localStorage的使用和对SocketIO与React结合的方法因为比较容易理解，建议看一看源码，我就不再赘述了。

写完了这个系列，我自己的知识得到了巩固。由衷希望它也能够帮到你。加油。