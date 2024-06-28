/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import {
  ColorRgb8,
  Draw,
  Line,
  MemoryImage,
  encodePng,
} from 'image-in-browser';

const outputFileName = 'draw-line.png';

/**
 * Function to test drawing lines on an image and encoding it to PNG format.
 */
function testDrawLine() {
  // Create a new MemoryImage with specified width and height
  const image = new MemoryImage({
    width: 256,
    height: 256,
  });

  // Drawing a white line from (0, 0) to (255, 255)
  Draw.drawLine({
    image: image,
    line: new Line(0, 0, 255, 255),
    color: new ColorRgb8(255, 255, 255),
  });

  // Draw a red line from (255, 0) to (0, 255), 4 pixels thick with antialiasing
  Draw.drawLine({
    image: image,
    line: new Line(255, 0, 0, 255),
    color: new ColorRgb8(255, 0, 0),
    antialias: true,
    thickness: 4,
  });

  // Encode the MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  // Write the PNG bytes to a file
  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testDrawLine();
