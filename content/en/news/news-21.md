---
title: "Version 4.2.1 released"
date: 2021-11-08 # no-translate
draft: false # no-translate
slug: "version-4-2-1"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.2.1**, a bug-fix release.

Including:
- Replay v2 format (that embeds downloaded maps for easier sharing)
- Improved replay saving performance / behavior
- Improved spectator lag / fast-forward behavior
- A new native fractal value noise generator for use in map scripts
- A new button to display spectator stats (i.e. `specstats`)
- Host: Remember number of spectator slots in multiplayer games
- Campaign: Tweaks to Alpha 09, Alpha 06 NP reinforcements
- Fix: Account for the transporter in campaign unit limit
- Fix: Do not reset ready status of players on spectator leave
- Numerous fixes for crashes, cleanup issues, and memory leaks

And a number of multiplayer balance tweaks:
- Rollback "ALL ROUNDER" damage value against "Legged", Increase the accuracy at long range of all MGs from 50 to 55 (PR [#2361](https://github.com/Warzone2100/warzone2100/pull/2361))
- Increase the weight of HVC, add 0.5 tiles range to HVC cyborg, and reduce ROF of these weapons (PR [#2363](https://github.com/Warzone2100/warzone2100/pull/2363))
- Increase the research time "High Temperature Flamer Gel Mk3" so it is no longer included in "Advanced Base" (PR [#2364](https://github.com/Warzone2100/warzone2100/pull/2364))
- Faster Bombard and Pepperpot production, weaken Incendiary Mortar burn radius and damage, and earlier access to mortar accuracy research (PR [#2367](https://github.com/Warzone2100/warzone2100/pull/2367))
- Required research for Howitzer: APFSDS Cannon Rounds Mk2 -> Heavy Mortar - Bombard (PR [#2368](https://github.com/Warzone2100/warzone2100/pull/2368))

[View the full 4.2.1 changelog](https://github.com/Warzone2100/warzone2100/raw/4.2.1/ChangeLog)

**(For all the changes in 4.2.0, see the [Version 4.2.0 release announcement]({{< newslink "news-20.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

There have been **61 commits since 4.2.0**, from many contributors including: AbcLmn18, alfred007 / highlander1599, Denis Gantsev, KJeff01, Lupus-Mechanicus, past-due, Tipchik

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
