---
author: shisaq
comments: false
date: 2016-04-29 14:19:03+00:00
layout: post
link: http://shisaq.com/using-the-viewport-meta-tag-to-control-layout-on-mobile-browsers.html
slug: using-the-viewport-meta-tag-to-control-layout-on-mobile-browsers
title: Using the viewport meta tag to control layout on mobile browsers-在移动浏览器中使用viewport元标签控制布局
wordpress_id: 133
categories:
- 网络资源摘录
---

## English Version（[Original Article Link](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)）:


The upcoming release of [Mobile Firefox (Fennec)](https://wiki.mozilla.org/Mobile/Fennec) 1.1 features improved support for the [`<meta name="viewport">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. Previous versions of Fennec supported the `width`, `height`, and `initial-scale` viewport properties, but had [problems](http://starkravingfinkle.org/blog/2010/01/perils-of-the-viewport-meta-tag/) with some sites designed for iPhone and Android browsers. We now support the same properties Mobile Safari does, and we also changed Fennec to render mobile sites more consistently on screens of different sizes and resolutions.


touch.facebook.com before:




![05-11-fennec-meta-viewport-2.png](https://developer.mozilla.org/@api/deki/files/4371/=05-11-fennec-meta-viewport-2.png)




touch.facebook.com after:




![05-11-fennec-meta-viewport-1.png](https://developer.mozilla.org/@api/deki/files/4372/=05-11-fennec-meta-viewport-1.png)


You can see these changes for yourself in the latest [Fennec 1.1](http://ftp.mozilla.org/pub/mozilla.org/mobile/nightly/latest-mobile-1.9.2/) and [trunk](http://ftp.mozilla.org/pub/mozilla.org/mobile/nightly/latest-mobile-trunk/) nightly builds for Maemo, Windows, Mac, or Linux.


## Background


Mobile browsers like Fennec render pages in a virtual "window" (the viewport), usually wider than the screen, so they don't need to squeeze every page layout into a tiny window (which would break many non-mobile-optimized sites). Users can pan and zoom to see different areas of the page.

Mobile Safari introduced the "viewport meta tag" to let web developers control the viewport's size and scale. Many other mobile browsers now support this tag, although it is not part of any web standard. Apple's [documentation](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW29) does a good job explaining how web developers can use this tag, but we had to do some detective work to figure out exactly how to implement it in Fennec. For example, Safari's documentation says the content is a "comma-delimited list," but existing browsers and web pages use any mix of commas, semicolons, and spaces as separators.

Learn more about viewports in different mobile browsers in [A Tale of Two Viewports](http://www.quirksmode.org/mobile/viewports2.html) at quirksmode.org.


## Viewport basics


A typical mobile-optimized site contains something like the following:

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


The `width` property controls the size of the viewport. It can be set to a specific number of pixels like `width=600` or to the special value `device-width` value which is the width of the screen in CSS pixels at a scale of 100%. (There are corresponding `height` and `device-height` values, which may be useful for pages with elements that change size or position based on the viewport height.)

The `initial-scale` property controls the zoom level when the page is first loaded. The `maximum-scale`, `minimum-scale`, and `user-scalable` properties control how users are allowed to zoom the page in or out.


## A pixel is not a pixel


The iPhone and many popular Android phones have 3- to 4-inch (7–10 cm) screens with 320—480 pixels (~160 dpi). Firefox for Maemo runs on the Nokia N900, which has the same physical size but 480—800 pixels (~240 dpi). Because of this, the last version of Fennec displayed many pages about one third smaller (in actual, physical size) than iPhone or Android. This caused usability and readability problems on many touch-optimized web sites. Peter-Paul Koch wrote about this problem in [A pixel is not a pixel](http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html).

Fennec 1.1 for Maemo will use 1.5 hardware pixels for each CSS "pixel," following the lead of Android's WebKit-based browser. This means a page with`initial-scale=1` will render at close to the same physical size in Fennec for Maemo, Mobile Safari for iPhone, and the Android Browser on both [HDPI and MDPI](http://developer.android.com/guide/practices/screens_support.html#range) phones. This is consistent with the [CSS 2.1 specification](http://www.w3.org/TR/CSS2/syndata.html#length-units), which says:


<blockquote>If the pixel density of the output device is very different from that of a typical computer display, the user agent should rescale pixel values. It is recommended that the pixel unit refer to the whole number of device pixels that best approximates the reference pixel. It is recommended that the reference pixel be the visual angle of one pixel on a device with a pixel density of 96dpi and a distance from the reader of an arm's length.</blockquote>


For web developers, this means that 320px be full width in portrait mode at scale=1, on all of the above-mentioned handheld devices, and they may size their layouts and images accordingly. But remember that not all mobile devices are the same width; you should also make sure that your pages work well in landscape mode, and on larger devices like the iPad and Android tablets.

On 240-dpi screens, pages with `initial-scale=1` will effectively be zoomed to 150% by both Fennec and Android WebKit. Their text will be smooth and crisp, but their bitmap images will probably not take advantage of the full screen resolution. To get sharper images on these screens, web developers may want to design images – or whole layouts – at 150% of their final size (or 200%, to support 320-dpi devices such as a retina display iPhone) and then scale them down using CSS or viewport properties.

The default ratio depends on the display density.  On a display with density less than 200dpi, the ratio is 1.0.  On displays with density between 200 and 300dpi, the ratio is 1.5.  For displays with density over 300dpi, the ratio is the integer floor(_density_/150dpi).  Note that the default ratio is true only when the viewport scale equals 1. Otherwise, the relationship between CSS pixels and device pixels depends on the current zoom level.


## Viewport width and screen width


Many sites set their viewport to `"width=320, initial-scale=1"` to fit precisely onto the iPhone display in portrait mode. As mentioned above, this caused [problems](http://starkravingfinkle.org/blog/2010/01/perils-of-the-viewport-meta-tag/) when Fennec 1.0 rendered these sites, especially in landscape mode. To fix this, Fennec 1.1 will expand the viewport width if necessary to fill the screen at the requested scale. This matches the behavior of Android and Mobile Safari, and is especially useful on large-screen devices like the iPad. (Allen Pike's [Choosing a viewport for iPad sites](http://www.antipode.ca/2010/choosing-a-viewport-for-ipad-sites/) has a good explanation for web developers.)

For pages that set an initial or maximum scale, this means the `width` property actually translates into a _minimum_ viewport width. For example, if your layout needs at least 500 pixels of width then you can use the following markup. When the screen is more than 500 pixels wide, the browser will expand the viewport (rather than zoom in) to fit the screen:

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>500, initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


Fennec 1.1 also adds support for `minimum-scale`, `maximum-scale`, and `user-scalable`, with defaults and limits similar to [Safari's](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html). These properties affect the initial scale and width, as well as limiting changes in zoom level.

Mobile browsers handle orientation changes slightly differently. For example, Mobile Safari often just zooms the page when changing from portrait to landscape, instead of laying out the page as it would if originally loaded in landscape. If web developers want their scale settings to remain consistent when switching orientations on the iPhone, they must add a `maximum-scale` value to prevent this zooming, which has the sometimes-unwanted side effect of preventing users from zooming in:

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>initial-scale<span class="token punctuation">=</span>1, maximum-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


This is not necessary in Fennec; when the device changes orientation, Fennec updates the viewport size, the page layout, and JavaScript/CSS properties like`device-width`, based on its new window dimensions.


## Common viewport sizes for mobile and tablet devices


If want to know what mobile and tablet devices have which viewport widths, there is a comprehensive list of [mobile and tablet viewport sizes here](http://viewportsizes.com/). This gives information such as viewport width on portrait and landscape orientation as well as physical screen size, operating system and the pixel density of the device.


## Specifications


<table class="standard-table" >

<tr >
Specification
Status
Comment
</tr>

<tbody >
<tr >

<td >[CSS Device Adaptation
The definition of '<meta name="viewport">' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)
</td>

<td >Working Draft
</td>

<td >Non-normatively describes the Viewport META element
</td>
</tr>
</tbody>
</table>
There is clearly demand for the viewport meta tag, since it is supported by most popular mobile browsers and used by thousands of web sites. It would be good to have a true standard for web pages to control viewport properties. As the standardization process proceeds, we at Mozilla will work to make sure we can implement any changes made during standardization.




## 中文版本（基于[原文](https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag)有部分改动）：


[Mobile Firefox (Fennec)](https://wiki.mozilla.org/Mobile/Fennec) 1.1 增强了对`<meta name="viewport">` 标签的支持。 此前版本的Fennec支持`width、``height及``initial-scale这些`viewport属性，然而对于针对iPhone及Android浏览器设计的站点的支持存在[问题](http://starkravingfinkle.org/blog/2010/01/perils-of-the-viewport-meta-tag/)。现在我们和Mobile Safari支持同样的属性，并且我们让Fennec在尺寸及分辨率各异的屏幕上渲染移动站点时更具一致性。


升级前渲染的touch.facebook.com：




![05-11-fennec-meta-viewport-2.png](https://developer.mozilla.org/@api/deki/files/4371/=05-11-fennec-meta-viewport-2.png)




升级后渲染的touch.facebook.com：




![05-11-fennec-meta-viewport-1.png](https://developer.mozilla.org/@api/deki/files/4372/=05-11-fennec-meta-viewport-1.png)


你可以在最新的[Fennec 1.1](http://ftp.mozilla.org/pub/mozilla.org/mobile/nightly/latest-mobile-1.9.2/)及针对Maemo、Windows、Mac或Linux的nightly[分支](http://ftp.mozilla.org/pub/mozilla.org/mobile/nightly/latest-mobile-trunk/)中体验到这些变化。


## 背景说明


移动端浏览器（如Fennec）在一个通常比设备屏幕更宽的**虚拟”窗口“（视域，也就是viewport）**中渲染页面，从而无需将所有页面都压缩进小屏幕里（那样会把很多没有针对移动端进行优化的站点打乱）。用户可以通过平移和缩放来浏览页面的不同区域。关于viewport，我查了很多地方都注解，最后决定用“视域”作为中文翻译（参见[此链接](http://breezymove.blogspot.com/2012/02/viewport.html)）。

Mobile Safari 引入了”viewport元标签“来让web开发者控制视口的尺寸及比例。虽然它还不是任何web标准的一部分，但已经有许多移动端浏览器支持了这一标签。苹果的[文档](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW29)详尽地说明了web开发人员可以怎样使用这一标签，然而我们还是不得不仔细推敲Fennec究竟应该怎样实现它。例如，Safari的文档指出标签的内容应为”由逗号分隔的列表“，但是现有的浏览器和网页会把逗号、分号和空格都当成分隔符。

可以在[A Tale of Two Viewports](http://www.quirksmode.org/mobile/viewports2.html)了解更多在不同移动浏览器中视域的情况。


## 视域基础


一个典型的针对移动端优化的站点包含类似下面的内容：

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1, maximum-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


`width`属性控制视域的宽度。可以像width=600这样设为确切的像素数，或者设为device-width这一特殊值来指代比例为100%时屏幕宽度的CSS像素数值。（相应地，有`height`及`device-height`属性，可能对包含基于视域高度调整大小及位置的元素的页面有用。）

initial-scale属性控制页面最初加载时的缩放比例。maximum-scale、minimum-scale及user-scalable属性控制允许用户以不同的方式放大或缩小页面。


## 此像素非彼像素


iPhone和许多Android手机有3*4英寸（7*10厘米）大的分辨率为320*480像素的屏幕（~160 dpi）。Firefox for Maemo同样运行在Nokia N900上，它的屏幕具有同样的物理尺寸，但却有着480*800像素的分辨率（~240 dpi）。因此，过去版本的Fennec会把很多页面显示得比在iPhone或Android上小了大约三分之一（物理尺寸）。这导致很多针对触屏优化的网站产生了可用性和可读性的问题。Peter-Paul Koch在[A pixel is not a pixel is not a pixel](http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html)中提到了这一问题。

针对Fennec for maemo 1.1将采取基于WebKit的Android浏览器所使用的方式，以1.5个硬件像素显示每一个CSS”像素“。这意味着一个initial-scale=1的页面在Fennec for Maemo、Mobile Safari for iPhone以及Android浏览器中，无论在[HDPI或是MDPI](http://developer.android.com/guide/practices/screens_support.html#range)手机上，都能显示为相近的物理尺寸。这与[CSS 2.1标准](http://www.w3.org/TR/CSS2/syndata.html#length-units)一致：


<blockquote>如果显示设备的像素密度与特定的电脑显示器差异明显，用户代理应当重新调整像素值。建议像素单位和设备所包含的所有最接近参考像素标准的像素类似。建议以阅读者在一臂距离处观察到的像素密度为96 dpi的设备上的一个像素作为参考像素。</blockquote>


对web开发者来说，这意味着在所有之前提到的手持设备上，比例=1时竖屏模式的最大宽度都是320像素，并且会相应地调整布局及图片的大小。不过要记得不是所有移动设备的宽度都相同，应该确保页面在横屏模式以及iPad与Android平板等更大的设备上工作良好。

在240 dpi及以上的屏幕上，initial-scale=1的页面实际上会被Fennec及Android WebKit浏览器放大至150%。其中的文字会保持平滑锐利，但位图图像在全屏模式下就难免不尽人意了。为了使图片在这些屏幕上变得清晰，web开发者或许会把图片甚至整个布局设计成最终尺寸的150%（或者200%从而支持像配备retina屏的iPhone那样的像素密度高达320 dpi及以上的设备），然后通过CSS或视域属性统一缩小。

默认比例依赖于像素显示密度。在密度低于200 dpi的显示设备上，比例为1.0。在密度介于200及300 dpi之间的显示设备上，比例为1.5。对于具有300 dpi以上密度的显示设备，比例为［密度/150 dpi］向下取整的结果。注意在有在视域比例为1时才会应用默认比例。如果视域比例不是1，CSS像素与设备像素之间的关系则依赖于当前的缩放等级。


## 视域宽度及屏幕宽度


许多站点把视域设为”width=320, initial-scale=1“来准确地适应iPhone在竖屏状态下的显示。如上所述，这会导致Fennec 1.0在渲染这些站点时产生[问题](http://starkravingfinkle.org/blog/2010/01/perils-of-the-viewport-meta-tag/)，尤其是横屏模式下。为了修正这个问题，Fennec 1.1将在必要时扩展视域宽度从而填满屏幕。这与Android和Mobile Safari的做法一致，而这在一点像iPad这样的大屏设备上尤其有用。（Allen Pike的[viewport for iPad sites](http://www.antipode.ca/2010/choosing-a-viewport-for-ipad-sites/)对web开发者做了充分说明）。

对于设置了初始缩放比例或最大缩放限制的页面，width属性实际上变成了**最小视域**宽度。比如，如果你的布局需要至少500像素的宽度，那么你可以使用以下标记。当屏幕宽度大于500像素时，浏览器会扩展视域（而不是放大页面）来适应屏幕：

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>500, initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


Fennec 1.1还增加了对`minimum-scale、` `maximum-scale以及``user-scalable的支持，采用与`[Safari](http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)类似的默认值与限制。这些属性会影响初始尺寸及宽度，并会限制缩放比例。

移动浏览器在处理横竖屏切换时稍有差异。例如，Mobile Safari通常在竖屏转横屏时只缩放页面，而不会把页面重新布局成横屏载入时的效果。如果web开发者想让iPhone在方向切换时保持固定比例，需要增加一个`maximum-scale`值来避免这样的缩放，这会有个副作用，即无形中禁止了用户缩放页面：

    
    <code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>initial-scale<span class="token punctuation">=</span>1, maximum-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>


这在Fennec中并非必要，当设备改变方向时，Fennec会改变视域尺寸，页面布局及Javascript/CSS属性（例如`device-width`），通过适应新的窗口维度来保证显示效果。


## 手机和平板通用的视领域尺寸


如果你想知道各种手机和平板设备各有怎样的视域宽度，[这个网站](http://i-skool.co.uk/mobile-development/web-design-for-mobiles-and-tablets-viewport-sizes/)是手机平板视域尺寸的综合列表参考。它提供了一些诸如横屏及竖屏的视域宽度、物理屏幕宽度、操作系统以及像素密度的信息。


## 标准


既然被绝大多数流行的移动浏览器所支持、被成千上万的站点所使用，对于viewport元标签的需求是显而易见的。如果有一个能让web页面控制视域尺寸的真正的标准是极好的。根据HTML5标准，对meta元素的扩展需要先在[WHATWG wiki](http://wiki.whatwg.org/wiki/MetaExtensions)登记，然后通过W3C标准流程。如果这成为了现实，Mozilla将全力确保我们实现了任何在标准化过程中产生的变化。


## 扩展阅读




[消除viewport的疑惑-移动网页开发](https://www.zybuluo.com/gongzhen/note/170557)




[【原创】移动端高清、多屏适配方案](http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041)




[Udacity免费课程：Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
