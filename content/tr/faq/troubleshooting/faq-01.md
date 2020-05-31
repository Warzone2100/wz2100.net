---
title: "Yapılandırma / Oyun kaydı dizi nerede?"
---

Platformunuza bağlı olarak:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **Windows:**

`Warzone 2100 Project\Warzone 2100 <version>` dizisi `%APPDATA%` dosyası altında kayıtlıdır.

Dolayısıyla Windows Vista+ üzerinden Warzone 2100 varsayılan yapılandırma data dosyasının yeri: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

Varsayılan olarak `%APPDATA%` dosyası gizlidir. Windows/dosya aramasından `%APPDATA%\Warzone 2100 Project\` şeklinde arama yaparak Warzone dizinini açabilirsiniz.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **macOS:**

`Warzone 2100 <version>` Ana dizininizde bu noktada bulunabilir: `~/Library/Application Support/`

Varsayılan olarak yeni macOS sürümü, hesabınızın kütüphanesini gizler. Bulucuda görmek için, **Option (⌥)** Tuşuna basarak **Go** menüsüne tıklayın, kütüphane dosyanız menü seçimiyle görünecektir.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **Linux:**

Under GNU/Linux, Warzone 2100 conforms to the [XDG base directory spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

By default, the directory `warzone2100-<version>` can be found in your home-directory under the path `~/.local/share/`. (If the `XDG_DATA_HOME` environment variable is defined, the Warzone folder will be located within `$XDG_DATA_HOME`.)

The leading dot in the `.local` part of the path indicates that it is a hidden directory, so depending on your configuration you may not be able to see it. However, you can still access it by typing the path into your address-bar.
