---
title: "Version 4.4 - The Team, Terrain, & Transparency Update"
slug: "version-4-4-0"
tags:
  - "Releases"
---

With almost **700 commits** since the last release, it’s time for Warzone 2100 v**4.4**!

This release includes a brand-new "High Quality" terrain mode, an option to use "Classic" terrain, Group-management UI, "Quick Chat", Team Strategy planning, options for handling player resources on leave in multiplayer, numerous graphics and performance improvements (on supported systems), and more!

**With this release, the minimum requirements for running Warzone 2100 have changed to:**
- **OpenGL 3.0+** (from: OpenGL 2.1+)
- **OpenGL ES 3.0+** (from: OpenGL ES 2.0+)
- **Vulkan 1.0+** (unchanged)

#### 4.4 General Highlights:

- **New Terrain Renderer**
  - **New High-Quality terrain** with bump + specular mapping (from MaNGusT-)
  - "Normal" terrain (the default for more than a decade)
  - **Classic terrain** (get the truly classic look back!)
- **Instanced Rendering Support**
  - Performance improvements on supported systems
- **Initial Cascaded Shadow Mapping Support**
  - Quality and performance improvements on supported systems
- **Major improvements for classic model geometry & transparency issues** (with huge thanks to MaNGusT-)
- **Add: Groups UI menu for group management**
- Add: New repair droid suborder in the right-click menu to control if they accept retreating units (defaults to off)
- Change: Make artillery units gain commander bonuses, mimic the commander's orders, and take up slots in the commander's group
- Change: Make sensors follow the Commander thresholds again for rank
- Change: Increase minimum vertical ascension speed for slower VTOLs
- Change: Allow EMP weapon subclasses to do actual damage, add new stat "empRadius" to determine the EMP effect area rather than using the splash radius
- Fix: Properly update obstacle maps for allies
- Fix: Allied repair not working
- Fix: Improve scrolling in high FPS situations
- Fix: Prevent droids from sometimes moving towards and ramming into targets
- Fix: Mouse cursor not properly displaying or appearing in some cases
- Fix: Improve the VTOL Strike / CB rearming behavior
- Fix: Hotkeys not working after switching keyboard layout
- And many other bug & crash fixes

Multiplayer Highlights:

- **New Options for Handling Player Resources on Leave**
  - "**Distribute to Team**" - evenly splits the departing player's resources among any remaining team members
  - "**Destroy (Classic)**" - the classic behavior (all resources are destroyed when a player leaves)
- **New Pre-Game ("Waiting for Players") Screen**
  - Better view of player / spectator loading status + animated count-down
- **Add Team Strategy View**
  - Team Strategy enables sharing with your (human) teammates your plans for research and unit types (without language barriers)
  - Available via both pre-game Team Planning time (if in a game with human teams) and in-game via the Intelligence screen
- **Add "Quick Chat" in Lobby and In-game**
  - Quick Chat provides a series of categorized chat messages / phrases which can be easily sent with either one click (or via quick keyboard commands)
  - Quick Chat messages are automatically displayed in the receiver's language, and thus (once translations are updated) also provide an ability to bridge language / communication barriers
  - Quick Chat "Team" messages are sent via secured net messages between teammates
- Change: Allow demolishing departed ally structures
- Fix: Possible desync at game end (due to endconditions.js issue)
- Fix: Default name "Commander" overriding player names on exit, leave, kick etc.

Campaign Highlights:

- Numerous fixes and improvements for many levels including: Alpha 5, Alpha 6, Alpha 8, Beta 1, Beta 8, Beta End, Gamma 1, Gamma 3, Gamma 7
- Change: Use a randomized assortment of the best design components for Beta/Gamma 1 if coming from the main menu
- Change: Let research upgrade the mobile repair turret, set it to a baseline of half the repair facility
- Fix: Fix saved coordinates for newly produced units inside transporters causing units to appear in a corner coming back offworld
- Fix: Show reinforcement timer for offworld missions after the first exit rather than immediately at mission start if they're available at the start
- Fix: Cancel in-progress/held research inside labs when changing campaigns so research results don't disappear upon transitions
- Fix: libcampaign's camSetVtolSpawnState() when the stop object label is passed so that all spawners tied to the object get deactivated and not the first one encountered
- Fix: Transporters that dropped off units on Beta/Gamma 1, and are still flying back to go off map, would persist through the end of the mission and cause an unavoidable early exit trigger to load the next mission

And a number of multiplayer balance tweaks:

- Increase Super Transporter base HP from 500 to 3000, Cyborg transporter from 200 to 1000 (PR [#3215](https://github.com/Warzone2100/warzone2100/pull/3215))
- Remove splash damage from VTOL Lancer, Tank-Killer, and Scourge Missile (PR [#3222](https://github.com/Warzone2100/warzone2100/pull/3222))
- Increase range of HVC turret from 9.5 to 10--rollback to v3.1.x (PR [#3214](https://github.com/Warzone2100/warzone2100/pull/3214))
- Rollback price and times for Stabilized Rockets and HE Rockets Mk3 research to match 4.3.3 (PR [#3249](https://github.com/Warzone2100/warzone2100/pull/3249))
- Increase Sunburst AA ROF from 58 to 90 (PR [#3217](https://github.com/Warzone2100/warzone2100/pull/3217))
- Reduce splash damage of HRA and Seraph, increase Seraph reload time from 135 to 150 (PR [#3266](https://github.com/Warzone2100/warzone2100/pull/3266))
- Various AA turret cost, HP, or ROF tweaks (PR [#3224](https://github.com/Warzone2100/warzone2100/pull/3224))
- Increase costs on artillery (PR [#3223](https://github.com/Warzone2100/warzone2100/pull/3223))
- Various stat tweaks to Needle to help fight Scourge Missile better (PR [#3226](https://github.com/Warzone2100/warzone2100/pull/3226))
- Return various Tank-Killer stats to v3.1.5 to account for the appearance of HRA (PR [#3205](https://github.com/Warzone2100/warzone2100/pull/3205))
- Increase build time of Fortresses by 25% (PR [#3232](https://github.com/Warzone2100/warzone2100/pull/3232))
- Reduce ROF of EMP Mortar from 130 to 90 (PR [#3241](https://github.com/Warzone2100/warzone2100/pull/3241))
- Increase ROF of Cyclone by 10%, Reduce range of Hurricane from 16 to 14 tiles (PR [#3244](https://github.com/Warzone2100/warzone2100/pull/3244))
- Reduce weight of EMP Cannon from 10,000 to 8,000 (PR [#3245](https://github.com/Warzone2100/warzone2100/pull/3245))
- Make Leopard and Panther come earlier, reduce weights on red bodies, and adjust stats on Leopard, Retaliation, and Retribution (PR [#3056](https://github.com/Warzone2100/warzone2100/pull/3056))
- Reduce weight of Heavy Cannon from 10,000 to 8,000 (PR [#3246](https://github.com/Warzone2100/warzone2100/pull/3246))
- Required research for Gauss Cannon changed from Hardened Rail Dart Mk3 -> Rail Gun (PR [#271](https://github.com/Warzone2100/warzone2100/pull/271))
- Reduce Cannon VTOL weapon hitpoints, increase rockets (PR [#3303](https://github.com/Warzone2100/warzone2100/pull/3303))
- Buff Robotic/Advanced repair facility research bonus to 100% from 50%, and let mobile repair turrets and mechanic get upgraded by repair research (PR [#3391](https://github.com/Warzone2100/warzone2100/pull/3391))
- Bump VTOL bomb weapon HP up by 10% (PR [#3395](https://github.com/Warzone2100/warzone2100/pull/3395))
- Fix: Replace NavGunSensor with the default sensor for Sunburst, Avenger, Vindicator, and Stormbringer AA sites (PR [#3257](https://github.com/Warzone2100/warzone2100/pull/3257))
- Decrease Heavy Plasma Launcher effectiveness against moving units, increase against stationary units and structures (PR [#3258](https://github.com/Warzone2100/warzone2100/pull/3258))
- Allow transporters to gain bonuses from armor upgrades (PR [#3252](https://github.com/Warzone2100/warzone2100/pull/3252))

[View the full 4.4.0 changelog](https://github.com/Warzone2100/warzone2100/raw/4.4.0/ChangeLog)

**[Download Options]({{< ref "/" >}})**

For Windows 10+, [Warzone 2100 is now available via the Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C).

There have been almost **700 commits** since the last stable release, from many contributors including: alfred007, andy5995, Artem Melentyev, Beanslinger2, Dmitry Kargin, danil179, DARwins1, Evolution01, Heiko Becker, Jonathon / jwhite510, KJeff01, Lupus-Mechanicus, MaNGusT-, Maxim Zhuchkov, past-due, Tipchik, Vitya Andreev

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
