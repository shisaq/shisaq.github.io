---
author: shisaq
comments: false
date: 2016-04-14 13:40:37+00:00
layout: post
link: http://shisaq.com/setting-up-sublime-text-3-with-terminal.html
slug: setting-up-sublime-text-3-with-terminal
title: Setting Up Sublime Text 3 With Terminal
wordpress_id: 97
categories:
- 前端学习笔记
---

Nowdays I’m learning “Git and Github” in Udacity, setting up my Sublime Text 3 with Terminal.

这几天我正在Udacity上学习Git and Github这门课，以下是我设置Sublime Text3 和Terminal（终端）配对的大概步骤。

Pay Attention:



 	
  1. I’m using Mac instead of Win or Linux;

 	
  2. I have installed [Homebrew](http://brew.sh/), that means my terminal had changed into zsh;

 	
  3. I use Sublime Text 3, but I also installed Xcode in case there’s anything unknown happen.


注意：



 	
  1. 我用的是mac，不是win或者linux；

 	
  2. 我装过[Homebrew](http://brew.sh/index_zh-cn.html)，也就是说我现在的终端是zsh而不是bash；

 	
  3. 我平时用的是Sublime Text 3，但是我还是装了xcode以免发生一些不明原因的状况。




## **Step 1: Connect Sublime Text 3 with Terminal(more info, click **[**this**](https://classroom.udacity.com/courses/ud775/lessons/2980038599/concepts/33331589510923)**)**


Do this by add the following line to your .zshrc (this just appears in zsh shell; and you may need to change the path if Sublime is installed in a different location for you):

把如下命令复制到电脑home下的 .zshrc 文件中（这个文件仅在安装了Homebrew的zsh shell才会有，如果你用的是mac自带的终端，应该参考以上链接，复制到 .bash_profile中。另外，如果你的sublime路径与如下的不同，请自行更改路径。)

`alias subl="/Applications/Sublime\ Text\ 3.app/Contents/SharedSupport/bin/subl"`




### **You can do this to test if you have succeed:**





 	
  1. Open your Terminal;

 	
  2. Press subl;

 	
  3. Then Sublime should appear on your screen.




### **如果按如下步骤测试，出现第3步的状况，则证明已经配置成功：**





 	
  1. 打开终端；

 	
  2. 输入subl；

 	
  3. Sublime 应该已经被你打开了。




## **Step 2: Set Sublime Text 3 to the default editor**





 	
  1. Restart Terminal;

 	
  2. Press these command one by one:

 	
  3. `git config --global core.editor "subl -n -w"`
`git config --global push.default upstream`
`git config --global merge.conflictstyle diff3`

 	
  4. Then if you press “git commit”, you can use Sublime Text 3 instead of vi.



 	
  1. 重启终端；

 	
  2. 输入以下命令：

 	
  3. `git config --global core.editor "subl -n -w"`
`git config --global push.default upstream`
`git config --global merge.conflictstyle diff3`

 	
  4. 然后如果你输入“git commit”的时候，vi就不会自己弹出来了，取而代之的是Sublime Text 3。




### **部分说明（参考**[**这里**](http://ju2ender.github.io/2013/08/24/my-stagger-along-git-guide.html)**）:**


-global 选项表示全局配置，-w 表示 wait，将使 Terminal/Command 不会进入下一个命令提示符，直到你将 Sublime Text 中的文件关闭。这么说可能有些难以理解，举个例子：

在你输入 $ git commit -a 后将打开 Sublime Text 让你输入提交信息，但 Terminal/Command 并不会进入下一个提示符状态等待你输入指令，而是在输入提交信息并关闭 Sublime Text 中的该文件页面后才会显示处理结果并进入到下一个命令提示符，这就是 -w 的效果。

至此配置完成。

使用的时候还是一样执行 git commit，但就不会打开 vi 了，而是打开 Sublime Text，编辑内容后保存，关闭即可。关闭文件后焦点会再次回到 terminal 上。

Git 的默认编辑器是 vi，所以要想恢复过来的话，执行：

`$ git config --global core.editor vi`


