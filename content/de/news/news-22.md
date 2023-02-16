---
title: "Version 4.2.2 veröffentlicht"
date: 2021-11-22 # no-translate
draft: false # no-translate
slug: "version-4-2-2"
tags:
  - "Veröffentlichungen"
---

Mit der Hilfe vieler Fehlermelder & Mitwirkenden freuen wir uns, die Veröffentlichung von **4.2.2**, bekanntgeben zu können, einem Bug-Fix-Release.

Einschließlich:
- Neu: "Mehrspiel-Optionen" Menü
- Neu: Tastenbelegung für "Wähle alle Landkampfeinheiten mit mehr als 50% Gesundheit und ohne Gruppenzuordnung"
- Neu: 7-Spieler Karte "Thales" hinzugefügt
- Korrekturen für die Initialisierung von OpenGL / Vulkan auf bestimmten Systemen
- Korrektur: Reparaturtürme & Baumeister nicht unnötig bewegen
- Korrektur: Der erneute Befehl an Baueinheiten, etwas zu bauen, sollte den Befehl nicht abbrechen
- Korrektur: Reparaturtürme (RT) nicht zu anderen RT zurückziehen
- Korrektur: Angriffsreichweite unter einem Commander nicht zurücksetzen
- Korrektur: Den Befehl zur Wiederbewaffnung ignorieren wenn bereits wiederbewaffnet wird
- Korrektur: Grünes Overlay nicht anzeigen, wenn es unmöglich ist, das nächste Modul zu bauen
- Korrektur: Module in der Konstruktionsliste nicht anzeigen wenn keine Gebäude dieses Typs mehr gebaut werden können
- Fix: Factory set Hold Position bug
- Korrektur: Verschiedene Spielstand / Autosave Probleme
- Korrektur: Teilweiser UI Softlock bei bestimmten Ingame-Menüs
- Korrektur: Entfernung des Kommandorelais als Voraussetzung zur Erforschung des Commanderturms
- Korrektur: Debug-Modus im Scharmützel als Zuschauer umschalten
- Korrektur: Ultimative Scavengers baut eine absurde Menge an Fabriken, wodurch das Spiel einfrieren könnte
- Zahlreiche Fehlerbehebungen bei Abstürzen, Bereinigungsproblemen und Speicherlecks

Und ein paar Mehrspieler-Balance Verbesserungen:
- Schwerer Plasmawerfer angepasst: Schaden verringert 250 -> 225, firePause erhöht 300 -> 350, Radius des periodischen Schadens reduziert 128 -> 64 (PR [#2386](https://github.com/Warzone2100/warzone2100/pull/2386))
- Brandmörser angepasst: "researchPoints": 3600 -> 4800, "researchPower": 112 -> 150 (PR [#2407](https://github.com/Warzone2100/warzone2100/pull/2407))

[Zeige das komplette 4.2.2 Änderungsprotokoll](https://github.com/Warzone2100/warzone2100/raw/4.2.2/ChangeLog)

**(Für alle Änderungen in 4.2.0, lies die [Version 4.2.0 Veröffentlichungsankündigung]({{< newslink "news-20.md" >}}).)**

**[Download-Optionen]({{< ref "/" >}})**

Für Windows 10+ ist [Warzone 2100 ab sofort im Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C) verfügbar.

Es gab von vielen Mitwirkenden **43 Commits seit 4.2.1**, inkklusive: Federico Dossena, KJeff01, Maxim Zhuchkov, past-due, Thiago Romão Barcala, Thomas Rupprecht

Wir möchten uns auch bei allen neuen und alten Übersetzern bedanken, die dazu beigetragen haben, die Übersetzungen für das Spiel durch das [Crowdin Projekt](https://crowdin.com/project/warzone2100) zu verbessern. Für mehr Informationen, wie Du bei den Übersetzungen helfen kannst, siehe: [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Bitte melde alle Fehler [auf GitHub](https://github.com/Warzone2100/warzone2100/issues).

Und vergiss nicht, Dir den neuen offiziellen Discord Server anzusehen:

{{< discordinvite description="Offizieller Server" >}}

Und erwäge eine Spende, um die mit dem Projekt verbundenen Kosten zu unterstützen:

{{< opencollective_donatebutton >}}
