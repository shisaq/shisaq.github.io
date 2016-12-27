---
author: shisaq
comments: true
date: 2016-12-24 23:02:43+00:00
layout: post
title: 用React, Flask和SocketIO搭建在线聊天室(六)
categories:
- 前端学习笔记
---

通过上一篇文章，我们已经成功配置了Flask和Flask-SocketIO插件，接下来是时候学习React了。

## 学习资料

我是个视觉动物，受到应试教育的负面影响，不是太能接受看书。所以我学习很多技能的方法是看视频。关于React，我同样没有研究官方文档，而是在YouTube上找到了一个很棒的React视频教程：https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b。该作者(learncodeacademy)的YouTube频道囊括了ES6，React，NodeJS，Angular，Docker在内的众多系列，正宗英语，推荐订阅。英语不太好的同学可以像我一样试试看，听1遍不会很正常，第2遍感觉就会很不一样；如果连看第2遍视频的机会都不给自己留，那还是啃文档去吧。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserveryoutube.png)

## 教程简介

这个教程囊括如下知识点：
 * React关于webpack的配置
 * React组件化的原理及实施方法
 * React路由的使用技巧
 * Todo应用的实现
 * 用Flux完成数据“存储-显示-事件-调度-存储”的动态循环
 * 用Redux完成更为复杂的数据流控制

## 我的目标

重申我的目标，我就是要做个在线聊天室，是个典型的单页应用，所以路由的知识我还不用管；Flux和Redux类似，同时比Redux简单，所以我暂时放弃Redux的视频。总结下来：

**配置好React，用组件化思维制造所需组件，用Flux管理各个组件的交互。**

## React关于webpack的配置

想用React，要先装webpack；要装webpack，要先有npm；想有npm，要装node。React从配置到运行确实需要一系列的动作，我把步骤细化如下：

 1. 安装node： https://nodejs.org/en/ macOS可使用homebrew安装：`brew install node`
 2. 在终端输入`node -v`和`npm -v`检查node与node本身携带的npm是否安装。![](http://7xpx1z.com1.z0.glb.clouddn.com/chatservernodeinstall.png)
 3. 确认安装完毕后，在我们项目的根目录运行`npm init`，初始化npm。终端会提示你输入必要信息，如name(项目名称)、main(被操作的js文件，这里要配置为`webpack.config.js`)等。初始化完毕后，该目录就多了一个`package.json`文件。建议参考我项目里的文件：https://github.com/shisaq/chat-server/blob/master/package.json
 4. 用npm安装webpack(它其实就是一个打包工具，一个项目中，React组件那么多，用webpack打个包，最后只生成1个js文件，爽不爽？)：`npm install -S webpack`。不用担心，说是install，其实也就是把一些文件下载到项目目录中的`node_modules`下而已。
 5. 配置webpack配置文件，同样在根目录新建文件：`webpack.config.js`，把如下网址内容直接复制粘贴到该文件中。原因1: 想理解它太困难；原因2: 配置这一次，以后基本不用再修改了。https://github.com/shisaq/chat-server/blob/master/webpack.config.js
 6. 需要注意上一步的`entry`和`output`，要按我们自己的需求，配置好要被处理的文件和文件路径。前端文件都放在`./static`文件夹下(这个是Flask文件结构决定的)，所以我们要生成的最终`main.js`就放到`./static/js`文件夹。
 7. 打开`package.json`，把如下babel-loader的文件依赖替换到`dependencies`中(你也可以根据每一个名称自行安装，以保证安装的都是最新稳定版本`npm install -S module_name`)：

```javascript
"dependencies": {
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.0",
    "babel-plugin-add-module-exports": "^0.1.2",
    "babel-plugin-react-html-attrs": "^2.0.0",
    "babel-plugin-transform-class-properties": "^6.3.13",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-preset-stage-0": "^6.3.13",
    "react": "^0.14.6",
    "react-dom": "^0.14.6",
    "webpack": "^1.14.0",
    "webpack-dev-server": "^1.14.1"
  }
```

此时运行`npm install`，就成功安装了react和babel。我之前不懂babel是什么，为什么要安装，现在我懂了：babel(https://babeljs.io/)就是一个把ES6，甚至ES7的代码转换成ES5代码的工具，否则很多浏览器不会识别react使用过程中的语法。

最后，测试一下是否可以运行webpack：终端输入`webpack`，应该可以看到下图的信息，同时`main.min.js`顺利生成。此时，React的所有组件(虽然现在还一个都没有)就能通过babel转译，并通过webpack打包成一个`main.min.js`文件供我们以后使用了。无论未来我们增加了什么组件，都可以在根目录运行`webpack`重新打包即可。
![](http://7xpx1z.com1.z0.glb.clouddn.com/chatserverwebpackinstalled.png)

本章主要介绍了React的安装及配置，为以后使用React打下了基础。我很抱歉文字无力感和我表达能力的局限性，中间遇到的坑请努力自己填平，毕竟我也是这样自学过来的。如有疑问，随时留言，我会尽力帮助你。
