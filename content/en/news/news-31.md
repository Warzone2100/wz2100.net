---
title: "Version 4.3.2 released"
date: 2022-11-09 # no-translate
draft: false # no-translate
slug: "version-4-3-2"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.3.2**, a bug-fix and improvement release.

Including:
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Fix: Restoring window sometimes shows black screen in OpenGL mode
- Fix: Possible high CPU usage when minimizing window in Vulkan mode
- Fix: Default fullscreen dimensions should match the current resolution
- Fix: PNG files should take precedence over KTX2 files, to support mods
- Fix: Missing top section on cyborg repair turret
- Fix: Update generic design tank

And a few multiplayer balance tweaks:
- Buff Flashlight for tanks, increase HP 100->180 and add 1 tile of range 12->13 (PR [#2889](https://github.com/Warzone2100/warzone2100/pull/2889))
- Reduce periodical damage on Incendiary Mortar 26-24 (PR [#2908](https://github.com/Warzone2100/warzone2100/pull/2908))
- Remove MGAA specific research, Whirlwind requires all MG ROF upgrades and Hurricane, AG and Hurricane need MG ROF2, MG ROF3 require Assault Gun (PR [#2922](https://github.com/Warzone2100/warzone2100/pull/2922))
- Reduce price of Hellstorm from 450->400 and weight from 20000->10000, Pepperpot price reduced from 200->175 and build time from 900->800 (PR [#2893](https://github.com/Warzone2100/warzone2100/pull/2893))

[View the full 4.3.2 changelog](https://github.com/Warzone2100/warzone2100/raw/4.3.2/ChangeLog)

**(For all the changes in 4.3.0, see the [Version 4.3 release announcement]({{< newslink "news-30.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
