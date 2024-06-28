/** @format */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'fs';
import { join, parse } from 'path';
import { FileInfo } from './file-info.js';
import { Folder } from './folder.js';
import { Section } from './section.js';

/**
 * Utility class providing file and folder operations.
 */
export abstract class Utils {
  /**
   * Get the folder path based on the Folder enum.
   * @param folder - The folder enum value.
   * @returns The corresponding folder path as a string.
   * @throws Will throw an error if the folder is unknown.
   */
  private static getFolder(folder: Folder) {
    switch (folder) {
      case Folder.input:
        return '_input';
      case Folder.output:
        return '_output';
    }
    throw new Error('Unknown test folder specified');
  }

  /**
   * Get the section path based on the Section enum.
   * @param section - The section enum value.
   * @returns The corresponding section path as a string.
   * @throws Will throw an error if the section is unknown.
   */
  private static getSection(section: Section) {
    switch (section) {
      case Section.apng:
        return 'apng';
      case Section.bmp:
        return 'bmp';
      case Section.color:
        return 'color';
      case Section.draw:
        return 'draw';
      case Section.dump:
        return 'dump';
      case Section.exif:
        return 'exif';
      case Section.filter:
        return 'filter';
      case Section.gif:
        return 'gif';
      case Section.ico:
        return 'ico';
      case Section.jpg:
        return 'jpg';
      case Section.png:
        return 'png';
      case Section.pnm:
        return 'pnm';
      case Section.psd:
        return 'psd';
      case Section.pvr:
        return 'pvr';
      case Section.tiff:
        return 'tiff';
      case Section.tga:
        return 'tga';
      case Section.transform:
        return 'transform';
      case Section.webp:
        return 'webp';
    }
    throw new Error('Unknown test section specified');
  }

  /**
   * Prepare the full path for a given folder, section, and optional file name.
   * @param folder - The folder enum value.
   * @param section - The section enum value.
   * @param fileName - Optional file name.
   * @returns The full path as a string.
   */
  private static preparePath(
    folder: Folder,
    section: Section,
    fileName?: string
  ): string {
    const dirPath = join(this.getFolder(folder), this.getSection(section));
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, {
        recursive: true,
      });
    }
    return fileName !== undefined ? join(dirPath, fileName) : dirPath;
  }

  /**
   * List files in a specified folder and format, optionally filtering by file extension.
   * @param folder - The folder enum value.
   * @param format - The section enum value.
   * @param endsWith - Optional file extension to filter by.
   * @returns An array of FileInfo objects.
   */
  public static listFiles(
    folder: Folder,
    format: Section,
    endsWith?: string
  ): FileInfo[] {
    const dirPath = this.preparePath(folder, format);
    return readdirSync(dirPath)
      .filter((name: string) => {
        if (endsWith === undefined) {
          return true;
        } else {
          return name.toLowerCase().endsWith(endsWith.toLowerCase());
        }
      })
      .map((fileName: string) => {
        const pp = parse(fileName);
        return new FileInfo(join(dirPath, fileName), pp.name, pp.ext);
      });
  }

  /**
   * Read a file by its path.
   * @param filePath - The full path to the file.
   * @returns The file content as a Buffer.
   */
  public static readFileByPath(filePath: string): Buffer {
    return readFileSync(filePath);
  }

  /**
   * Read a file from a specified folder, section, and file name.
   * @param folder - The folder enum value.
   * @param section - The section enum value.
   * @param fileName - The name of the file.
   * @returns The file content as a Buffer.
   */
  public static readFile(
    folder: Folder,
    section: Section,
    fileName: string
  ): Buffer {
    const path = this.preparePath(folder, section, fileName);
    return this.readFileByPath(path);
  }

  /**
   * Write data to a file in a specified folder, section, and file name.
   * @param folder - The folder enum value.
   * @param section - The section enum value.
   * @param fileName - The name of the file.
   * @param data - The data to write, either as a string or NodeJS.ArrayBufferView.
   */
  public static writeFile(
    folder: Folder,
    section: Section,
    fileName: string,
    data: string | NodeJS.ArrayBufferView
  ) {
    const path = this.preparePath(folder, section, fileName);
    writeFileSync(path, data);
  }
}
