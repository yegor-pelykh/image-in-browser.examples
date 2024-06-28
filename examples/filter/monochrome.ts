/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ColorRgb8, Filter, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_filter_monochrome.png';

/**
 * Function to test the application of a monochrome filter on a PNG image.
 *
 * This function reads a PNG image from the input folder, decodes it into a MemoryImage,
 * applies a monochrome filter with a specified color, encodes the modified image back
 * into PNG format, and writes the result to the output folder.
 */
function testMonochromeFilter() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // Applying monochrome filter
  Filter.monochrome({
    image: image,
    color: new ColorRgb8(100, 160, 64),
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testMonochromeFilter();
