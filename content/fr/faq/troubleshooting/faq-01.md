---
title: "Où est le répertoire de configuration / sauvegarde?"
---

Cela dépend de votre plateforme:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **Sur Windows :**

Le répertoire `Warzone 2100 Project\Warzone 2100 <version>` se trouve sous le dossier `%APPDATA%`.

Par conséquent, le chemin par défaut pour les données de configuration de Warzone 2100 sous Windows Vista+ serait : `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

Par défaut, le dossier `%APPDATA%` est masqué. Saisir `%APPDATA%\Warzone 2100 Project\` dans la barre d'adresse de l'explorateur de fichiers Windows naviguera vers votre répertoire Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **Sur macOS:**

Le répertoire `Warzone 2100 <version>` se trouve dans votre répertoire personnel : `~/Library/Application Support/`

Par défaut, la version récente de macOS masque le dossier Bibliothèque de votre compte. Pour le voir dans Finder, maintenez enfoncée la touche **Option (⌥ )** tout en cliquant sur le menu **Aller** et votre dossier Bibliothèque apparaîtra comme un choix de menu.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **Sur Linux :**

Sous GNU/Linux, Warzone 2100 est conforme à la [spécification du répertoire de base XDG](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Par défaut, le répertoire `warzone2100-<version>` peut être trouvé dans votre répertoire personnel sous le chemin `~/.local/share/`. (Si la variable d'environnement `XDG_DATA_HOME` est définie, le dossier Warzone sera situé dans `$XDG_DATA_HOME`.)

Le pointa dans `.local` du chemin indique qu'il s'agit d'un répertoire caché, donc selon votre configuration, vous ne pourrez peut-être pas le voir. Cependant, vous pouvez toujours y accéder en tapant le chemin dans votre barre d'adresse.
