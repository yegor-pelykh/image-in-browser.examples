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
 * Flip image
 */
function testCopyFlipTransform() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  // Decoding PNG bytes to MemoryImage
  let image = decodePng({
    data: input,
  });

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

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testCopyFlipTransform();
