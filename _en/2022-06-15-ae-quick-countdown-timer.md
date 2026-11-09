---
title: "Quickly Create a Countdown in After Effects"
subtitle: "Editing Notes"
date: 2022-06-15
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["After Effects", "countdown", "expressions", "tutorial"]
original: _posts/2022-06-15-AE快速创建倒计时.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
> Reference: [After Effects Tutorial - Creating a Countdown Timer Using Expressions](https://www.youtube.com/watch?v=2qLJK5W57II)

## Core code

```javascript
slider = thisComp.layer("Slider Control").effect("Slider Control")("Slider");

sec = Math.floor(slider%60);
min = Math.floor(slider/60);


function zero(x) {
	
if (x<10) return "0" + x
		
else return x
		
}
	
zero(min) + ":" + zero(sec)
```

## Steps

1. Create a new Null layer, name it `Slider Control`, and add a "Slider Control" property. ![Slider Control](https://raw.githubusercontent.com/shisaq/images/master/images/sliderControl.png)
2. Create a new text layer.
3. In the text layer, Alt+left-click "Source Text" and paste the core code into it.
4. Alt+left-click the Slider Control property on the Null layer and enter `value - time`;
5. Adjust the value of the Slider Control property on the Null layer; the value = the number of minutes you want for the countdown x 60. For example, for a 10-minute countdown, enter 600, i.e., 10x60.
