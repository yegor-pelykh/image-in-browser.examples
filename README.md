Overview
========

This project contains a set of examples of using library  [**image-in-browser**](https://github.com/yegor-pelykh/image-in-browser).

All tests are located in the [**examples**](https://github.com/yegor-pelykh/image-in-browser.examples/tree/main/examples) folder.

Files with examples are divided into sections according to the subject of the example.

Each example is a separate Typescript file and is independent from other examples.

> **_NOTE:_**  There is also a `_utils` folder. Unlike other folders, it doesn't contain examples, but stores some helpers and commonly used functions that are used as syntactic sugar in the examples.

How to run and debug?
=====================

To run the examples, it is most convenient to use the VSCode IDE, for which the corresponding launch scripts have already been prepared.

To run the example:
- open the file with the example you want to run or debug
- press F5 in VSCode

The environment will launch the build process in the background, and then launch the currently open example for execution and debugging.

Quick links to examples
=======================

### Getting basic information about image

[Getting basic information about a PNG image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/basic-info/png-info.ts)

[Getting basic information about a PSD image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/basic-info/psd-info.ts)

[Getting basic information about a PVR image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/basic-info/pvr-info.ts)

[Getting basic information about a WebP image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/basic-info/webp-info.ts)

### Displaying a MemoryImage on a canvas

[Displaying a PNG image on a canvas](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/canvas/canvas-with-png.ts)

### Conversion

[Сonversion from PNG to BMP](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/conversion/png-to-bmp.ts)

[Сonversion from PNG to GIF](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/conversion/png-to-gif.ts)

[Сonversion from PNG to ICO](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/conversion/png-to-ico.ts)

[Сonversion from PNG to JPG](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/conversion/png-to-jpg.ts)

### Drawing

[Overlaying images on top of each other](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/draw/composite-image.ts)

[Drawing lines on the image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/draw/draw-line.ts)

[Drawing pixels of different colors](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/draw/draw-pixel.ts)

[Drawing filled rectangles](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/draw/fill-rect.ts)

[Filling the entire image with a solid color](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/draw/fill.ts)

### Working with EXIF data

[Writing and reading EXIF data of JPG image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/exif-data/exif-jpeg.ts)

### Filters

[Applying a contrast filter](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/filter/contrast.ts)

[Applying a monochrome filter](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/filter/monochrome.ts)

[Applying a sepia filter](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/filter/sepia.ts)

### MemoryImage features

[Getting MemoryImage bytes in a specific order](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/memory-image/get-bytes.ts)

[Iterating over MemoryImage pixels](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/memory-image/iteration.ts)

### Transformations

[Cropping images in a circle shape](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/transform/copy-crop-circle.ts)

[Flip image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/transform/copy-flip.ts)

[Rotating an image](https://github.com/yegor-pelykh/image-in-browser.examples/blob/main/examples/transform/copy-rotate.ts)

Links
=====

Link to the project these examples are for:

[image-in-browser](https://github.com/yegor-pelykh/image-in-browser) (GitHub)

<a href="https://nodei.co/npm/image-in-browser/"><img src="https://nodei.co/npm/image-in-browser.png"></a>
