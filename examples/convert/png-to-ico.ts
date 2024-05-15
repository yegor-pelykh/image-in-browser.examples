/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Transform, decodePng, encodeIco } from 'image-in-browser';

/**
 * Shows how to convert from PNG to ICO.
 */
function convertToIco() {
  const input = Utils.readFile(Folder.input, Section.png, 'buck_24.png');

  // decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // resize to 256 pixels wide because conversion to ICO format
  // is not currently supported for images larger than 256 pixels
  const resized = Transform.copyResize({
    image: image,
    width: 256,
    maintainAspect: true,
  });

  // encoding MemoryImage to ICO bytes
  const output = encodeIco({
    image: resized,
  });

  Utils.writeFile(Folder.output, Section.ico, 'buck_24.ico', output);
}

convertToIco();
