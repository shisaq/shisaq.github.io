---
author: shisaq
comments: true
date: 2018-05-24 16:01:23+00:00
layout: post
title: 微信小程序学习笔记
categories:
- frontend
---

## wx.navigateTo

跳转到除tabBar页面的路径，可带参数。[navigateTo文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html?search-key=navigateTo)

## wx.redirectTo

关闭当前页面，跳转到应用内的某个页面。


## import和template结合使用

```xml
// pages/index/index.wxml
<import src="../../components/msgItem.wxml" />
<template is="aboutme" data="{{...msgItem}}">
</template>

// app.js
Page({
  data: {
    "msgItem": {
      "index": 0,
      "msg": "hello"
    }
  }
})
```

```xml
// components/msgItem.wxml
<template name="aboutme">
  <view>
    <text>{{index}}:{{msg}}</text>
  </view>
</template>
```

打开`index.wxml`，打印结果为`0:hello`。
理解：`import`相当于jinja2里的`block`；`include`相当于jinja2里的`include`。

## App()函数: app.js

`onLaunch`: 初始化完成后，会触发，且只触发一次。
`onShow`: 启动或从后台切换到前台，则被触发。
`onHide`: 从前台切换到后台，则被触发。
`onLoad`: 页面加载完成时触发。
`onShow`: 页面显示时触发。
`onReady`: 页面初次渲染完成时触发。

## 共同属性

`id`: String类型属性，组件在页面中的唯一标示
`class`: String类型属性，定义一类组件
`style`: String类型属性，组件的内联样式
`hidden`: Boolean类型属性，true为隐藏，false为显示
`data-*`: Any类型属性，当组件触发事件时，将该属性值发送给事件处理函数
`bind*/catch*`: EventHandler类型属性，绑定该组件相关的事件处理函数

## navigator的open-type属性

1. **navigate**：navigate是navigator的默认跳转方式。该方式对应API接口中的wx.navigateTo方法。这种跳转方式仍然保留当前页面，并且可以通过点击左上角的箭头**返回当前页面**。

2. **redirect**：redirect是重定向的导航方式，对应API接口中的wx.redirectTo方法。使用这种方式跳转的时候，微信小程序将会**关闭当前页，跳转后无法回到当前页**。

3. **switchTab**：switchTab表示只能**跳转到在app.json中设置的tabBar页面**。如果没有设置tabBar页面，跳转将会失败。这种方式的跳转对应API接口中的wx.switchTab方法。

4. **reLaunch**：对应于API接口中的wx.reLaunch方法。使用该跳转方法则会**关闭所有页面**，并打开到应用内的某个页面。

5. **navigateBack**：对应API接口中的wx.navigateBack方法。使用该方式跳转时，将**关闭当前页面，返回上一级页面或多级页面(由delta属性决定)**。

## API连接请求的说明

1. 默认超时时间和最大超时时间都是60s；
2. request, uploadFile, downloadFile最大并发限制是10个；
3. 网络请求的referer header不可设置，格式固定为：
 `https://service.wechat.com/{app_id}/{version}/page-frame.html`
4. 小程序进入后台运行后，5s内网络请求没有结束，会回调错误信息`fail interrupted`。

## 交互反馈

### wx.showToast(OBJECT)

显示消息提示框。

![显示消息提示框](https://i.loli.net/2018/05/31/5b1018127396b.png)

### wx.showLoading(OBJECT)

显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框。

![loading提示框](https://i.loli.net/2018/05/31/5b10181272f66.png)

### wx.showModal(OBJECT)

显示模态弹窗。

![显示模态弹窗](https://i.loli.net/2018/05/31/5b101810000a5.png)
