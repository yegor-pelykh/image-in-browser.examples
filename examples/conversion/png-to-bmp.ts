/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeBmp } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.bmp';

/**
 * Converts a PNG image to BMP format.
 *
 * This function reads a PNG file from the input folder, decodes it,
 * encodes it as a BMP image, and then writes the BMP file to the output folder.
 */
function convertToBmp() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  const output = encodeBmp({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.bmp, outputFileName, output);
}

convertToBmp();
