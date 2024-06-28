/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ColorRgba8, Draw, MemoryImage, encodePng } from 'image-in-browser';

const outputFileName = 'fill.png';

/**
 * Function to test filling an image with a specific color and encoding it to PNG format.
 */
function testFill() {
  // Create a new MemoryImage with specified width and height
  const image = new MemoryImage({
    width: 256,
    height: 256,
  });

  // Filling the image with an RGBA(120, 64, 85, 90) color
  Draw.fill({
    image: image,
    color: new ColorRgba8(120, 64, 85, 90),
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the encoded PNG bytes to a file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testFill();
