---
title: "Dov'è la cartella di configurazione / dei salvataggi?"
---

Dipende dalla tua piattaforma:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **Su Windows:**

La cartella `Warzone 2100 Project\Warzone 2100 <version>` si trova in `%APPDATA%`.

Di conseguenza, il percorso predefinito per i file di configurazione di Warzone 2100 su Windows Vista+ sarebbe: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

Normalmente, la cartella `%APPDATA%` è nascosta. Inserire: `%APPDATA%\Warzone 2100 Project\` nella barra degli indirizzi di Esplora Risorse ti porterà nella tua cartella di Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **Su macOS:**

La cartella `Warzone 2100 <version>` può essere trovata nella tua cartella home al percorso: `~/Library/Application Support/`

Per impostazione predefinita, versioni recenti di macOS nascondono la cartella Libreria del tuo account. Per visualizzarla nel Finder, tieni premuto il tasto **Option (⌥)** mentre fai clic sul menu **Vai**, e la cartella Libreria apparirà come una scelta di menu.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **Su Linux:**

Su GNU/Linux, Warzone 2100 è conforme alle [specifiche della directory di base di XDG](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Per impostazione predefinita, la directory `warzone2100-<version>` può essere trovata nella tua home directory nel percorso `~/.local/share/`. (Se la variabile d'ambiente `XDG_DATA_HOME` è definita, la cartella di Warzone si troverà in `$XDG_DATA_HOME`.)

Il punto all'inizio di `.local` indica che è una cartella nascosta, quindi a seconda della tua configurazione potresti non essere in grado di vederla. Tuttavia, puoi ancora accedervi digitando il percorso nella barra degli indirizzi.
