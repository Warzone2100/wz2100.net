---
title: "Support en cours de Vulkan, DirectX, & Métal"
date: 2020-01-26 # no-translate
draft: false # no-translate
slug: "vulkan-directx-metal-en-cours"
---

S'appuyant sur l'excellent travail sur `gfx_api` et Vulkan par @vlj, nous testons maintenant [le support de plusieurs nouveaux backend graphiques](https://github.com/Warzone2100/warzone2100/pull/489) (prévu pour la sortie en 3.4.0) :

- **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
- **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_(API))**
- **[DirectX](https://fr.wikipedia.org/wiki/DirectX) _(via [LibANGLE](https://en.wikipedia.org/wiki/ANGLE_(software)))_** (sous Windows)

Ceci vient s'ajouter au support existant de :
- **OpenGL 3.0+ Core Profil** (par défaut), **Profil de compatibilité OpenGL 2.1**

Sur macOS, Vulkan est supporté via **[MoltenVK](https://github.com/KhronosGroup/MoltenVK)**, ce qui signifie que Warzone2100 est capable de fonctionner sur **[Métal](https://en.wikipedia.org/wiki/Metal_(API))** maintenant aussi.

Cette PR ajoute également de nombreuses autres améliorations, y compris :
- Une nouvelle option "**["Adaptive Vsync](https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync)**" (là où elle est prise en charge), en plus de Vsync on/off
- Une nouvelle option "**Graphics Backend**" dans le menu Options Vidéo
- Inclut "**Autoriser les normales optionnelles par sommet au format PIE**" [#338](https://github.com/Warzone2100/warzone2100/pull/338)
- Amélioration substantielle du nettoyage des ressources
- [et plus](https://github.com/Warzone2100/warzone2100/pull/489)

Pour plus de détails et pour obtenir une version de test, consultez le PR : [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

Ce travail est actuellement prévu pour faire partie de la version 3.4.0.
