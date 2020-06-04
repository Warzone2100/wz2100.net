---
title: "Vulkan, DirectX y Soporte de Metal en progreso"
date: 2020-01-26 # no-translate
draft: false # no-translate
slug: "vulkan-directx-metal-in-progress"
---

Construyendo sobre el gran trabajo inicial`gfx_api` y Vulkan de @vlj, ahora estamos probando [soporte para varios nuevos gráficos](https://github.com/Warzone2100/warzone2100/pull/489) (programado para el lanzamiento en 3.4.0):

- **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
- **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_(API))**
- **[DirectX](https://en.wikipedia.org/wiki/DirectX) _(via [LibANGLE](https://en.wikipedia.org/wiki/ANGLE_(software)))_** (en Windows)

Esto es en adiciónalmente al apoyo existente para:
- **OpenGL 3.0+ Core Profile** (default), **OpenGL 2.1 Compatibility Profile**

En macOS, Vulkan es compatible a través de **[MoltenVK](https://github.com/KhronosGroup/MoltenVK)**, lo cual significa que Warzone2100 es capaz de ejecutar encima de **[Metal](https://en.wikipedia.org/wiki/Metal_(API))** ahora también.

Este PR también añade mucho de otros mejoramientos, incluyendo:
- Un nuevo  "**[Adaptible Vsync](https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync)**" opción (donde es compatible), adicionalmente a Vsync on / off
- Una nueva opción de "**Backend Gráfico**" en el menú de opciones de vídeo
- Incluye "**Permitir normales opcionales por vértices en formato PIE**" [#338](https://github.com/Warzone2100/warzone2100/pull/338)
- Mejoras sustanciales en la limpieza de recursos
- [y más](https://github.com/Warzone2100/warzone2100/pull/489)

Para más detalles, y obtener una versión de prueba, consulte el PR: [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

Este trabajo está actualmente programado para convertirse en parte de 3.4.0.
