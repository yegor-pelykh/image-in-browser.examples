/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Transform, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_copyCropCircle.png';

/**
 * Function to test the copyCropCircle transformation on an image.
 * This function reads an input PNG file, decodes it to a MemoryImage,
 * ensures the image has an alpha channel, applies the copyCropCircle
 * transformation, encodes the transformed image back to PNG bytes,
 * and writes the output to a file.
 */
function testCopyCropCircleTransform() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  let image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // Ensuring the presence of an alpha channel
  image = image.convert({
    numChannels: 4,
  });

  // Applying copyCropCircle transformation
  image = Transform.copyCropCircle({
    image: image,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testCopyCropCircleTransform();
