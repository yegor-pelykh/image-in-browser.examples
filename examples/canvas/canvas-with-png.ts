/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ChannelOrder, decodePng } from 'image-in-browser';
import { assert } from 'console';

const fileName = 'buck_24.png';

/**
 * Displaying a PNG image on a canvas
 */
function createCanvasWithPng() {
  console.error(
    `This example cannot be run and debugged.
    DOM elements are not defined in this environment, so this function will fail at runtime.
    But it will work in the browser.
    Here I just wrote how this can be done.`
  );

  const input = Utils.readFile(Folder.input, Section.png, fileName);

  // Decoding contents into MemoryImage
  const image = decodePng({
    data: input,
  });

  console.assert(image !== undefined);
  if (image === undefined) return;

  // Creating canvas and setting its width and height
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  // Getting context
  const ctx = canvas.getContext('2d');

  console.assert(ctx !== null);
  if (ctx === null) return;

  // Creating ImageData from MemoryImage
  const imageData = ctx.createImageData(image.width, image.height);
  const rawBytes = image.getBytes({
    order: ChannelOrder.rgba,
  });
  imageData.data.set(rawBytes);

  // Putting ImageData into context
  ctx.putImageData(imageData, 0, 0);

  // Adding canvas to the tree
  document.body.appendChild(canvas);
}

createCanvasWithPng();
