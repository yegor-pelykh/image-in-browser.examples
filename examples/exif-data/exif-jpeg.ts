/** @format */

import { Utils } from '../_utils/utils.js';
import { Folder } from '../_utils/folder.js';
import { Section } from '../_utils/section.js';
import {
  ColorRgb8,
  ExifData,
  IfdAsciiValue,
  IfdLongValue,
  IfdRationalValue,
  IfdSLongValue,
  IfdSRationalValue,
  IfdSShortValue,
  IfdShortValue,
  IfdUndefinedValue,
  MemoryImage,
  Rational,
  decodeJpg,
  encodeJpg,
} from 'image-in-browser';

const outputFileName = 'exif-info.jpg';

/**
 * Demonstration of writing and reading EXIF data of JPG image
 */
function testJpgExifData() {
  // First let's create an instance of the ExifData class.
  const exifData = new ExifData();

  // Now let's add 8 exif values of different types
  exifData.imageIfd.setValue(0, new IfdShortValue(124));
  exifData.imageIfd.setValue(1, new IfdLongValue(52141));
  exifData.imageIfd.setValue(2, new IfdSShortValue(-42));
  exifData.imageIfd.setValue(3, new IfdSLongValue(-42141));
  exifData.imageIfd.setValue(4, new IfdRationalValue(new Rational(72, 1)));
  exifData.imageIfd.setValue(5, new IfdSRationalValue(new Rational(-50, 5)));
  exifData.imageIfd.setValue(6, new IfdAsciiValue('This is an EXIF string'));
  exifData.imageIfd.setValue(
    7,
    // An array of values is passed to the constructor,
    // but this EXIF data type actually means undefined data,
    // so the array will be ignored.
    // Just for demonstration.
    new IfdUndefinedValue(new Uint8Array([1, 2, 3, 4]))
  );

  // Now let’s add the same 8 exif values of different types to the EXIF subdirectory
  exifData.imageIfd.sub.get('exif').setValue(0, new IfdShortValue(124));
  exifData.imageIfd.sub.get('exif').setValue(1, new IfdLongValue(52141));
  exifData.imageIfd.sub.get('exif').setValue(2, new IfdSShortValue(-42));
  exifData.imageIfd.sub.get('exif').setValue(3, new IfdSLongValue(-42141));
  exifData.imageIfd.sub
    .get('exif')
    .setValue(4, new IfdRationalValue(new Rational(72, 1)));
  exifData.imageIfd.sub
    .get('exif')
    .setValue(5, new IfdSRationalValue(new Rational(-50, 5)));
  exifData.imageIfd.sub
    .get('exif')
    .setValue(6, new IfdAsciiValue('This is an EXIF string'));
  exifData.imageIfd.sub
    .get('exif')
    .setValue(7, new IfdUndefinedValue(new Uint8Array([1, 2, 3, 4])));

  // Now let's create a simple 10x10 pixel image with just a black background
  // to save the EXIF data along with this image
  const image1 = new MemoryImage({
    width: 10,
    height: 10,
    backgroundColor: new ColorRgb8(0, 0, 0),
  });

  // Set EXIF data to the image.
  // This could also be done in the previous step (when creating the image),
  // using the 'exifData' parameter
  image1.exifData = exifData;

  // encoding MemoryImage to JPG bytes
  const output = encodeJpg({
    image: image1,
  });

  // Save bytes to file
  Utils.writeFile(Folder.output, Section.jpg, outputFileName, output);

  // Load the image again from the same file
  const input2 = Utils.readFile(Folder.output, Section.jpg, outputFileName);

  // Decoding JPG bytes to MemoryImage
  const image2 = decodeJpg({
    data: input2,
  });

  console.assert(image2 !== undefined);
  if (image2 === undefined) return;

  console.info(`file name: ${outputFileName}`);

  // Here we read each of the 8 EXIF data values
  const exifData2 = image2.exifData;
  for (let i = 0; i <= 7; ++i) {
    const exifValue = exifData2.imageIfd.getValue(i);
    console.info(`EXIF value ${i}: ${exifValue}`);
  }

  // ... and 'exif' subdirectory values
  const exifSub = exifData2.imageIfd.sub.get('exif');
  for (let i = 0; i <= 7; ++i) {
    const exifValue = exifSub.getValue(i);
    console.info(`EXIF sub value ${i}: ${exifValue}`);
  }
}

testJpgExifData();
