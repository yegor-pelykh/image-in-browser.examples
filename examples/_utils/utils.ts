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

export abstract class Utils {
  private static getFolder(folder: Folder) {
    switch (folder) {
      case Folder.input:
        return '_input';
      case Folder.output:
        return '_output';
    }
    throw new Error('Unknown test folder specified');
  }

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

  public static readFileByPath(filePath: string): Buffer {
    return readFileSync(filePath);
  }

  public static readFile(
    folder: Folder,
    section: Section,
    fileName: string
  ): Buffer {
    const path = this.preparePath(folder, section, fileName);
    return this.readFileByPath(path);
  }

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
