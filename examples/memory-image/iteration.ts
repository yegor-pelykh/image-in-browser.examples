/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { ColorRgb8, MemoryImage, Pixel, encodePng } from 'image-in-browser';

const output1FileName = 'iterate1.png';
const output2FileName = 'iterate2.png';

/**
 * Iterating over MemoryImage pixels
 */
function testPixelIteration() {
  // Let's create a simple 1000x1000 pixel image with just a black background
  const image = new MemoryImage({
    width: 1000,
    height: 1000,
    backgroundColor: new ColorRgb8(0, 0, 0),
  });

  // The first way to iterate is using a for...of loop.
  // Let's fill the image with random colors for each pixel this way.
  for (const pixel of image) {
    pixel.setRgb(
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    );
  }

  // Encode current MemoryImage to PNG bytes
  const output1 = encodePng({
    image: image,
  });

  // Now let's save the image filled in the first way
  Utils.writeFile(Folder.output, Section.png, output1FileName, output1);

  // Now let's try the second way of iteration - using an iterator.
  // Let's turn the image into grayscale, the G and B channels of which are equal to the R channel.
  const pIter = image[Symbol.iterator]();
  let pIterRes: IteratorResult<Pixel, unknown> | undefined = undefined;
  while (!(pIterRes = pIter.next()).done) {
    const pixel = pIterRes.value;
    const r = pixel.r;
    pixel.g = r;
    pixel.b = r;
  }

  // Encode current MemoryImage to PNG bytes
  const output2 = encodePng({
    image: image,
  });

  // Save bytes to file
  Utils.writeFile(Folder.output, Section.png, output2FileName, output2);
}

testPixelIteration();
