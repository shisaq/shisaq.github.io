---
author: shisaq
comments: true
date: 2016-06-14 14:43:22+00:00
layout: post
link: http://shisaq.com/a-simple-h5-game-angry-bugpart-2.html
slug: a-simple-h5-game-angry-bugpart-2
title: A Simple H5 Game -- Angry Bug(part 2)
wordpress_id: 170
categories:
- 前端学习笔记
---

### Now it's time to sum up `canvas` :





 	
  1. `canvas` （画布）is an element of html documents. When using it, we must define the width and height of it, so that the browser can know how large the canvas is;

 	
  2. Actually, we need to use JavaScript to draw on canvas. Yeah, JavaScript looks like a pen;

 	
  3. To start drawing, we need get the context of the canvas first. Here is a simple example:

[caption id="" align="aligncenter" width="677"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160613_14.png) simple example[/caption]

 	
  4. Draw an image into the canvas:




    
    <span style="color: #cd2828; font-weight: bold;"><!DOCTYPE html></span>
    <span style="color: #6ab825; font-weight: bold;"><html></span>
    <span style="color: #6ab825; font-weight: bold;"><head></span>
      <span style="color: #6ab825; font-weight: bold;"><meta</span> <span style="color: #bbbbbb;">charset=</span><span style="color: #ed9d13;">"utf-8"</span><span style="color: #6ab825; font-weight: bold;">></span>
      <span style="color: #6ab825; font-weight: bold;"><title></span>demo<span style="color: #6ab825; font-weight: bold;"></title></span>
    <span style="color: #6ab825; font-weight: bold;"></head></span>
    <span style="color: #6ab825; font-weight: bold;"><body></span>
      <span style="color: #6ab825; font-weight: bold;"><canvas</span> <span style="color: #bbbbbb;">id=</span><span style="color: #ed9d13;">"c"</span> <span style="color: #bbbbbb;">width=</span><span style="color: #ed9d13;">"200"</span> <span style="color: #bbbbbb;">height=</span><span style="color: #ed9d13;">"200"</span><span style="color: #6ab825; font-weight: bold;">></canvas></span>
      <span style="color: #6ab825; font-weight: bold;"><script></span>
        // connect the canvas that the id is "c"
        var c = document.querySelector("#c");
        // make canvas to 2d cavas.
        var ctx = c.getContaxt("2d");
    
        // define "image" to a brand new image object
        var image = new Image();
        // when image is loaded, run this function
        image.onload = function () {
          ctx.drawImage(image, 0, 0, c.width, c.height); 
        }
    
        image.src = 'abc.jpg'; // you can add local or online sources
      <span style="color: #6ab825; font-weight: bold;"></script></span>
    <span style="color: #6ab825; font-weight: bold;"></body></span>
    <span style="color: #6ab825; font-weight: bold;"></html></span>
    





 	
  5. We also can draw our own patterns onto the canvas.
`ctx.fillRect(100, 100, 100, 100); // this will draw a fufill rectangle`
``ctx.strokeRect(50, 50, 50, 50); // this can draw a blank rectangle
``

[caption id="" align="aligncenter" width="235"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160613_17.png) rectangle[/caption]

 	
  6. If you want to erase the entire canvas, you could call `clearRect` with the dimensions of canvas as follows:`ctx.clearRect(0, 0, c.width, c.height);`

 	
  7. Draw paths!
`// Draw "天" by using paths`
`ctx.beginPath();`
`ctx.moveTo(10, 10);`
`ctx.lineTo(30, 10);`
`ctx.moveTo(5, 20);`
`ctx.lineTo(35, 20);`
`ctx.moveTo(20, 10);`
`ctx.lineTo(5, 35);`
`ctx.moveTo(15, 20);`
`ctx.lineTo(35, 35);`
`ctx.save();
ctx.stroke();`

 	
  8. Canvas2D allows us to translate (move), rotate, or scale objects.


#### Scaling


`scale(x,y)` multiplies the x and y values by a given factor so

`ctx.scale(2,3);`

will make all values twice as large on the x axis and three times as large on the y axis.


#### Translation


`translate(x,y)` moves all subsequent draw commands by `x` number of pixels on horizontally and `y` pixels vertically.

`ctx.translate(20,40);` moves all elements drawn after it 20 pixels to the rights and 40 pixels down.

The `translate()` method remaps the (0,0) position on the canvas.

[caption id="" align="aligncenter" width="384"]![](http://7xpx1z.com1.z0.glb.clouddn.com/Snip20160614_19.png) translate[/caption]


#### Rotation


`ctx.rotate(angleRadians)` rotates an object a certain number of radians (generally) about its center. You may have learned about radians in school but here's a handy formula to convert a value from degrees to radians.

`radians = degrees * (Math.PI/180)`

 	
  9. Every `canvas` object contains a stack of drawing states. Stacks are data structures that only let you push new items at the end. When you retrieve an item, it's the last item that was pushed or Last In-First Out(LIFO).

    
    var c = document.querySelector("#c");
    var ctx = c.getContext("2d");
    
    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,50,50);
    
    // Save state with blue fill
    ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(100,100,10,10);
    // Restore to blue fill
    ctx.restore();
    
    ctx.fillRect(200,10,20,20);




 	
  10. Add color to the canvas:
`ctx.fillStyle = "green";`

 	
  11. Add text:
`ctx.strokeText("the text", 10, 10);`

 	
  12. We can make our own image effect program by dealing with the image data.
e.g:
`image.onload = function () {`
`console.log('loaded image');`
`ctx.drawImage(image, 0, 0, image.width, image.height);`
`var ImageData = ctx.getImageData(0, 0, image.width, image.height);`

`// put image into grayscale`
`var grayScale = function(imagedata) {`
`for(var i=0; i<imagedata.data.length; i+=4) {`
`var redItem = imagedata.data[i]; //red`
`var greenItem = imagedata.data[i+1]; //green`
`var blueItem = imagedata.data[i+2]; //blue`
`// this is a Math: Gray = (Red + Green + Blue) / 3`
`var grayItem = (redItem + greenItem + blueItem) / 3; //gray`
`imagedata.data[i] = grayItem;`
`imagedata.data[i+1] = grayItem;`
`imagedata.data[i+2] = grayItem;`
`}`
`ctx.putImageData(imagedata, 0, 0);`
`}`
`grayScale(ImageData);`

 	
  13. `requestAnimationFrame` is an awesome engine that support almost all the modern browsers. It just redraw the canvas over and over again, depending the speed of the local computer. As I see, it's a loop. There is a good interpreter that explained what `requestAnimationFrame` is and how to use it: [Animating with requestAnimationFrame](https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm)


Read more

[window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

[requestAnimationFrame for Smart Animating](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

[Kibo: A simple JavaScript library for handling keyboard events](https://github.com/marquete/kibo)

[CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

[Seven grayscale conversion algorithms](http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/)

[HTML canvas translate() Method](http://www.w3schools.com/tags/canvas_translate.asp)


