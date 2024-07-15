/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import { decodeJpg, encodeJpg } from 'image-in-browser';

const inputFileName = 'kodak-dc210.jpg';
const outputFileName = 'image-without-exif.jpg';

/**
 * Function to test the removal of EXIF data from a JPEG image.
 * This function reads an input JPEG file, decodes it,
 * and then writes the modified image to an output file skipping the EXIF data.
 */
function testRemovingExifData() {
  // Read the input JPEG file
  const input = Utils.readFile(Folder.input, Section.jpg, inputFileName);

  // Decode the JPEG image
  const image = decodeJpg({
    data: input,
  });

  // Ensure the image is decoded successfully
  console.assert(image !== undefined);
  if (image === undefined) return;

  // Encode the image without EXIF data
  const output = encodeJpg({
    image: image,
    skipExif: true,
  });

  // Write the output JPEG file
  Utils.writeFile(Folder.output, Section.jpg, outputFileName, output);
}

testRemovingExifData();
