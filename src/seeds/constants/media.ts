import { parseMediaFilePath } from '../helpers/parseMediaPath';
import path from 'node:path';
import fs from 'node:fs';

import type { MediaFile } from '../interfaces/mediaFile';

const IMAGES_DIR: string = path.resolve(process.cwd(), 'uploads');

function getMediaFiles(directory: string): MediaFile[] {
  return fs
    .readdirSync(directory)
    .filter((filename: string): boolean => !filename.startsWith('.'))
    .flatMap((filename: string): MediaFile[] => {
      const fullPath: string = path.join(directory, filename);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        return getMediaFiles(fullPath);
      }

      return [parseMediaFilePath(fullPath, IMAGES_DIR)];
    });
}

export const mediaFiles: MediaFile[] = getMediaFiles(IMAGES_DIR);
