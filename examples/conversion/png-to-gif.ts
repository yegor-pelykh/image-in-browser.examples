/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodePng, encodeGif } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.gif';

/**
 * Converts a PNG image to a GIF image.
 *
 * This function reads a PNG file from the input folder, decodes it,
 * encodes it as a GIF, and then writes the GIF file to the output folder.
 */
function convertToGif() {
  // Read the PNG file from the input folder
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decode the PNG file
  const image = decodePng({
    data: input,
  });

  // Ensure the image was decoded successfully
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Encode the image as a GIF
  const output = encodeGif({
    image: image,
  });

  // Write the GIF file to the output folder
  Utils.writeFile(Folder.output, Section.gif, outputFileName, output);
}

convertToGif();
