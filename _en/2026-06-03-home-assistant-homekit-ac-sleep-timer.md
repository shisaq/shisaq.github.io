---
title: "Building a \"Sleepy\" Timer for the AC: Home Assistant + HomeKit Field Notes"
subtitle: "Starting from \"the mini-program can schedule, why can't Home?\" — smashing through Apple Home's hidden limits, ending with a \"fan\""
date: 2026-06-03
author: "Pixel Li"
header-img: "img/about-bg-walle.jpg"
tags: ["Home Assistant", "HomeKit", "air conditioner", "automation", "timer"]
original: _posts/2026-06-03-给空调做一个会睡觉的定时器.md
translated_by: deepseek-chat
polished_by: deepseek-reasoner
---
Summer's here. When I sleep with the AC on at night, there are two things I dread most: one is running it all night, waking up with my nose stinging from the cold and the meter spinning merrily; the other is wanting to set a timer to turn it off, but this AC of mine **has no timer-off function** of its own.

The manufacturer's mini-program does have a timer — but picture the scene: you're already lying in bed, and you still have to fumble in the dark to unlock your phone, open the mini-program, wait for it to connect to the cloud, tap in and set the timer... and any sleepiness is gone. What I want is **lying in bed, flicking something in Apple Home or talking to Siri, telling it "turn off in X hours"**, then closing my eyes with peace of mind.

This article records the whole process of building this "sleepy timer." In the end it's very simple, but along the way I hit several invisible walls — and those walls are exactly the most valuable part of this piece. If you're also fiddling with Home Assistant hooked up to an AC, these pitfalls can save you two evenings of detours.

## First, the final result

In Apple Home, there's now a slider control called "Skylight AC Timer."

- Drag it while lying in bed: **drag to 30% = turn off in 3 hours, 25% = 2.5 hours**, in 0.5-hour steps;
- To cancel: drag it back to 0 / turn it off;
- There's also a **fallback**: if I set it and then forget, or fall asleep without setting anything at all, at 23:00 it decides on its own — if the AC is still on, it gives another 3 hours, and turns off automatically in the early morning;
- **It only controls the one in the bedroom; daytime AC use is completely unaffected**, and it will never turn off your daytime AC for no reason.

The whole chain looks like this:

```text
Apple Home / Siri
      ↓  drag slider / voice
HomeKit bridge (built into Home Assistant)
      ↓
fan.skylight_ac_timer   ← a "fan shell" slider (hold on, I'll explain below why it's a fan)
      ↓  percentage ÷ 10 = hours
input_number.skylight_ac_hours   ← where "how many hours" is actually stored
      ↓
timer.skylight_ac_manual   ← countdown
      ↓  when time's up
climate.turn_off → bedroom AC (controlled over the local LAN)
```

Looks unremarkable, right? But "why on earth a fan" and "why not just use the AC's own timer" — behind these two questions is a whole night of detective work.

## Breaking down the requirements first

Before I started, I broke the vague wish in my head into five hard requirements. This step is especially important — it helps you judge whether each approach "actually works":

1. **Manual, any duration**: tonight I might want 2 hours, tomorrow 3 — I have to be able to set it myself.
2. **Fallback safety net**: people forget things. If I fall asleep without setting anything, there still has to be a safety net to turn it off.
3. **Only one bedroom**: there are two ACs at home; the other one must not be touched.
4. **No collateral damage during the day**: running the AC during the day is normal use; the timer logic must never turn it off during the day.
5. **Operable lying down**: ideally right in Apple Home / Siri, without opening a third app.

With these five, off we go.

## The first bend: can the Home app do timers itself?

The most natural idea: doesn't Apple Home do automations? Just set an automation to "turn off in X hours," right?

**No.** Apple Home's automation triggers are limited to a few kinds (time, accessory state, someone arriving/leaving, sensors). It **has no native "countdown / delay X hours" control**. All you can do is "turn off at a fixed time every day" — but my duration differs every day, so a fixed time is out right away.

iOS Shortcuts does have a "Wait" action, but a "Wait" in Shortcuts only runs on your phone, and it breaks once the screen has been locked for a while — relying on it for 2 hours is extremely unreliable.

Conclusion: **a real countdown has to be handed to a machine that's always awake.** I happen to have a Raspberry Pi at home running Home Assistant (HA), which is the perfect candidate for this. So the question becomes: how does HA control this AC, and how do I hand control back to Apple Home.

## The second bend (detective time): doesn't the AC have its own timer?

This is the part I dug into the longest, and learned the most from.

My unit is a WAHIN (a Midea brand), connected in HA through the `midea_ac_lan` **local LAN** integration — meaning HA talks to the AC directly on the local network, not through the cloud. So, that "timer off" in the mini-program — **is the cloud counting down for me, or is the AC counting down on its own?**

At first I assumed "the cloud." But then I thought, no: if the manufacturer ran a countdown in the cloud for tens of millions of ACs, the cost and logic make no sense. **The countdown is almost certainly written into the AC unit itself and counted by its own firmware**, and the mini-program just sends down the "turn off in N minutes" command.

If that's the case, can I send that local command myself? I dug into the code of the `midea-local` library. The AC's set command is the `0x40` packet in the protocol, and I went straight to reading the part where it builds the command body:

```python
# midealocal/devices/ac/message.py · MessageGeneralSet._body
return bytearray([
    power | prompt_tone,
    mode | target_temperature,
    fan_speed,
    0x00,   # ← these hardcoded 0x00s...
    0x00,   # ← are exactly the on-timer / off-timer slots in the Midea protocol
    0x00,
    swing_mode,
    ...
])
```

The truth comes out: **the protocol slots are right there (those `0x00`s are exactly the timer bytes), but this local library never fills them in**. Then I looked at the status response parsing (`XC0MessageBody`), which reads thirty-odd fields — temperature, mode, sleep, freeze protection... **but never reads the timer**. The only `timer` in the whole library is just a boolean "capability flag" in a sub-protocol, not a duration.

So the conclusion is clear:

- My intuition was right — **the AC firmware does support local timers, it's not cloud logic**;
- But this open-source local integration **never exposed that feature**;
- To use it, I'd have to hack the library (change command encoding, add writable entities), at the cost of being overwritten on every update, plus having to get the byte encoding right for your specific model;
- **And most critically**: even if I wired it up, the HomeKit side still has no "duration control" available — the UI problem isn't solved at all.

> 💡 **A tip for fellow tinkerers**: when you hit "this feature works in the app but isn't in the integration," go read the integration/library source first — you can often tell within ten minutes whether it's "not exposed" or "not supported by the protocol." This one step can save you several evenings of blind trial and error.

So I decisively backed off: **don't touch the library**. Let HA do the countdown itself — a `timer` helper is stable enough, and even picks up again after a restart (`restore: true`). "Where the countdown runs" doesn't actually affect the experience at all; what's really unsolved is the next stage.

## The third bend (crash site): HomeKit's three walls

Requirement #5 is "operate it from Home while lying down." I wanted a control **like adjusting the AC temperature**, one you can nudge +/- continuously, showing "how many hours" at a glance. Sounds easy, right? Apple taught me a lesson with three walls.

**Wall one: HomeKit has no "number / duration slider."** I went through the HA HomeKit bridge source, and the control types it supports are just these: `fans / lights / covers / humidifiers / thermostats / locks / switches / sensors…` — **no `number`**. Your `input_number` simply can't be passed through.

**Wall two: there are only two units for continuous sliders.** Going through it, only two categories render as "continuous slider/dial" in Apple's native Home:

| Control | Source | Display unit |
|---|---|---|
| Light brightness / fan speed / covers / humidifier | Percentage characteristic | **locked to %** |
| Thermostat | Temperature characteristic | **locked to °** |

The unit is hardcoded by the protocol characteristic; Apple **won't let you change `°` to "hours."** (Third-party HomeKit apps like Eve can show custom units, but with Apple's native Home it's just these two.)

Well... at least the thermostat's number is real! If I set 2.5, it shows 2.5, just with a ° next to it — tolerable. So I actually built a fake thermostat with `generic_thermostat`, treating "temperature" as "hours," declaring the range 0–8 with 0.5 steps.

**Wall three, and the straw that broke this approach: Apple Home imposes a hard floor of ~7° on a thermostat's target temperature.** I had explicitly written `min_temp: 0` in HA, but the dial on the phone **can only be set to 7.0 / 7.5 / 8.0** — 0 through 7 all swallowed by Apple. I can't exactly ask people to "set a minimum of 7 hours," can I? This approach was scrapped on the spot.

> 🧱 **One line to remember**: in Apple's **native** Home, if you want a fully continuous control, you either accept "the display is %" or accept "thermostat minimum 7°." You can't have both — real-number and full-range are mutually exclusive.

## The final plan: finish with a "fan"

After hitting three walls, the way forward actually became clear: since "showing real hours" isn't possible, take a step back and choose a **percentage slider that never lags**, and smooth over the "it's a percentage" flaw with an **easy-to-remember mapping**.

I chose a **fan** (a light would also work; the fan wins because you can set the number of speed steps, which makes alignment easy):

- Set `speed_count: 20`, so the slider has 20 steps, **each step 5% = 0.5 hours**, max 100% = 10 hours. Dragging snaps to the steps, so it's easy to hit half-hour precision;
- I made the mapping as easy to do in your head as possible: **percentage ÷ 10 = hours**. 30% → 3 hours, 25% → 2.5 hours;
- This "fan" is really an empty shell. What actually stores the hours is the `input_number` behind it; the fan is just the wrapper it hands to HomeKit.

The full config is below, and HA users can copy it directly (I use [packages](https://www.home-assistant.io/docs/configuration/packages/) to put a whole feature into one file, so it's easy to roll back as a unit). **You only need to replace the actual AC entity `climate.197912093838856_climate` with your own**; everything else can be copied as-is.

{% raw %}
```yaml
# packages/skylight_ac_timer.yaml
# Bedroom AC · sleep timer off
#   In Apple Home, a "fan shell slider" fan.skylight_ac_timer:
#   percentage ÷ 10 = hours (30%→3h, 25%→2.5h), 20 steps, 0.5h each, max 10h, drag to 0 / off = cancel.
#   Behind it, input_number.skylight_ac_hours stores the hours; when the countdown ends, turn off the AC and reset to 0.
#   Fallback: check once at 23:00; if the AC is still on and no timer is set → start 3 hours (→ off at 02:00). AC on during the day doesn't enter this logic.

input_number:
  skylight_ac_hours:
    name: Bedroom AC timer hours
    min: 0
    max: 10
    step: 0.5
    mode: slider
    icon: mdi:timer-outline

timer:
  skylight_ac_manual:
    name: Bedroom AC manual countdown
    duration: "02:00:00"
    restore: true
  skylight_ac_fallback:
    name: Bedroom AC fallback countdown
    duration: "03:00:00"
    restore: true

# ⚠️ Uses the new template syntax (the old `fan: platform: template` will be removed in 2026.6)
template:
  - fan:
      - name: Bedroom AC timer
        default_entity_id: fan.skylight_ac_timer   # Lock the English entity_id; HomeKit bridge references are more stable
        state: "{{ 'on' if (states('input_number.skylight_ac_hours') | float(0) > 0) else 'off' }}"
        percentage: "{{ (states('input_number.skylight_ac_hours') | float(0) * 10) | int }}"
        speed_count: 20
        turn_on:
          - choose:
              - conditions:
                  - condition: template
                    value_template: "{{ states('input_number.skylight_ac_hours') | float(0) < 0.5 }}"
                sequence:
                  - action: input_number.set_value
                    target: { entity_id: input_number.skylight_ac_hours }
                    data: { value: 2 }   # Tapping "on" directly without dragging the slider = default 2 hours
                  - action: timer.start
                    target: { entity_id: timer.skylight_ac_manual }
                    data: { duration: "02:00:00" }
        turn_off:
          - action: input_number.set_value
            target: { entity_id: input_number.skylight_ac_hours }
            data: { value: 0 }
          - action: timer.cancel
            target: { entity_id: timer.skylight_ac_manual }
        set_percentage:
          - variables:
              hrs: "{{ ((percentage | float(0) / 10) * 2) | round(0) / 2 }}"  # Round to the nearest 0.5
          - action: input_number.set_value
            target: { entity_id: input_number.skylight_ac_hours }
            data: { value: "{{ hrs }}" }
          - choose:
              - conditions:
                  - condition: template
                    value_template: "{{ hrs >= 0.5 }}"
                sequence:
                  - action: timer.start
                    target: { entity_id: timer.skylight_ac_manual }
                    data:
                      duration: >
                        {% set s = (hrs * 3600) | int %}
                        {{ '%02d:%02d:00' % (s // 3600, (s % 3600) // 60) }}
            default:
              - action: timer.cancel
                target: { entity_id: timer.skylight_ac_manual }

automation:
  # Countdown ends: turn off AC + reset hours to 0
  - id: skylight_ac_manual_finish
    alias: Bedroom AC · countdown ends → turn off and reset
    trigger:
      - platform: event
        event_type: timer.finished
        event_data: { entity_id: timer.skylight_ac_manual }
    action:
      - service: climate.turn_off
        target: { entity_id: climate.197912093838856_climate }   # ← swap for your AC
      - service: input_number.set_value
        target: { entity_id: input_number.skylight_ac_hours }
        data: { value: 0 }

  # Fallback: fixed check at 23:00
  - id: skylight_ac_fallback_check_2300
    alias: Bedroom AC · 23:00 check → if on and no timer set, start 3-hour fallback
    trigger:
      - platform: time
        at: "23:00:00"
    condition:
      - condition: template
        value_template: >
          {{ states('climate.197912093838856_climate') not in ['off','unavailable','unknown'] }}
      - condition: state
        entity_id: timer.skylight_ac_manual
        state: idle
    action:
      - service: timer.start
        target: { entity_id: timer.skylight_ac_fallback }
        data: { duration: "03:00:00" }

  - id: skylight_ac_fallback_disarm
    alias: Bedroom AC · off → cancel fallback
    trigger:
      - platform: state
        entity_id: climate.197912093838856_climate
        to: "off"
    action:
      - service: timer.cancel
        target: { entity_id: timer.skylight_ac_fallback }

  - id: skylight_ac_fallback_finish
    alias: Bedroom AC · fallback 3 hours ends → turn off
    trigger:
      - platform: event
        event_type: timer.finished
        event_data: { entity_id: timer.skylight_ac_fallback }
    action:
      - service: climate.turn_off
        target: { entity_id: climate.197912093838856_climate }
```
{% endraw %}

### A few design points worth calling out separately

**Why not just have the fan store the hours directly instead of adding an `input_number`?** Because a template fan is itself a "stateless" shell, and its percentage needs a real place to store it. The `input_number` is that "single source of truth": the fan reads it for display and writes to it to make changes take effect, and the countdown resets it to zero when it finishes. That closes the loop, and you don't have to worry about losing the value on a restart.

**Why is the fallback "check once at 23:00" instead of "start a 3-hour timer whenever it turns on"?** This is exactly the key to requirement #4 (don't accidentally affect daytime use). If it were "arm a 3-hour fallback whenever it turns on," then turning on the AC during the day would also be turned off automatically after 3 hours—not what we want. So I changed it to **check only once at 23:00**: only if the AC is still on then and no manual timer is set do we assume "this person fell asleep with the AC on" and give it a fallback shutdown. Daytime AC use never enters this logic at all.

(Small trade-off: if you don't go into the bedroom and turn on the AC until after 23:00, the fallback won't take effect that night—in that case just drag the slider manually. My schedule is regular and it basically fits, so I accepted this edge case.)

**The manual timer takes priority over the fallback.** The 23:00 check has the condition `timer.skylight_ac_manual == idle`: as long as you've already dragged the slider (the manual countdown is running), the fallback stays out of the way; they can also naturally overlap—if the manual timer is shorter, it turns off first, and the moment the AC turns off, it triggers "cancel fallback," so it won't fire twice.

## How to get this control into Apple Home

HA has a built-in **HomeKit Bridge** integration that can expose specified entities as accessories in Apple Home. Just add the `fan.skylight_ac_timer` entity from above:

> Settings → Devices & Services → find **HomeKit Bridge** → Configure → under "Entities to include" check `fan.skylight_ac_timer` → Save.

After a moment, a "Bedroom AC Timer" fan accessory shows up in Apple Home. Yes, **the icon is a fan** — that's the price we pay for "a continuous slider all the way through." Just think of it as a "countdown that blows the hot air away" 🌬️. Drag the slider, or tell Siri "set the bedroom AC timer to 30%," and 3 hours later the AC puts itself to sleep.

## One last small pitfall: old template syntax needs to be migrated

A few days after I finished, HA's backend popped up a "Repair" notice: **the old `fan: platform: template` syntax will be removed in 2026.6**, and it asked me to migrate to the new `template:` → `fan:` syntax.

Fortunately, HA's repair wizard **generates the migrated config directly** — just swap it in. The full config above is already in the **new post-migration syntax**, so if you copy it directly, you won't see this reminder again. Here's one more lesson while I'm at it:

> 🔧 **Check HA's "Repairs" panel regularly.** Many deprecations are announced one or two versions ahead and come with an auto-generated new config — deal with them early; don't wait until upgrade day for it to blow up in your face.

## Quick-reference table of pitfalls

Here are the evening's detours, condensed into one table, so you can find the one that applies to you:

| Pitfall | The truth | The fix |
|---|---|---|
| Wanted to schedule directly in Home App | No native "delay/countdown" control | Let always-on HA handle the countdown (the `timer` helper) |
| Wanted to use the AC's built-in timer | Firmware supports it, but the local integration doesn't expose it (command byte hardcoded to 0) | Don't hack the library; just let HA handle the countdown |
| Wanted a numeric slider | The HomeKit bridge has no `number` type | Borrow the percentage shell from a "fan/light" |
| Wanted the thermostat to show real hours | Apple Home pins the target temperature at a ~7° floor | Give up "real numbers" and use a % slider + an easy-to-remember mapping |
| Percentages aren't intuitive | The unit can't be changed | Pick a mapping that's easy to do in your head, like `÷10` + `speed_count` to snap between steps |
| Old template syntax is deprecated | 2026.6 removes `fan: platform: template` | Use the Repairs wizard to migrate to the new `template:` |

## Final thoughts

After a long detour, what I ended up with is very plain: **lie in bed, drag the slider, and the AC quietly goes to sleep at the time I set; even if I fall asleep first, a 23:00 safety net catches it for me.** An unassuming little tool, yet it genuinely erased the small chore of "getting up in the night to turn off the AC" from my life.

I really enjoy this kind of tinkering. On the surface it's a fight with the AC; in essence, it's dealing with those "invisible limits" — Apple's floor, the zero hardcoded in the protocol, the old syntax about to be removed. Every wall you hit makes your understanding of the system a little deeper. And the most interesting part is often not the final config you can copy, but the whole evening behind "why a fan, of all things."

May you also install one or two such "sleepy" little switches into your own life.

—— Add a little sunshine to your life ☀️
