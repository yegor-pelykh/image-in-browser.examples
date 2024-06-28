/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Draw, decodePng, decodeTga, encodePng } from 'image-in-browser';

const bgFileName = 'buck_24.png';
const fgFileName = 'globe.tga';
const outputFileName = 'buck_24_compositeImage.png';

/**
 * Function to test the composite image transformation.
 * This function reads a PNG background image and a TGA foreground image,
 * processes the foreground image to make black pixels transparent,
 * and then composites the foreground image onto the background image.
 * The resulting image is then encoded to PNG format and saved to the output folder.
 */
function testCompositeImageTransform() {
  // Reading and recoding PNG background image
  const bgInput = Utils.readFile(Folder.input, Section.png, bgFileName);
  const bg = decodePng({
    data: bgInput,
  });

  console.assert(bg !== undefined);
  if (bg === undefined) return;

  // Reading and recoding TGA foreground image
  const fgInput = Utils.readFile(Folder.input, Section.tga, fgFileName);
  let fg = decodeTga({
    data: fgInput,
  });

  console.assert(fg !== undefined);
  if (fg === undefined) return;

  // Ensuring there is an alpha channel in the foreground image
  fg = fg.convert({
    numChannels: 4,
  });

  // Let's make transparent all the black pixels in the image
  // (which are the background)
  for (const p of fg) {
    if (p.r === 0 && p.g === 0 && p.b === 0) {
      p.a = 0;
    }
  }

  // Applying compositeImage using cloned background image
  const bgClone = bg.clone();
  Draw.compositeImage({
    dst: bgClone,
    src: fg,
    dstX: 50,
    dstY: 50,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: bgClone,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testCompositeImageTransform();
