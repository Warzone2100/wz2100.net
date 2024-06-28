---
title: "Version 4.5.0-beta2 available"
slug: "version-4-5-0-beta2"
tags:
  - "Releases"
---

The second beta release of 4.5.0, **4.5.0-beta2**, is available for testing! Please test it intensively so that we may soon push out the final 4.5.0.

**It is available at the usual locations:**
- [Download 4.5.0-beta2 from GitHub Releases](https://github.com/Warzone2100/warzone2100/releases/tag/4.5.0-beta2)
- [Download 4.5.0-beta2 from SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.5.0-beta2/)

_If you are on Linux, you can also get it on Flathub's beta repo via:_
- `flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo`
- `flatpak install flathub-beta net.wz2100.wz2100`
- And then to run: `flatpak run --branch=beta net.wz2100.wz2100`

#### 4.5.0 beta Highlights:

General:

- **New Campaign Selector, enhanced support for campaign mods (and campaign balance mods)**
  - Added Balance Mod: "Classic Balance"
  - Numerous "Tweak Options" to allow ultimate gameplay customizability
    - "Timer Power Bonus", "Classic Timers", "40 Unit Limit", "Autosaves-Only", and more
- **Addon Campaign: Reclamation**
  - A brand-new campaign from @DARwins1 with an original story taking place before the events of the main game:
  - "Set out under the command of renowned General Edmund Clayde with the goal of laying the foundations of a new world. What could possibly go wrong?"
- **Addon Campaign: Fractured Kingdom**
  - A brand-new campaign from @DARwins1 with its own self-contained story:
  - "After crash-landing in the territory of a once powerful kingdom, you must navigate your way through the various factions fighting over what remains. Can you prevail against the odds, facing relentless foes, and see this story to its end?"
- **In-Game Guide** 
  - Viewable in the escape menu, and teaching the player fundamentals throughout the campaign
- **Formation Speed Limiting**
  - This classic feature has been returned, with support for all game modes (including multiplayer)
  - Note: Currently disabled by default when starting / loading a game - use the "Toggle Formation Speed Limiting" keybind to enable
- Add: Support for per-pixel point lighting
- Add: Let trees cast shadows, improve tree models, and plant them better to the terrain
- Add: Collective/Nexus faction Forts, Collective mortar pits and bunkers, Collective T/L shaped walls, fix seams on Nexus bunkers
- Add: Give the Assault Gunner cyborg a unique weapon model based off the Assault Gun
- Add: Alert the player to the Lassat being ready via text and audio cues
- Add: Ability to assign factory output to groups
- Change: Teleport units next to Nexus Links
- Fix: Return to base/LZ when set to retreat at a health level without HQ or repair units/structures present
- Fix: Fix damage formula against structures and features incorrectly using Green rank damage reductions since v2.0.10
- Fix: Fix fully armed VTOLs attached to sensors sitting down near former targets
- Fix: Prevent scouting/patrol allowing CB droids observing something
- Fix: Ally construction units deleting structures when helping to build them
- Fix: Prevent sudden tab jumping in the build menu when trucks start a new structure
- Fix: Improve functionality of favorite buildings
- Fix: Rendering order of translucent models (i.e. baseplates) vs additive effects
- Fix: Prevent underflow in getMissionTime() calculation
- Fix: Droid map visibility after returning to home base from fresh away mission saveload
- Fix: Check if inside scroll limits before repair / RTB
- And many other bug & crash fixes

Multiplayer:

- **New Client Join UI**
  - Displays progress, adds ability to cancel a join, and no longer blocks the UI waiting on the host / connection
- **Advanced Port Mapping support**
  - Can now utilize PCP, NAT-PMP, and UPnP to improve the ability to successfully host games
- **Improve Auto Lag Kick**
  - Fix issues, improve situations including: all players loaded but spectator is blocking game start, lagging / infinite ping in the lobby
- Add: Ability to kick loading (stuck) players on "Waiting for Players" screen
- Add: Map search bar to find your installed maps by name
- Fix: Plasma Cannon Emplacement research showing a Pulse Laser emplacement
- Fix: Use sounds for quick chat events
- Fix: Make ban button add player to ban list
- Fix: Let match settings console message display for more than a second at the start of a match
- Fix: Update reticules when alt-click unloading transporters
- Fix: Check if there are available slots before a client wants to move
- Fix: Various network improvements

Campaign:

- Add: Allow campaign library to map tech to map created artifacts, allow adding/deleting managed tech
- Add: New light cyborg variants of the HVC and TK for Beta campaign
- Fix: Load saved research state before any droids or structures are loaded fixing research attribute re-application issues for home map objects
- Fix: Remove transport timer on mission results screen after losing offworld or beating Gamma 9
- Fix: Prevent issues with Commanders losing groups, or Commander groups being "tied" together, after offworld transition or saveloading
- Fix: Use initNoGoAreas() to prevent LZs from persisting across missions blocking areas that could be built on
- Fix: Prevent launch button disappearing on LZ compromise until widget gets reopened
- Fix: Let debug mode persist across missions again
- Fix: Don't force player to destroy the Gamma 2 base to win (else would have to destroy it after the nuke event)
- Fix: Add hover unit anti-cheese on Alpha 12 land path factory triggers
- Fix: Prevent noisy assert when attemping to load saves when a flag position is outside scroll limits such as on Gamma 6
- Fix: Prevent picking up artifact multiple times if units are within range at the same time (via a clone wars cheat for example)
- Fix: Fix LZ flare position being 1 tile off for LZs on Beta 10 and Gamma 8
- Fix: Bring back Mobile Repair units on Gamma 4 and replace MRP towers with TK hardpoints
- Fix: Prevent "return to LZ" displaying and playing at the end of Gamma 2 sometimes
- Numerous balance tweaks and changes (including support for classic balance mode)

And a number of multiplayer balance tweaks:

- Add Mk2 and Mk3 upgrades to the Depleted Uranium MG Bullets research line to help those that want pure MG in 1v1s (PR [#3834](https://github.com/Warzone2100/warzone2100/pull/3834))
- Leopard body upgrade: kinetic 12->14, HP 107->120 (PR [#3575](https://github.com/Warzone2100/warzone2100/pull/3575))
- EMP Missile Launcher splash damage radius 2->3, long-range 3->5 (PR [#3594](https://github.com/Warzone2100/warzone2100/pull/3594))
- HRA production time rollback 900->800 (PR [#3626](https://github.com/Warzone2100/warzone2100/pull/3626))
- Reduce weight of Heavy Repair Turret 3000->2000 (PR [#3833](https://github.com/Warzone2100/warzone2100/pull/3833))
- Make Hi-Energy Laser Emitter depends on Flashlight and the Heavy Laser depend on Pulse Laser (PR [#3878](https://github.com/Warzone2100/warzone2100/pull/3878))
- Increase Plasmite Flamer HP 125->205 (PR [#3933](https://github.com/Warzone2100/warzone2100/pull/3933))

[View the full 4.5.0-beta2 changelog](https://github.com/Warzone2100/warzone2100/raw/4.5.0-beta2/ChangeLog)

There have been over **780 commits** since the last release, from many contributors including: 1269339743, Blagodel, DARwins1, Karamel, KJeff01, Monsterovich, past-due, Pavel Solodovnikov, Tipchik, Vincent Lejeune, Maxim Zhuchkov

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
