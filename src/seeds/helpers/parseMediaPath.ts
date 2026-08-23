import path from 'node:path';

import type { MediaFilePath } from '@/models/mediaFilePath';
import type { MediaFile } from '../interfaces/mediaFile';

export function parseMediaFilePath(
  filePath: MediaFilePath,
  rootDirectory?: string
): MediaFile {
  const normalizedPath: string = filePath.replaceAll('\\', '/');

  const relativePath: string = rootDirectory
    ? path.relative(rootDirectory, filePath).replaceAll('\\', '/')
    : normalizedPath;

  const pathParts: string[] = relativePath.split('/');
  const filename: string | undefined = pathParts.pop();

  if (filename == null || filename.length === 0) {
    throw new Error(`Invalid media file path: "${filePath}"`);
  }

  const prefix: string = pathParts.join('/');

  return {
    filename,
    filePath,
    prefix: prefix.length > 0 ? prefix : undefined,
  };
}
