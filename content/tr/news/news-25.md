---
title: "Version 4.2.5 released"
slug: "version-4-2-5"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.2.5**, a bug-fix and improvement release.

Including:
- Numerous fixes for crashes, cleanup issues, and memory leaks
- Add: Arabic translations (huge thanks to: @mt3d !)
- Fix: Do not make units move unnecessarily when attached to commanders and ordering an attack
- Fix: Autorepair not working on units waiting to be built inside a factory when the research is completed
- Fix: Headless spectator performance improvements

Campaign improvements:
- Add: Restore a new early finish feature on Beta-end like in old versions for Easy/Normal difficulty
- Change: Bump Easy modifier to 1.5 for numeric values and Hard to 0.85 from 0.80
- Change: Decrease the base cleanup area on Alpha 12 to remove a lone bunker in the very NorthWest part of the middle base
- Change: Give generous experience to all transporter unit loads on Beta/Gamma when starting from the main menu
- Change: Make the southern scavenger base on Alpha 5 also trigger the transporter reinforcements for the player
- Change: Upgrade a few campaign maps with better defenses for camBalance, add missing modules on some buildings, and add oil drums to many Beta maps
- Change: Move Whirlwind research later into Beta campaign so Cyclone gets used for a bit longer
- Change: The Collective uses Whirlwind tanks like in previous versions again
- Change: Clear console when displaying automatic victory reminders
- Change: Allow campaign library to handle multiple VTOL spawn systems. Fix array out-of-bounds access for the "alternate" VTOL templates option
- Fix: Fix campaign HMG tower structure for Flame map editor and on a few Alpha maps
- Fix: Make Beta-end fail if the player finds themselves with no units, factories, and just a empty transporter

Skirmish / Multiplayer improvements:
- **Add: Add in-game "Mute Player" functionality**
  - Via right-clicks on chat messages in lobby, and a button in the Intelligence menu in-game
- Change: Spectators: Make F9 work and clicking on droids / structures for information purposes.
- Fix: Fix the Ultimate Scavenger weapon "Scavenger Mounted MG" not having a short range
- Fix: Ultimate Scavengers not building a few vehicles due to components not unlocked for them
- Fix: Remove extra propulsion models on scavenger helicopters

And a few multiplayer balance tweaks:
- Balance Mini-Rocket Pod against Light Cannon better by reducing Mini-Rocket Pod cost from 75 to 70 (PR [#2531](https://github.com/Warzone2100/warzone2100/pull/2531))
- Increase cost of Cannon Fortress to 1000 from 900 as it was incredibly cheap compared to other fortresses (PR [#2535](https://github.com/Warzone2100/warzone2100/pull/2535))
- Make Bombard unlock Ground Shaker instead of the Howitzer, Remove Ground Shaker requirement for HEAP Howitzer Shells, and make Howitzer Autoloader depend on HE Howitzer Shells Mk3 (PR [#2534](https://github.com/Warzone2100/warzone2100/pull/2534))

[View the full 4.2.5 changelog](https://github.com/Warzone2100/warzone2100/raw/4.2.5/ChangeLog)

**(For all the changes in 4.2.0, see the [Version 4.2.0 release announcement]({{< newslink "news-20.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
