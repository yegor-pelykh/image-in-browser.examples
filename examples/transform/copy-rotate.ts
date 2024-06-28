/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Transform, decodePng, encodePng } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24_copyFlip.png';

/**
 * Function to test the copy and rotate transformation on a PNG image.
 * It reads an input PNG file, decodes it, ensures it has an alpha channel,
 * applies a 45-degree rotation, encodes the transformed image back to PNG,
 * and writes the output to a file.
 */
function testCopyRotateTransform() {
  // Read the input PNG file
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  let image = decodePng({
    data: input,
  });

  // Ensure the image is successfully decoded
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Ensuring the presence of an alpha channel
  image = image.convert({
    numChannels: 4,
  });

  // Applying copyRotate transformation with a 45-degree angle
  image = Transform.copyRotate({
    image: image,
    angle: 45,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the transformed image to the output file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testCopyRotateTransform();
