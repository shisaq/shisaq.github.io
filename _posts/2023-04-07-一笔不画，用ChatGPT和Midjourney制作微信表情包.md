---
layout: post
title: "一笔不画，用ChatGPT和Midjourney制作微信表情包"
subtitle: ""
date: 2023-04-07
author: "shisaq"
header-img: "img/about-bg-walle.jpg"
tags: [personal_dev]
---

> 最近做了个迷你项目：“一笔不画，制作微信表情包，天天领赞赏(bushi)”，微信打开链接即可看到：[https://w.url.cn/s/AkxcGvz#wechat_redirect](https://w.url.cn/s/AkxcGvz#wechat_redirect)。回头有工夫详细补充一下细节。

## 思路整理

1. 写下3个基本的文字生成图片的prompt，发给ChatGPT，让它按这种格式生成100个其他风格的prompts；
2. 根据最基础的prompt，在Midjourney生成1张理想的表情图；
3. 用Python为每个prompt增加前缀和后缀，生成直接可在Midjourney复制粘贴的prompts；
3. 以此表情图作为模板，结合100种prompts，生成更多表情图(默认4宫格)；
4. 用Python把4宫格自动裁剪为单张图片的集合；
5. 用 remove.bg api 自动为图片去除背景；
6. 用Python生成微信表情图需要的gif和缩略图格式；
7. 筛选出好看的图，用Photoshop为图片增加匹配的文字；
8. 上传微信表情图网站，发布作品。

## 用到的工具

1. Midjourney
2. ChatGPT
3. Python
4. remove.bg api
5. Photoshop

## 延伸思考

1. ChatGPT可按我们要的格式，根据自然语言，生成海量数据，然后用RPA对海量数据进行处理，或用IDP对海量数据进行小样本训练
2. 使用Midjourney时，复制粘贴prompts的过程可用RPA替代，实现更深度的自动化
3. remove.bg api 也可用RPA自动化操作
