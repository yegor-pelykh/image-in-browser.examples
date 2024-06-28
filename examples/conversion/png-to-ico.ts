/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { Transform, decodePng, encodeIco } from 'image-in-browser';

const inputFileName = 'buck_24.png';
const outputFileName = 'buck_24.ico';

/**
 * Converts a PNG image to an ICO format.
 *
 * This function reads a PNG file from the input folder, decodes it, resizes it to 256x256 pixels
 * while maintaining the aspect ratio, encodes it to ICO format, and writes the resulting ICO file
 * to the output folder.
 */
function convertToIco() {
  const input = Utils.readFile(Folder.input, Section.png, inputFileName);

  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  const resized = Transform.copyResize({
    image: image,
    width: 256,
    maintainAspect: true,
  });

  const output = encodeIco({
    image: resized,
  });

  Utils.writeFile(Folder.output, Section.ico, outputFileName, output);
}

convertToIco();
