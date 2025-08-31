---
title: "Version 4.6.0-beta4 available"
date: 2025-08-31 # no-translate
draft: false # no-translate
slug: "version-4-6-0-beta4"
tags:
  - "Releases"
---

A beta release of 4.6.0, **4.6.0-beta4**, is available for testing! Please test it intensively so that we may soon push out the final 4.6.0.

**It is available at the usual locations:**
- **Windows installer**: [GitHub](https://github.com/Warzone2100/warzone2100/releases/download/4.6.0-beta4/warzone2100_win_installer.exe) | [SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.6.0-beta4/warzone2100_win_installer.exe/download)
- **macOS .zip**: [GitHub](https://github.com/Warzone2100/warzone2100/releases/download/4.6.0-beta4/warzone2100_macOS_universal.zip) | [SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.6.0-beta4/warzone2100_macOS_universal.zip/download)
- Linux builds, source, other files: [GitHub](https://github.com/Warzone2100/warzone2100/releases/tag/4.6.0-beta4) | [SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.6.0-beta4/)

_If you are on Linux, you can also get it on Flathub's beta repo via:_
- `flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo`
- `flatpak install flathub-beta net.wz2100.wz2100`
- And then to run: `flatpak run --branch=beta net.wz2100.wz2100`

#### 4.6.0 beta Highlights:

General:

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
- Fix: Can't build if the droid is centered on the tile
- Fix: Added check for droid distance when working on structure
- Fix: Target selection sometimes preferring targets that can't be hit behind terrain
- Fix: Units sometimes do not retreat
- Fix: Prevent splash damage from giving exp when damaging friendly objects
- Fix: Graphics pop-in due to quick object clipping
- Fix: Various model graphics issues (seams, shadows, connector positioning)
- Fix: Transporters no longer catch fire when flying over fire
- And many other bug & crash fixes

Multiplayer:

- **Spectator Host**
  - Easily host as a spectator
- **Blind Lobbies & Games**
  - In a blind lobby: Players' true identities are hidden from everyone (except the host) - **until the game _starts_**
  - In a blind game: Players' true identities are hidden from everyone (except the host) - **until the game _ends_**
- **Revamped Lobby Game Browser**
  - New design, more filtering options, more room information, and increased responsiveness
- **Commander Shields**
  - Adds shields to droids in the commander's squad
  - Shields absorb initial damage, and regenerate gradually (unless knocked-out)
  - EMP weapons disable shields completely
  - Entirely configurable through the stats .json _(currently enabled for testing)_
- Fix: Premature game loss with mp end conditions
- Fix: Tighten template design validity checks to prevent creating tanks with VTOL weapons

Campaign:

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
- Numerous balance tweaks and changes (see full changelog)

And some multiplayer balance tweaks:

- **Add Particle Gun Laser weapon** (PR [#4248](https://github.com/Warzone2100/warzone2100/pull/4248))
- Adjust Emplacement-PlasmaCannon cost 200 -> 350, buildPoints 400 -> 500 (PR [#4206](https://github.com/Warzone2100/warzone2100/pull/4206))
- Increase spinAngle for Tracks in MP 45->65 to allow better unit packing (PR [#4417](https://github.com/Warzone2100/warzone2100/pull/4417))

[View the full 4.6.0-beta4 changelog](https://github.com/Warzone2100/warzone2100/raw/4.6.0-beta4/ChangeLog)

There have been over **700 commits** since the last release, from many contributors including: 1269339743, aco4, andy5995, Bert Fraterman, Chewbakka-Wakka, DARwins1, KJeff01, MaNGusT, Maxim Zhuchkov, Monsterovich, past-due, Pavel Solodovnikov, Solstice245, Subsentient, xx-5

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
