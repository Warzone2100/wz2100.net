---
title: "Neues Feature Spotlight: Aufzeichnungen"
date: 2021-10-10 # no-translate
draft: false # no-translate
slug: "neues-Feature-Aufzeichnungen"
tags:
  - "Feature Spotlight"
newstranslate: true # no-translate
---

Beginnend mit Warzone 2100 Version 4.2.0, sind jetzt **Aufzeichnungen** für Scharmützel und Mehrspielerspiele verfügbar.

Jedes Scharmützel oder Mehrspielerspiel wird in einer (_winzige_) `.wzrp` Datei aufgezeichnet, die innerhalb von Warzone wiedergegeben werden kann.

- Für Scharmützel-Aufzeichnungen: Gehe zu "_Einzelspieler_" > "_Scharmützel Aufzeichnung ansehen_"
- Für Mehrspieler-Aufzeichnungen: Gehe zu "_Mehrspieler_" > "_Aufzeichnung ansehen_"

Die Dateien sind gespeichert in:
- `<configdir>/replay/skirmish`
- `<configdir>/replay/multiplay`


> _Hinweis: Nur die letzten paar Dutzend Aufzeichnungen werden automatisch gespeichert. Wenn Du eine Aufzeichnung dauerhaft speichern möchtest, kannst Du "Konfigurationsverzeichnis öffnen" aus dem Menü "Einstellungen" anklicken und Sie an einen anderen Ort kopieren._

### Aufzeichnung abspielen:

Sobald eine Aufzeichnung geladen ist, kannst du **pausieren**, **abspielen** oder **vorspulen** (zwei Geschwindigkeiten).

(Die Kamera ist auch während das Spiel pausiert voll beweglich.)

Da Du Dich bei Aufzeichnungen im Zuschauermodus befindest, kannst du alle Spieler / die gesamte Karte sehen und Du kannst sogar den `specstats` Chat Befehl verwenden, um das Statistik-Overlay-Fenster zu aktivieren.

Wenn die Aufzeichnung beendet ist, erhältst Du eine Nachricht (und die Spielsimulation pausiert).

### Wiedergabevoraussetzungen:

Die Wiedergabe der Aufzeichnung hat derzeit folgende Voraussetzungen:
- Du musst dieselbe Karte und Modifikationen lokal zur Verfügung haben.
- Im Allgemeinen solltest Du eine Aufzeichnung mit derselben Version von Warzone 2100 wiedergeben, die für die Aufnahme verwendet wurde. (Dies wird in der Aufzeichnungs-Datei aufgezeichnet, und Du wirst eine Nachricht erhalten, wenn es nicht der Fall ist.)

Aber vorausgesetzt beide Voraussetzungen sind erfüllt, können `.wzrp` Dateien mit Anderen geteilt und leicht auf verschiedenen Systemen wiedergegeben werden.

### Was kannst Du mit ihnen machen?

- Spiele ein Scharmützel ab, pausiere und fange den süßen Moment / Volley / etc ein und mache den perfekten Screenshot.
- Wiederhole ein Mehrspieler-Spiel (mit voller Sichtbarkeit) und erfahre, wie Du geschlagen wurdest.
- Teile eine Aufzeichnung mit Anderen. (Stelle sicher, dass Du die Karte auch sendest, falls Du eine nicht integrierte Karte benutzt.)
- Einfacheres Melden von Fehlern. (Bitte die Aufzeichnungs-Datei anhängen)

### Bekannte Einschränkungen:

- Aufzeichnungen können nicht zurückgespult werden - wenn du zurückgehen möchtest, musst Du die Aufzeichnung neu laden und zu dem gewünschten Punkt vorspulen.
- Die Verwendung einer Reihe von Cheats führt zu "desync" Fehlern bei der Wiedergabe.
- Das Ändern der Spielgeschwindigkeit während des Spiels führt zu "desync" Fehlern bei der Wiedergabe.
- Wenn Du die Kernspiel-Dateien modifizierst (z.B. Statistikdateien), wird die Wiedergabe einer Aufzeichnung von jemand Anderem wahrscheinlich nicht funktionieren (bis Du zu den Standarddateien zurückkehrst).

### Wie Aufzeichnungen funktionieren:

Aufzeichnungs-Dateien speichern die erforderlichen Einstellungen zum Initialisieren des Spiels und alle Spieleingaben / Netzwerk-Nachrichten.

Bei der Wiedergabe wird die Spielsimulation mit den selben Starteinstellungen neu initialisiert (aber mit Dir als Zuschauer). Danach werden alle Ereignisse in der Reihenfolge und zum richtigen Zeitpunkt neu verarbeitet.

Da die Simulation des Spiels deterministisch ist (bei gleichen Inputs, Ereignissen, & Seed), simuliert dies das gesamte Spiel!

(Aber das ist auch der Grund, warum vorspulen möglich ist, aber zurückspulen nicht so einfach. Und warum dieselbe Version von WZ zur Wiedergabe einer Aufzeichnung verwendet werden soll: Wenn es Kernspieländerungen gibt, die die Simulation beeinflussen, wird es nicht synchronisiert. Mit der selben Version wird die gleiche Simulationslogik / -regeln sichergestellt.)

## Zusammenfassung:

Aufzeichnungen sind ein lang erwartetes Feature, zusätzlich zur **[Zuschauerunterstützung]({{< newslink "news-17.md" >}})**, verfügbar in Warzone 2100 v4.2.0. Sieh zu, teile sie, lerne von ihnen.
