/** @format */

import { ChannelOrder, MemoryImage } from 'image-in-browser';

/**
 * Getting MemoryImage bytes in a specific order
 */
function testGetBytes() {
  // Let's create a simple 1x1 pixel image
  const image = new MemoryImage({
    width: 1,
    height: 1,
  });

  // Set the color RGB(32, 64, 128) to the pixel with coordinates [0,0]
  image.setPixelRgb(0, 0, 32, 64, 128);

  const bytes = image.getBytes({
    order: ChannelOrder.argb,
  });

  console.info(`bytes length: ${bytes.length}`);
  console.info(`bytes[0]: ${bytes[0]}`);
  console.info(`bytes[1]: ${bytes[1]}`);
  console.info(`bytes[2]: ${bytes[2]}`);
  console.info(`bytes[3]: ${bytes[3]}`);
}

testGetBytes();
