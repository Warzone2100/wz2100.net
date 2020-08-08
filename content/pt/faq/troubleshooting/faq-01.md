---
title: "Onde está o diretório de configuração e jogos gravados?"
---

Isso depende da plataforma do computador:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **No Windows:**

O diretório `Warzone 2100 Project\Warzone 2100 <version>` está localizado no ficheiro `%APPDATA%`.

Assim, o endereço por defeito para os dados de configuração do Warzone 2100 no Windows Vista (e seguintes) será: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

Por defeito, a pasta `%APPDATA%` está oculta. Escrever: `%APPDATA%\Warzone 2100 Project\` na barra de endereços do Explorador do Windows / Explorador de Ficheiros vai levá-lo para o diretório do Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **No macOS:**

O diretório `Warzone 2100 <version>` pode ser encontrado no diretório-raiz em: `~/Library/Application Support/`

Por defeito, as versões mais recentes do macOS ocultam a pasta Biblioteca da sua conta de utilizador. Para a exibir no Finder, mantenha pressionada a tecla **Opção (⌥)** enquanto clica no menu **Ir**, e a sua pasta Biblioteca irá aparecer como uma opção do menu.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **No Linux:**

Sob o GNU/Linux, o Warzone 2100 está de acordo com o [XDG base directory spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Por defeito, o diretório `warzone2100-<version>` pode ser encontrado no diretório-raiz no endereço `~/.local/share/`. (Se a variável de ambiente `XDG_DATA_HOME` estiver definida, a pasta do Warzone estará em `$XDG_DATA_HOME`.)

O ponto que se encontra no início do endereço `.local` indica que é um diretório oculto, pelo que dependendo da sua configuração poderá não o conseguir ver. No entanto, pode aceder ao diretório escrevendo o caminho na barra de endereços.
