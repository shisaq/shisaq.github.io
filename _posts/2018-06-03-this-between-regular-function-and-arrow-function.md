---
author: shisaq
comments: true
date: 2018-06-03 23:09:21+00:00
layout: post
title: this在普通函数与箭头函数中的不同
categories:
- frontend
---

> `this`这位仁兄在我学习JavaScript的时候，给我造成了不小困扰。如今ES6的箭头函数到来，`this`的用法和之前常规函数又不一样了。此文从`this`原本的用法开始，用一些简单例子试图把这两者间的不同讲清楚。

## `this`在常规函数中的用法

### 代表一个新对象

一般出现在函数被`new`调用的时候：

```javascript
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
```

在名为`Sundae`的构造函数中的`this`代表一个新的对象，因为它被`new`调用了。

### 代表一个特定的对象

一般出现在函数被`call`/`apply`调用的时候：

```javascript
const result = obj1.printName.call(obj2);
```

上面的代码中，`printName()`中的`this`指代的是`obj2`对象，因为`call`方法中的第一个参数指定了`this`指代的对象。

### 代表当前环境对象(context object)

一般出现在*此函数是一个对象的方法*的时候：

```javascript
data.teleport();
```

上面的代码中，`teleport()`中的`this`代表的是`data`。

### 代表全局对象或`undefined`

一般出现在*函数在没有上下文环境的时候被直接调用*：

```javascript
teleport();
```

上面的代码中，`teleport()`中出现的`this`代表的是全局对象；在严格模式(strict mode)中，则代表`undefined`。

> 综上可知，`this`在常规函数中代表的值，取决于 **该函数被如何调用**。而在箭头函数中，`this`代表的值是该函数所在的上下文环境的值。很拗口，举例说明吧。

让我们把`this`放在常规函数中举个例子：

```javascript
// 构造函数
function IceCream() {
    this.scoops = 0;
}

// 多加1勺冰淇淋
IceCream.prototype.addScoop = function() {
    setTimeout(function() {
        this.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop(); // scoop added!
```

此时，如果对`this`的概念不够熟悉的话，你可能以为`this.scoops`在0.5秒之后已经变成`1`了。然而并没有：

```javascript
console.log(dessert.scoops); // 0
```

因为`setTimeout()`没有被`new`、`call()`、`apply()`调用，也没有被上下文对象调用。也就是说，这个`setTimeout()`里的函数中的`this`指代的是全局对象，而不是实例化的`dessert`。

因此，`dessert.addScoop();`这行代码做的事情其实是这样的：

1. 定义一个名为`scoop`的全局变量，因为没有默认值，所以此时值为`undefined`；
2. `scoop + 1`也就是：`undefined + 1 == NaN`

```javascript
console.log(scoops); // NaN
```

修复这个问题的方法之一，是用闭包：

```javascript
// 构造函数
function IceCream() {
    this.scoops = 0;
}

// 多加1勺冰淇淋
IceCream.prototype.addScoop = function() {
    const that = this;
    setTimeout(function() {
        that.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop(); // scoop added!
```

此时，在`setTimeout()`中，我们没有用它自己的`this`，而是把`IceCream`构造函数中的`this`传给了`that`变量，从而避免了`setTimeout()`错误地使用全局对象。这样，`addScoop()`就可以顺利实现啦：

```javascript
console.log(dessert.scoops); // 1
```

其实，箭头函数可以直接做到这一点：

```javascript
// 构造函数
function IceCream() {
    this.scoops = 0;
}

// 多加1勺冰淇淋
IceCream.prototype.addScoop = function() {
    setTimeout(() => { // setTimeout传入箭头函数
        this.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop(); // scoop added!
```

由于箭头函数被传到`setTimeout()`中，所以它继承的是`setTimeout()`所在上下文环境中的`this`，也就是`dessert`，所以`addScoop()`可以正常运行：

```javascript
console.log(dessert.scoops); // 1
```

同理，为了更进一步理解箭头函数，我们可以把`addScoop()`也改成箭头函数：

```javascript
// 构造函数
function IceCream() {
    this.scoops = 0;
}

// 多加1勺冰淇淋
IceCream.prototype.addScoop = () => { // 把 addScoop 改为箭头函数
    setTimeout(() => { // setTimeout传入箭头函数
        this.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop(); // scoop added!
```

猜猜这次`dessert.scoops`的结果是什么？是`0`。这跟我们没有加入闭包的常规函数的结果是一样的：

```javascript
console.log(dessert.scoops); // 0
```

因为箭头函数继承的是上下文环境的`this`。因此在`addScoop()`方法外部的`this`指代的是全局对象。由此导致`setTimeout()`中的箭头函数的`this`也指代的是全局对象：

```javascript
console.log(scoops); // undefined + 1 == NaN
```

> 因此，箭头函数中的`this`，指代的就是`此处`，**当前的上下文大环境**。

更多关于`this`的解读，可参考[你不知道的JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)
