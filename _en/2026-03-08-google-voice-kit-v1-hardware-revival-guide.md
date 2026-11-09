---
title: "Reviving and Configuring Google Voice Kit V1 Basic Hardware"
subtitle: "Reviving and Configuring Google Voice Kit V1 Basic Hardware"
date: 2026-03-08
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["Google Voice Kit", "Raspberry Pi", "Voice HAT", "ALSA", "GPIO"]
original: _posts/2026-03-08-Google-Voice-Kit-V1基础硬件复活与配置指南.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
**Supported environment:**

* **Hardware:** Raspberry Pi + Google Voice Kit V1 (Voice HAT expansion board)
* **OS:** Raspberry Pi OS (based on Debian Bookworm or newer, kernel 6.x+)

## 1. Enable the low-level hardware driver

The device tree config file on modern Raspberry Pi systems has moved to the `/boot/firmware/` directory. You need to disable the default onboard audio and load the Voice HAT-specific driver.

**Steps:**
Edit the config file:

```bash
sudo nano /boot/firmware/config.txt
```

Make these two changes:

1. Comment out the default audio line (if present):

```ini
#dtparam=audio=on
```


2. Append the Voice HAT device tree overlay directive to the end of the file:

```ini
dtoverlay=googlevoicehat-soundcard
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`), then reboot the system:

```bash
sudo reboot
```

## 2. Verify the sound card and get the device number

After rebooting, confirm that the system has correctly detected the Voice HAT hardware.

**Steps:**
List the audio devices:

```bash
aplay -l
```

**Expected output:**
Look for an entry that contains `snd_rpi_googlevoicehat_soundcard`. Note the corresponding card number (e.g. `card 1` or `card 0`). The configuration below uses `card 1` as an example.

## 3. Configure global ALSA audio routing

By defining a user-level ALSA config file, you force the system to use the Voice HAT as the global default audio input/output device, and use the `plug` plugin to handle audio resampling automatically.

**Steps:**
Create or edit the ALSA configuration file for the current user:

```bash
nano ~/.asoundrc
```

Write the following configuration (make sure to replace the `1` in `hw:1,0` and `card 1` with the actual card number obtained in the previous step):

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

Save and exit. The system's basic audio layer is now configured.

## 4. Install dependencies and write the MVP script

The Voice HAT's button and LED are connected directly to the Raspberry Pi's standard GPIO pins (button = GPIO 23, LED = GPIO 25). Use the `gpiozero` library to control them.

**Steps:**
Install the necessary Python dependencies:

```bash
sudo apt update
sudo apt install python3-gpiozero
```

Create the test script:

```bash
nano voice_mvp.py
```

Enter the following code:

```python
from gpiozero import Button, LED
from signal import pause
import subprocess

# Voice HAT V1 hardware pin definitions
BUTTON_PIN = 23  
LED_PIN = 25     
# System audio file for testing
AUDIO_FILE = "/usr/share/sounds/alsa/Front_Center.wav" 

button = Button(BUTTON_PIN)
led = LED(LED_PIN)

def on_button_pressed():
    print("[Event] Button Pressed")
    led.on()
    
    try:
        # Since ~/.asoundrc is already configured, no device parameters are needed here
        subprocess.run(["aplay", AUDIO_FILE])
    except Exception as e:
        print(f"[Error] Audio playback failed: {e}")
        
    led.off()
    print("[Status] Playback complete. Awaiting next trigger.")

# Bind the button event
button.when_pressed = on_button_pressed

print("[System] Initialization complete. Listening for hardware interrupts...")
pause()
```

## 5. Run the test

Run the script:

```bash
python3 voice_mvp.py
```

**Test criteria:** Press the physical button on top of the device; the LED indicator lights up, the speaker plays the "Front Center" audio, then the LED turns off and the terminal prints the corresponding log messages.
