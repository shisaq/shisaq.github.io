---
author: shisaq
comments: true
date: 2016-06-14 01:57:15+00:00
layout: post
link: http://shisaq.com/a-simple-h5-game-angry-bugpart-1.html
slug: a-simple-h5-game-angry-bugpart-1
title: A Simple H5 Game -- Angry Bug(part 1)
wordpress_id: 168
categories:
- 前端学习笔记
---

Recently, on my way processing Udacity Front-end Nanodegree, I met a project called "Classic Arcade Game", developed by Object Oriented JavaScript and HTML5. Here is my result : [https://github.com/shisaq/frontend-nanodegree-arcade-game](https://github.com/shisaq/frontend-nanodegree-arcade-game)

In the beginning of this project, when I received the resources, opening `index.html` , wow what a pity! There was nothing except a totally blank white page. After a long time fighting against my hopeless, I started to dig into the project.


## What I had learned:





 	
  1. Object Oriented JavaScript, including scopes（作用域）, closures（闭包）, `this` keyword, prototype chains（原型链）, object decorator pattern（对象修饰模式）, functional classes（功能类）, prototypal classes（原型类）, subclasses and superclasses（子类和父类）, and what's more: pseudoclassical subclasses（伪类，不确定是否翻译正确）.

 	
  2. HTML5 `canvas` basics.




## OK, now I want to explain the concepts to myself:




### First, Object Oriented JavaScript:





 	
  1. **Scopes:** define where can variable use. If the variable is defined out of any function, it may be in a global scope, and can be called by anyone. But it's not a good idea to set too many variables cuz it will be easy to make conflicts.

 	
  2. **Closures:** every function should have access to all the variables from all the scopes surround it. A closure is just any functions that somehow remains available after those after those outer scopes have returned. This can make every function run independent, which does make sense.

 	
  3. **`this` keyword:** this is an amazing concept, which made me confused so much... Anyway, `this` will be inside of a function. If not, `this` means `<global>` . So if `this` is in a function, when the function is called by a entity, the keyword `this` means the entity. Other word, `this` . **So the keyword `this` makes it possible for it to just build one function object, and use it as a method on a bunch of other objects. And every time we call the method, it'll have access to whatever object it's being called on. This can be useful for conserving memory, and it's only possible because we have the parameter `this` .**

 	
  4. **Prototypal chains:** example: `var A = Object.create(B);` Use a link between 2 objects, whenever requesting a property that doesn't in A, it'll use B as a fall back source of properties.

 	
  5. **Object decorator pattern:** for reusing code, and dynamically（动态地） adding some specific actions into an object at the same time, we can use this feature.

[caption id="" align="aligncenter" width="905"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160613_11.png) object decorator pattern in the red box[/caption]

 	
  6. **Functional Classes:** a function that constructs all the common features in a class so that whatever instance（实体） built by this class, it'll have the features from the function. And this class is called functional class. In JavaScript, we should make the first letter of the functional class name uppercase. We can say it's a constructor.

 	
  7. **Prototypal classes:** function sharing prototypal delegation（代表）is the very goal of the prototypal pattern. If method were defined inside the constructor, there really wouldn't be any reason to delegate the instances any prototype at all. I think it is used as an action in order to manipulate the instance which belongs to the functional class.

 	
  8. **Subclasses and superclasses:** the same as the literal meaning. Subclasses can get all the features that is in superclasses, but subclasses can have some particular features just for itself.

[caption id="" align="aligncenter" width="428"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160613_12.png) subclasses and superclasses[/caption]

 	
  9. **Pseudoclassical subclasses:** according my understanding, pseudo means it's not real. So that may means the subclass is not a real subclass of the superclass. But it still can use the features offered by the superclass, and what's more important, the subclass can have its own functions. Actually it sounds just like there's no difference between a pseudoclassical subclass and a real subclass. But it can save the memory, upgrade performance, and it's actually easier to maintain because everything is connected, if you want to change one, you don't need to change everywhere, just find the superclass, then change. Other word, pseudoclassical subclasses can not only add the features for itself, but can add the actions for the instances that belong to it.

[caption id="" align="aligncenter" width="849"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160613_13.png) pseudoclassical subclasses[/caption]




## Read more


[JavaScript闭包初探](https://segmentfault.com/a/1190000004093058)

[JavaScript 物件導向](https://medium.com/@chisuan/javascript-%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-118c7a1a399d#.pwdja989h)

[修饰模式](https://zh.wikipedia.org/wiki/%E4%BF%AE%E9%A5%B0%E6%A8%A1%E5%BC%8F)

[Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[udacity](https://www.udacity.com)
