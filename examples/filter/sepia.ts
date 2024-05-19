/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Filter, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_filter_sepia.png';

/**
 * Applying a sepia filter
 */
function testSepiaFilter() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // Applying sepia filter
  Filter.sepia({
    image: image,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testSepiaFilter();
