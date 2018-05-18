---
author: shisaq
comments: true
date: 2018-05-11 18:25:01+00:00
layout: post
title: 初尝Kotlin
categories:
- fullstack
---

> [Kotlin](http://kotlinlang.org/docs/reference/basic-syntax.html)现在这么火，而且能直接兼容Java，在Android开发中，趋势就是用简洁的Kotlin逐步替代掉Java。Java我还没怎么学，不如就直接上Kotlin吧。Udacity刚好也有[免费课程](https://www.udacity.com/course/kotlin-bootcamp-for-programmers--ud9011)，推荐一下。

## 控制台

打开IntelliJ的IDE，tools-Kotlin-Kotlin REPL:
![kotlin repl](https://i.loli.net/2018/05/12/5af63b65c4e00.png)

## 基本语法

单引号代表字符，双引号代表字符串：

```java
val c = 'c'
val s = "string"
```

var 声明变量：

```java
>> var a = 3
>> a = 4 // a等于4
```

val 声明常量：

```java
>> val b = 5
>> b = 4 // error
```

加减乘除直接用，没毛病：

```java
>> 3 + 4
>> 7
```

加减乘除functions：

```java
>> 1.plus(8).minus(3).times(4).div(6) // (1+8-3)*4/6=24
>> 4
```

2种设定null值的方法：

```java
var greenColor = null
var blueColor: Int? = null // 允许为空的整型变量
```

允许为空的数组：

```java
>> listOf(null,null)
>> [null, null]
>> var list: List<Int?> = listOf(null, null) // 允许数组中的元素为空
>> var list2:List<Int>? = null // 允许数组为空
```

可变数组与不可变数组：

```java
>> val myList = mutableListOf("tuna", "hadock", "shark") // 可变数组(即使myList是val类型)
>> myList.remove("shark") // myList不可被赋新值，但可在当前值的基础上进行操作
>> true
>> myList
>> [tuna, hadock]
>>
>> val myList = listOf("tuna", "hadock", "shark") // 不可变数组
>> myList.remove("shark") // error
```

带索引迭代数组：

```java
>> var list1 = listOf("a", "b", "c")

>> for ((index, item) in list1.withIndex()) {
>>     println("Index: $index; Value: $item")
>> }
>> Index: 0; Value: a
>> Index: 1; Value: b
>> Index: 2; Value: c
```

创建规律数组：

```java
val array1 = Array(3, {it}) // [0, 1, 2]
val array2 = Array(5, { i -> (i * i).toString() }) // ["0", "1", "4", "9", "16"]
```

Elvis 操作符(?:)：

啥是Elvis操作符？Google一下[Elvis Presley](https://www.google.com/search?q=elvis+presley)，看看他的发型像不像`?:`

```java
>> var nullTest: Int? = null // 定义一个允许为空的变量nullTest，赋值null
>> nullTest = nullTest?.inc() ?: 0 // 如果nullTest非空，则加1；如果为空，则赋值为0
```

设定范围(..)：

```java
>> if (50 in 1..50) println(50) // 如果50在1-50中，则打印50
>> 50
>>
>> for (i in 'b'..'g') print(i) // 从b到g
>> bcdefg
>>
>> for (i in 5 downTo 1) print(i) // 从5倒序到1
>> 54321
>>
>> for (i in 3..7 step 2) print(i) // 每2次打印1次
>> 357
```

when(相当于switch case)：

```java
when (50) {
    0 -> println("empty")
    in 1..50 -> println("1-50")
    else -> println("others")
}
```

Kotlin入口文件：

```java
fun main(args: Array<String>) {
    // do something
}
```

在IntelliJ IDE中，点击Run-Edit Configurations，可配置args的value：

![args configurations](https://i.loli.net/2018/05/14/5af8b2d777f68.png)

```java
fun main(args: Array<String>) {
    println("args[0] is ${args[0]}, args[1] is ${args[1]}") // args[0] is kotlin, args[1] is java
}
```

若要运行该文件，则可用`ctrl+shift+R`，或使用如下2种方式：

![run](https://i.loli.net/2018/05/14/5af8b3f2e278d.png)
![run](https://i.loli.net/2018/05/14/5af8b3f2e58b8.png)

表达式跳过赋值直接使用：

```java
val value = 51
val msg = "You're a ${ if (value > 50) "good" else "okay" } man."
println(msg) // You're a good man.
```

生成随机数：

```java
import java.util.*
println(Random().nextInt(6)) // 0-5的随机整数
```

定义循环名称：

```java
abc@for (i in 1..10) {
    if (i == 3) break@abc // 在名为abc的循环中，当i等于3，退出循环
    print(i) // 12
}

从用户输入得到1个整数：

```java
val a = readLine()?.toIntOrNull() ?: 1 // toIntOrNull如果不能转换成整数，则转换成null；如果是null，则赋值为1
```

### function示例

求和的function：

```java
fun sum(a: Int, b: Int): Int {
    return a + b
}
```

返回带有参数值的字符串：

```java
fun printSum(a: Int, b: Int): Unit { // Unit代表不返回任何值
    println("sum of $a and $b is ${a + b}")
}
```

给参数设置默认值：

```java
fun basket(apple: Int, egg: Int = 5) { // 设置默认定值
    println(egg)
}
basket() // error
basket(apple=3) // 5
basket(3) // 5
basket(apple=1, egg=3) // 3
basket(1, 3) // 3
```

```java
fun getNewDefault() = 10

fun printData(targetData : Int = getNewDefault()) { // 以fun设置默认值
    // 这种方法在未给出默认值，且fun过于复杂时，有内存溢出的危险
    // 特别是getNewDefault的功能为读取文件等非常消耗内存的时候
    // 因为每次执行printData function时，都会用getNewDefault function创建一个对象
}
```

function返回值：

```java
fun basket() : String {
    return "hello" // 返回hello
}

helper functions：

```java
fun isTooHot(temperature: Int) = temperature > 30
```

重复(repeat)function：

```java
// 一般写法
repeat(3) {
    println("I will run 3 times.")
}

// lambda传参写法
repeat(3, { it: Int -> anotherFunction(it)}) // 使用lambda传it到anotherFunction运行
fun anotherFunction(i : Int) {
    print(i)
} // 012

// 另一种lambda写法
repeat(3, { it: Int -> println(it)}) // 012
```

筛选(filter) function：

```java
val spices = listOf("curry", "pepper", "cayenne", "ginger", "red curry", "green curry", "red pepper" ) // 定义数组
spices.filter {it.contains("curry")} // 含有curry的元素
      .sortedByDescending {it.length} // // 按长度降序排列：[green curry, red curry, curry]
spices.asSequence().filter {it.contains("curry")} // 懒加载保存起来：kotlin.sequences.FilteringSequence@13c90c06
// 3种方法，同一个结果，取首字母为c，末字母为e的元素
spices.filter {it[0] == 'c' && it.takeLast(1) == "e"} // [cayenne]
spices.filter {it.startsWith('c') && it.endsWith('e')} // [cayenne]
spices.filter {it.startsWith('c')}
      .filter {it.endsWith('e')} // [cayenne]
// 在前3个元素中，取首字母为c的元素
spices.take(3).filter {it[0] == 'c'} // [curry, cayenne]
```

筛选(filter) 贪婪/懒惰加载：

```java
val spices = listOf("curry", "pepper", "cayenne", "ginger", "red curry", "green curry", "red pepper" )
// 贪婪加载：直接执行，并赋值给eager
val eager = spices.filter {it.contains("curry")}
println(eager) // [curry, red curry, green curry]
// 懒惰加载：暂存序列，待需要的时候执行
val filtered = spices.asSequence().filter {it.contains("curry")} // kotlin.sequences.FilteringSequence@13c90c06
println(filtered.toList()) // [curry, red curry, green curry]
// 验证懒惰加载的demo
val lazyMap = spices.asSequence().map {
    println("map: $it") // 不会打印任何项
    it
}
println("Fitst item is ${lazyMap.first()}") // map: curry; first item is curry
```

匿名(lambda) function：

```java
val printA = { println('a') }
printA() // a
val printX = { x : Char -> println(x) }
printX('b') // b
val divideThem : (Int, Int) -> Int = { dividend, divider -> dividend / divider }
divideThem(9, 3) // 3
```

匿名(lambda) function demo：

```java
var dirty = 20 // 设定初始鱼缸的肮脏度为20

val waterFilter: (Int) -> Int = { dirty -> dirty / 2 } // 净水器可把肮脏度 / 2
fun feedFish(dirty: Int) = dirty + 10 // 每喂一次食，肮脏度 + 10

fun updateDirty(dirty: Int, operation: (Int) -> Int): Int {
    return operation(dirty) // 更新肮脏度的function，参数为"现有肮脏度"和"操作名称"
}

fun dirtyProcessor() { // 操作流程
    dirty = updateDirty(dirty, waterFilter) // 净水，20 / 2 = 10。得益于lambda fun，dirty参数被直接传入waterFilter了
    dirty = updateDirty(dirty, ::feedFish) // 喂食，10 + 10 = 20。由于是普通fun，为避免直接呼出，需要在前面加::
    dirty = updateDirty(dirty) { dirty -> dirty + 50 } // 传入lambda参数，直接更新肮脏度： 20 + 50 = 70
    // dirty = updateDirty(dirty, { dirty -> dirty + 50 }) // lambda fun也可以这样写，等价与上一条
}
```

lambda 随机数demo：

```java
// 引入random
import java.util.*
val random = Random()
// fun类型的lambda，推荐使用
val rollDice: (Int, Int) -> Int = { from, to ->
                    if (to == 0) 0
                    else random.nextInt(to) + from
}
println(rollDice(1, 4)) // 返回随机数1-4
// 另一种写法，变量类型的lambda，没有声明返回类型，不易读，不推荐使用
val rollDice2 = { from: Int, to: Int ->
                    if (to == 0) 0
                    else random.nextInt(to) + from
}
println(rollDice(1, 4)) // 返回随机数1-4
```

## 类(class)

public：默认装饰符。可被任何地方看到。类和公有成员。
private：作用于class内部。子类无法。
protected：作用于class内部。子类**可以**看到。
internal：作用于模块(module)内部。

成员的定义方法：

```java
// 定义一个”盒子“类
class Box(var length: Int = 100,
          var width: Int = 20,
          var height: Int = 30) {
    var volume: Int
        get() = width * length * height / 1000
        set(value) = { height = (value * 1000) / (width * length) }
}

fun main(args: Array<String>) {
    val middleBox = Box() // 实例化
    middleBox.length // 100cm
    middleBox.volume // colume的getter function：100 * 20 * 30 / 1000 = 60 cm3
    middleBox.volume = 80 // colume的setter function：设置容积为80cm3
    middleBox.height // 高则会被设置为40cm，以达到所需容积
}
```

第二构造函数(secondary constructor)(不推荐直接使用，而用helper function取代)：

```java
class Box(var length: Int = 100,
          var width: Int = 20,
          var height: Int = 30,
          optionalValue: Int = 1) {
    var volume: Int
        get() = width * length * height / 1000
        set(value) = { height = (value * 1000) / (width * length) }

    constructor(numberOfCandy: Int): this() {
        var volume = numberOfCandy * 2 // 假设1个糖果占2cm3，则算出所需容积
        height = volume * 1000 / (width * length) // 根据容积算出盒子所需高度
    }
}

fun main(args: Array<String>) {
    val bigBox = Box(numberOfCandy = 50) // 注意：这里不能再传入width等参数，因为会与默认构造函数冲突
    biglBox.height // 高度为：(50 * 2) * 1000 / (100 * 20) = 50
    bigBox.volume // 容积为：100 * 20 * 50 / 1000 = 100
}
```

初始化(init)构造函数：

```java
class Fish(val friendly: Bollean = true, volumeNeeded: Int) {
    val size: Int

    init {
        if (friendly) {
            size = volumeNeeded
        } else {
            size = volumeNeeded * 2
        }
    }
}

fun main(args: Array<String>) {
    val shark = Fish(false, 5)
    // 如果不带val或var，volumeNeeded将不会被保存到成员中。也就是说shark.volumeNeeded不存在
    shark.volumeNeeded // error
    shark.size // 10
}
```

初始化构造函数和第二构造函数的注意事项：

1. 运行顺序：默认构造函数 -> 初始化构造函数 -> 第二构造函数
2. 初始化构造函数可以有多个，运行顺序自上而下。如果要用init，须确保init中的属性已经存在
3. 一般不用第二构造函数。如果必须要用，则建议用helper function创建基于第二构造函数的实例

举例：

```java
class Fish(val friendly: Boolean = true, volumeNeeded: Int) {
    val size: Int

    init {
        println("First init block")
    }

    constructor() : this(true, 1) {
        println("This is secondary constructor")
    }

    init {
        if (friendly) {
            size = volumeNeeded
        } else {
            size = volumeNeeded * 2
        }
    }

    init {
        println("Size is ${this.size}, volumeNeeded is $volumeNeeded")
    }

    init {
        println("Last init block")
    }
}

fun makeDefaultFish() = Fish(true, 1) // helper function，目的是使用第二构造函数

fun main(args: Array<String>) {
    val cod = Fish(true, 3)
    println("This fish is friendly? ${cod.friendly}, it needs volume ${cod.size}")
}
/* 结果：
First init block
Size is 3, volumeNeeded is 3
Last init block
This fish is friendly? true, it needs volume 3
*/
```

(未完待续)
