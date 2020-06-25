---
title: "Vulkan, DirectX, & Metal Unterstützung im Aufbau"
date: 2020-01-26 # no-translate
draft: false # no-translate
slug: "vulkan-directx-metal-im-aufbau"
---

Aufbauend auf der großartigen initialen `gfx_api` und Vulkan Arbeit durch @vlj testen wir nun [ mehrere Grafik-Backend-Unterstützungen ](https://github.com/Warzone2100/warzone2100/pull/489) (geplant zur Veröffentlichung mit Version 3.4.0):

- **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
- **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_(API))**
- **[DirectX](https://en.wikipedia.org/wiki/DirectX) _(via [LibANGLE](https://en.wikipedia.org/wiki/ANGLE_(software)))_** (auf Windows)

Dies ist zusätzlich zu der bestehenden Unterstützung für:
- **OpenGL 3.0+ Core Profile** (Standard), **OpenGL 2.1 Compatibility Profile**

Auf macOS, wird Vulkan durch **[MoltenVK](https://github.com/KhronosGroup/MoltenVK)** unterstützt, was bedeutet, dass Warzone2100 jetzt auch auf **[Metal](https://en.wikipedia.org/wiki/Metal_(API))** laufen kann.

Dieser PR beinhaltet viele weitere Verbesserungen, unter anderem:
- Eine neue  "**[Adaptive Vsync](https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync)**" Option (sofern unterstützt), zusätzlich zu Vsync on / off
- Eine neue "**Grafik Backend**" Option im Videoeinstellungen Menü
- Beinhaltet "**Allow optional per-vertex normals in PIE format**" [#338](https://github.com/Warzone2100/warzone2100/pull/338)
- Wesentliche Verbesserungen bei der Ressourcenbereinigung
- [und mehr](https://github.com/Warzone2100/warzone2100/pull/489)

Für mehr Details und um eine Testversion zu erhalten siehe PR: [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

Diese Arbeit ist derzeit als Teil von Version 3.4.0 geplant.
