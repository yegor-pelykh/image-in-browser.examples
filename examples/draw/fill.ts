/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ColorRgba8, Draw, MemoryImage, encodePng } from 'image-in-browser';

const outputFileName = 'fill.png';

/**
 * Filling the entire image with a solid color
 */
function testFill() {
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

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testFill();
