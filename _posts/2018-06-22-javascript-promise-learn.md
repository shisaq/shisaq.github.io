---
author: shisaq
comments: true
date: 2018-06-22 13:17:01+00:00
layout: post
title: JavaScript Promise 学习笔记
tags:
- frontend
---

> JavaScript Promise 是处理异步流程、获取并处理延迟数据、妥善处理 error 的神器。之所以命名为 **Promise(保证；确保)** ，就是因为它解决的就是 **确保在...的情况下做某事** 的问题。那么这样的问题一般出现在哪里呢？只要是异步处理，就需要确保异步处理的稳定性，此时就可以用到 Promise 了。如请求 json 文件、与 web worker 通信。

## 形象的比喻

首先要搞清楚同步和异步的区别，然后再搞清楚 Promise 出现在什么环节、以什么形式出现，帮我们做了什么事情。

如果我们在家自己做饭自己吃，那这就是 **同步** ，一条线程走下来，没有分叉；如果我们去餐馆点餐，让厨师帮我们做饭，我们在他做饭的过程中还能喂马、劈柴、周游世界，那这就是 **异步** ， 多条线程走下来，有分叉。而 Promise 主要是解决的异步的问题，所以就是解决我们在餐馆点餐的问题。

假设没有 Promise，我们就相当于在点餐的时候，告诉服务员：“给我来一份宫保鸡丁。” 服务员说：“好。” 过了一会儿，他端过来一盘鱼香肉丝。我说：“我点的是宫保鸡丁啊！这不是我要的。” 服务员：“你点的就是鱼香肉丝。” 此时我应该找谁说理？

如果我们加入了 Promise，我们就相当于在点餐的时候，点了一份宫保鸡丁，同时说：“给我一张小票，这就是我点的宫保鸡丁的证据。” 当我手里拿着票，服务员就没办法赖账了。也就是说：

> Promise 就相当于 "要小票"，它规范化了整个流程，保证了我们在不同情况下要的东西就是我们定义的。

再延伸一点，由于有 `.then()` 的帮助，我们能在服务员给我们端来宫保鸡丁的时候，再告诉服务员：“再给我来一瓶可乐吧！把可乐的票也给我哈！” 由此形成了 Promise 链条，以获得更多、更丰富、更自定义的回应。

英语好、能科学上网的话，可以看看这个 1 分半左右的视频，它把点餐的过程讲得更形象：[Udacity Promises Intro](https://www.youtube.com/watch?v=8L1a-_c8mCg)

## 语法例子

```javascript
// 使用Promise构造函数新建1个Promise, 携带2个回调函数:
// resolve: 操作成功; reject: 操作失败
var promise = new Promise(function(resolve, reject) {
  // 做一件需要异步操作的事情，然后...

  if (/* 一切正常，如期所至 */) {
    resolve("异步操作成功。");
  }
  else {
    reject(Error("出了点问题。"));
  }
})
.then(function(value) {
  // 成功后会执行这里的代码
  return nextThing(value); // 将resolve返回的参数传递给nextThing函数，并运行
})
.reject(rejectFunction); // 失败则会执行rejectFunction函数
```

## 组成部分

- 主函数体
- `.then()` 及 `.catch()`，未来的 ES9 中还会有 `.finally()`
- Promise 嵌套链条(`.then()` 或 `.catch()` 中包含新的 Promise)

## Promise 和 Ajax 有什么关系

Promise 是一种 **管理** 异步操作的工具，而 Ajax 是一种特定的、处理异步操作的类型。

我们可以举个例子：

把异步操作比作水果，把 Promise 比作水果刀，把 Ajax 比作苹果。
苹果是水果的一种，刀可以切苹果，苹果不能切刀。
Ajax 是异步操作的一种，我们可以用 Promise 管理和处理 Ajax，而不能用 Ajax 处理 Promise。

## fetch API

[fetch](https://davidwalsh.name/fetch) 是一个利用了 Promise 的典型 API，它使用了语义化的结构，使得代码变得简洁易读。举个例子：

```javascript
fetch('https://davidwalsh.name/some/url', {
  method: 'get'
})
  .then(function(response) {
    // 收到数据
  })
  .catch(function(err) {
    // 未收到数据，返回错误信息
  });
```

这里，`fetch` 函数本身就是一个返回了 Promise 的函数。

## Promise 链条

如果在 `then()` 中返回的是另一个 Promise，那这个 Promise 就会作用于下一个 `then()`。我们可以通过上文已有的 fetch API，举一个例子：

```javascript
fetch('url/a.json')
  .then(function(respnose) {
    // 假设是这样的数据：
    // response = {status: true, jsonFilename: 'url/b.json'}
    // 通过返回一个Promise，建立Promise链条，从 'url/b.json' 中请求数据
    return fetch(response.jsonFilename);
  })
  .catah(function(e) {
    console.log('Promise链条第1个请求错误', Error(e)); // 打印错误信息
  })
  .then(function(data) {
    console.log(data); // 打印从 'url/b.json' 取得的数据
  })
  .catch(function(e) {
    console.log('Promise链条第2个请求错误', Error(e)); // 打印错误信息
  });
```

## 保证接收的数据顺序

由于 Promise 是异步进行的，我们不能保证数据收到的先后顺序，特别是在我们收到一个 url 数组后，遍历每个 url ，并建立一系列 Promise 的时候。这时候，我们可以使用 `.map` 函数，把 url 数组 改装成 Promise 数组，并用 `Promise.all()` 启动异步请求，以此做到使用 Promise 异步请求数据的时候，仍然能按正确顺序收到数据。 _注意： `Promise.all()` 但凡有一个 Promise 失败而触发 `.catch()` 事件的话，该 Promise 数组的其他 `.then()` 都会被忽略。_

### 基础语法

```javascript
// 传入一个由 Promise 组成的数组到 Promise.all() 中
Promise.all(arrayOfPromises)
  // 返回该 Promise 数组的数据
  .then(function(arrayOfValues) {
    // 根据返回的数据做自己想做的事情
    arrayOfValues.forEach(function(value) {
      doSomething(value);
    });
  });
```

### 例子

```javascript
// 此函数用来从一个 url 获取 json 数据
function getJSON(url) {
  // 利用 fetch API 创建 Promise
  return fetch(url).then(response) {
    return response.json();
  }
}

// 从某个 url 获取初始 json 数据
getJSON('someurl.json')
  .then(function(response) {
    // 假设 response = {name: 'urls', results: ['url1', 'url2', 'url3']}
    // 建立 Promise 数组
    const arrayOfPromises = response.results.map(function(url) {
      return getJSON(url);
    });
    // 将 Promise 数组传入下一个 .then 中
    return Promise.all(arrayOfPromises);
  })
  // 接收到该 Promise数组 返回的数据组成的数组，数据顺序维持了原有的 response.results 中的顺序：url1 返回的数据, url2 返回的数据, url3 返回的数据
  .then(function(arrayOfValues) {
    // 按顺序依次打印出 url1、 url2、 url3 返回的数据
    arrayOfValues.forEach(function(value) {
      console.log(value);
    });
  })
  .catch(function(err) {
    console.log(err);
  });
```

以上代码的第 1 个 `.then()` 可以优化成：

```javascript
getJSON('someurl.json').then(function(response) {
  return Promise.all(response.results.map(getJSON));
});
```

## 小招式

- `.catch()` 其实是 `.then()` 的一种：

```javascript
// 如下代码段：
.catch(rejectFunc);

// 等价于如下代码段：
.then(undefined, rejectFunc);

// 也就是说， .then() 其实是这样的：
get('example.json').then(resolveFunc, rejectFunc);
```

- 若 `.then()` 或 `.catch()` 中，只是简单地传参到另一个函数，则可以简写：

```javascript
// 下面的代码段：
.then(function(data) {
    anotherFunc(data);
});

// 可以简写成：
.then(anotherFunc);
```

## 参考资料

- _墙裂推荐_ [JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)
- _墙裂推荐_ [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [What's the difference between Promise and AJAX?](https://stackoverflow.com/a/39757547/5769598)
