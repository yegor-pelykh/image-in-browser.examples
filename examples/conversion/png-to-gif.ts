/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeGif } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.gif';

/**
 * Сonversion from PNG to GIF.
 */
function convertToGif() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // encoding MemoryImage to GIF bytes
  const output = encodeGif({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.gif, outputFileName, output);
}

convertToGif();
