/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { WebPDecoder, WebPFormat } from 'image-in-browser';

const fileName = 'SteamEngine.webp';

/**
 * Getting basic information about a WebP image
 */
function getWebPInfo() {
  const input = Utils.readFile(Folder.input, Section.webp, fileName);

  // To obtain information, you need to create a WebPDecoder
  // and call the startDecode method
  const decoder = new WebPDecoder();
  const info = decoder.startDecode(input);

  console.assert(info !== undefined);
  if (info === undefined) return;

  // Let's print the information
  console.info(`file name: '${fileName}'`);
  console.info(`size: ${info.width} x ${info.height}`);
  console.info(`has alpha: ${info.hasAlpha}`);
  console.info(`has animation: ${info.hasAnimation}`);
  console.info(`number of frames: ${info.numFrames}`);
  console.info(`color mode: ${WebPFormat[info.format]}`);
}

getWebPInfo();
