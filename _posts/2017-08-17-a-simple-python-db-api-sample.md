---
author: shisaq
comments: true
date: 2017-08-17 19:26:11+00:00
layout: post
title: 用Python通过DB-API连接SQL的极简例子
categories:
- fullstack
---

## 来源
这个例子摘自Udacity Full Stack Nanodegree(增加了部分注释):

`The Backend: Databases & Applications`:

Lesson 3: Python DB-API的第4个视频:

`Quiz: Trying out DB API`。

## 代码

```python
# 引入sqlite3作为DB-API
import sqlite3

# 从`students`表中获取数据
# 1. 连接`students`表
db = sqlite3.connect("students")
# `c`就是我们要运行SQL语句的对象
c = db.cursor()
# `query`是我们要运行的SQL语句：在`students`表中，选择name和id，并按name升序排列
query = "select name, id from students order by name;"
# `execute`就是运行这条SQL语句
c.execute(query)
# `rows`是服务器返回的结果
rows = c.fetchall()

# First, what data structure did we get?
print "Row data:"
print rows

# And let's loop over it too:
print
print "Student names:"
for row in rows:
  print "  ", row[0]

# 记得取完数据关闭数据库连接
db.close()

# 控制台打印结果

# Row data:
# [(u'Diane Paiwonski', 773217), (u'Harry Evans-Verres', 172342), (u'Hoban Washburne', 186753), (u'Jade Harley', 441304), (u'Jonathan Frisby', 917151), (u'Melpomene Murray', 102030), (u'Robert Oliver Howard', 124816), (u'Taylor Hebert', 654321), (u'Trevor Bruttenholm', 162636)]

# Student names:
#   Diane Paiwonski
#   Harry Evans-Verres
#   Hoban Washburne
#   Jade Harley
#   Jonathan Frisby
#   Melpomene Murray
#   Robert Oliver Howard
#   Taylor Hebert
#   Trevor Bruttenholm
```
