---
title: "Journey to the Web: Porting Warzone 2100 to WebAssembly"
date: 2025-06-11 # no-translate
draft: false # no-translate
slug: "journey-to-the-web-porting-warzone-2100-to-webassembly"
tags:
  - "Releases"
---

Warzone 2100 was originally released in 1999 for Windows 95/98 and PS1.

Today, Warzone 2100 is available natively on Windows, macOS, Linux, FreeBSD, and ...

For the first time, **in modern web browsers** (via WebAssembly and WebGL 2):

**[Play Warzone 2100 in your Web Browser](https://play.wz2100.net)**

How did a 25+ year-old game (designed to run on DirectX 6 and PS1) end up with a modern open source port to the web browser?

It was a long journey that required passionate fans, a lot of development, and a vibrant open source community.

[Jump to: The Result](#result_link)

---

<div class="container">
	<div class="vert-timeline">
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2004</span>
			<div class="tl-content">
				<h5 class="title">Open Sourcing</h5>
				<p class="description">
					Warzone 2100's code is released under an open source license, in response to fan petition.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2004-2010</span>
			<div class="tl-content">
				<h5 class="title">An Open & Portable Foundation</h5>
				<p class="description">
					Proprietary technology is replaced with open source alternatives. DirectX 6 is replaced with fixed-function OpenGL. OpenAL is used for 3D positional audio. Linux and Mac builds are available for the first time.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2010-2017</span>
			<div class="tl-content">
				<h5 class="title">Growing with OpenGL</h5>
				<p class="description">
					Transition from fixed-function OpenGL to more modern OpenGL with shaders.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2017-2018</span>
			<div class="tl-content">
				<h5 class="title">Abstractions and Buildability</h5>
				<p class="description">
					Implementation of a graphics abstraction layer. Move to a single CMake build system for all platforms.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2019-2020</span>
			<div class="tl-content">
				<h5 class="title">Graphics Backends</h5>
				<p class="description">
					A Vulkan backend is added, plus support for OpenGL ES.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2020-2021</span>
			<div class="tl-content">
				<h5 class="title">Simplifying Dependencies</h5>
				<p class="description">
					Migrate from QtScript to QuickJS, and remove remaining Qt dependencies - simplifying building on all platforms.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2021-2022</span>
			<div class="tl-content">
				<h5 class="title">Refactoring Main</h5>
				<p class="description">
					Refactor the main loop to support asynchronous dispatch. Additional abstractions to support future Emscripten-specific implementations.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2022</span>
			<div class="tl-content">
				<h5 class="title">Texture Compression</h5>
				<p class="description">
					Advanced texture compression support (both runtime and pre-packaged) to reduce memory usage and loading time.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2023</span>
			<div class="tl-content">
				<h5 class="title">Instanced Rendering</h5>
				<p class="description">
					A full instanced rendering pipeline for rendering the game world, massively boosting performance.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2023</span>
			<div class="tl-content">
				<h5 class="title">New Terrain Renderer</h5>
				<p class="description">
					A new single-pass terrain renderer that improves performance and adds support for multiple appearances (classic through new high quality terrain).
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2023</span>
			<div class="tl-content">
				<h5 class="title">Shadow Mapping</h5>
				<p class="description">
					Cascaded shadow mapping replaces CPU-calculated stencil shadow volumes.
				</p>
			</div>
		</div>
		<div class="tl">
			<div class="tl-marker"></div>
			<span class="tl-year">2023-2025</span>
			<div class="tl-content">
				<h5 class="title">Assembling for the Web</h5>
				<p class="description">
					Emscripten support (building on Warzone 2100's OpenGL ES 3.0 backend to support WebGL 2.0), data persistence, host page to configure options, automated build publishing, etc.
				</p>
			</div>
		</div>
	</div>
</div>

[Jump to: The Result](#result_link)

---
## Technical Highlights:
---

#### 1. Initial Porting to OpenGL & Cross-Platform

After Warzone 2100’s original open-sourcing, community work began in earnest to replace all proprietary technologies with open source alternatives.
- DirectX 6 was replaced with fixed-function OpenGL
- OpenAL was used for 3D positional audio
- SDL was used for windowing, user input, etc

Because of these efforts, Linux and Mac builds were made available for the first time. And Warzone 2100 officially became a cross-platform open source project.

#### 2. Multiple Graphics Backends & OpenGL ES

After a migration to more modern shader-based OpenGL, work began on a graphics abstraction layer - with the initial goal of supporting dual OpenGL and Vulkan backends.

Not only did this eventually yield a Vulkan backend - it also enabled adding OpenGL ES support (reducing the gap to eventual WebGL support).

#### 3. Addressing Roadblocks

Still, some key roadblocks remained to publishing a web port.

At the time, Warzone 2100 relied on QtScript for its scripting engine (which had been deprecated by Qt). WZ also relied on Qt as a dependency sprinkled throughout the codebase. Work began to replace QtScript and remove the remaining Qt dependencies, as well as to simplify the overall build process.

Warzone 2100 also had lost its texture compression support along the way, and still packaged many data files - including textures - as PNGs. This meant a problematic combination of:
- Higher memory usage at runtime (due to lack of in-memory texture compression support)
- Longer load times (due to having to generate mipmaps at runtime)
- Larger download size (due to lack of pre-compressed texture support)

Work began to add advanced texture compression support, as well as support for configurable pre-compressed textures as part of the build process.

And finally, there were other key performance issues that needed to be addressed:
- Warzone 2100 did not yet have instanced rendering support. This didn’t make as large a difference on most desktop platforms (Warzone 2100 was very capable of hitting FPS targets even on lower-end systems), but due to the overhead of WebGL calls in the browser, the high number of GL API calls proved especially problematic for performance.
- Warzone 2100’s multi-pass terrain renderer could also issue a large number of GL API calls.
- Warzone 2100 still used stencil shadows. This similarly did not yield the best performance in busy scenes - but especially in the web browser environment. (Both due to CPU time spent calculating shadow volumes, and GL API calls.)

Throughout 2023, these were addressed by adding instanced rendering support, a new single-pass terrain renderer, and cascaded shadow mapping.

#### 4. Assembling the Remaining Bits

[Emscripten](https://emscripten.org) - an open-source complete compiler toolchain to WebAssembly - can make the task of porting code to run in the web browser environment a delight.

But there are still some important differences that may require adjustments.

For Warzone 2100, that meant things like:
- Refactoring to support asynchronous dispatch of the main loop
- Separating out a few pieces that would need (or benefit from) Emscripten-specific implementations (libcurl → Emscripten’s “Fetch” API, etc)
- Implementing on-demand video streaming (to eliminate the need to ship videos as part of the initial data download)
- A bunch of surrounding code in the “shell” HTML page, to support persisting savegames and configuration, detect if the browser supports the necessary features, and gracefully handle issues
- Reducing the size of pre-packaged data bundles and textures
- Adding WebGL 2.0 support to the OpenGL ES backend

Fortunately, WebGL 2.0 is based on OpenGL ES 3.0, so adding WebGL support was substantially simplified by the prior graphics abstraction and OpenGL ES work.

{{% divider id="result_link" %}}

---
## The Result:
---

More than _two decades_ of open source development - and plenty more not even touched on above - has now yielded a game that can compile and run (performantly) in modern web browsers.

The **core of the Warzone 2100 single-player experience** - the original campaign and skirmish - is now available to run anywhere that supports modern WebAssembly and WebGL 2. (Yes, that includes **iPads** and **Android tablets**!)

**Give it a try at: https://play.wz2100.net**

And if you want the best performance, remastered high-res graphics, and multiplayer support - download the full version for Windows, macOS, and Linux. It’s free too: https://wz2100.net

{{% divider %}}

Don't forget to check out the official Discord server:

{{< discordinvite description="Official Server" >}}

And consider donating to help support the costs associated with the project:

{{< opencollectivedonatebutton >}}
