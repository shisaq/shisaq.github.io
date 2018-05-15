---
author: shisaq
comments: true
date: 2018-05-14 12:15:01+00:00
layout: post
title: Kotlin：我和大神之间仍然有条鸿沟
categories:
- fullstack
---

## 原题

### Exercise: Fit More Fish

Create a function that checks if we can add another fish into a tank that already has fish in it.
创建一个function，检测一个已经有一些鱼的鱼缸是否能放得下一条特定大小的鱼。

### How many fish in a tank?

The most widely known rule for stocking a tank is the one-inch-per-fish-per-gallon-of-water rule. However that's assuming the tank doesn't have any decorations in it.
有个常识：一英寸对应一条鱼，一条鱼对应一加仑水。不过这条常识没有考虑鱼缸里的假山、水草等饰品。

Typically, a tank with decorations can contain a total length of fish (in inches) less than or equal to 80% of the tank size (in gallons). A tank without decorations can contain a total length of fish up to 100% of the tank size.
一般来说，一个带饰品的鱼缸可以容纳鱼类的总长度(英寸)不大于鱼缸体积(加仑)的80%。一个不带饰品的鱼缸可以容纳鱼类的总长度不大于鱼缸体积的100%。

For example:
A 10 gallon tank with decorations can hold up to 8 inches of fish, for example 4 x 2-inch-long fish.
A 20 gallon tank without decorations can hold up to 20 inches of fish, for example 6 x 3-inch-long fish and 2 x 1-inch-long fish.
比方说：
一个10加仑、带饰品的鱼缸，可以容纳的鱼的总长度为8英寸：4条2英寸长的鱼。
一个20加仑、不带饰品的鱼缸，可以容纳的鱼的总长度为20英寸：6条3英寸长的鱼 + 2条1英寸长的鱼。

### fitMoreFish function

Create a function that takes these arguments:
创建一个带有如下参数的function：

* tankSize (in gallons) 鱼缸尺寸(加仑)
* currentFish (a list of Ints representing the length of each fish currently in the tank) 现有的鱼(一个记录了每条鱼长度的list)
* fishSize (the length of the new fish we want to add to the tank) 要加入的鱼的尺寸
* hasDecorations (true if the the tank has decorations, false if not) 鱼缸是否有饰品

You can assume that typically a tank has decorations, and that a typical fish is 2 inches long. That means you can set those values as default parameters.
你可以假设通常情况下鱼缸含有饰品，一条鱼一般2英寸。也就是说你可以给这个function的部分参数设置默认值。

### Output

Make sure you test your code against the following calls, and that you get the correct output for each.
确保你测试了如下数据，并得出一致的结果。

```java
canAddFish(10.0, listOf(3,3,3)) ---> false
canAddFish(8.0, listOf(2,2,2), hasDecorations = false) ---> true
canAddFish(9.0, listOf(1,1,3), 3) ---> false
canAddFish(10.0, listOf(), 7, true) ---> true
```

## 我写的破代码

```java
fun canAddFish(tankSize : Double,
                currentFish : List<Int>,
                fishSize : Int = 2,
                hasDecorations : Boolean = true) : Boolean {
    var realSize = if (hasDecorations) (tankSize * 0.8 - fishSize) else (tankSize - fishSize)
    currentFish.forEach {
        realSize = realSize.minus(it)
        if (realSize < 0) return false
    }
    return true
}
```

## 大神简洁的代码

```java
fun canAddFish(tankSize: Double,
                currentFish: List<Int>,
                fishSize: Int = 2,
                hasDecorations: Boolean = true): Boolean {
    return (tankSize * if (hasDecorations) 0.8 else 1.0) >= (currentFish.sum() + fishSize)
}
```

## 反思

* 定义了多余变量
* 使用了不必要的循环
* 忽略了“Kotlin除了while循环和for循环，任何对象都可看作表达式”
* **逻辑不够清晰，sum函数其实可替代forEach**

## 出处

[Udacity Kotlin Bootcamp for Programmers](https://www.udacity.com/course/kotlin-bootcamp-for-programmers--ud9011)
