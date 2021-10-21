---
title: "Къде е папката с настройки / съхранени игри?"
---

Зависи от платформата ви:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **На Windows:**

Папката `Warzone 2100 Project\Warzone 2100 <version>` се намира в `%APPDATA%`.

Следователно пътят по подразбиране към настройките на Warzone 2100 под Windows Vista+ би бил: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

По подразбиране папката `%APPDATA%` е скрита. Въвеждането на `%APPDATA%\Warzone 2100 Project\` в адресната лента на Windows Explorer / Файловия експлорер ще ви отведе до папката на Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **На macOS:**

Папката `Warzone 2100 <version>` можете да намерите в домашната си папка: `~/Library/Application Support/`

По подразбиране, скорошните версии на macOS скриват папката ви Library. За да я намерите в търсачката, задръжте клавиша **Option (⌥)** докато натискате менюто **Go** и папката ви Library ще се появи като избор в менюто.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **На Линукс:**

Под GNU/Linux, Warzone 2100 се води по [спецификацията XDG](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

По подразбиране папката `warzone2100-<version>` се намира в домашната ви папка под `~/.local/share/`. (Ако променливата `XDG_DATA_HOME` е дефинирана, папката на Warzone folder ще се намира в `$XDG_DATA_HOME`.)

Началната точка в `.local` означава, че тази папка е скрита и в зависимост от настройките си може да не я виждате. Все пак можете да достигнете до нея като я въведете в адресната лента.
