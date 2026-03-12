---
layout: post
title: "Google Voice Kit V1 基础硬件复活与配置指南"
subtitle: "Google Voice Kit V1 基础硬件复活与配置指南"
date: 2026-03-08
author: "shisaq"
header-img: "img/about-bg-walle.jpg"
tags: ["技术分享", "生产力"]
---

**适用环境：**

* **硬件：** 树莓派 (Raspberry Pi) + Google Voice Kit V1 (Voice HAT 扩展板)
* **系统：** Raspberry Pi OS (基于 Debian Bookworm 或更新版本，内核 6.x+)

## 1. 激活底层硬件驱动

现代树莓派系统的硬件树配置文件已迁移至 `/boot/firmware/` 目录。需要禁用板载默认音频，并加载 Voice HAT 专用驱动。

**操作步骤：**
编辑配置文件：

```bash
sudo nano /boot/firmware/config.txt
```

进行以下两处修改：

1. 注释掉默认音频（若存在）：

```ini
#dtparam=audio=on
```


2. 在文件末尾追加 Voice HAT 驱动树覆盖指令：

```ini
dtoverlay=googlevoicehat-soundcard
```

保存并退出（`Ctrl+O`, `Enter`, `Ctrl+X`），然后重启系统：

```bash
sudo reboot
```

## 2. 验证声卡并获取设备序号

重启后，确认系统已正确识别 Voice HAT 硬件。

**操作步骤：**
执行音频设备列表查询：

```bash
aplay -l
```

**预期输出：**
寻找包含 `snd_rpi_googlevoicehat_soundcard` 的条目。记下其对应的卡号（例如 `card 1` 或 `card 0`）。后续配置以 `card 1` 为例。

## 3. 配置 ALSA 全局音频路由

通过定义用户级 ALSA 配置文件，强制系统将 Voice HAT 设为全局默认音频输入/输出设备，并利用 `plug` 插件自动处理音频重采样。

**操作步骤：**
创建或编辑当前用户的 ALSA 配置文件：

```bash
nano ~/.asoundrc
```

写入以下配置（注意将 `hw:1,0` 和 `card 1` 中的 `1` 替换为上一步获取的实际卡号）：

```text
pcm.!default {
    type plug
    slave.pcm "hw:1,0"
}

ctl.!default {
    type hw
    card 1
}
```

保存并退出。此时，系统的基础音频层已配置完毕。

## 4. 依赖安装与 MVP 脚本编写

Voice HAT 的按键和 LED 直接连接在树莓派的标准 GPIO 上（按键=GPIO 23，LED=GPIO 25）。使用 `gpiozero` 库进行控制。

**操作步骤：**
安装必要的 Python 依赖：

```bash
sudo apt update
sudo apt install python3-gpiozero
```

创建测试脚本：

```bash
nano voice_mvp.py
```

填入以下代码：

```python
from gpiozero import Button, LED
from signal import pause
import subprocess

# Voice HAT V1 硬件引脚定义
BUTTON_PIN = 23  
LED_PIN = 25     
# 测试用系统自带音频文件
AUDIO_FILE = "/usr/share/sounds/alsa/Front_Center.wav" 

button = Button(BUTTON_PIN)
led = LED(LED_PIN)

def on_button_pressed():
    print("[Event] Button Pressed")
    led.on()
    
    try:
        # 由于已配置 ~/.asoundrc，此处无需指定设备参数
        subprocess.run(["aplay", AUDIO_FILE])
    except Exception as e:
        print(f"[Error] Audio playback failed: {e}")
        
    led.off()
    print("[Status] Playback complete. Awaiting next trigger.")

# 绑定按键事件
button.when_pressed = on_button_pressed

print("[System] Initialization complete. Listening for hardware interrupts...")
pause()
```

## 5. 运行测试

执行脚本：

```bash
python3 voice_mvp.py
```

**测试标准：** 按下设备顶部物理按钮，LED 指示灯点亮，扬声器播放 "Front Center" 语音，随后 LED 熄灭，终端输出对应日志。
