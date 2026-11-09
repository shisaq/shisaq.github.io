---
title: "Making the Loctek E2 Standing Desk Smart: ESP32 + ESPHome + Home Assistant"
subtitle: "From the RJ45 hand controller interface to Apple Home: a record of smartifying an ordinary standing desk"
date: 2026-05-31
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["ESP32", "ESPHome", "Home Assistant", "standing desk", "HomeKit"]
original: _posts/2026-05-31-乐歌E2升降桌改造成智能家居.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
I recently connected the Loctek E2 standing desk at home to Home Assistant, and then exposed it to Apple Home. The end result: tap "sit" or "stand" in the Home app, and the desk automatically moves to the sitting or standing memory height.

At first this looked like a simple little task: find two wires and briefly short them together. It was only after actually tinkering with it that I realized that the hand controller port on desks like Loctek's isn't a traditional button-shorting setup, but a UART serial protocol running over the RJ45 cable.

This post documents the whole process: how to identify the pins, how to confirm the protocol, how to connect it to Home Assistant with ESP32 + ESPHome, and finally how to handle power and HomeKit control.

## Final result

On the hardware side, I kept the desk's original hand controller panel; the ESP32 is just connected in parallel to the serial lines in the hand controller port.

On the software side, the chain now looks like this:

```text
Apple Home / Siri
        ↓
Home Assistant
        ↓
ESPHome API
        ↓
ESP32 UART
        ↓
Loctek E2 standing desk controller
```

What it can do now:

* Two buttons in Home Assistant: `sit` and `stand`
* I can also trigger these two actions in Apple Home
* The ESP32 doesn't need a separate USB power supply; it's powered directly by the 5V on the desk's RJ45 port
* The desk's original hand controller is unaffected, and the physical buttons still work normally

## Hardware list

I used quite a few things this time, and it was my first time working with a microcontroller:

* Loctek E2 standing desk
* ESP32-WROOM-32 dev board, 30Pin, Type-C port
* RJ45 to 8Pin solderless terminal block
* A few jumper wires
* Multimeter
* A Raspberry Pi running the Docker version of Home Assistant

Since I can't solder, I tried to make the whole approach "solderless, detachable, and reversible" as much as possible. All connections are jumper wires plus screw terminals.

## Phase 1: Confirming it's not ordinary buttons

My first thought was: the standing desk hand controller has up, down, and 1, 2, 3, 4 memory positions, so maybe the RJ45 just contains a few button wires, and pressing a button just grounds one of the wires.

That turned out not to be the case.

After debugging the UART on the ESP32, I found that the desk continuously broadcasts data even when stationary. After testing baud rates, `9600` was the most stable.

When the desk is stationary, I see frames like this:

```text
9B:04:11:7C:C3:9D
9B:07:12:00:00:00:B8:94:9D
```

When the desk moves, the data changes noticeably, for example:

```text
7F:FD:06:F2:65:9D
7F:87:3F:80:86:9D
06:06:7F:F9:36:9D
```

This was a key step. It showed that the hand controller port isn't a simple button-shorting setup, but UART serial communication.

## Measuring the RJ45 pins

Hold the RJ45 connector like this:

* Metal contacts facing up
* Clip facing down
* Cable pointing away from you

What I measured:

* `pin1`: about 5.11V
* `pin2`: GND
* `pin3`: about 4.1V
* `pin4`: about 4.2V
* Other pins about 0V

Later testing confirmed:

* `pin1` can power the ESP32's `VIN`
* `pin2` is GND
* `pin3` / `pin4` are UART TX/RX

There's one risk here: strictly speaking, the ESP32's GPIO is not 5V tolerant, and the UART lines here measure over 4V. It works in my actual testing, but a more rigorous long-term solution should add level shifting or a voltage divider between the desk's TX and the ESP32's RX. For now I'm going with the minimal change.

## ESP32 wiring

On the ESP32 side, I used:

* `GPIO16` / `D16`
* `GPIO17` / `D17`
* `GND`
* `VIN`

Final wiring:

```text
RJ45 pin1  +5V   -> ESP32 VIN
RJ45 pin2  GND   -> ESP32 GND
RJ45 TX          -> ESP32 RX / GPIO16
RJ45 RX          -> ESP32 TX / GPIO17
```

Note: the ESP32's TX goes to the desk's RX, and the ESP32's RX goes to the desk's TX. If you don't get data, swap TX/RX first.

Also, the desk's 5V goes to the ESP32's `VIN`, not `3V3`. `VIN` is the 5V input, which goes through the onboard regulator to become the 3.3V the ESP32 uses; `3V3` is the already-regulated 3.3V power pin on the board, and connecting 5V to it will likely burn the board.

When testing the desk's 5V supply, I first unplugged the USB from the computer and used only the desk's `pin1 -> VIN` and `pin2 -> GND` to power the ESP32. After confirming it came online reliably, I reconnected TX/RX and tested `sit` and `stand`.

## ESPHome configuration

The final ESPHome configuration is very short:

```yaml
esphome:
  name: desk

esp32:
  board: esp32dev
  framework:
    type: arduino

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

logger:
  baud_rate: 0

api:

ota:
  platform: esphome

uart:
  id: desk_uart
  baud_rate: 9600
  tx_pin: GPIO17
  rx_pin: GPIO16

button:
  - platform: template
    name: "sit"
    id: sit
    on_press:
      - uart.write:
          id: desk_uart
          data: [0x9b, 0x06, 0x02, 0x04, 0x00, 0xac, 0xa3, 0x9d]

  - platform: template
    name: "stand"
    id: stand
    on_press:
      - uart.write:
          id: desk_uart
          data: [0x9b, 0x06, 0x02, 0x08, 0x00, 0xac, 0xa6, 0x9d]
```

At first I used `switch` here, then later changed it to `button`. The reason is simple: sitting and standing aren't "switch states" but one-shot commands. If I used a switch, Home Assistant would mistakenly think it has a persistent on/off state; but in reality, pressing `stand` doesn't mean the desk has definitely arrived, nor can it know whether it was interrupted midway by the hand controller.

So for now, the most accurate model is:

* `sit`: send the sitting memory-position command once
* `stand`: send the standing memory-position command once

Later, once I can decode the height frames, I'll consider upgrading to `sensor` + `number` + `select`, or even making it a `cover` model similar to curtains.

## Reading the current state

Later I did another round of tests reading the state. The goal wasn't to keep reverse-engineering the whole protocol in depth, but to solve a practical problem first: Home Assistant should at least know whether the desk is roughly sitting, standing, or moving.

When the desk is stationary, it continuously sends frames like this:

```text
9B:04:11:7C:C3:9D
9B:07:12:00:00:00:B8:94:9D
```

But these two idle frames alone can't distinguish sitting from standing. In other words, if the ESP32 has just cold-started and the desk hasn't moved, these two idle frames alone can't tell what height the desk is at.

What's really useful are the frames during sit-stand transitions. From my testing, I can currently use the following signals to tell:

```text
9B:04:15:BF:C2:9D              # desk is moving
9B:07:12:07:CF:...:...:9D      # sitting preset related state
9B:07:12:06:06:...:...:9D      # standing preset related state
```

So ESPHome now has a few more state entities:

```text
text_sensor.desk_posture       # sitting / standing / unknown
binary_sensor.desk_sitting
binary_sensor.desk_standing
binary_sensor.desk_moving
```

I didn't make sitting and standing into a `switch` here. The reason is it's not a real switch: the physical panel can also change the desk state, and it can be interrupted midway. A more accurate design is to keep the two `sit` / `stand` buttons and expose read-only state separately.

Here are the actual test results:

```text
stand -> sit:
initially standing
after pressing sit, moving=true
about 21 seconds later, moving=false
finally sitting=true, standing=false, posture=sitting

sit -> stand:
initially sitting
after pressing stand, moving=true
about 21 seconds later, moving=false
finally sitting=false, standing=true, posture=standing
```

In addition, I also tested pressing the desk's physical panel `1` key directly. After the desk returned to sitting, Home Assistant also read it in sync:

```text
sitting=true
standing=false
moving=false
posture=sitting
```

This shows that the ESP32 isn't just aware of the commands it sent itself; it's actually listening in on the desk's UART communication. Whether the action is triggered by Home Assistant or by pressing the physical panel, as long as the desk completes a sit-stand transition, the state gets updated.

The current limitation is also clear: the first stationary state after a cold start may only restore the last recorded state, and doesn't necessarily reflect the real height. But as long as one sit-stand action happens afterward, the state becomes reliable again. For my current use, that's enough.

## Home Assistant integration

Home Assistant is a newly installed Docker version on the Raspberry Pi, at an address like:

```text
http://192.168.31.123:8123
```

After flashing the ESPHome node, Home Assistant automatically discovered `desk`. After adding the ESPHome integration, I could see two entities:

```text
button.desk_sit
button.desk_stand
```

I also set up a DHCP static binding for the ESP32 in the router, so the IP won't drift after each power loss and reconnect, and the Home Assistant connection is more stable.

## Connecting to Apple Home

To expose entities in Home Assistant to Apple Home, I used Home Assistant's `HomeKit Bridge`.

Path:

```text
Settings -> Devices & services -> Add Integration -> HomeKit Bridge
```

When creating the HomeKit Bridge, select only the desk-related entities to expose:

```text
button.desk_sit
button.desk_stand
```

Home Assistant then gives you a HomeKit pairing QR code or PIN. Open the Home app on your iPhone, add an accessory, and scan the code or enter the PIN.

If you're running Home Assistant in Docker and HomeKit can't find the Bridge, it's usually related to network mode and mDNS broadcast. The simplest fix is to let the Home Assistant container use host network, so it shares the same broadcast domain as your LAN devices.

## Power: from computer USB to the desk's 5V

At first the ESP32 was powered from the computer's USB-C port, with only these wires connected:

```text
RJ45 GND -> ESP32 GND
RJ45 TX/RX -> ESP32 RX/TX
```

This is "listen-only mode". It's safer, but not suitable for long-term use: I'd still have to hang a USB power cable under the desk, which is very inelegant.

Later, after confirming RJ45 `pin1` was about 5.11V, I connected it to the ESP32's `VIN`. It was stable in testing, and no external USB power was needed.

A few notes:

* Connect 5V to `VIN`, not `3V3`
* Connect GND to a real `GND`
* Don't have computer USB and the desk's 5V connected at the same time while testing
* Measure `pin1` to `pin2` with the multimeter's voltage mode, not by shorting with current mode

I also made a small mistake: I once connected GND to the adjacent `D13`. Fortunately the current firmware doesn't use `D13`, so it didn't actually cause any problems. But this mistake reminded me that I must secure the wiring when I finish, and not leave Dupont wires under stress or wobbling for long periods.

## What's still not perfect

Functionally it works, but it still looks like an engineering prototype: a thick RJ45 cable, a few Dupont wires, and a bare ESP32 board hanging under the desk.

Next I plan to make a small box to house the RJ45 terminal and the ESP32:

* Use a small ABS project box
* Switch to a short, soft, flat RJ45 cable
* Secure the ESP32 and terminal with double-sided tape or mounting bases
* Add strain relief at the cable entry, so pulling from outside doesn't act directly on the screw terminals
* Attach the whole box to the underside of the desk with Velcro

The goal is to end up with only a small box and a short cable visible, not a tangle of experimental wiring.

## What I got out of this tinkering

The biggest takeaway wasn't "making the desk controllable from a phone", but methodically breaking a closed, ordinary piece of furniture into several understandable problems:

1. Is its interface for power and buttons?
2. If it isn't buttons, what protocol is it speaking?
3. How can I just listen, without risking interference with the original controller?
4. How do I send the minimal command to switch to sit/stand?
5. How do I make Home Assistant and Apple Home see it as a normal smart home device?
6. How do I replace the temporary USB power with power from inside the desk?

The final answer is quite simple:

```text
Loctek E2 RJ45 hand controller interface
  -> UART 9600
  -> ESP32 + ESPHome
  -> Home Assistant
  -> HomeKit Bridge
  -> Apple Home
```

Now this desk is finally not just an "electric standing desk", but part of my smart home system.

## Next step: turning the desk into a real health reminder

The desk can now be controlled by Home Assistant and Apple Home, but it's still essentially "manually triggered": I tap a button when I want to sit or stand.

Next I want to turn it into a more proactive health workflow: combining sensors and a Pomodoro timer, so the desk automatically reminds me at the right time, or even forces a switch between sitting and standing.

Initial ideas:

* Use a presence sensor, a chair pressure sensor, or computer activity to determine whether I'm actually at the desk
* Use Home Assistant to implement Pomodoro logic: automatically switch to `stand` after 25 minutes of work
* After standing for 5 minutes, allow switching back to `sit`
* If the sensor says I'm not at the desk, don't trigger the desk movement, so an empty desk doesn't move on its own
* Later, if I can parse the desk's height data, I'll add a check so it doesn't repeat if it's already standing

The key point of this version is no longer "can I control the desk", but "when should I control it". The truly useful part of a smart home is often not turning your phone into a remote control, but letting devices do the right thing on their own according to the situation.

## Hands-on sequel: I actually built the pomodoro timer

That was the idea. Later I built the whole thing. The end result:

* When I've worked at the desk for a full 30 minutes, the desk automatically switches between sitting and standing (the rule is "change posture every 30 minutes"; the first 5 minutes after a switch are a "mental break")
* When I leave the desk, the pomodoro pauses automatically; the desk won't go up and down on its own in front of an empty chair
* If I'm away more than 10 minutes (lunch, say) and come back, it automatically starts a new round, returns to the sitting position, and restarts the timer
* When I record vocals, open LogicPro, or am in a meeting, I switch to a macOS Focus mode and the whole desk freezes
* Hard freeze from 23:00 to 07:00 the next morning; it won't move for any reason, so I'm not startled by movement in the middle of the night
* No GUI app running on the Mac at all; everything runs in the background

After all the work on this version, the time really went into platform and environment pitfalls, not into "writing the automation". Below I've written down the architecture, the decision logic and the three hard pitfalls.

### How to tell whether I'm at the desk

This is the input signal for the whole setup. I compared a few approaches:

* **ping / online probe**: only tells you "powered on and online", can't distinguish "in use" from "lid closed and asleep". No good.
* **HA Companion App**: install the official macOS app and it reports `Active` status; the least effort. But it's a resident GUI program, and by default it reports a pile of stuff (foreground app, camera, location...). I wanted it unobtrusive. No good.
* **Final approach**: read macOS's built-in `HIDIdleTime` (nanoseconds since the last keyboard/mouse input), and have a background script report it to HA on a schedule. This is the only signal that truly reflects whether the keyboard or mouse is being used.

```bash
ioreg -c IOHIDSystem | awk '/HIDIdleTime/ {print int($NF/1000000000)}'
```

### Overall architecture and data flow

The final chain looks like this (I'll explain later why it detours through a webhook in the middle):

```text
Mac launchd（每 20 秒）
  └─ /usr/bin/curl ──HTTP──▶ HA Webhook（接收 idle 秒数）
                                └─ 自动化 mqtt.publish ─▶ mosquitto（topic: mac/desk/idle）
                                      └─ MQTT sensor（expire_after 90s）
                                            └─ binary_sensor.mac_at_desk（idle < 180s）
                                                  └─ should_run（在桌前 且 未专注 且 非夜间）
                                                        └─ timer（30 分钟）
                                                              └─ 到点 ─▶ button.desk_sit / desk_stand
```

mosquitto runs in Docker on a Raspberry Pi, with anonymous access off and username/password plus ACL on. HA connects to it with the `ha` account.

### Decision logic: splitting "should it move" into independently verifiable booleans

I didn't lump all the logic together. I split it into a few intermediate values whose truth you can test at a glance:

**1. Am I at the desk**

{% raw %}
```yaml
# binary_sensor.mac_at_desk
state: >
  {% set v = states('sensor.mac_idle_seconds') %}
  {{ v not in ['unknown','unavailable','none', None] and (v | int(99999) < 180) }}
```
{% endraw %}

Note the MQTT sensor has `expire_after: 90`: once the Mac sleeps or the lid closes, launchd stops reporting, and if no data arrives within 90 seconds the sensor goes inactive → `at_desk` turns off → the desk by default doesn't move. That's a "disconnected means safe" fallback.

**2. Should the pomodoro be running** (three gates combined)

{% raw %}
```yaml
# binary_sensor.desk_pomodoro_should_run
state: >
  {% set t = now() %}
  {% set night = t.hour >= 23 or t.hour < 7 %}
  {{ is_state('binary_sensor.mac_at_desk','on')
     and is_state('input_boolean.desk_pause_focus','off')
     and not night }}
```
{% endraw %}

The timer only runs when `should_run` is on; if any of away-from-desk / focus / night holds, it immediately does `timer.pause`.

**3. When I come back, do I "resume" or "start a new round" (there's a pitfall here I only found later)**

This is the most critical part of the experience. A short absence (bathroom, getting water) should pick up where it left off; a long absence (lunch) should start over. I use "length of absence" to tell them apart:

{% raw %}
```yaml
# 触发器：HA 启动 + should_run 任意 → on（关键：别只写 from: "off"）
# 条件：should_run 为 on，且 timer 当前不是 active（避免重复启动）
away_secs: >
  {% if trigger.platform == 'state' and trigger.from_state
        and trigger.from_state.state == 'off' and trigger.to_state %}
    {{ (trigger.to_state.last_changed - trigger.from_state.last_changed).total_seconds() }}
  {% else %}
    99999
  {% endif %}
# away_secs < 600 且 timer 处于 paused → timer.start（续上）
# 否则 → 起 30 分钟（开新一轮，从当前姿势开始，不强制移动桌子）
```
{% endraw %}

This one rule covers lunch, the end of the night period, the end of a long recording session and every other "away for a long time" case, without writing each one separately.

> ⚠️ **Don't do what I did at first**: my first trigger only had `from: "off" → to: "on"`, which planted a landmine. Every time Home Assistant restarted, `should_run` went from `unknown → on`, which doesn't match `off→on`, so the startup automation never fired — the pomodoro just sat at idle and the desk never moved again; and since the whole thing had no "start on boot" fallback, it meant **one restart and it was dead** (I restarted a dozen times in a row while cleaning up the config before I noticed it had long stopped working).
>
> The fix: **widen the trigger to "any → on" and add "HA start (`platform: homeassistant, event: start`)"**, then use the "timer is not active" condition to catch duplicate starts; `away_secs` is only computed on a real `off→on`, everything else (boot, `unknown→on`) is treated as a new round. **"Only recognising one particular state transition" is one of the most common pitfalls in HA automations — always include the `unknown` from a restart / cold start.**

**4. Switching posture when time's up**

```yaml
# timer.finished 时
# 当前是坐姿 → 按 stand；否则 → 按 sit
```

> One small improvement I added later: **the timer is really "how long the current posture has been held"**. So it's not only the automatic flip at time-up that resets it — **if you manually switch posture yourself, the 30 minutes also restart from the moment it settles**, so you don't get the awkward "stood up a few minutes ago and it flipped me back to sitting". Implementation-wise, it just listens for the desk settling into either sitting or standing while `should_run` is on, and does `timer.start` for 30 minutes.

Because `should_run` is always off at night and the timer is paused, `finished` never fires, so the 23:00–07:00 hard freeze holds naturally without any extra interception.

**5. How to pause for recording / meetings**

I didn't go identify "is LogicPro in the foreground", "is the camera in use" and other numerous, fragile conditions one by one. Instead I use a **macOS Focus mode** as the master switch: build two personal automations with Shortcuts (a macOS automation app), each doing a `curl` to an HA webhook when the Focus mode turns on / off, and HA flips `input_boolean.desk_pause_focus`. Single source of truth, clean.

### Three pitfalls that stopped me (the most valuable part this time)

**Pitfall one: macOS 26's "Local Network privacy" is granted per binary**

At first I had the Mac-side script use `mosquitto_pub` to send data straight to the broker on the Raspberry Pi. Running it by hand in the terminal — success; handed to launchd to run in the background — `runs` was going up, exit code 0, but the broker received nothing.

Switching to a direct Python connection made the error clearer: `[Errno 65] No route to host`. But in the same launchd context, `curl` to the Raspberry Pi returned 200.

Conclusion: **macOS 26's Local Network privacy is granted per executable**. Running by hand in the terminal, the process inherits the terminal app's "Local Network" permission; a headless process launched by launchd is a separate identity without that permission, so Homebrew's `python3` / `mosquitto_pub` get silently denied access to the LAN. `/usr/bin/curl` is an Apple-signed system binary and gets through.

The key diagnostic step was trying `curl` and a direct MQTT connection in the same launchd script:

```text
launchd 上下文：curl_to_pi=200      ← 网络是通的
launchd 上下文：mosquitto/python 失败 ← 只有三方二进制被拦
```

The fix: **let the permitted `curl` make the hop across the LAN**. The Mac no longer connects to the broker directly; it `curl`s an HA webhook, and HA then does `mqtt.publish` internally. That gets around Local Network privacy while keeping the broker, the least-privilege account and the `expire_after` safety net.

**Pitfall two: `mosquitto_pub` reports "Bad file descriptor" under launchd**

It's really the poor-quality error message from pitfall one — after the socket is denied by Local Network privacy, mosquitto's network loop hits a bad fd and reports `Error: Bad file descriptor`, which sends you off in the stdin/fd direction. Only switching to Python and seeing `No route to host` made the truth clear.

**Pitfall three: a Chinese `name` generates a pinyin `entity_id`, and all cross-entity references break**

In HA, the `entity_id` of MQTT / template entities is generated by slugifying the `name`. To save effort I gave a sensor the Chinese name `Mac 空闲秒数`, and HA turned it into pinyin:

```text
sensor.mac_kong_xian_miao_shu
binary_sensor.mac_zai_zhuo_qian
```

But my templates referenced the English `sensor.mac_idle_seconds` — so it never got a value, and `at_desk` was always off. The symptom was confusing: the data was clearly updating on the dashboard, yet the sensor stayed off.

(`input_boolean` / `timer` aren't affected; their `entity_id` comes from the key name in the config, not from `name`.)

Lesson: **for any technical entity that other templates / automations will reference, always use an English `name`** so the `entity_id` is clean and predictable; leaving it in Chinese is unsafe because it ends up in the id.

> There's also a small related pitfall: in `ioreg | awk '… exit}'`, awk stops on the first match, which sends SIGPIPE to the upstream `ioreg`, and combined with the script's `set -e -o pipefail` it makes the script "quietly exit early" after getting the idle value, never reaching the reporting step. Just remove awk's early `exit`.

### A little takeaway

I came away with two main lessons.

First, **split complex decisions into a chain of booleans you can feed values into and verify independently**: `at desk / not focused / not night`, each layer can be tested on its own by `curl`ing a value in and reading the true value back from the database, so when debugging you're not facing a black box.

Second, **the devil in cross-platform automation is in the environment details, not the main logic**: Local Network privacy granted per binary, the Chinese-to-pinyin slug rule — these things are perfectly valid in config syntax, yet they silently break the whole chain. Clearly verifying whether each hop actually gets through is far faster than rereading the YAML over and over.
