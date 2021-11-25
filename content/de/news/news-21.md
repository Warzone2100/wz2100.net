---
title: "Version 4.2.1 veröffentlicht"
slug: "version-4-2-1"
tags:
  - "Veröffentlichungen"
---

Mit der Hilfe vieler Fehlermelder & Mitwirkenden freuen wir uns, die Veröffentlichung von **4.2.1**, bekanntgeben zu können, einem Bug-Fix-Release.

Einschließlich:
- Aufzeichnungen v2 Format (welches heruntergeladene Karten für einfacheres Teilen einbettet)
- Verbesserte Aufzeichnungsspeicherung Performance / Verhalten
- Verbesserter Zuschauer-Lag / Verhalten des schnellen Vorlaufs
- A new native fractal value noise generator for use in map scripts
- Eine neue Schaltfläche, um Statistiken für die Zuschauer anzuzeigen (z.B. `specstats`)
- Spielleiter: Erinnert an die Anzahl der Zuschauerplätze in Mehrspielerspielen
- Kampagne: Verbesserungen für die New Paradigm Verstärkungen in Alpha 09 und Alpha 06
- Korrektur: Erhöhung des Einheitenlimits in der Kampagne, da der Transporter mitgezählt wird
- Korrektur: Kein Zurücksetzen des "Bereit" Status der Spieler wenn ein Zuschauer geht
- Zahlreiche Fehlerbehebungen bei Abstürzen, Bereinigungsproblemen und Speicherlecks

Und ein paar Mehrspieler-Balance Verbesserungen:
- Zurücksetzen des "ALL ROUNDER" Schadenswertes gegen "Legged", Erhöhung der Genauigkeit bei hoher Reichweite für alle MG's von 50 auf 55 (PR [#2361](https://github.com/Warzone2100/warzone2100/pull/2361))
- Erhöhung des Gewichts der Hochgeschwindigkeitskanone, 0.5 Tiles höhere Reichweite für den Hochgeschwindigkeitskanonencyborg und Reduktion der Feuerrate für diese Waffen (PR [#2363](https://github.com/Warzone2100/warzone2100/pull/2363))
- Erhöhung der Forschungsdauer für das "Flammenwerfergel für hohe Temperaturen Mk3", damit es nicht mehr Teil bei "Fortschrittliche Basen" ist (PR [#2364](https://github.com/Warzone2100/warzone2100/pull/2364))
- Schnellere Bombard und Pepperpot Produktion, Reduktion des Brennradius und des Schadens beim Brandmörser und früherer Beginn der Forschung für die Mörsergenauigkeit (PR [#2367](https://github.com/Warzone2100/warzone2100/pull/2367))
- Erforderliche Forschung für die Haubitze: Panzerbrechende flügelstabilisierte Treibspiegelgeschosse für Kanonen Mk2 -> Schwerer Mörser - Bombard (PR [#2368](https://github.com/Warzone2100/warzone2100/pull/2368))

[Zeige das komplette 4.2.1 Änderungsprotokoll](https://github.com/Warzone2100/warzone2100/raw/4.2.1/ChangeLog)

**(Für alle Änderungen in 4.2.0, lies die [Version 4.2.0 Veröffentlichungsankündigung]({{< newslink "news-20.md" >}}).)**

**[Download-Optionen]({{< ref "/" >}})**

Für Windows 10+ ist [Warzone 2100 ab sofort im Microsoft Store](https://www.microsoft.com/store/apps/9MW0Z4MPCS8C) verfügbar.

Es gab **61 Commits seit 4.2.0**, von vielen Mitwirkenden einschließlich: alfred007 / highlander1599, Bers, Denis Gantsev, KJeff01, past-due, Thiago Romão Barcala, Tipchik

Wir möchten uns auch bei allen neuen und alten Übersetzern bedanken, die dazu beigetragen haben, die Übersetzungen für das Spiel durch das [Crowdin Projekt](https://crowdin.com/project/warzone2100) zu verbessern. Für mehr Informationen, wie Du bei den Übersetzungen helfen kannst, siehe: [doc/Translations.md](https://github.com/Warzone2100/warzone2100/blob/master/doc/Translations.md#how-do-i-help-translate).

Bitte melde alle Fehler [auf GitHub](https://github.com/Warzone2100/warzone2100/issues).

Und vergiss nicht, Dir den neuen offiziellen Discord Server anzusehen:

{{< discordinvite description="Offizieller Server" >}}
