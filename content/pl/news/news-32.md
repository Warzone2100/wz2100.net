---
title: "Version 4.3.3 released"
slug: "version-4-3-3"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.3.3**, a bug-fix and improvement release.

Including:
- Add: Cursor scaling support
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Change: Make light / medium half-tracks a bit more visually distinct
- Change: Rebalance FastPlay to better fit the new campaign balance
- Change: Allow setting up to 20 research labs in the limits menu
- Fix: Don't override orders with guard behavior when done repairing, unless explicitly ordered to repair
- Fix: [Audio] Improve stream buffer exhaustion handling to better avoid occasional music resets
- Fix: Load structure and droid limits before loading droids and structures
- Fix: Default initialize the NP artifact group waypoint on Alpha 11 so grabbing the artifact first won't interfere with their movement
- Fix: Fix config file not storing the correct color variable when selecting a flag color in the options menu, thus reverting to green after level exit
- Fix: Do not play attacked sounds from friendly fire

And a few multiplayer balance tweaks:
- Use a new set of experience thresholds for unit and commander ranks; Make EMP/Electronic weapon research depend on Command Turret Upgrade (PR [#2958](https://github.com/Warzone2100/warzone2100/pull/2958))
- Reduce splash radius of the EMP Cannon to 1.5 tiles from 2 tiles (PR [#2975](https://github.com/Warzone2100/warzone2100/pull/2975))
- Reduce build power of the little scourge cyborg to 233 from 250 and increase range by 1 tile (PR [#3004](https://github.com/Warzone2100/warzone2100/pull/3004))
- Reduce Assault Cannon research time by about 1 minute, Twin Assault Cannon still appears at the same time (PR [#3000](https://github.com/Warzone2100/warzone2100/pull/3000))
- Make Twin Assault Gun come earlier by about 1 minute so to appear before Twin Assault Cannon (PR [#3029](https://github.com/Warzone2100/warzone2100/pull/3029))
- Push Whirlwind further back into the tech tree and depend on Dedicated Synaptic Link Data Analysis Mk3 / move Depleted Uranium Bullets after Dense Composite Alloys Mk3 (PR [#3066](https://github.com/Warzone2100/warzone2100/pull/3066))

[View the full 4.3.3 changelog](https://github.com/Warzone2100/warzone2100/raw/4.3.3/ChangeLog)

**(For all the changes in 4.3.0, see the [Version 4.3 release announcement]({{< newslink "news-30.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
