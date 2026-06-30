import mime from 'mime-types';
import path from 'path';
import fs from 'fs';

import type { Prisma } from '../../../src/generated/prisma/client';

const IMAGES_DIR: string = path.join(__dirname, '../images');

console.log('=== DEBUG INFO ===');
console.log('process.cwd():', process.cwd());
console.log(
  '__filename:',
  typeof __filename !== 'undefined' ? __filename : 'nie dostępne'
);

if (fs.existsSync(IMAGES_DIR)) {
  console.log('Images:', fs.readdirSync(IMAGES_DIR));
}

console.log('================\n');

export const imageFiles: Prisma.ImageFileCreateInput[] = fs
  .readdirSync(IMAGES_DIR)
  .filter((file: string): boolean => !file.startsWith('.'))
  .map((file: string): Prisma.ImageFileCreateInput => {
    const fullPath: string = path.join(IMAGES_DIR, file);
    const stats: fs.Stats = fs.statSync(fullPath);
    const extension: string = path.extname(file).replace('.', '');
    const fileName: string = path.basename(file, path.extname(file));

    return {
      fileName,
      extension,
      size: stats.size,
      mimeType: mime.lookup(fullPath) || 'application/octet-stream',
      storageKey: `images/${file}`,
    };
  });
