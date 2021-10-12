---
title: "New Feature Spotlight: Spectators"
slug: "new-feature-spectators"
tags:
  - "Feature Spotlight"
---

Starting in Warzone 2100 version 4.2.0, a brand-new option is available: **spectators**.

### Spectators can:
- Watch a multiplayer game live*
- See the entire map
- Chat with other spectators (but not with players)
- Use the special `specstats` chat command to open a special statistics view
- Re-watch a locally-saved replay of the game later

> _*Note: The game does not wait on spectators, once started, so if a spectator’s connection to the host is poor they may have a sub-par live viewing experience. (Example: If a spectator lags, their view may pause momentarily, and may then automatically “fast-forward” to catch up to real-time as soon as possible.)_

### Lobby spectator configuration:

Hosts can enable up to 10 spectator slots for all multiplayer games, by clicking the new Host Options ("gear") button.

{{< figure src="/img/spectators_1.png" alt="Click Host Options to Enable / Disable Spectator Join" >}}

Multiplayer games (that have open slots) can be joined as a player or as a spectator.

Players in a lobby can move themselves to Spectators or back to Players (if there is room or the Host is willing to swap them with another Player) by clicking the Team chooser.

{{< figure src="/img/spectators_2.png" alt="Move to Spectators" >}}

The Host of a lobby can move Players to Spectators (which then prevents them from moving back without Host permission), and ask Spectators if they wish to play.

{{< figure src="/img/spectators_3.png" alt="Ask Spectator to Play" >}}
{{< figure src="/img/spectators_4.png" alt="Host wants to know if you want to play? prompt" >}}

##### Help Grow the Community:
- The best way to help grow the multiplayer community is to provide space for new players to learn.
- If you host an open (not-password-protected) lobby, consider trying to balance teams so that new players are paired with more experienced players.
- But you now also have another option: open Spectator slots and give new players a chance to watch you play and learn the game!

### Lost a match? Keep watching:

Once a Player loses in a skirmish or multiplayer game, they can now automatically continue to watch the game as a Spectator, and see how it ends!

## Summary:

Spectators are a great enhancement to the Warzone 2100 experience, and help make multiplayer, tournaments, and training new players even more fun and accessible.

They also make possible another feature (that's new in 4.2.0): **[Replays]({{< newslink "news-18.md" >}})**.

##### Advanced Spectating for Streamers:

Streamers wishing to spectate games with less game UI can start WZ with the command-line option: `--spectator-min-ui`
