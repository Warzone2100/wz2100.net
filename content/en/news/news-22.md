---
title: "Version 4.2.2 released"
date: 2021-11-22 # no-translate
draft: false # no-translate
slug: "version-4-2-2"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.2.2**, a bug-fix release.

Including:
- New: "Multiplay Options" menu
- New: Hotkey to "Select all land combat units, with health >50%, not assigned to any group"
- New: Add 7-player map "Thales"
- Fixes for initializing OpenGL / Vulkan on certain systems
- Fix: Don't needlessly move Repair Turrets & Builders
- Fix: Re-ordering construction units to build something shouldn't cancel it
- Fix: Don't retreat Repair Turrets (RT) to other RT
- Fix: Don't reset attack range under commander
- Fix: Ignore rearm order when already rearming
- Fix: Don't show green overlay when impossible to build next module
- Fix: Don't show modules in build list when unable to build more buildings of that type
- Fix: Factory set Hold Position bug
- Fix: Various savegame / autosave issues
- Fix: Partial UI soft-lock with certain in-game menus
- Fix: Remove Command Relay structure requirement for Command Turret research
- Fix: Toggling debug mode in skirmish as spectator
- Fix: Ultimate Scavengers building an absurd amount of factories that could cause the game to freeze
- Numerous fixes for crashes, cleanup issues, and memory leaks

And a few multiplayer balance tweaks:
- Adjust Heavy Plasma Launcher: Reduce damage 250 -> 225, increase firePause 300 -> 350, reduce periodical Damage Radius 128 -> 64 (PR [#2386](https://github.com/Warzone2100/warzone2100/pull/2386))
- Adjust Incendiary Mortar: "researchPoints": 3600 -> 4800, "researchPower": 112 -> 150 (PR [#2407](https://github.com/Warzone2100/warzone2100/pull/2407))

[View the full 4.2.2 changelog](https://github.com/Warzone2100/warzone2100/raw/4.2.2/ChangeLog)

**(For all the changes in 4.2.0, see the [Version 4.2.0 release announcement]({{< newslink "news-20.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

There have been **43 commits since 4.2.1**, from many contributors including: Denis Gantsev, KJeff01, past-due, Stuart Coyle, Thomas Rupprecht, Tipchik

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And to consider donating to help support the costs associated with the project:

{{< opencollective_donatebutton >}}
