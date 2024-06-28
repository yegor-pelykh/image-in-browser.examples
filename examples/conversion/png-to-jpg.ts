/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeJpg } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.jpg';

/**
 * Converts a PNG image to a JPG image.
 *
 * This function reads a PNG image from the input folder, decodes it into a MemoryImage,
 * encodes the MemoryImage into JPG format, and writes the resulting JPG image to the output folder.
 */
function convertToJpg() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // Encoding MemoryImage to JPG bytes
  const output = encodeJpg({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.jpg, outputFileName, output);
}

convertToJpg();
