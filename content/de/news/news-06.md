---
title: "Version 4.0.0-beta1 verfügbar"
date: 2021-02-28 # no-translate
draft: false # no-translate
slug: "version-4-0-0-beta1"
tags:
  - "Veröffentlichungen"
---

Die erste Beta-Version von 4.0.0, **4.0.0-beta1**, ist zum Testen verfügbar! Dies ist eine sehr umfangreiche Veröffentlichung und enthält zahlreiche Änderungen. Bitte teste intensiv, damit wir bald die finale 4.0.0 veröffentlichen können.

Sie ist an den üblichen Stellen erhältlich:
- [4.0.0-beta1 von SourceForge herunterladen](https://sourceforge.net/projects/warzone2100/files/releases/4.0.0-beta1/)
- [4.0.0-beta1 von GitHub Releases herunterladen](https://github.com/Warzone2100/warzone2100/releases/tag/4.0.0-beta1)

#### 4.0.0 Beta-1 Höhepunkte:

- Neue Grafik-Backend-Unterstützung:
    - Neue Unterstützung für:
        - **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_%28API%29)**
        - **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
        - **[DirectX](https://en.wikipedia.org/wiki/DirectX)** (via [libANGLE](https://en.wikipedia.org/wiki/ANGLE_%28software%29), OpenGL ES -> DirectX)
        - **[Metal](https://en.wikipedia.org/wiki/Metal_%28API%29)** (via [MoltenVK](https://github.com/KhronosGroup/MoltenVK), Vulkan -> Metal)
    - Dies ist zusätzlich zu der bestehenden Unterstützung für:
        - **[OpenGL 3.0+ Core Profile](https://en.wikipedia.org/wiki/OpenGL#OpenGL_3.0)** (Standard), **[OpenGL 2.1 Compatibility Profile](https://en.wikipedia.org/wiki/OpenGL#Version_history)**
    - Sieh Dir die neue Option "Grafik-Backend" im Menü "Videoeinstellungen" an.
- Neue "Fraktionen" für Multiplayer / Scharmützel
- Geländetexturen und Hintergründe mit höherer Auflösung
- Neuer Musik-Manager + AlexTheDacian's neues Soundtrack Album!
- Unterstützung für "skript-generierte" / "zufällige" Karten (und zwei neu eingebaute Karten, die diese Vorteile nutzen: `6p-Entropy` und `10p-Waterloop`)
- Scrollbarer Chat und viele andere UI / Widget-Verbesserungen
- Aktualisierte / klügere KI-Bots (Bonecrusher, Cobra)
- Neuer "kopflos" (Server-) Modus (für `--autogame`, `--autohost`, `--skirmish`)
- JS API Erweiterungen, + ein neuer "Script Debugger"
- Abschaffung der Abhängigkeit von Qt, + eine neue eingebettete JS-Engine: QuickJS
- Bedienungsverbesserungen
- Hunderte von Fehlerbehebungen

Mit dieser Veröffentlichung bieten wir nun auch native Builds für zusätzliche Plattformen an:
- Neu: **Windows 64-Bit Builds** (für Intel 64-Bit / x64 und ARM64)
- Neu: **macOS Universal Binaries** mit nativer Apple Silicon Unterstützung (zusätzlich zur Intel 64-Bit Unterstützung)

[Zeige das komplette 4.0.0-beta1 Änderungsprotokoll](https://github.com/Warzone2100/warzone2100/raw/4.0.0-beta1/ChangeLog)

Es gab über **940 Commits** seit der letzten Veröffentlichung, von vielen Mitwirkenden einschließlich: Alexander Volkov, alfred007 / highlander1599, Bennett Somerville, Björn Ali Göransson, cpdef, Cyp, Daniel Llewellyn, Ilari Tommiska, inodlite, Karamel, KJeff01, lakebeans, Maxim Zhuchkov, Next67, past-due, Paweł Perłakowski, Prot EuPhobos, Thiago Romão Barcala, Tipchik, toilari, Topi Miettinen, TotalCaesar659, Vitya Andreev

Wir möchten uns auch bei allen neuen und alten Übersetzern bedanken, die dazu beigetragen haben, die Übersetzungen für das Spiel durch das [Crowdin Projekt](https://crowdin.com/project/warzone2100) zu verbessern. Für mehr Informationen, wie Du bei den Übersetzungen helfen kannst siehe: [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

**Bitte melde alle Fehler [auf GitHub](https://github.com/Warzone2100/warzone2100/issues).**

Und vergiss nicht, Dir den neuen offiziellen Discord Server anzusehen:

{{< discordinvite description="Offizieller Server" >}}
