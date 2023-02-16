---
title: "Version 4.3.0-beta2 available"
slug: "version-4-3-0-beta2"
tags:
  - "Releases"
---

The latest beta release of 4.3.0, **4.3.0-beta2**, is available for testing! Please test it intensively so that we may soon push out the final 4.3.0.

It is available at the usual locations:
- [Download 4.3.0-beta2 from GitHub Releases](https://github.com/Warzone2100/warzone2100/releases/tag/4.3.0-beta2)
- [Download 4.3.0-beta2 from SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.3.0-beta2/)

#### 4.3.0 beta Highlights:

- **New "Super Easy" difficulty for campaign**
- **Additional new "Aftermath" soundtrack** (from Lupus-Mechanicus)
- Add Flatpak builds (for Linux)
- Support for bidirectional text using fribidi
- Improve Cobra AI yet again (balances against defensive / system research when 1v1 on high oil maps)
- Show the rank a unit will have if it were produced next
- Add console message when limits change
- Update campaign balance (and fixes) for: Alpha 2, Alpha 6, later Beta missions, Beta-end, Gamma 2
- Fix: Chinese, Japanese, Korean text display
- Fix: Rendering improvements for text and translucent effects
- Fix: Inaccurate calculations on lower-performance systems affecting placing blueprints, rotation of camera, etc
- Fix: Model errors with the: cyclone flak, scavenger cranes, wrecked tanker, water pipe features, howitzer, mortar models
- Fix: Cyborg and Super Cyborg shadow issues
- Fix: Improve a bottleneck in shadow calculations
- Fix: Make artillery fire over walls
- Fix: Direct weapon: Don't fire when blocked by defense hardpoint
- Fix: Simplify repairs logic, prevent "stuck" repair stations
- Fix: Hotkey doesn't count selected units correctly
- Fix: Do not form alliances with scavengers when starting games
- Fix: Chat message is sent upon clicking anywhere outside of chat widget
- Fix: Fix the balance of FastPlay since the merging of camBalance
- Fix: When starting Beta / Gamma from the main menu, no longer block extra structure space at the LZ
- Fix: Fix OpenGL antialiasing only working at 2x
- Fix: Vulkan device selection when CPU device types (like llvmpipe) are present
- Fix: Fix longstanding save-related issue where incomplete research topics could disappear
- Fix: Make Blender .PIE plugin work on Blender 3.2
- And many other bug & crash fixes

And a number of multiplayer balance tweaks:

- Revamp machinegun AA weapons to use machinegun research requirements instead of cannons (PR [#2654](https://github.com/Warzone2100/warzone2100/pull/2654))
- HVC ROF Rollback for tank and cyborg (PR [#2763](https://github.com/Warzone2100/warzone2100/pull/2763), [#2820](https://github.com/Warzone2100/warzone2100/pull/2820))
- Boost flamers: add 1 tile of range to Inferno, 0.5 tiles of range to Thermite cyborg, and reduce Plasmite Flamer weight 5000->1000 and give it a small increase to HP from 75->100 (PR [#2714](https://github.com/Warzone2100/warzone2100/pull/2714))
- Make Needle require two cannon accuracy upgrades since Scourge Missile requires two rocket accuracy upgrades (PR [#2784](https://github.com/Warzone2100/warzone2100/pull/2784))
- Make ~T2 MG damage upgrades take less time to research to help keep MGs relevant before Flashlight (PR [#2784](https://github.com/Warzone2100/warzone2100/pull/2784))
- Increase Heavy Cannon long range by 0.5 tiles making it reach 9 tiles (PR [#2820](https://github.com/Warzone2100/warzone2100/pull/2820))
- Condense Reinforced Base Structure Materials upgrades into 3 upgrades (PR [#2835](https://github.com/Warzone2100/warzone2100/pull/2835))

[View the full 4.3.0-beta2 changelog](https://github.com/Warzone2100/warzone2100/raw/4.3.0-beta2/ChangeLog)

There have been over **540 commits** since the last release, from many contributors including: alfred007 / highlander1599, Bers, chainlito, David Heidelberg, Denis Gantsev, IgnitedIce, kammy, KJeff01, Lupus-Mechanicus, MaNGusT-, Maxim Zhuchkov, Mohammad Al Tahan, past-due, Paweł Perłakowski, Thiago Romão Barcala, Thomas Rupprecht, Tipchik

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
