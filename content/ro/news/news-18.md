---
title: "New Feature Spotlight: Replays"
date: 2021-10-10 # no-translate
draft: false # no-translate
slug: "new-feature-replays"
tags:
  - "Feature Spotlight"
---

Starting in Warzone 2100 version 4.2.0, **replays** are now available for skirmish and multiplayer games.

Every skirmish or multiplayer game is recorded to a (_tiny_) `.wzrp` file, which can be played back inside WZ.

- For Skirmish replays: Go to "_Single Player_" > "_View Skirmish Replay_"
- For Multiplayer replays: Go to "_Multi Player_" > "_View Replay_"

The files are stored in:
- `<configdir>/replay/skirmish`
- `<configdir>/replay/multiplay`


> _Note: Only the most recent few dozen replays are kept around automatically. If you want to save a replay permanently you can "Open Configuration Directory" from the main Options menu, and copy it somewhere else._

### Replay Playback:

Once a replay is loaded you can **Pause**, **Play**, or **Fast-Forward** (two speeds).

(The camera is fully movable even while Paused.)

Since replays place you in Spectator mode, you can see all players / the entire map, and you can even use the `specstats` chat command to enable the Stats overlay window.

When the replay ends, you will receive a message (and the game simulation pauses).

### Playback Requirements:

Replay playback currently has the following requirements:
- You must have the same map and mods available locally.
- You should generally play back a replay with the same version of Warzone 2100 used to record it. (This is recorded in the replay file, and you will receive a message if not.)

But assuming both are satisfied, `.wzrp` files can be shared with others and easily played back on different systems.

### What can you do with it?

- Play back a Skirmish game, pause and capture that sweet moment / volley / etc and take the perfect screenshot.
- Play back a multiplayer game (with full visibility) and figure out how you were beaten.
- Share a replay with others. (Just make sure to send them the map too if using a non-built-in map.)
- More easily report bugs. (Attach the replay file please!)

### Known Limitations:

- Replays cannot be rewound - if you'd like to go back, you must currently reload the replay and fast-forward from the beginning to the point that you want.
- The use of a number of cheats will cause "desync" errors during replay playback.
- Changing the game speed during gameplay will cause "desync" errors during replay playback.
- If you modify the core game files (ex: stats files), playing back a replay from someone else likely won't work (until you revert to the standard files).

### How Replays Work:

Replay files store the required settings to initialize the game, and all game inputs / network messages.

When playing back a replay, the game simulation is reinitialized with the same starting settings (but with you as a new spectator). Then, all events are re-processed in order and at the appropriate time.

Since the game's simulation is deterministic (given the same inputs, events, & initial seed), this re-simulates the entire game!

(But this is also why fast-forwarding is possible, but rewinding is not so easy. And why using the same version of WZ to play back a replay is recommended: if there are core game changes that affect the simulation, it won't be in sync. Using the same version ensures the same simulation logic / rules.)

## Summary:

Replays are a long-awaited feature, built on top of **[Spectators support]({{< ref "news-17.md" >}})**, available in Warzone 2100 v4.2.0. Watch them, share them, learn from them.
