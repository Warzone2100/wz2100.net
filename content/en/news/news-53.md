---
title: "Version 4.6.1 released"
date: 2025-09-16 # no-translate
draft: false # no-translate
slug: "version-4-6-1"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.6.1**, a bug-fix and improvement release.

Including:
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Fix: Rebuilding search paths and reloading local mods after leaving joined lobby or multiplayer game
- Fix: Call countUpdate at init, not unsynchronized at top of gameLoop
- Fix: Improve campaign coordinate generators
- Add: hostAutoLagKickAggressiveness config value
- Add: Share more host options with clients, so clients can display the state
- Fix: Apply commander distance check to getDroidEffectiveLevel, other commander fixes for multiplayer
- Fix: Improve not-ready check / kick / warning & the experience in lobbies

[View the full 4.6.1 changelog](https://github.com/Warzone2100/warzone2100/raw/4.6.1/ChangeLog)

**(For all the changes in 4.6.0, see the [Version 4.6 release announcement]({{< newslink "news-52.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://apps.microsoft.com/detail/9mw0z4mpcs8c).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
