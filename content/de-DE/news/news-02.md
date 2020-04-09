---
title: "Vulkan, DirectX, & Metal support in-progress"
date: 2020-01-26 #no-translate
draft: false #no-translate
slug: "vulkan-directx-metal-in-progress"
---

Building on the great inital `gfx_api` and Vulkan work by @vlj, we're now testing [multiple new graphics backend support](https://github.com/Warzone2100/warzone2100/pull/489) (slated for release in 3.4.0):

- **[OpenGL ES 3.0 / 2.0](https://en.wikipedia.org/wiki/OpenGL_ES)**
- **[Vulkan 1.0+](https://en.wikipedia.org/wiki/Vulkan_(API))**
- **[DirectX](https://en.wikipedia.org/wiki/DirectX) _(via [LibANGLE](https://en.wikipedia.org/wiki/ANGLE_(software)))_** (on Windows)

This is in addition to the existing support for:
- **OpenGL 3.0+ Core Profile** (default), **OpenGL 2.1 Compatibility Profile**

On macOS, Vulkan is supported via **[MoltenVK](https://github.com/KhronosGroup/MoltenVK)**, which means Warzone2100 is capable of running on top of **[Metal](https://en.wikipedia.org/wiki/Metal_(API))** now as well.

This PR also adds many other enhancements, including:
- A new  "**[Adaptive Vsync](https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync)**" option (where supported), in addition to Vsync on / off
- A new "**Graphics Backend**" option in the Video Options menu
- Includes "**Allow optional per-vertex normals in PIE format**" [#338](https://github.com/Warzone2100/warzone2100/pull/338)
- Substantial improvements to resources cleanup
- [and more](https://github.com/Warzone2100/warzone2100/pull/489)

For more details, and to obtain a test build, see the PR: [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

This work is currently slated to become part of 3.4.0.
