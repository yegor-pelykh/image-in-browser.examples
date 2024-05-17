/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { PsdColorMode, PsdDecoder } from 'image-in-browser';

const fileName = 'psd4.psd';

/**
 * Getting basic information about a PSD image
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
