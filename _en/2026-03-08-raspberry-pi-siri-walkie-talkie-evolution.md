---
title: "Become Siri: A Raspberry Pi Physical Walkie-Talkie Evolution Guide"
subtitle: "Become Siri: A Raspberry Pi Physical Walkie-Talkie Evolution Guide"
date: 2026-03-08
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["Raspberry Pi", "voice assistant", "STT TTS", "hardware", "LLM"]
original: _posts/2026-03-08-树莓派变身Siri.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
## 1. Architecture: Single Source of Truth

To build a voice assistant on a severely resource-constrained Raspberry Pi, this design abandons the traditional continuously-listening daemon model and instead adopts a geeky **"event-driven + direct CLI calls"** architecture.

* **One brain, many endpoints**: A Python script hijacks the physical button and audio peripherals, calling `picoclaw agent`'s in single-run (CLI) mode directly on the local machine. This means the physical walkie-talkie on the desk and the Feishu (a Chinese workplace collaboration app) bot in the cloud **share the same LLM brain, the same Feishu credentials and context, and the same local sandbox workspace (`~/.picoclaw/workspace`)**.
* **Extremely lightweight**: The low-level components wake up only at the moment the button is pressed. After the button is released, the audio stream quickly passes through Volcano Engine (STT) -> local PicoClaw (LLM) -> Microsoft Azure (TTS), with very low memory usage throughout.

## 2. Key Pitfalls and Fixes

In this cross-domain work connecting low-level hardware audio to the LLM's plain text, we hit and solved these very subtle hidden system-level pitfalls:

### 2.1 The Physical Button's "Ghost Repeated Presses" (Mechanical Bouncing)

* **Symptom**: A one-second press made the program report `[系统忙碌]` (system busy) countless times, and even got the recording process killed instantly, causing a fatal error.
* **Solution**: This came from the physical bounce of the arcade button's metal microswitch. During `gpiozero` initialization, we explicitly set the hardware debounce parameter `bounce_time=0.3`, so the system ignores all spurious signals within 300 milliseconds.

### 2.2 Audio Lockup and "Swallowed Words" (Buffer Overrun)

* **Symptom**: Frequent `overrun!!!` (buffer overflow) errors, or the first one or two words of every utterance (such as "Beijing") always getting missed; and even after the script crashed, zombie processes could leave the microphone permanently locked.
* **Solution**:
1. **Startup nuclear cleanup**: Added `killall -9 arecord mpg123` at the top of the Python script to force-kill orphan processes on every launch, so the sound card is completely clean.
2. **Very large buffer**: Added the `--buffer-time=250000` parameter to `arecord`, completely eliminating frame-drop warnings.
3. **Visual foolproofing**: Turn on the LED after a delay. After the low-level hardware has been powered on and stable for 0.5 seconds, the light comes on to prompt the user to speak, which perfectly avoids the "swallowed words" window during hardware cold start.
4. **Graceful release**: When stopping recording, use `send_signal(signal.SIGINT)` instead of calling `terminate()`, ensuring the end of the WAV file is properly closed and the ALSA hardware lock is released.

### 2.3 "Mental Pollution" in LLM Output and TTS Crashes

* **Symptom**: PicoClaw's CLI output included lots of ASCII art logos and `[INFO]` system logs; and the LLM would sometimes output emoji such as `🦞` or Markdown tables, causing the `edge-tts` speech synthesis engine to crash and stop working.
* **Solution**:
1. **Layered stripping**: Split the output by line and discard everything before the last `[INFO]` log line.
2. **Regex cleaning**: Before sending to the speech engine, use the regex `re.sub` to aggressively strip all non-Chinese/English characters and basic punctuation, ensuring smooth and natural speech playback.

### 2.4 "Time Hallucinations" Across Time Zones

* **Symptom**: The LLM has no concept of system time and makes wild guesses when asked about "tomorrow."
* **Solution**: **System Prompt Injection**. When the Python script assembles the query text, it uses the `datetime` module to calculate US Eastern Time and Beijing Time in real time, and forcibly prepends them as `[系统隐藏设定]` (hidden system settings) before the user's voice input. This not only eliminates hallucinations but also gives the LLM the ability to handle business across two time zones perfectly.

---

### 2.5 Installing Dependencies

After reflashing the Raspberry Pi (e.g., switching to the latest Debian 12 Bookworm Lite), the original environment is completely wiped. Follow these steps in order, and the walkie-talkie will be back up and running within 5 minutes.

#### 2.5.1 Installing Low-Level System Software

Update the package lists and install the basic audio-processing and process-management tools, plus the Python package manager:

```bash
sudo apt update
# Install audio player (mpg123), recording driver set (alsa-utils), process force-kill tool (psmisc), and pip3
sudo apt install -y mpg123 alsa-utils psmisc python3-pip
```

### 2.5.2 Installing Core Python Driver Libraries

Use `pip3` to install the required third-party libraries.
*(Note: In the latest Raspberry Pi OS, the system restricts direct use of pip to protect the global environment; you must append the `--break-system-packages` parameter to force-install into the user directory)*:

```bash
pip3 install requests gpiozero edge-tts --break-system-packages
```

### 2.5.3 Fixing the Environment Variables (Resolving the "Command Not Found" Warning)

The `edge-tts` installed in the previous step goes into a hidden user-level binary directory. You need to add it to the system PATH:

```bash
# Append the user's private bin directory to PATH and write it to the bash config file
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
# Make the config take effect immediately
source ~/.bashrc
```

> **Verification test**: Type `edge-tts --version` in the terminal; if it prints the version number, the configuration worked.

### 2.5.4 Restoring the PicoClaw Core and Workspace

We need to put the walkie-talkie's brain back:

1. **Main program in place**: Move the compiled `picoclaw` binary to `/usr/local/bin/` and make it executable (`sudo chmod +x /usr/local/bin/picoclaw`).
2. **Rebuild the workspace**: Recreate the `~/.picoclaw/workspace/` directory and copy the previously backed-up `skills` folder (such as the Feishu and search plugins) and configuration files back exactly as they were.

### 2.5.5 Hardware Sound Card Recovery (Easy to Miss)

On a clean system, an external I2S microphone array (such as the Google Voice HAT) is in a **physically muted** state by default:

1. **Remount the driver**: Modify `/boot/firmware/config.txt` per the official documentation to enable I2S, and configure the `~/.asoundrc` file.
2. **Unmute the low-level controls and set the volume**:

```bash
alsamixer
```

* Press `F4` to switch to the Capture screen, select the microphone, press `Space` to clear the `MM` (muted) state, and raise the gain.
* Press `F3` to switch to the Playback screen, and use the arrow keys to lower the playback volume to 40%–50% to avoid distortion.

3. **Persist the volume configuration**: Run `sudo alsactl store` to ensure the volume settings are not lost after a reboot.

At this point, the software and hardware environment has been fully restored. Combined with the Systemd daemon configuration, the system can go back to running fully automatically.

## 3. Complete Integration Script (`walkie_talkie.py`)

This script already includes all the bulletproof safeguards, timezone injection, and exception handling, and can run directly as a production daemon.

```python
import subprocess
import os
import requests
import threading
import base64
import uuid
import re
import time
import signal
from datetime import datetime, timezone, timedelta
from gpiozero import Button, LED
from signal import pause

print("🧹 Cleaning up any leftover low-level audio processes...")
# Force-kill leftover processes before startup to release the ALSA hardware lock
subprocess.run(["killall", "-q", "-9", "arecord", "mpg123", "edge-tts"], stderr=subprocess.DEVNULL)

# ================= 1. Hardware and path configuration =================
BUTTON_PIN = 23
LED_PIN = 25

# Use PicoClaw's official standard workspace
WORKSPACE = os.path.expanduser("~/.picoclaw/workspace")
os.makedirs(WORKSPACE, exist_ok=True)
AUDIO_IN = os.path.join(WORKSPACE, "voice_in.wav")
AUDIO_OUT = os.path.join(WORKSPACE, "voice_out.mp3")

# ================= 2. Volcano Engine (turbo large-model STT) configuration =================
VOLC_APPID = "replace_with_your_APP_ID"  
VOLC_TOKEN = "replace_with_your_ACCESS_TOKEN"

# ================= 3. Global state initialization =================
# Core: bounce_time=0.3 handles physical button bounce
button = Button(BUTTON_PIN, bounce_time=0.3)
led = LED(LED_PIN)
record_proc = None
is_processing = False  # concurrency lock

def start_recording():
    global record_proc, is_processing
    if is_processing:
        print("⏳ [System busy] Still processing the previous command...")
        return
        
    if os.path.exists(AUDIO_IN):
        os.remove(AUDIO_IN)
        
    print("\n⏳ [Preparing] Waking up the microphone base...")
    
    # --buffer-time=250000 fixes overruns; DEVNULL suppresses interrupt errors
    cmd = ["arecord", "--buffer-time=250000", "-f", "S16_LE", "-r", "16000", "-c", "1", AUDIO_IN, "-q"]
    record_proc = subprocess.Popen(cmd, stderr=subprocess.DEVNULL)

    # Delay turning on the LED: let the hardware power up and stabilize so the first word isn't swallowed
    time.sleep(0.5)
    led.on()
    print("🟢 [Recording] Microphone ready. Speak, then release to stop...")

def stop_recording():
    global record_proc, is_processing
    if is_processing or record_proc is None:
        return
        
    # Small buffer before stopping so the tail isn't cut off
    time.sleep(0.3)
    # Use SIGINT to exit gracefully, ensuring the WAV header is written and the sound card is released
    record_proc.send_signal(signal.SIGINT)
    record_proc.wait()
    record_proc = None
    
    led.off()
    print("🛑 [Released] Recording ended; handing it off to the processing center...")
    
    is_processing = True
    threading.Thread(target=process_audio_pipeline).start()

def process_audio_pipeline():
    global is_processing
    led.blink(on_time=0.5, off_time=0.5) 

    try:
        if not os.path.exists(AUDIO_IN):
            print("❌ Fatal error: the recording file was not created!")
            return
            
        # ================= STT (Volcano Engine turbo recognition) =================
        print("🔄 Requesting Volcano Engine STT...")
        user_text = ""
        try:
            with open(AUDIO_IN, "rb") as audio_file:
                base64_audio = base64.b64encode(audio_file.read()).decode('utf-8')
            
            headers = {
                "X-Api-App-Key": VOLC_APPID,
                "X-Api-Access-Key": VOLC_TOKEN,
                "X-Api-Resource-Id": "volc.bigasr.auc_turbo",
                "X-Api-Request-Id": str(uuid.uuid4()),
                "X-Api-Sequence": "-1",
                "Content-Type": "application/json"
            }
            payload = {
                "user": {"uid": VOLC_APPID},
                "audio": {"data": base64_audio},
                "request": {"model_name": "bigmodel"}
            }
            
            recognize_url = "https://openspeech.bytedance.com/api/v3/auc/bigmodel/recognize/flash"
            response = requests.post(recognize_url, json=payload, headers=headers, timeout=10)
            
            status_code = response.headers.get("X-Api-Status-Code")
            if status_code == '20000000':
                user_text = response.json().get("result", {}).get("text", "")
                if not user_text: user_text = "I heard something, but couldn't make out the words."
            elif status_code == '20000003': user_text = "It sounds like you didn't say anything."
            else: user_text = "My ears are on strike for now."

        except Exception as e:
            user_text = "Network connection failed."

        print(f"👤 You said: {user_text}")

        # ================= AI thinking (PicoClaw dispatch center) =================
        print("🧠 Waking up the local PicoClaw process...")
        try:
            # Inject both time zones dynamically to prevent time hallucination
            utc_dt = datetime.now(timezone.utc)
            us_east_dt = utc_dt.astimezone(timezone(timedelta(hours=-4)))
            beijing_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
            
            weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            time_context = f"[Current system time: US Eastern {us_east_dt.strftime('%m-%d %H:%M')}({weekdays[us_east_dt.weekday()]}) | Beijing {beijing_dt.strftime('%m-%d %H:%M')}({weekdays[beijing_dt.weekday()]})]"
            
            # Build the prompt with the tool-dispatch rules
            voice_prompt = f"""{time_context}
User command: "{user_text}"

[System-enforced rules (voice assistant mode)]:
1. [Minimal and fast] You are a capable, efficient personal voice assistant. Reply straight to the point, strictly under 100 characters and at most one or two sentences. (Note: the fewer the characters, the lower the system's voice response latency!)
2. [No AI tone] Give the answer directly! Never use robotic filler like "I found this for you", "according to my search" or "I tested it and found", and don't throw questions back at the user.
3. [Silent invocation] For things like traffic restrictions, weather and news, silently call the built-in tools, then state the key conclusion directly once you have the data.
4. [Clear pronunciation] Absolutely no Markdown (such as **, -, #), tables, numbered lists, Emoji or unusual symbols; output only plain Chinese characters and basic punctuation that can be read aloud smoothly."""

            cmd = ["picoclaw", "agent", "-m", voice_prompt]
            result = subprocess.check_output(cmd, text=True, stderr=subprocess.STDOUT)
            
            # Strip PicoClaw CLI's ASCII logo and system logs
            lines = result.split('\n')
            last_log_idx = -1
            for i, line in enumerate(lines):
                if "[INFO]" in line or "[WARN]" in line or "[ERROR]" in line:
                    last_log_idx = i
            
            if last_log_idx != -1 and last_log_idx < len(lines) - 1:
                ai_reply = "\n".join(lines[last_log_idx+1:]).strip()
            else:
                ai_reply = "\n".join([l for l in result.split('\n') if "██" not in l]).strip()

            if not ai_reply: ai_reply = "The brain finished but returned no text."
                 
        except Exception as e:
            ai_reply = "Failed to connect to the brain; please check that it's running."

        print(f"🤖 PicoClaw raw reply: {ai_reply}")
        
        # ================= TTS and audio playback =================
        print("🔊 Cleaning text and synthesizing speech...")
        
        # Final cleanup: strip Emoji and other illegal characters that would crash TTS
        clean_text = re.sub(r'[^\u4e00-\u9fa5A-Za-z0-9，。！？、！\?,\.～~]', '', ai_reply)
        if not clean_text: clean_text = "The reply has no readable text."

        tts_cmd = [
            "python3", "-m", "edge_tts", 
            "--text", clean_text, 
            "--voice", "zh-CN-XiaoxiaoNeural",
            "--write-media", AUDIO_OUT
        ]
        
        try:
            subprocess.run(tts_cmd, check=True, capture_output=True, text=True)
            led.on() 
            subprocess.run(["mpg123", AUDIO_OUT])
        except subprocess.CalledProcessError as e:
            print(f"❌ Speech generation failed!\nError details: {e.stderr}")
        
    except Exception as e:
        print(f"❌ Uncaught exception: {e}")
    finally:
        led.off() 
        is_processing = False
        print("✅ System reset; waiting for the next wake-up.")

button.when_pressed = start_recording
button.when_released = stop_recording

print("🚀 Geek walkie-talkie hub is ready!")
pause()

```

---

## 4. Final Deployment: Turning It into a Background Daemon (Daemonize)

To fully free this hardware assistant from the SSH terminal and achieve "plug it in and use it, and recover automatically after power loss or reboot," we need to use Linux's native `systemd` to register it as a system-level service.

> ⚠️ **Pitfall warning**: Never use `rc.local` or `crontab` to start audio-related scripts. Audio devices (`sound.target`) load slowly, and only `systemd` can precisely control startup order and restart the script automatically if it crashes unexpectedly.

### 4.1 Create the systemd service file

Assume your script is at `/home/pi/walkie_talkie.py`. Run the following command in the terminal to create the configuration file:

```bash
sudo nano /etc/systemd/system/picoclaw-voice.service

```

Paste the following into it (note: if your username is not `pi`, or the script path is different, change them accordingly):

```ini
[Unit]
Description=PicoClaw Voice Assistant (Hardware Gateway)
# Make sure this service starts after the network and the underlying sound card hardware are loaded
After=network.target sound.target

[Service]
Type=simple
# Must specify the pi user; otherwise, when run as root, the ~/.picoclaw path becomes /root/.picoclaw, causing all configuration to fail
User=pi
WorkingDirectory=/home/pi
ExecStart=/usr/bin/python3 /home/pi/walkie_talkie.py

# Crash auto-restart mechanism (try to restart every 5 seconds)
Restart=always
RestartSec=5

# [Extremely critical] Inject environment variables! Make sure the subprocess underneath the Python script can find picoclaw, edge-tts and arecord
Environment="PATH=/home/pi/.local/bin:/usr/local/bin:/usr/bin:/bin"
Environment="PYTHONUNBUFFERED=1"

[Install]
WantedBy=multi-user.target

```

Save and exit (in nano, press `Ctrl+O` -> `Enter` -> `Ctrl+X`).

### 4.2 Reload the system and set it to start on boot

Once the configuration is written, tell the system to reload the configuration and set the service to start on boot:

```bash
# 1. Reload the systemd daemon
sudo systemctl daemon-reload

# 2. Set to start automatically on boot
sudo systemctl enable picoclaw-voice.service

# 3. Start the service immediately
sudo systemctl start picoclaw-voice.service

```

### 4.3 Common management commands (quick reference)

Once it's registered as a service, you can manage your walkie-talkie as gracefully as you would manage Nginx or MySQL:

* **Check the current status** (seeing a green `active (running)` means it's working):
```bash
sudo systemctl status picoclaw-voice

```


* **Manually stop** the service:
```bash
sudo systemctl stop picoclaw-voice

```


* **Manually restart** the service (after you modify the Python code, you must run this command for the changes to take effect):
```bash
sudo systemctl restart picoclaw-voice

```


* **View logs in real time** (replaces the print output you would otherwise see in the terminal; essential for troubleshooting):
```bash
# -f means real-time scrolling, similar to tail -f
journalctl -u picoclaw-voice -f

```

---

### Additional notes:

With this piece of the puzzle in place, your Raspberry Pi has become a complete "black-box appliance." You can safely close the terminal on your computer, unplug the Raspberry Pi, move it to the living room or nightstand, and plug it in. After it boots, wait about one or two minutes (until the network and background processes finish loading), and then you can just press the button and talk to it!
