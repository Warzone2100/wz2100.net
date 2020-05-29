---
title: "¿Dónde está el directorio de configuración / partidas guardadas?"
---

Depende de tu plataforma:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **En Windows:**

El directorio `Warzone 2100 Project\Warzone 2100 <version>` está ubicado bajo el directorio `%APPDATA%`.

Por lo tanto, la ruta predeterminada para los datos de configuración de Warzone 2100 en Windows Vista o superior sería: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

La carpeta `%APPDATA%` está oculta por defecto. Introduciendo: `%APPDATA%\Warzone 2100 Project\` en la barra de direcciones del Explorador de Windows / Explorador de archivos se dirigirá a su directorio Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **En macOS:**

El directorio `Warzone 2100 <version>` puede encontrarse en su directorio principal en: `~/Library/Application Support/`

Por defecto, las versiones reciente de macOS ocultan la carpeta Biblioteca de tu cuenta. To view it in Finder, hold down the **Option (⌥)** key while clicking the **Go** menu, and your Library folder will appear as a menu choice.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **On Linux:**

Under GNU/Linux, Warzone 2100 conforms to the [XDG base directory spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

By default, the directory `warzone2100-<version>` can be found in your home-directory under the path `~/.local/share/`. (If the `XDG_DATA_HOME` environment variable is defined, the Warzone folder will be located within `$XDG_DATA_HOME`.)

The leading dot in the `.local` part of the path indicates that it is a hidden directory, so depending on your configuration you may not be able to see it. However, you can still access it by typing the path into your address-bar.
