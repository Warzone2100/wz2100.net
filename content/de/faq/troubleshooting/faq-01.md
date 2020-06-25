---
title: "Wo ist das Konfiguration bzw. Savegame-Verzeichnis?"
---

Es hängt von der Plattform ab:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **Unter Windows:**

Das Verzeichnis `Warzone 2100 Project\Warzone 2100 <version>` befindet sich unter dem `%APPDATA%` Ordner.

Das bedeutet, dass das Standardverzeichnis für die Warzone 2100 Konfigurationsdatei unter Windows Vista+ unter `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100\` zu finden ist. <version>\`

Standardmäßig ist der `%APPDATA%` Ordner versteckt. Wenn du `%APPDATA%\Warzone 2100 Project\` in die Adressleiste deines Windows Explorer / Dateien Explorer eingibst, wirst du zum Warzone Verzeichnis weitergeleitet.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **Unter macOS:**

Das Verzeichnis `Warzone 2100 <version>` kann in dem Home-Verzeichnis unter `~/Library/Application Support/` gefunden werden.

Standardmäßig verstecken neuere Versionen von macOS den Bibliotheksordner deines Kontos. Um ihn im Finder zu finden, halte die **Option (⌥)** Taste gedrückt, während Du das **Go** Menü anklickst und Dein Bibliotheksordner wird als Menüpunkt angezeigt.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **Unter Linux:**

Unter GNU/Linux, entspricht Warzone 2100 den [XDG Basisverzeichnis Spezifikationen](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Standardmäßig ist das `warzone2100-<version>` Verzeichnis in Deinem Home-Verzeichnis unter dem Pfad `~/.local/share/` zu finden. (Wenn die `XDG_DATA_HOME` Umgebungsvariable definiert ist, wird der Warzone_Ordner unter `$XDG_DATA_HOME` zu finden sein.)

Der führende Punkt im `.local` Teil des Pfades zeigt an, dass es sich um ein verstecktes Verzeichnis handelt, so dass Sie in Abhängigkeit von Ihrer Konfiguration dieses möglicherweise nicht sehen können. Sie können aber trotzdem darauf zugreifen, indem Sie den Pfad in Ihre Adressleiste eingeben.
