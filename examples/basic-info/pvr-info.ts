/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { PvrAppleInfo, PvrDecoder } from 'image-in-browser';

const fileName = 'globe.pvr';

/**
 * Reads PVR file information and logs it to the console.
 * Utilizes PvrDecoder to decode the file and extract details.
 * Ensures the decoded information is of type PvrAppleInfo before logging.
 */
function getPvrInfo() {
  const input = Utils.readFile(Folder.input, Section.pvr, fileName);

  // To obtain information, you need to create a PvrDecoder
  // and call the startDecode method
  const decoder = new PvrDecoder();
  const info = decoder.startDecode(input);

  const isApplePvr = info instanceof PvrAppleInfo;
  console.assert(isApplePvr);
  if (!isApplePvr) return;

  // Let's print the information
  console.info(`file name: '${fileName}'`);
  console.info(`size: ${info.width} x ${info.height}`);
  console.info(`bits per pixel: ${info.bitsPerPixel}`);
  console.info(`MIP-Map level count: ${info.mipCount}`);
}

getPvrInfo();
