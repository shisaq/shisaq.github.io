---
title: "The Purpose of the value Variable in AE Expressions"
subtitle: "AE Study Notes"
date: 2022-01-12
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["After Effects", "expressions", "value", "keyframes", "tutorial"]
original: _posts/2022-01-12-after-effects-expressions-value.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
## The default value of value

In After Effects expressions, `value` can be used as a default value. If both keyframes and an expression are present, you can add `value` to the expression, so that an `if` statement can output either the expression's result or the keyframe result depending on the case, giving you flexible control over the output.

## Example

```javascript
// If the controller's checkbox is false, output 1920
if (thisComp.layer("Controller").effect("Checkbox Control")("Checkbox") == false) {
	1920;
// If true, disable this expression and the original keyframes take effect
} else {
    value;
}
```

Also, `value` doesn't necessarily stand in for just one value. If a property has multiple default values, for example `position` has `x` and `y` values, you can use `value[0]` for the first default value, `value[1]` for the second, and so on.

Of course, you can also right-click a property with multiple dimensions and choose Separate Dimensions for flexible control.
