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
 * Drawing lines on the image
 */
function testDrawLine() {
  const image = new MemoryImage({
    width: 256,
    height: 256,
  });

  // Drawing white line
  Draw.drawLine({
    image: image,
    line: new Line(0, 0, 255, 255),
    color: new ColorRgb8(255, 255, 255),
  });

  // Draw a red line 4 pixels thick with antialiasing
  Draw.drawLine({
    image: image,
    line: new Line(255, 0, 0, 255),
    color: new ColorRgb8(255, 0, 0),
    antialias: true,
    thickness: 4,
  });

  // Encode MemoryImage to PNG bytes
  const output = encodePng({
    image: image,
  });

  Utils.writeFile(Folder.output, Section.png, outputFileName, output);
}

testDrawLine();
