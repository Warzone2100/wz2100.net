---
title: "Version 4.3.4 released"
slug: "version-4-3-4"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.3.4**, a bug-fix and improvement release.

Including:
- Add: Separate Ban / Kick options in game lobby
- Add: Lobby command: /makeplayer
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Fix: Let some older maps show up again in the map lists
- Fix: Always cancel research when starting it in another lab
- Fix: Missing sections on Tank Killer super cyborg
- Fix: Stop Mission Time and store it when the results screen pops up
- Change: Gamma 4: Remove middle tank traps guarding team Alpha and remove the repair units to account for new repair micro-AI
- Change: Always blow up walls and tank traps during Nexus transfers in campaign
- Change: Improve difficulty differences on Gamma 9
- Change: Make Alpha 1-3 missions flow a bit more smoothly; Increase player flamer ranges
- Change: Make Gamma 1 easier by activating factories depending on what part of the valley you exit

And some multiplayer balance tweaks:
- Add: Add new Heavy Rocket Array weapon which depends on MRA and HEAT Rocket Warhead Mk2 (PR [#3103](https://github.com/Warzone2100/warzone2100/pull/3103), [#3141](https://github.com/Warzone2100/warzone2100/pull/3141))
- Change: Reduce effectiveness of artillery modifier on bunkers 40% to 20%, Reduce effectiveness of artillery modifiers against Tracked 40% to 30% (PR [#2894](https://github.com/Warzone2100/warzone2100/pull/2894))
- Change: Make Heavy Repair Turret and Repair Facility appear at same time, improve facility repair speed by 10, and make light repair turret cost less and build faster (PR [#3022](https://github.com/Warzone2100/warzone2100/pull/3022))
- Change: Buff Plasmite Flamer HP to 125 to match the HP on Twin Assault Gun (PR [#3076](https://github.com/Warzone2100/warzone2100/pull/3076))
- Change: Move Pulse Laser to around Seraph Missile and drop Sensor Upgrade Mk3 requirement (PR [#3075](https://github.com/Warzone2100/warzone2100/pull/3075))
- Change: Increase costs on later MG research and on (Twin) Assault Gun (PR [#3113](https://github.com/Warzone2100/warzone2100/pull/3113))
- Change: Pull some Rocket damages in earlier, Reduce Tank Killer reload time to that of Lancer, Improve Rocket Pod long range accuracy to 50% from 45% (PR [#3080](https://github.com/Warzone2100/warzone2100/pull/3080))
- Change: Needle reload time matches the latest cannon weapons, nerf Super Rail gunner damages and range, nerf VTOL Needle/Rail radius and radius damage and increase weights (PR [#3081](https://github.com/Warzone2100/warzone2100/pull/3081))
- Change: Pull Mortar into Advanced Bases by removing factory module requirement (PR [#3089](https://github.com/Warzone2100/warzone2100/pull/3089))
- Change: Reduce time and cost for Command Turret research by 50% (PR [#3121](https://github.com/Warzone2100/warzone2100/pull/3121))
- Change: Reduce research topic time and cost for most defenses by 50% (PR [#3122](https://github.com/Warzone2100/warzone2100/pull/3122))
- Change: Increase reward for some engineering upgrades to 30% (PR [#3134](https://github.com/Warzone2100/warzone2100/pull/3134))

[View the full 4.3.4 changelog](https://github.com/Warzone2100/warzone2100/raw/4.3.4/ChangeLog)

**(For all the changes in 4.3.0, see the [Version 4.3 release announcement]({{< newslink "news-30.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
