---
title: "Suporte de Vulkan, DirectX & Metal em progresso"
slug: "vulkan-directx-metal-andamento"
---

Tendo como base o excelente trabalho feito por @vlj para `gfx_api` e no Vulkan, estamos agora a testar [o suporte backend para várias API gráficas](https://github.com/Warzone2100/warzone2100/pull/489) (previsão de lançamento na versão 3.4.0):

- **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
- **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_(API))**
- **[DirectX](https://en.wikipedia.org/wiki/DirectX) _(via [LibANGLE](https://en.wikipedia.org/wiki/ANGLE_(software)))_** (no Windows)

Isto vem em adição ao support já existente para:
- **OpenGL 3.0+ Core Profile** (default), **OpenGL 2.1 Compatibility Profile**

No macOS, o Vulkan é suportado por **[Molten VK](https://github.com/KhronosGroup/MoltenVK)**, o que significa que o Warzone2100 é agora capaz de correr com o **[Metal](https://en.wikipedia.org/wiki/Metal_(API))**.

Esta PR inclui também muitas outras melhorias, incluindo:
- Uma nova opção "**[Vsync Adaptável](https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync)** (quando suportada), em adição ao Vsync on/off
- Uma nova opção "**Backend Gráfico**" no menu de Opções de Vídeo
- Inclusão de "**Normais por-vertex opcionais no formato PIE**" [#338](https://github.com/Warzone2100/warzone2100/pull/338)
- Melhorias substanciais na limpeza dos recursos
- [e mais](https://github.com/Warzone2100/warzone2100/pull/489)

Para mais detalhes, e para obter uma compilação de teste, veja a PR: [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

Este trabalho está agendado para se tornar parte da versão 3.4.0.
