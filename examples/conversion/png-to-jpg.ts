/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeJpg } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.jpg';

/**
 * Сonversion from PNG to JPG.
 */
function convertToJpg() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // encoding MemoryImage to JPG bytes
  const output = encodeJpg({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.jpg, outputFileName, output);
}

convertToJpg();
