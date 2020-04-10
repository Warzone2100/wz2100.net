---
title: "Where is the configuration / savegame directory?"
---

It depends on your platform:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **On Windows:**

The directory `Warzone 2100 Project\Warzone 2100 <version>` is located under the `%APPDATA%` folder.

Hence, the default path for the Warzone 2100 configuration data on Windows Vista+ would be: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

By default, the `%APPDATA%` folder is hidden. Entering: `%APPDATA%\Warzone 2100 Project\` into the address bar of Windows Explorer / File Explorer will browse to your Warzone directory.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **On macOS:**

The directory `Warzone 2100 <version>` can be found in your home-directory at: `~/Library/Application Support/`

By default, recent version of macOS hide your account's Library folder. To view it in Finder, hold down the **Option (⌥)** key while clicking the **Go** menu, and your Library folder will appear as a menu choice.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **On Linux:**

Under GNU/Linux, Warzone 2100 conforms to the [XDG base directory spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

By default, the directory `warzone2100-<version>` can be found in your home-directory under the path `~/.local/share/`. (If the `XDG_DATA_HOME` environment variable is defined, the Warzone folder will be located within `$XDG_DATA_HOME`.)

The leading dot in the `.local` part of the path indicates that it is a hidden directory, so depending on your configuration you may not be able to see it. However, you can still access it by typing the path into your address-bar.
