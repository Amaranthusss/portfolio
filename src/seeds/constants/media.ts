import fs from 'node:fs';
import path from 'node:path';

const IMAGES_DIR: string = path.resolve(process.cwd(), 'media');

export const mediaFiles = fs
  .readdirSync(IMAGES_DIR)
  .filter((filename: string): boolean => !filename.startsWith('.'))
  .filter((filename: string): boolean => {
    const fullPath: string = path.join(IMAGES_DIR, filename);

    return fs.statSync(fullPath).isFile();
  })
  .map((filename: string) => {
    return {
      filename,
      filePath: path.join(IMAGES_DIR, filename)
    };
  });
