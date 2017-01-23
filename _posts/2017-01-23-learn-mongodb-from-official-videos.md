---
author: shisaq
comments: true
date: 2017-01-23 16:43:35+00:00
layout: post
title: Learn MongoDB From The Official Video Tutorial
categories:
- frontend
---

> Recently, after having handled the basic knowledge of React, I started the new journey -- NodeJS & MongoDB.

## Background

I successfully finished 2 projects: Chat Server and Countdown Web App. In order to be more comprehensive in programming, and of course to get a better chance for the job opportunities, I think it's time to alter myself to be a full stack engineer.

After having browsed several stacks, I picked these below:

* Python
* Node.js
* MongoDB

Actually, Python is as great as Node.js, and persenally, I prefer Python, cuz it has different capabilities such as making whole back end, web spider, tiny tools, etc. Nevertheless, I dicide to learn Node.js, due to some recent job requirements.

## Source

* [Node.js YouTube Tutorial](https://www.youtube.com/playlist?list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh)

* [MongoDB Official Video Tutorial](https://university.mongodb.com/courses/M101JS/about)

## Progress

Now I'm learning the first week of MongoDB. I gotta say:

the official videos are AWESOME. But, well, there is a but. But, it's pretty hard for people to keep up to date of the video tutorials. Since this tutorial was done 2 years ago, I have to deal with the updated features and conflicts. Actually, it's totally fine to just use the code they offered; but it's simply not acceptable for me to not keep tracking the latest versions.

## What I found

1. `app.use(errorHandler);`

  This error handler code has to be **AFTER** all other `app.use(someMiddleWares)`. Otherwise, it won't work properly. See [Node.js Doc](https://expressjs.com/en/guide/error-handling.html).

2. `app.use(app.router);`

  This code has already been deprecated. What we need to do is simply remove this code, it will work perfectly.
