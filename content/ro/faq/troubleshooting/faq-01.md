---
title: "Unde este directorul de configurări / jocuri salvate?"
---

Depinde de platforma ta:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **pe Windows:**

Directorul `Warzone 2100 Project\Warzone 2100 <version>` este situat sub folderul `%APPDATA%`.

Prin urmare, calea implicită pentru datele de configurare Warzone 2100 pe Windows Vista+ ar fi: `C:\Users\$USER$\AppData\Ra\Warzone 2100 Project\Warzone 2100 <version>\`

În mod implicit, folderul `%APPDATA%` este ascuns. Tastând: `%APPDATA%\Warzone 2100 Project\` în bara de adrese Windows Explorer / File Explorer va naviga către directorul tău de Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **Pe macOS:**

Directorul `Warzone 2100 <version>` poate fi găsit în directorul principal la: `~/Library/Application Support/`

În mod implicit, versiunea recentă a macOS ascunde folderul Library. Pentru a-l vedea în Finder, țineți apăsat tasta **Opțiune (⌥)** făcând clic pe meniul **Mergi** iar directorul Librărie va apărea ca o alegere de meniu.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **Pe Linux:**

Sub GNU/Linux, Warzone 2100 se conformează cu [specificația XDG pentru directorul de bază](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

În mod implicit, directorul `Warzone 2100-<version>` poate fi găsit în directorul principal sub calea `~/.local/share/`. (Dacă variabila de mediu `XDG_DATA_HOME` este definită, folderul Warzone va fi localizat în `$XDG_DATA_HOME`.)

Punctul conducător din `.local` parte a căii indică faptul că este un director ascuns, deci, în funcție de configurație, s-ar putea să nu-l puteți vedea. Cu toate acestea, încă îl poți accesa tastând calea în bara de adrese.
