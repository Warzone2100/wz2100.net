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

Por defecto, las versiones reciente de macOS ocultan la carpeta Biblioteca de tu cuenta. Para verlo en el Buscador, mantén pulsada la tecla **Opción (⌥)** mientras haces clic en el menú **Ir**, y tu carpeta Biblioteca aparecerá como una opción de menú.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **En Linux:**

Bajo GNU/Linux, Warzone 2100 cumple con la [especificación de directorio base XDG](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Por defecto, el directorio `warzone2100-<version>` se encuentra en tu directorio principal, en la ruta `~/.local/share/`. (Si la variable de entorno `XDG_DATA_HOME` está definida, el directorio de Warzone se ubica en `$XDG_DATA_HOME`.)

El punto inicial en `.local` indica que es un directorio oculto, así que, dependiendo de tu configuración, podría no ser visible. Sin embargo, todavía se puede acceder a él escribiendo la ruta en la barra de direcciones.
