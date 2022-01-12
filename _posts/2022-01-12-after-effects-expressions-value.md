---
layout: post
title: "AE 表达式特定变量 Value 的用途 After Effects Expression Default Value"
subtitle: "AE学习笔记"
date: 2022-01-12
author: "shisaq"
header-img: "img/about-bg-walle.jpg"
tags: []
---

## value 默认值

在 After Effects 表达式 (expression) 中，`value` 可作为默认值出现。如果既有关键帧，又有表达式，可在表达式中加入 `value`，这样可以通过 `if` 语句分情况输出表达式的结果或者关键帧的结果，达到灵活控制输出结果的效果。

## 例子

```javascript
// 如果控制器的 checkbox 为 false，则输出 1920
if (thisComp.layer("控制器").effect("Checkbox Control")("Checkbox") == false) {
	1920;
// 如果为 true，则废除该表达式，原有关键帧将会生效
} else {
    value;
}
```

另外，`value` 不一定仅可取代1个值。如果一个属性中有多个默认值，例如 `position`有 `x` 和 `y` 值，则可用 `value[0]` 代表第1个默认值，`value[1]` 代表第2个默认值，以此类推。

当然，也可以通过右键点击带有多个参数的属性-分离属性，以达到灵活控制的目的。