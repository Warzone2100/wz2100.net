---
title: "Version 4.6.2 released"
date: 2025-12-09 # no-translate
draft: false # no-translate
slug: "version-4-6-2"
tags:
  - "Releases"
---

With the help of many bug reporters & contributors, we're happy to announce the release of **4.6.2**, a bug-fix and improvement release.

Including major improvements to AI Bots:
- Nexus:
  - Improve game performance when multiple Nexus bots are used
  - Fix help system accessing help data incorrectly
  - Fix a countDroid() call doing nothing for when to skip production
- NullBot family:
  - Fix Hover AI causing "ruleset warnings" over the Mini-Rocket Pod
  - Fix broken NullBot defense building behaviors
  - Make sure VTOL pads are built in safe areas
- Cobra:
  - Can use Particle Gun now
  - Slightly refactor research tree into separate functions
  - Go for Power research more if available in low oil
  - Reduce or eliminate chance of trapping trucks in high oil maps as it was trying to defend base derricks
  - Try building repair facilities near other repair facilities (works best on high oil maps)
  - Add a Cannon VTOL personality (AV chat command)
  - Bump repair thresholds to medium damage levels
  - Improvements to high oil build orders
  - Much better T2+ No Bases support in all map types
  - Micro optimize low oil build order to build power modules before cyborg factories
  - Try using research labs with modules first when selecting research
  - Some small research path optimizations
  - Force Cobra to research defense topics randomly since they don't take long these days
  - Cobra defends bases and oils better with defenses (kinda turtle-AI like)
  - Fix Cobra building base structures very far away sometimes, due to a cache call collision returning an oil truck's defense structure location
  - Rocket personality now ignores MG past the early game, will go full rocket artillery instead to optimize research
  - Make it prefer stronger bodies faster, more chance to build heavy ones
  - Fix a very old bug on Advanced Bases Cockpit / Cockate where truck production would be delayed for a few minutes (This will also fix other such maps that give almost no base structures on these settings)
- BoneCrusher:
  - Fix some out-of-bounds access errors causing asserts
  - Huge performance improvements (eliminates stutters in many higher oil maps)
  - Fix a broken statement for adding oil hunters

Plus other important fixes and improvements:
- Change: Let Insane difficulty AI bots start with gates
- Change: Port backend from SDL2 to SDL3
- Fix: Add transporter weapon validity check
- Fix: Correct and clarify some topics of the in-game guide
- Fix: Tower Wars tweak for Classic Balance
- Fix: Refactor how player connection state is recorded and handled, resolve "kick loop"
- Fix: Errors in the maps Valley and Concrete
- Numerous fixes for crashes, cleanup issues, and memory leaks

[View the full 4.6.2 changelog](https://github.com/Warzone2100/warzone2100/raw/4.6.2/ChangeLog)

**(For all the changes in 4.6.0, see the [Version 4.6 release announcement]({{< newslink "news-52.md" >}}).)**

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://apps.microsoft.com/detail/9mw0z4mpcs8c).

We'd like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
