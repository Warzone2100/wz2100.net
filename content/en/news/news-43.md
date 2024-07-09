---
title: "Version 4.5.1 released"
date: 2024-07-08 # no-translate
draft: false # no-translate
slug: "version-4-5-1"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.5.1**, a bug-fix and improvement release.

Including:
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Fix: Various issues with special research topics, "give all" cheat
- Fix: Log failures preventing new terrain renderer use and warn user
- Fix: Display information for loading errors caused by mods
- Fix: Improve handling of mod loading failures
- Fix: Propulsion stats in Classic balance
- Fix: UPnP compatibility with certain routers
- Fix: Various netplay log message & state handling issues
- Fix: Support auto lag kick for spectators in lobby

And a few multiplayer balance tweaks:
- Change: Reduce prices of certain defensive structures and buff some towers and hardpoints (PR [#3952](https://github.com/Warzone2100/warzone2100/pull/3952))
- Change: Adjust research cost of all defensive structures, except for artillery and bastions (PR [#3965](https://github.com/Warzone2100/warzone2100/pull/3965))

[View the full 4.5.1 changelog](https://github.com/Warzone2100/warzone2100/raw/4.5.1/ChangeLog)

**(For all the changes in 4.5.0, see the [Version 4.5 release announcement]({{< newslink "news-41.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://apps.microsoft.com/detail/9mw0z4mpcs8c).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
