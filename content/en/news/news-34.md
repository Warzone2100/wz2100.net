---
title: "Version 4.3.5 released"
date: 2023-04-16 # no-translate
draft: false # no-translate
slug: "version-4-3-5"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.3.5**, a bug-fix and improvement release.

Including:
- Add: Display kills and units in spectator stats UI
- Fix: "Get off my land" and "kill selected" cheats
- Fix: Don't assign trucks from factories to commanders
- Fix: Repairs: Reset secondary only after "go-to-rally-point" was triggered
- Fix: Desync with losing player-turned-spectator when certain defensive structures remain
- Fix: Various potential crashes and corrupt config issues
- Add: /hostmsg lobby chat prefix that sends a message only to the host
- Change: Add Heavy Rocket Array to all skirmish AIs
- Change: Improvements to Nexus AI

And a few multiplayer balance tweaks:
- Change: Slightly increase the build cost of Mortar1Mk1 (PR [#3190](https://github.com/Warzone2100/warzone2100/pull/3190))
- Change: Return Tank Killer reloadTime from 160 -> 180 (PR [#3203](https://github.com/Warzone2100/warzone2100/pull/3203))
- Change: Increase HRA production time from 800 -> 900 (PR [#3206](https://github.com/Warzone2100/warzone2100/pull/3206))

[View the full 4.3.5 changelog](https://github.com/Warzone2100/warzone2100/raw/4.3.5/ChangeLog)

**(For all the changes in 4.3.0, see the [Version 4.3 release announcement]({{< newslink "news-30.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
