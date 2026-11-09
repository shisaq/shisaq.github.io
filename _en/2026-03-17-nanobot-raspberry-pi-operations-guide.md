---
title: "Nanobot Raspberry Pi Operations and Usage Guide"
subtitle: "Nanobot Raspberry Pi Operations and Usage Guide"
date: 2026-03-17
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["nanobot", "raspberry-pi", "systemd", "feishu", "cli"]
original: _posts/2026-03-17-Nanobot树莓派运维与使用指南.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
I've put together this dedicated Nanobot operations guide for you. You can copy the content below and save it as `指南.md` so you can refer to it anytime.

***

# 🤖 Nanobot (Raspberry Pi 3B) Operations and Usage Guide

This guide brings together the frequently used commands and core operations for maintaining and debugging Nanobot on a Raspberry Pi with the Feishu long connection and the Volcano Ark Coding Plan.

## 1. Background Service Management (Systemd)
Nanobot is configured as a Systemd background service and will start automatically when the system reboots. The `.service` suffix can be omitted when entering commands.

* **Restart the service** (after modifying `config.json` or updating the code, you **must** run this command for the changes to take effect)
    ```bash
    sudo systemctl restart nanobot
    ```
* **Check the running status** (check whether the service is running normally; a green `active (running)` means it is working normally)
    ```bash
    sudo systemctl status nanobot
    ```
* **Stop the service** (use when you need to shut down the bot completely)
    ```bash
    sudo systemctl stop nanobot
    ```
* **Start the service** (use when starting it again after it has been stopped)
    ```bash
    sudo systemctl start nanobot
    ```

## 2. Real-time Logs and Troubleshooting
When the bot doesn't respond to messages in Feishu, or when you need to troubleshoot file parsing issues, checking the background logs is the quickest way.

* **Follow the real-time logs** (press `Ctrl + C` to exit; this does not affect the running program)
    ```bash
    journalctl -u nanobot -f
    ```
* **View the last 100 lines of logs**
    ```bash
    journalctl -u nanobot -n 100 --no-pager
    ```

## 3. Configuration Management and Modification
All the core credentials (API key, Feishu App ID, model routing, etc.) are stored in this system-level configuration file, which is separate from the source code.

* **Edit the config file**
    ```bash
    nano ~/.nanobot/config.json
    ```
    *(Tip: after editing, press `Ctrl + O` to save -> `Enter` to confirm the filename -> `Ctrl + X` to exit. Finally, remember to run `sudo systemctl restart nanobot` to restart the service so the changes take effect)*

## 4. Local Command-Line Debugging (CLI)
Sometimes you need to test LLM connectivity or tool-calling capability directly from the Raspberry Pi terminal, without going through Feishu.
*(Prerequisite: a global alias has been configured, or you are in the `/home/pi/nanobot` directory and call `~/.venv/bin/nanobot` directly)*

* **View an overview of the environment configuration** (quickly check the status of the API and default model configuration)
    ```bash
    nanobot status
    ```
* **Start a single-turn conversation test**
    ```bash
    nanobot agent -m "测试一下当前连通性"
    ```
* **Enter immersive continuous conversation mode**
    ```bash
    nanobot agent
    ```

## 5. Source Code Updates and Environment Maintenance
Since we use editable source mode (`-e`) installation, updating the framework is very convenient and will not overwrite your `config.json`.

1.  **Enter the source directory**
    ```bash
    cd ~/nanobot
    ```
2.  **Pull the latest official code**
    ```bash
    git pull
    ```
3.  **Restart the service to apply the new code**
    ```bash
    sudo systemctl restart nanobot
    ```

## 💡 Shortcut Command Setup (Alias)
To avoid typing the long and ugly virtual environment path every time, make sure the end of your `~/.bashrc` file contains the following alias configuration:

```bash
# Quickly invoke nanobot in the virtual environment
alias nanobot='/home/pi/nanobot/.venv/bin/nanobot'
```
If you haven't added it yet, you can use `nano ~/.bashrc` to add it to the bottom, then run `source ~/.bashrc` to apply the change immediately.

*** If you need to add specific document parsing plugins while building the company's knowledge management system, or run into complex Feishu permission configuration issues, you can take out this guide anytime and pull up the logs, and we'll keep tackling them together!
