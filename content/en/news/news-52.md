---
title: "Version 4.6 - The Options Update"
date: 2025-09-08 # no-translate
draft: false # no-translate
slug: "version-4-6-0"
tags:
  - "Releases"
---

With over **750 commits** since the last release, it’s time for Warzone 2100 v**4.6**!

This release includes completely revamped options menus, many additional Tweak Options for the Original Campaign (Insane Spawns, Infinite Time, Fast EXP Gain, Tower Wars, and more!), Spectator Host mode, Blind Lobbies / Games, improved graphics initialization, improved high-quality water, networking improvements, performance improvements, and more!

#### 4.6 General Highlights:

- **Revamped Options Menus**
  - Revamped & reorganized options menus available in the title and in-game
  - Fixes usability issues, adds many new options, makes it easier to change controls
- **Improved High-Quality Water**
  - Massively improved high-quality water effects by @MaNGusT
- **Improved Graphics Initialization**
  - Automatically attempts multiple graphics backends on first-run (or if initialization fails)
  - Defaults to Vulkan in more cases, when possible
- **New Windows Installer**
  - Supports all architectures (x64, arm64, and x86)
  - Offers "all users" (admin privs required) and "current-user-only" installs
  - Advanced Options and much more customization
  - Supports (optionally) portable installs
  - Supports easier future updates
- Add: Improve research items tooltips with categories and time
- Add: Attempt to break infinitely circling units out of a movement loop
- Add: Various mouse edge scrolling fixes, and new "Automatic" Trap Cursor mode
- Add: Performance improvements for loading, path-finding, target selection, networking, and high-object-count situations
- Add: Add "Audio Cues" options section, toggle for "Group Reporting" audio cue
- Change: Bump repair spread area from 6 to 10 tiles
- Fix: Can't build if the droid is centered on the tile
- Fix: Added check for droid distance when working on structure
- Fix: Target selection sometimes preferring targets that can't be hit behind terrain
- Fix: Units sometimes do not retreat
- Fix: Prevent splash damage from giving exp when damaging friendly objects
- Fix: Graphics pop-in due to quick object clipping
- Fix: Various model graphics issues (seams, shadows, connector positioning)
- Fix: Transporters no longer catch fire when flying over fire
- And many other bug & crash fixes

Multiplayer Highlights:

- **Spectator Host**
  - Easily host as a spectator
- **Blind Lobbies & Games**
  - In a blind lobby: Players' true identities are hidden from everyone (except the host) - **until the game _starts_**
  - In a blind game: Players' true identities are hidden from everyone (except the host) - **until the game _ends_**
- **Revamped Lobby Game Browser**
  - New design, more filtering options, more room information, and increased responsiveness
- Fix: Premature game loss with mp end conditions
- Fix: Tighten template design validity checks to prevent creating tanks with VTOL weapons
- Fix: Prevent MP penetrating weapons causing friendly fire

Campaign Highlights:

- **Additional Tweak Options for Original Campaign**
  - **Insane Spawns**
    - Fully realizing Insane with additional spawns and behavior on most missions
    - Available in Insane difficulty (with option "Insane Spawns") _and_ on lower difficulties (with option "Non-Insane Spawns")
  - **Infinite Time**
    - Missions have no timer where possible (Timer Power Bonus replaced with a small power reward if enabled)
  - **Victory Hints**
    - Displays a console message every few minutes showing victory related information
  - **Finale Fun**
    - Activate Final Gamma mission bonus content
  - **Gamma Bonus**
    - Extra Gamma mission making use of a map created by the original development team (map updated by: @DARwins1)
  - **Fast EXP Gain**
    - Increases unit experience point gain by 2x
  - **Tower Wars**
    - Player gets significantly stronger structures
- **Update Fractured Kingdom to v1.4 release**
- Add: Give ACs some basic splash damage
- Add: Specify missing research names so research appears in the Stats objects
- Add: "Defending Your Base" guide topic
- Fix: Upgrade obsolete units on-map to appropriate ones
- Fix: libcampaign: Release partial factory groups when their factory gets destroyed
- Fix: libcampaign: Fix losing after winning when timing a victory precisely at the end of the mission timer on offworld missions
- Fix VTOL Rail Gun not shooting air units
- Fix: Prevent campaign Gauss Cannon friendly splash damage
- Numerous balance tweaks and changes (see full changelog)

And some multiplayer balance tweaks:

- **Add Particle Gun Laser weapon** (PR [#4248](https://github.com/Warzone2100/warzone2100/pull/4248))
- Adjust Emplacement-PlasmaCannon cost 200 -> 350, buildPoints 400 -> 500 (PR [#4206](https://github.com/Warzone2100/warzone2100/pull/4206))
- Increase spinAngle for Tracks in MP 45->65 to allow better unit packing (PR [#4417](https://github.com/Warzone2100/warzone2100/pull/4417))

[View the full 4.6.0 changelog](https://github.com/Warzone2100/warzone2100/raw/4.6.0/ChangeLog)

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

There have been over **750 commits** since the last stable release, from many contributors including: 1269339743, aco4, andy5995, Bert Fraterman, Chewbakka-Wakka, DARwins1, KJeff01, MaNGusT, Maxim Zhuchkov, Monsterovich, past-due, Pavel Solodovnikov, Solstice245, Subsentient, xx-5

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
