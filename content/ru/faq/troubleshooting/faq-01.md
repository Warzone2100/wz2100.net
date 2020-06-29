---
title: "Где находится каталог с настройками и файлами сохранений?"
---

Это зависит от вашей платформы:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **В Windows:**

Каталог `Warzone 2100 Project\Warzone 2100 <version>` расположен в папке `%APPDATA%`.

Следовательно, по умолчанию путь к конфигурационным данным Warzone 2100 на Windows Vista+ будет следующим: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

По умолчанию, папка `%APPDATA%` скрыта. Написав `%APPDATA%\Warzone 2100 Project\` в адресной строке Windows Explorer можно сразу попасть в каталог игры.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **В macOS:**

Каталог `Warzone 2100 <version>` можно найти в домашней директории: `~/Library/Application Support/`

По умолчанию, последняя версия macOS скрывает папку Library вашего аккаунта. Для его просмотра в Finder, удерживая **кнопку опций (⌥)** нажмите на ** Go**, и папка Library появится в меню выбора.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **В Linux:**

В системах GNU/Linux Warzone 2100 придерживается стандарту [XDG base directory](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

По умолчанию каталог `warzone2100-<version>` можно найти в домашнем каталоге в папке `~/.local/share/`. (Если задана переменная среды `XDG_DATA_HOME `, папка Warzone 2100 будет находиться в `$XDG_DATA_HOME`.)

Ведущая точка в `.local` указывает на то, что это скрытый каталог, и в зависимости от конфигурации вашего файлового менеджера, вы можете не увидеть её. Однако, вы все еще можете получить доступ к нему, введя путь в поле прямого перехода в каталог.
