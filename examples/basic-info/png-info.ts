/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { PngColorType, PngDecoder } from 'image-in-browser';

const fileName = 'buck_24.png';

/**
 * Retrieves and prints information about a PNG file.
 *
 * This function reads a PNG file, decodes it to extract metadata, and prints
 * the file name, dimensions, bits per pixel, color type, animation status,
 * and number of frames.
 */
function getPngInfo() {
  const input = Utils.readFile(Folder.input, Section.png, fileName);

  // To obtain information, you need to create a PngDecoder
  // and call the startDecode method
  const decoder = new PngDecoder();
  const info = decoder.startDecode(input);

  console.assert(info !== undefined);
  if (info === undefined) return;

  // Let's print the information
  console.info(`file name: '${fileName}'`);
  console.info(`size: ${info.width} x ${info.height}`);
  console.info(`bits per pixel: ${info.bits}`);
  console.info(
    `color type: ${info.colorType !== undefined ? PngColorType[info.colorType] : 'undefined'}`
  );
  console.info(`is animated: ${info.isAnimated}`);
  console.info(`number of frames: ${info.numFrames}`);
}

getPngInfo();
