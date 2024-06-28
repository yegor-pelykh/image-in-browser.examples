/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Filter, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_filter_contrast.png';

/**
 * Function to test the contrast filter on a PNG image.
 * This function reads an input PNG file, applies a contrast filter,
 * and writes the modified image to an output file.
 */
function testContrastFilter() {
  // Read the input PNG file
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  // Ensure the image is successfully decoded
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Applying contrast filter with a contrast value of 200
  Filter.contrast({
    image: image,
    contrast: 200,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the output PNG file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testContrastFilter();
