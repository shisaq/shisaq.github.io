---
layout: post
title: "打造永不掉线的 AI 助手：树莓派部署 PicoClaw 飞书机器人全指南"
subtitle: ""
date: 2026-03-09
author: "shisaq"
header-img: "img/about-bg-walle.jpg"
tags: ["技术分享", "生产力", "终端"]
---

在本教程中，我们将使用树莓派作为本地服务器，部署 **PicoClaw** 网关，将飞书（Feishu）与强大的云端大模型（如火山引擎）无缝连接，打造一个随时随地响应你指令的专属企业级 AI 助手。

![Cover](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2026-03-09-16-13-13-DtBCHx.png)

---

## 1. 硬件准备

选择正确的硬件是成功的第一步，能帮你避开 90% 的底层报错。

- **树莓派主机**：强烈建议使用 **Raspberry Pi 3B / 3B+ / 4B / 5** 或 **Zero 2 W**。
    
    > ❌ **避坑警告**：**绝对不要使用**第一代 Raspberry Pi Zero W (v1.1) 或 Pi 1/2！现代高性能网关（包括飞书的长连接 SDK）强制要求 **64 位 (ARMv8 / aarch64)** 架构。老款 Zero W 的芯片是 32 位的，强行运行会直接报架构不支持的错误。
    
- **其他外设**：一张 16GB 或更大容量的 MicroSD 卡、稳定供电的电源（5V 2.5A 或以上）。
    
- **操作方式**：本教程虽可通过 SSH 无头（Headless）操作，但**强烈建议有条件的小伙伴直接外接显示器和键盘**，能直观看到启动画面和 IP 地址，排错更方便。
    

_[此处插入图片：准备好的树莓派及外接屏幕/键盘的实物图]_

---

## 2. 软件与环境选择

- **操作系统**：我们使用的是通过 Raspberry Pi Imager v2.0.6 烧录的 **Raspberry Pi OS (64-bit)** 桌面版系统（A port of Debian Trixie with the Raspberry Pi Desktop），发布日期为 2025-12-04。桌面版系统功能更全，对新手更友好。**务必认准 64-bit**。
    
- **文件管理神器 (FileZilla)**：强烈建议在电脑上下载安装 **FileZilla**。这是一款免费的 FTP 工具，你可以通过它直接连接树莓派的 SFTP。用它来双击打开、编辑和同步配置文件，体验秒杀在终端里敲打枯燥的命令行。
    

![2026-03-09-16-16-51-Ys1ZJ7](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2026-03-09-16-16-51-Ys1ZJ7.png)

---

## 3. 核心部署流程

### 3.1 烧录系统与开机

使用 Raspberry Pi Imager 烧录好系统后，将 SD 卡插入树莓派开机。连接好家里的 Wi-Fi，并记录下树莓派的 IP 地址（例如 `192.168.31.101`）。

![2026-03-09-16-17-28-ayzdzw](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2026-03-09-16-17-28-ayzdzw.png)

### 3.2 终极架构确认

在树莓派终端（或通过电脑 SSH 连接）执行以下命令，如果输出为 **`aarch64`**，恭喜你，硬件环境准备完美！

Bash

```sh
uname -m
```

### 3.3 下载、安装与初始化 PicoClaw

由于我们是 64 位系统，直接下载 `aarch64` 版本的 `.deb` 安装包依次执行：

Bash

```sh
# 1. 下载安装包 (版本号请以 Github 最新发布为准)
wget https://github.com/sipeed/picoclaw/releases/download/v0.2.1/picoclaw_aarch64.deb

# 2. 安装软件包
sudo dpkg -i picoclaw_aarch64.deb

# 3. 初始化工作目录（生成默认配置）
picoclaw onboard
```

执行完初始化命令后，终端会输出以下可爱的龙虾图标和指引信息，告诉你配置文件夹已经建好：

Plaintext

```sh
pi@raspberrypi:~ $ picoclaw onboard
🦞 picoclaw is ready!

Next steps:
  1. Add your API key to /home/pi/.picoclaw/config.json

Recommended:
  - OpenRouter: https://openrouter.ai/keys (access 100+ models)
  - Ollama:     https://ollama.com (local, free)

  See README.md for 17+ supported providers.

  2. Chat: picoclaw agent -m "Hello!"
```

---

## 4. 配置文件终极解读（抄作业区）

初始化完成后，打开你的 **FileZilla**，连接上树莓派，找到 `/home/pi/.picoclaw/config.json` 文件，右键编辑它。

你可以直接将以下这套验证过可以完美运行的配置复制进去，覆盖原内容（**注意替换带有 `XXXX` 的地方**）。

_(注：标准 JSON 不支持 `//` 注释，但为了方便大家理解我保留了它们，如果运行时报错，请手动删掉注释部分)_：

JSON

```json
{
  "session": {
    "dm_scope": "per-channel-peer"
  },
  "agents": {
    "defaults": {
      "workspace": "~/.picoclaw/workspace",
      "restrict_to_workspace": true,
      "provider": "openai",
      "model": "volcengine",
      "max_tokens": 32768,
      "max_tool_iterations": 50
    }
  },
  "channels": {
    "feishu": {
      "enabled": true,
      "app_id": "cli_XXXXXXXXXXXXXXXXX", // 飞书的app_id
      "app_secret": "XXXXXXXXXXXXXXXXX", // 飞书的app_secret
      "encrypt_key": "picoclaw",
      "verification_token": "uEWQaEyh48hQdKXXXXXXXXXXXXXXXX", // 飞书的verification_token
      "allow_from": [],
      "group_trigger": {},
      "reasoning_channel_id": ""
    },
    "maixcam": { "enabled": false, "host": "0.0.0.0", "port": 18790 },
    "qq": { "enabled": false },
    "dingtalk": { "enabled": false },
    "wecom": { "enabled": false },
    "wecom_app": { "enabled": false },
    "pico": { "enabled": false }
  },
  "model_list": [
    {
      "model_name": "volcengine",
      "model": "openai/kimi-k2.5", // 在你的LLm模型列表中选择一个模型名称
      "api_base": "https://ark.cn-beijing.volces.com/api/coding/v3", // 这是Volcengine的API地址
      "api_key": "11XXXX72-XXXX-XXXX-XXXX-XXXXXXXXX" // 这是Volcengine的API密钥
    }
  ],
  "gateway": {
    "host": "127.0.0.1",
    "port": 18790
  },
  "tools": {
    "web": {
      "duckduckgo": { "enabled": true, "max_results": 5 }
    },
    "cron": { "exec_timeout_minutes": 5 },
    "exec": { "enable_deny_patterns": true },
    "skills": {
      "registries": {
        "clawhub": { "enabled": true, "base_url": "https://clawhub.ai" }
      },
      "max_concurrent_searches": 2
    },
    "media_cleanup": {
      "enabled": true,
      "max_age_minutes": 30,
      "interval_minutes": 5
    }
  },
  "heartbeat": {
    "enabled": true,
    "interval": 30
  }
}
```

### 🔑 密钥去哪找？

1. **飞书凭证 (`app_id`, `app_secret`, `verification_token`)**：前往 [飞书开发者后台](https://open.feishu.cn/app/) -> 你的应用 -> 左侧菜单的 **「凭证与基础信息」** 和 **「事件与回调」** 页面获取。
    
2. **大模型凭证 (`api_key`)**：前往 [火山引擎 AI 控制台](https://console.volcengine.com/ark/) -> **「API Key 管理」** 获取。
    

---

## 5. 飞书后台权限与事件配置（⚠️ 极易踩坑区）

这一步是决定你的机器人能否“开口说话”的核心，无数人卡在这里导致“已读不回”。请务必严格按顺序操作：

### 步骤一：赋予“机器人”灵魂（极其容易漏掉！）

创建应用后，第一件事是告诉飞书这是一个机器人。

在开发者后台左侧菜单找到 **「添加应用能力」**，找到 **「机器人」** 卡片，点击 **添加**。如果不做这一步，后续的权限配置全是无用功。

_[此处插入图片：飞书后台“添加应用能力”页面，红框圈出“机器人”组件并显示已添加]_

### 步骤二：先让树莓派“跑起来”

飞书的长连接机制要求：**必须先在本地启动网关，飞书后台才能成功检测到你的长连接连通性！**

在树莓派终端输入并保持运行：

Bash

```sh
picoclaw gateway
```

### 步骤三：开启“长连接”订阅模式

在飞书开发者后台 -> 左侧菜单 **「事件与回调」** -> 找到 **「订阅方式」**，点击旁边的编辑小图标。

选择 **「使用长连接接收事件 (推荐)」**，然后保存。

### 步骤四：精准配置 4 个核心权限（免网管审核）

前往左侧菜单 **「权限管理」**。为了实现基础的单聊和群聊@回复，且尽量避免触发复杂的企业管理员审批流程，请精准搜索并只开通以下 4 个权限（全都是“应用身份”）：

1. **`im:message`** (获取与发送单聊、群组消息)
    
2. **`im:message.group_at_msg:readonly`** (接收群聊中@机器人消息事件)
    
3. **`im:message.p2p_msg:readonly`** (读取用户发给机器人的单聊消息)
    
4. **`im:message:send_as_bot`** (以应用的身份发消息)
    
    ![2026-03-09-16-14-58-OIFbGh](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2026-03-09-16-14-58-OIFbGh.png)
    为了方便，也可以直接复制以下JSON代码，批量导入所需权限：
    
```JSON
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "docx:document:readonly",
      "im:chat:read",
      "im:chat:update",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_users",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "application:application:self_manage",
      "cardkit:card:write",
      "cardkit:card:read"
    ],
    "user": [
      "contact:user.employee_id:readonly",
      "offline_access","base:app:copy",
      "base:field:create",
      "base:field:delete",
      "base:field:read",
      "base:field:update",
      "base:record:create",
      "base:record:delete",
      "base:record:retrieve",
      "base:record:update",
      "base:table:create",
      "base:table:delete",
      "base:table:read",
      "base:table:update",
      "base:view:read",
      "base:view:write_only",
      "base:app:create",
      "base:app:update",
      "base:app:read",
      "board:whiteboard:node:create",
      "board:whiteboard:node:read",
      "calendar:calendar:read",
      "calendar:calendar.event:create",
      "calendar:calendar.event:delete",
      "calendar:calendar.event:read",
      "calendar:calendar.event:reply",
      "calendar:calendar.event:update",
      "calendar:calendar.free_busy:read",
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "contact:user:search",
      "docs:document.comment:create",
      "docs:document.comment:read",
      "docs:document.comment:update",
      "docs:document.media:download",
      "docs:document:copy",
      "docx:document:create",
      "docx:document:readonly",
      "docx:document:write_only",
      "drive:drive.metadata:readonly",
      "drive:file:download",
      "drive:file:upload",
      "im:chat.members:read",
      "im:chat:read",
      "im:message",
      "im:message.group_msg:get_as_user",
      "im:message.p2p_msg:get_as_user",
      "im:message:readonly",
      "search:docs:read",
      "search:message",
      "space:document:delete",
      "space:document:move",
      "space:document:retrieve",
      "task:comment:read",
      "task:comment:write",
      "task:task:read",
      "task:task:write",
      "task:task:writeonly",
      "task:tasklist:read",
      "task:tasklist:write",
      "wiki:node:copy",
      "wiki:node:create",
      "wiki:node:move",
      "wiki:node:read",
      "wiki:node:retrieve",
      "wiki:space:read",
      "wiki:space:retrieve",
      "wiki:space:write_only"
    ]
  }
}
```

![2026-03-09-16-15-27-gzKKzu](https://markdown-img.s3.ap-northeast-1.amazonaws.com/shisaq/2026-03-09-16-15-27-gzKKzu.png)

### 步骤五：订阅消息事件（让机器人能“听见”）

再次回到 **「事件与回调」** 页面，点击右侧的 **「添加事件」** 按钮。

搜索并勾选 **`接收消息`** (`im.message.receive_v1`)。

### 步骤六：发布版本（终极关键！）

**飞书的铁律：你修改的任何权限和事件，如果不发布，就不会生效！**

前往左侧菜单 **「版本管理与发布」** -> 点击 **「创建版本」** -> 随便填入一个版本号（如 1.0.0） -> 保存后点击 **「申请发布」**。

---

## 6. 守护进程化（让它永不掉线）

现在你在终端里运行的网关，只要一关电脑窗口就会断线。我们需要让它变成树莓派的后台“守护神”。

先在运行 `picoclaw gateway` 的树莓派终端按 `Ctrl + C` 停止它。然后一次性复制以下整段代码并回车，创建一个系统服务：

Bash

```
sudo tee /etc/systemd/system/picoclaw.service << 'EOF'
[Unit]
Description=PicoClaw Gateway Service
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi
ExecStart=/usr/bin/picoclaw gateway
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
```

**激活并启动服务（依次执行）：**

Bash

```
sudo systemctl daemon-reload
sudo systemctl enable picoclaw
sudo systemctl start picoclaw
```

以后如果你想看 AI 的运行日记，只需要输入：

Bash

```
journalctl -u picoclaw -f
```

---

## 7. 常见疑难杂症排查 (FAQ)

**Q：SSH 登录时报错 `Host key verification failed`，满屏大写警告？**

- **原因**：你可能给树莓派分配了一个以前其他设备用过的 IP 地址，电脑的安全机制认为遇到了冒充者。
    
- **解法**：在你的**电脑终端（注意不是树莓派里）**执行 `ssh-keygen -R 树莓派的IP地址` 清除旧记录即可。
    

**Q：启动网关时报错 `feishu channel is not supported on 32-bit`？**

- **原因**：树莓派系统装错了（装成了 32 位），或者你的树莓派主板太老（如老款 Zero W），根本不支持 64 位。
    
- **解法**：换一块 3B 或以上的板子，重新用 Imager 烧录 64 位系统。
    

**Q：终端显示 `HEARTBEAT_OK`，但飞书里发消息没反应，终端也没有 `receive` 日志？**

- **原因**：大模型接口是通的，但飞书服务器没把消息推给你。
    
- **解法**：回到教程 **第 5 节**，重点检查是否添加了“接收消息”事件，并且**一定要去发布新版本**。
    

---

_(本文完)_