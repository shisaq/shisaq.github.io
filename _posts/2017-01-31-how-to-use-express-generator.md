---
author: shisaq
comments: true
date: 2017-01-31 10:57:19+00:00
layout: post
title: How to Use Express Generator
categories:
- frontend
---

> [Express generator](http://expressjs.com/en/starter/generator.html) is a tool that helps quickly generate your application skeleton.

## Preparation

 * Have Node.js with npm installed

## Installation

`npm install express-generator -g`

Now if you type `express -h`, you're able to get the help list below.

![help](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20170131_3.png)

## One Step Generation

`express myapp`

This command will simply generate the application folder called `myapp` for you by default config. After having done this, you can:

 * `cd myapp && npm install`
 * `npm start`
 * Open your browser, type `localhost:3000`, you can see the server is running

![generate](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20170131_2.png)

## Customize Config

`express myapp --hogan -c less`

This command shows we use a template called `hoganJS`, and install Less as a middleware of CSS.

> Pay attention: the newest express generator recommand us to use `--view=templateName` to replace `--templateName`, but actually, the key point that leads to success or fail depends on **which template you pick**. For instance, you can use `express myapp --view=jade`; but you have to use `express myapp --hogan` instead. For more info, check the instruction by typing `express -h`.