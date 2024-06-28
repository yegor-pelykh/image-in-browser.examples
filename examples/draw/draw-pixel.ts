/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import {
  ColorRgb8,
  Draw,
  MemoryImage,
  Point,
  RandomUtils,
  encodePng,
} from 'image-in-browser';

const outputFileName = 'draw-pixel.png';

/**
 * Function to test drawing pixels on an image.
 * This function creates a 256x256 image and fills it with 10,000 randomly colored pixels.
 * The image is then encoded to PNG format and written to a file.
 */
function testDrawPixel() {
  const image = new MemoryImage({
    width: 256,
    height: 256,
  });

  // Filling an image with many different colored pixels
  for (let i = 0; i < 10000; ++i) {
    const x = RandomUtils.intrand(image.width - 1);
    const y = RandomUtils.intrand(image.height - 1);
    Draw.drawPixel({
      image: image,
      pos: new Point(x, y),
      color: new ColorRgb8(x, y, 0),
    });
  }

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testDrawPixel();
