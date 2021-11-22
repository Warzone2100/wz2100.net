---
title: "Version 4.0.0-beta3 available"
slug: "version-4-0-0-beta3"
tags:
  - "Releases"
---

The third beta release of 4.0.0, **4.0.0-beta3**, is available for testing, with *many* bug fixes since beta1 & beta2. This is a very large release, and contains multiple changes. Please test it intensively so that we may soon push out the final 4.0.0.

It is available at the usual locations:
- [Download 4.0.0-beta3 from SourceForge](https://sourceforge.net/projects/warzone2100/files/releases/4.0.0-beta3/)
- [Download 4.0.0-beta3 from GitHub Releases](https://github.com/Warzone2100/warzone2100/releases/tag/4.0.0-beta3)

#### 4.0.0 General Highlights:

- New graphics backend support:
    - New support for:
        - **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_%28API%29)**
        - **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
        - **[DirectX](https://en.wikipedia.org/wiki/DirectX)** (via [libANGLE](https://en.wikipedia.org/wiki/ANGLE_%28software%29), OpenGL ES -> DirectX)
        - **[Metal](https://en.wikipedia.org/wiki/Metal_%28API%29)** (via [MoltenVK](https://github.com/KhronosGroup/MoltenVK), Vulkan -> Metal)
    - In addition to the existing support for:
        - **[OpenGL 3.0+ Core Profile](https://en.wikipedia.org/wiki/OpenGL#OpenGL_3.0)** (default), **[OpenGL 2.1 Compatibility Profile](https://en.wikipedia.org/wiki/OpenGL#Version_history)**
    - See the new "Graphics Backend" option in the Video Options menu.
- New "Factions" for multiplayer / skirmish
- Higher-res terrain textures, backdrops
- New Music Manager, + AlexTheDacian's new soundtrack album
- Support for "script-generated" / "random" maps (and two new built-in maps that take advantage of this: `6p-Entropy` and `10p-Waterloop`)
- Scrollable room chat, and many other UI / widget improvements
- Updated / smarter AI bots (Bonecrusher, Cobra)
- New "headless" mode (for `--autogame`, `--autohost`, `--skirmish`)
- JS API enhancements, + a new "Script Debugger"
- Removal of Qt as a dependency, + a new embedded JS engine: QuickJS
- Quality-of-Life / smoothness improvements
- Hundreds of bug fixes

With this release, we also now offer native builds for additional platforms:
- New: **Windows 64-bit builds** (for both Intel 64-bit / x64, and ARM64)
- New: **macOS Universal Binaries** with native Apple Silicon support (in addition to Intel 64-bit support)

[View the full 4.0.0-beta3 changelog](https://github.com/Warzone2100/warzone2100/raw/4.0.0-beta3/ChangeLog)

There have been over **1000 commits** since the last stable release, from many contributors including: Alexander Volkov, alfred007 / highlander1599, Bennett Somerville, Björn Ali Göransson, cpdef, Cyp, Daniel Llewellyn, Ilari Tommiska, inodlite, Karamel, KJeff01, lakebeans, Maxim Zhuchkov, Next67, past-due, Paweł Perłakowski, Prot EuPhobos, Thiago Romão Barcala, Tipchik, toilari, Topi Miettinen, TotalCaesar659, Vitya Andreev

We'd also like to thank all of the new and returning translators who have helped to improve the translations for the game via the [Crowdin project](https://crowdin.com/project/warzone2100). For more information on how to help with translations, see [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Please report all bugs [on GitHub](https://github.com/Warzone2100/warzone2100/issues).**

And don't forget to check out the new official Discord server:

{{< discordinvite description="Official Server" >}}
