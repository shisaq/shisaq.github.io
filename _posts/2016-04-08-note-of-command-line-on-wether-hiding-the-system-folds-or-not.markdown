---
author: shisaq
comments: false
date: 2016-04-08 13:42:06+00:00
layout: post
link: http://shisaq.com/note-of-command-line-on-wether-hiding-the-system-folds-or-not.html
slug: note-of-command-line-on-wether-hiding-the-system-folds-or-not
title: Note of command line on wether hiding the system folds or not
wordpress_id: 100
categories:
- 网络资源摘录
---





	
  1. 使用终端命令：显示 Mac 隐藏文件的命令：defaults write com.apple.finder AppleShowAllFiles -bool true

隐藏 Mac 隐藏文件的命令：defaults write com.apple.finder AppleShowAllFiles -bool false

	
  2. 使用打开和保存对话框：在打开和保存对话框中，有一个方便的键盘快捷键来切换隐藏文件的可见度。在活动对话框中按Command+Shift+.（点）就可以显示隐藏文件，再按一次恢复。（这个方法在当时修改.zshrc的时候，不小心改得终端无法使用，同时隐藏文件也无法打开的时候，救了我）

设置键盘快捷键
尽管apple在打开、保存对话框中设置了那个方便的快捷键，但是在普通的finder窗口中却没有。幸运的是，我们可以很轻松的自己设置一个快捷键。
打开Automator（应用程序文件夹中）并选择服务。在资源库中选中“Run Shell Script”并将它拖到右边的工作区中。将以下代码复制到文本框中。
STATUS=`defaults read com.apple.finder AppleShowAllFiles`
if [ $STATUS == YES ];
then
defaults write com.apple.finder AppleShowAllFiles NO
else
defaults write com.apple.finder AppleShowAllFiles YES
fi
killall Finder
最后在上边的Service receives的下拉菜单中选择“no input”，然后将工作流程保存为“Toggle Hidden Files”。
现在，如果你打开Finder——服务菜单，你会看到刚才制作的“Toggle Hidden Files”选项。现在添加键盘快捷键，打开系统偏好设置——键盘，点击快捷键选项卡。在左边选择服务，然后勾上“Toggle Hidden Files”，在它的右边双击鼠标，然后按下你想要设定成为的快捷键。我使用的是Command+Shift+.（点）。



