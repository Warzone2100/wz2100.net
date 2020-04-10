---
title: "Vulkan, DirectX, & Metal support in-progress"
slug: "vulkan-directx-metal-in-progress"
---

Building on the great inital `gfx_api` and Vulkan work by @vlj, we're now testing [multiple new graphics backend support][0] (slated for release in 3.4.0):

- **[OpenGL ES 3.0 / 2.0][1]**
- **[Vulkan 1.0+][2]**
- **[DirectX][3] _(via [LibANGLE][4])_** (on Windows)

This is in addition to the existing support for:
- **OpenGL 3.0+ Core Profile** (default), **OpenGL 2.1 Compatibility Profile**

On macOS, Vulkan is supported via **[MoltenVK][5]**, which means Warzone2100 is capable of running on top of **[Metal][6]** now as well.

This PR also adds many other enhancements, including:
- A new  "**[Adaptive Vsync][7]**" option (where supported), in addition to Vsync on / off
- A new "**Graphics Backend**" option in the Video Options menu
- Includes "**Allow optional per-vertex normals in PIE format**" [#338][9]
- Substantial improvements to resources cleanup
- [and more][8]

For more details, and to obtain a test build, see the PR: [https://github.com/Warzone2100/warzone2100/pull/489](https://github.com/Warzone2100/warzone2100/pull/489)

This work is currently slated to become part of 3.4.0.

[0]: https://github.com/Warzone2100/warzone2100/pull/489
[1]: https://en.wikipedia.org/wiki/OpenGL_ES
[2]: https://en.wikipedia.org/wiki/Vulkan_(API)
[3]: https://en.wikipedia.org/wiki/DirectX
[4]: https://en.wikipedia.org/wiki/ANGLE_(software)
[5]: https://github.com/KhronosGroup/MoltenVK
[6]: https://en.wikipedia.org/wiki/Metal_(API)
[7]: https://www.khronos.org/opengl/wiki/Swap_Interval#Adaptive_Vsync
[8]: https://github.com/Warzone2100/warzone2100/pull/489
[9]: https://github.com/Warzone2100/warzone2100/pull/338
