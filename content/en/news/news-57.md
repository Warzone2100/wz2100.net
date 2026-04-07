---
title: "Version 4.7 - The Legacy & Lobby Update"
date: 2026-04-07 # no-translate
draft: false # no-translate
slug: "version-4-7-0"
tags:
  - "Releases"
---

This release includes the option of truly legacy campaign balance (with the **"Pumpkin" v1.10 Campaign Balance Mod**), support for the **all-new netlobby** (a revamp of the underlying hosting & joining process which brings major improvements to online play - plus a [live lobby view](https://wzlobby.wz2100.net/)), the amazing new "Reclamation" soundtrack from @Lupus-Mechanicus, plus many other improvements, fixes, and much more!

#### 4.7 General Highlights:

General:

- **Vulkan Backend Improvements**
  - Major improvements to synchronization, fixing graphical issues and behavior on some systems
  - Fixes for recreating swapchain, resolving crashes on some systems
- **Model & Graphics Fixes**
  - Numerous model fixes to resolve shadow issues by @MaNGusT
  - Remove built in shadows for most skyscrapers and make pipes float less by @MaNGusT
- **Additional new "Reclamation" soundtrack** (from @Lupus-Mechanicus)
- Add: Add Weapon Stats flag for configuring Captured Units Teleport
- Fix: Mouse cursor not respecting display scale on some OSes
- Fix: 'Disabled' state of mouse key code
- Fix: Objects incorrectly darkened due to terrain darkness / satellite strike
- And many other bug & crash fixes

Campaign:

- **"Pumpkin" v1.10 Campaign Balance Mod**
  - Matching version 1.10, this is the closest representation of the stats that the original developers (Pumpkin Studios) intended, now playable in current WZ
  - Thanks to an extensive effort by @KJeff01, who exhaustively tested actual effective stats & behavioral differences in original builds
- **Update Remastered balance, Additional Spawns 2.0**
  - Improvements over the first iteration of the "Additional Spawns" tweak
  - Fix to Alpha 9 to auto-explode the lookout tower by creating a new base (fixing a potential spawn just when the Gamma 2 map gets nuked)
  - Move Pepperpot to the Beta 5 level
- Add: Campaign balance descriptions help panel
- Fix: Classic campaign Howitzer tree path
- Fix: Various guide topic issues
- Fix: Missing Intel message issues

Multiplayer:

**The All-New Net Lobby**, and a revamp of the underlying hosting & joining process, bring major improvements to online play.

- **Easier Joining**
  - See the GameId of any lobby room once you host or join
  - Easily share the GameId with friends
  - Join games via GameId, without having to hunt for them in the lobby listing!
- **Fixes For Connection Issues**
  - Improved accessibility for those behind difficult connections or firewalls that block unusual ports
  - Improved ability to host for those on difficult ISPs
- **IPv4 + IPv6 Hosting Support**
  - Hosts can list multiple connection methods
  - Clients can fetch and filter based on supported connection methods
  - Even if a host is behind CGNAT (or a provider that otherwise interferes with opening IPv4 ports), they may now be able to host for others with IPv6 connectivity
- **New Host Options**
  - The expanded "Host Lobby Options" panel provides a single place to configure many more host options, without having to jump back out to the main Options menus. Just click the Gear icon next to the Players / Spectators tabs (when you are host).
  - Hosts can configure & customize new lobby join protections, as desired, to help handle trolls or attempts at ban evasion
- **Improved Security, Privacy & Visibility for Hosts**
  - HTTPS is now used for all communication with the lobby service
  - Lobby listings display additional host player info to help authenticate and identify games, but hide things like host IPs, providing improved visibility & privacy for hosts
- **Live Web Lobby View**
  - Keep an eye on matches from your browser: https://wzlobby.wz2100.net
- **Fix: Properly persist player mute option**
  - Player mute state is now persisted between games, as expected

[View the full 4.7.0 changelog](https://github.com/Warzone2100/warzone2100/raw/4.7.0/ChangeLog)

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

Huge thanks to all of our contributors, including everyone who contributed code, reviewed PRs, filed bugs, tested fixes, offered suggestions, or even just helped out answering questions in our Official Discord. The continued passion of the community behind this classic game is amazing to witness.

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
