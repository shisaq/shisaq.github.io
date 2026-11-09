---
title: "Quickly Create a Metaball Effect in AE"
subtitle: ""
date: 2022-04-07
author: "Pixel Li"
header-img: "img/home-bg-art.jpg"
tags: ["After Effects", "metaball effect", "blur", "choker", "motion graphics"]
original: _posts/2022-04-07-快速制作AE融球效果.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
![Quickly create a metaball effect in AE](https://raw.githubusercontent.com/shisaq/images/master/images/choke.jpg)

## How it works

1. Apply a blur effect to the shape layers so their edges spread outward and partially overlap when the shapes get close;
2. Use a choke effect to determine which edges to keep. When 2 shapes are close, the blurred parts overlap, so those parts are counted as **needing to be kept**;
3. Adjust the blur amount and the range of the choke tool separately so that **the blurred parts are removed and only the sharp parts remain**, producing the merge effect.

Let's get started.

## Add a blur effect

Create a new adjustment layer above the shapes you want to merge, and add 1 blur effect to it. Below are 2 blur effects; choose one:

### Fast Box Blur

![Fast Box Blur](https://raw.githubusercontent.com/shisaq/images/master/images/FastBoxBlur.jpg)

Blurs the current layer quickly.

* Blur Radius is the radius of the blur; it controls how strong the blur is
* Iterations controls how many times the blur is applied
* Blur Dimensions controls horizontal blur, vertical blur, or blur in both directions
* Repeat Edge Pixels fills the current layer and prevents the edges from turning transparent when blurred

### (Optional) Gaussian Blur

![Gaussian Blur](https://raw.githubusercontent.com/shisaq/images/master/images/GaussianBlur.jpg)

It has only 1 parameter, Blurriness, and can produce the same effect as Fast Box Blur.

## Add a choke effect

## Simple Choker

![Simple Choker](https://raw.githubusercontent.com/shisaq/images/master/images/SimpleChoker.jpg)

This tool shrinks the edges of a layer using the *Choke Matte* parameter. The larger the value, the more the edges shrink. If the value is negative, it *expands* the edges instead.

## Adjust the parameters

Finally, adjust the following 2 parameters appropriately to achieve the merge effect (the larger the 2 values, the stronger the merge effect):

1. Blur Radius (or Blurriness in Gaussian Blur)
2. Choke Matte
