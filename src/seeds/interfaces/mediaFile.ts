import type { MediaFilePath } from '@/models/mediaFilePath';

export interface MediaFile {
  filename: string;
  filePath: MediaFilePath;
  prefix?: string;
}
