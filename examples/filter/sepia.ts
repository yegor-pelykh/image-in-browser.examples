/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Filter, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_filter_sepia.png';

/**
 * Applies a sepia filter to an input PNG image and writes the result to an output file.
 */
function testSepiaFilter() {
  // Read the input PNG file
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  // Ensure the image was decoded successfully
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Applying sepia filter to the image
  Filter.sepia({
    image: image,
  });

  // Encode the modified MemoryImage back to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the output PNG file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testSepiaFilter();
