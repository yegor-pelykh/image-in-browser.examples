/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeBmp } from 'image-in-browser';

/**
 * Shows how to convert from PNG to BMP.
 */
function convertToBmp() {
  const input = Utils.readFile(Folder.input, Section.png, 'buck_24.png');

  // decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // encoding MemoryImage to BMP bytes
  const output = encodeBmp({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.bmp, 'buck_24.bmp', output);
}

convertToBmp();
