---
title: "Onde está a pasta de configurações / jogos salvos?"
---

Depende da sua plataforma:

{{% inlinesvg "fontawesome/brands/windows.svg" %}} **No Windows:**

A pasta `Warzone 2100 Project\Warzone 2100 <version>` fica localizada dentro da pasta `%APPDATA%`.

Assim, o caminho padrão para a pasta de configurações do Warzone 2100 no Windows Vista+ seria: `C:\Users\$USER$\AppData\Roaming\Warzone 2100 Project\Warzone 2100 <version>\`

Por padrão, a pasta `%APPDATA%` fica oculta. Digitar `%APPDATA%\Warzone 2100 Project\` através da barra de endereços do Explorador do Windows / Explorador de Arquivos vai levá-lo diretamente para a pasta do Warzone.

{{% inlinesvg "fontawesome/brands/apple.svg" %}} **No macOS:**

A pasta `Warzone 2100 <version>` pode ser encontrada na sua pasta principal em: `~/Library/Application Support/`

Por padrão, versões recentes do macOS ocultam a pasta Biblioteca (Library) da sua conta. Para visualizá-la no Localizador (Finder), mantenha pressionada a tecla **Opção (⌥)** enquanto clica no menu **Ir** e sua pasta Biblioteca (Library) aparecerá como uma escolha do menu.

{{% inlinesvg "fontawesome/brands/linux.svg" %}} **No Linux:**

No GNU/Linux, o Warzone 2100 está de acordo com as especificações do [XDG base directory spec](https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html).

Por padrão, a pasta `warzone2100-<version>` pode ser encontrada no seu diretório inicial através do caminho `~/.local/share/`. (Se a variável de ambiente `XDG_DATA_HOME` estiver definida, a pasta do Warzone estará localizada em `$XDG_DATA_HOME`.)

O ponto no início do endereço `.local` indica que é um diretório oculto. Dessa forma, a depender de sua configuração, talvez você não consiga vê-lo. No entanto, você ainda pode acessá-lo digitando o caminho na sua barra de endereços.
