/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import {
  FlipDirection,
  Transform,
  decodePng,
  encodePng,
} from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_copyFlip.png';

/**
 * Function to test the copy and flip transformation on a PNG image.
 * It reads an input PNG file, decodes it to a MemoryImage, applies the copyFlip transformation,
 * encodes the transformed image back to PNG bytes, and writes the output to a file.
 */
function testCopyFlipTransform() {
  // Read the input PNG file
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  let image = decodePng({
    data: input,
  });

  // Ensure the image is successfully decoded
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Applying copyFlip transformation
  image = Transform.copyFlip({
    image: image,
    direction: FlipDirection.both,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the output PNG file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testCopyFlipTransform();
