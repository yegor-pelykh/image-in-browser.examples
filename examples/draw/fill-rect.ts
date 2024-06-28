/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import {
  ColorRgb8,
  ColorRgba8,
  Draw,
  MemoryImage,
  Rectangle,
  encodePng,
} from 'image-in-browser';

const outputFileName = 'fill-rect.png';

/**
 * Function to test drawing filled rectangles on an image.
 * This function creates an image, draws several rectangles with different colors and properties,
 * and then encodes the image to PNG format.
 */
function testFillRect() {
  // Create a new image with specified width and height
  const image = new MemoryImage({
    width: 256,
    height: 256,
  });

  // Drawing a red rectangle
  Draw.fillRect({
    image: image,
    rect: new Rectangle(50, 50, 150, 150),
    color: new ColorRgb8(255, 0, 0),
  });

  // Drawing a green semi-transparent rectangle
  Draw.fillRect({
    image: image,
    rect: new Rectangle(100, 100, 200, 200),
    color: new ColorRgba8(0, 255, 0, 128),
  });

  // Drawing a semi-transparent rectangle with rounded corners with a radius of 20 pixels
  Draw.fillRect({
    image: image,
    rect: new Rectangle(75, 75, 175, 175),
    radius: 20,
    color: new ColorRgba8(255, 255, 0, 128),
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the encoded PNG bytes to a file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testFillRect();
