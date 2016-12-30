---
author: shisaq
comments: true
date: 2016-12-29 15:35:00+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(七)
categories:
- 前端学习笔记
---

> 通过上一篇文章的操作，我们已经可以在Flask搭建的服务器下，用SocketIO连接前后端，并成功搭建了React的运行环境。这次就主要剖析在线聊天室的前端结构。

## js文件夹结构

先上一个总体结构图。完成后，我的js文件夹下的结构如下图。主要分为`main.js`, `./components`, `./stores`, `./actions`和`dispatcher.js`。

```
├── actions
│   ├── RoomMsgActions.js
│   ├── RoomsActions.js
│   └── UsersListActions.js
├── components
│   ├── Header.js
│   ├── Layout.js
│   ├── Name.js
│   ├── Room.js
│   ├── Rooms.js
│   └── UserList.js
├── dispatcher.js
├── main.js
└── stores
    ├── RoomMsgStore.js
    ├── RoomsStore.js
    └── UsersStore.js
```

不必惊慌，这些文件自然不是一蹴而就的。一开始，我们可能只有一个`main.js`，然后把所有的组件都扔到`./components`文件夹下。至于`dispatcher.js`, `./stores`, `actions`，涉及到flux，我们之后再讲。

## 入口文件

在webpack打包的时候，就会从入口文件开始处理；入口文件又会引入其他的组件(components)，由此一级一级往下连，我们就能牵一发而动全身，一纸调令调动千军万马。在本项目中，入口文件就是`main.js`了。那么，我们应该怎么配置入口文件呢？这里就要讲一下React的文件结构了。

### React文件结构

在我写的React文件中，结构都是这样的：

 * 引入npm安装的所需组件；
 * 引入我自己编写的其他所需组件；
 * 码出当前组件的功能。

具体到`main.js`，可以打开[https://github.com/shisaq/chat-server/blob/master/static/js/main.js](https://github.com/shisaq/chat-server/blob/master/static/js/main.js)进行对照：

#### 引入npm安装的所需组件

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
```

#### 引入我自己编写的其他所需组件

```javascript
import Layout from './components/Layout';
```

#### 码出当前组件的功能

```javascript
const socket = io.connect(process.env.SOCKET_URL);

const App = () => (
    <MuiThemeProvider>
        <SocketProvider socket={socket}>
            <Layout />
        </SocketProvider>
    </MuiThemeProvider>
);

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
```

我用的是sublime编辑器，推荐一个优化React代码的插件，否则在js里面敲html，看到各种奇葩显示效果，会很郁闷：[https://github.com/babel/babel-sublime](https://github.com/babel/babel-sublime)

## React渲染特性

React之所以渲染迅速，得益于它发挥了javascript速度快的特性，用javascript打造了一个虚拟DOM，因此不需要浏览器无脑龟速渲染了。细化到这个`main.js`文件中，也就是刚开始引入的2个文件：

 * `import React from 'react';`
 * `import ReactDOM from 'react-dom';`

其中ReactDOM**只需要**在`main.js`被引入即可，其他子组件只需要引入React。React会根据DOM是否发生了实际变化判断什么地方需要重新渲染。

## React与ES6特性

在React各个组件中，我比较频繁地、而且也是第一次用到ES6的语法，包括箭头函数、const声明、import插入文件、简化赋值以及React ES6组件声明方法等。这些东西我以前也不懂，只是看了[视频教程](https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)依葫芦画瓢而已。相信我，练上3-5遍，跟自己以前了解的javascript一对比，就可以明白具体怎么回事了。加油进化吧，ES7都快来了呢。

## `main.js`组件功能

到这里，我们不难得出，`main.js`的功能也就是这几个：

 1. 引入React，渲染React虚拟DOM；
 2. 引入其他基础组件，如SocketIO、好看的material-UI组件；
 3. 我们编写的所有组件都从Layout组件被引入到这里；
 4. 渲染这些组件。

再简单一点：

**用React把我们写的所有组件导入到这里，渲染出来。**

## 补充
在你熟悉了React的文件结构后，你可能会比较好奇，这个SocketIO组件和material-UI组件是怎么来的？我解释一下。

SocketIO组件，是因为我知道我肯定要在React中引入SocketIO，所以去Google(关键词`react socketIO`)，在[npm库](https://www.npmjs.com/package/socket.io-react)中找到的组件。在筛选和配置过程中必定有坑，如果踩到且爬不上来，请参考我在填完坑后的代码。

material-UI组件只是我的个人喜好，因为需要美化聊天室，所以我曾不可避免地想到了各种css框架：bootstrap，Materialize，onepcssgrid等。但是在试用后，总觉得不够舒服，调整css总要到其他地方去，和React的组件化思维格格不入。终于后来Google(关键词`react css framework`)到了[Material-UI](http://www.material-ui.com)，以组件的形式封装好了各种控件，完美地与React入了洞房。

## 预告

下一篇文章，我会结合在线聊天室的特性，介绍flux的原理及作用，继续庖丁解牛，解读重点部分。在实际操作过程中如遇到问题，欢迎留言。