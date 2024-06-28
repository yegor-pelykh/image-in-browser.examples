/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { PsdColorMode, PsdDecoder } from 'image-in-browser';

const fileName = 'psd4.psd';

/**
 * Retrieves and prints information about a PSD file.
 *
 * This function reads a PSD file, decodes it to extract information,
 * and then prints the file name, dimensions, and color mode.
 */
function getPsdInfo() {
  const input = Utils.readFile(Folder.input, Section.psd, fileName);

  // To obtain information, you need to create a PsdDecoder
  // and call the startDecode method
  const decoder = new PsdDecoder();
  const info = decoder.startDecode(input);

  console.assert(info !== undefined);
  if (info === undefined) return;

  // Let's print the information
  console.info(`file name: '${fileName}'`);
  console.info(`size: ${info.width} x ${info.height}`);
  console.info(
    `color mode: ${info.colorMode !== undefined ? PsdColorMode[info.colorMode] : 'undefined'}`
  );
}

getPsdInfo();
