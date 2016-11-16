---
author: shisaq
comments: true
date: 2016-06-15 02:04:47+00:00
layout: post
link: http://shisaq.com/javascript-notes.html
slug: javascript-notes
title: JavaScript Notes
wordpress_id: 178
categories:
- 前端学习笔记
---

I learned JavaScript Basics in Udacity. This is the link: [JavaScript Basics](https://www.udacity.com/course/javascript-basics--ud804).


## What I've learned





 	
  1. `console.log(); `//`Let interpreter(Chrome dev tools) print out the content. 让解释器打印出括号里面的内容。`

 	
  2. `var variableName = 'variableValue'; // define a variable and put a value to it. We can also just declare a variable without giving a value to it. 定义一个变量，并指定该变量的值。当然也可以只声明该变量不赋值。
`

 	
  3. `[string].replace([old], [new]); // return the changed value. See MDN link: [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)返回修改后的数值。最好定义一个变量接收该值。
`

 	
  4. `str.slice(beginSlice[, endSlice]); // extracts a section of a string and returns a new string. see MDN link: [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 取出字符串里的一部分，并返回这个取出来的字符串。中括号内可选，如果没输入中括号内的值，则一直取到字符串末尾。不能用在数组里。`

 	
  5. `str.toUpperCase(); // returns the calling string value converted to uppercase. See MDN link: [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 返回该字符串的大写值。str.toLowerCase()返回小写。同理。`

 	
  6. Array: a group of objects. The items can be string, number, array, or function.

 	
  7. `str.length; // return the length of the string or array. 后面没有括号。`

 	
  8. `arr.pop(); // removes the **last** element from an array and returns that element. See link: [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 剔除数组的最后一个元素并将该元素返回。括号中不能加参数。`

 	
  9. `arr.push(); // adds one or more elements to the end of an array and returns the new length of the array. See link: [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 把括号里面的元素加到数组最后，并返回该数组的长度。`

 	
  10. `str.split([separator[, limit]]); // splits a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object into an array of strings by separating the string into substrings. See link: [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 把一个字符串按指定的分隔符分隔成一个数组。中括号里面的limit是可选内容。如果不写，则将整个字符串按分隔符操作一遍；如果写3，则仅返回前3个元素。`

 	
  11. `str.trim(); //removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.). See link: [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) 去掉字符串最前和最后的空格。常和str.split()一起用，以此防止生成的数组中，数组头和数组尾含有空元素。举例说明：`
`var str = " Today is Tuesday! ";`
`var strArr1 = str.split(" ");`
`console.log(strArr1); //  ["", "Today", "is", "Tuesday!", ""]`
`var strArr2 = str.trim().split(" ");`
`console.log(strArr2); // ["Today", "is", "Tuesday!"]`

 	
  12. `str = arr.join([separator = ',']); // joins all elements of an array into a string. See link: [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)把数组中所有元素合并成一个字符串，并返回该字符串。方括号中是可选。如果加了内容，则每两个数组之间会加此内容。通常会加逗号或者空格。`

 	
  13. `var objName = {`
`"name": "shisaq",`
`"age": 32`
`}; // This is an object. A object is capable to  contain string, number, and array. It's like an array. But actually, array is a special object. Because an array just has a list from 0 to the length, but an object can define every value's name. 数组是一种特殊的对象。数组只是一个有序列表，而对象可以给任何值定义任何名字。`

 	
  14. JSON: JavaScript Object Notation. JavaScript对象标识法。跟上面举出的例子一样，JavaScript对象怎么写，JSON就怎么写。主要用来存取数据。注意最后一行末尾不要加逗号（,）。

 	
  15. if Statements.

 	
  16. === is safer than ==

 	
  17. for in loops:
Use `forEach` or `for` to iterate over arrays like:

    
    <code>countries = ['Argentina', 'China', 'England'];</code>


Use `for-in` to loop over objects like

    
    <code>countries = {'country1':'Argentina', 'country2':'China','country3':'England'};</code>


being careful to wrap the content of the `for-in` in a conditional statement that tests if the key is part of the object:

    
    <code>myObj = {'country1':'Germany', 'country2':'Argentina'};
    for (key in myObj){
        if (myObj.hasOwnProperty(key)) {
            console.log(myObj[key]);
        }
    }</code>


For more information, please refer to the [loop section of the Udacity Front End Style Guide.](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop)


