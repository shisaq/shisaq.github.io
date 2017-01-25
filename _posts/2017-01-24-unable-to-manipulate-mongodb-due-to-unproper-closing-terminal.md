---
author: shisaq
comments: true
date: 2017-01-24 20:42:35+00:00
layout: post
title: Unable To Manipulate MongoDB Due To Unproperly Closed Terminal?
categories:
- frontend
---

> I met a problem while I was learning MongoDB. Here are my steps eliciting the problem:

1. I start MongoDB service: `mongod`.

2. In my terminal, at the MongoDB service window, I carelessly close it without using `ctrl + c` to kill the service process.

3. Now, I cannot manipulate MongoDB service AT ALL...

## Solution

There might be several different ways to solve the problem in different systems. Mine is MacOS, so here is my solution:

1. Open a new window of terminal, type `mongo`, to enter MongoDB, as the process is still working, so I'm able to login.

2. type `use admin` to get the root permission.

3. type `db.shutdownServer()`.

Now the service has been closed successfully. I can simply type `mongod` to start it again, and manipulate by using the normal window. Next time, I will be carefull when trying to close a terminal window. Attatching this solution in case the same condition happens in future.


## Reference

[stackoverflow](http://stackoverflow.com/questions/8495293/whats-a-clean-way-to-stop-mongod-on-mac-os-x)
