/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ChannelOrder, decodePng } from 'image-in-browser';

const fileName = 'buck_24.png';

/**
 * Creates a canvas element and draws a PNG image onto it.
 *
 * Note: This function is intended to be run in a browser environment.
 * It will fail in non-browser environments due to the absence of DOM elements.
 */
function createCanvasWithPng() {
  console.error(
    `This example cannot be run and debugged.
    DOM elements are not defined in this environment, so this function will fail at runtime.
    But it will work in the browser.
    Here I just wrote how this can be done.`
  );

  // Step 1: Read the PNG file
  const input = Utils.readFile(Folder.input, Section.png, fileName);

  // Step 2: Decode the PNG file
  const image = decodePng({
    data: input,
  });

  // Step 3: Ensure the image is decoded properly
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Step 4: Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  // Step 5: Get the 2D rendering context
  const ctx = canvas.getContext('2d');

  // Step 6: Ensure the context is obtained properly
  console.assert(ctx !== null);
  if (ctx === null) return;

  // Step 7: Create image data and set the raw bytes
  const imageData = ctx.createImageData(image.width, image.height);
  const rawBytes = image.getBytes({
    order: ChannelOrder.rgba,
  });
  imageData.data.set(rawBytes);

  // Step 8: Draw the image data onto the canvas
  ctx.putImageData(imageData, 0, 0);

  // Step 9: Append the canvas to the document body
  document.body.appendChild(canvas);
}

createCanvasWithPng();
