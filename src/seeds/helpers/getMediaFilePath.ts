import type { MediaFilePath } from '@/models/mediaFilePath';
import type { Media } from '../../../payload-types';

export function getMediaFilePath(media: Media): MediaFilePath | undefined {
  if (media.filename == null) return undefined;
  if (media.prefix == null || media.prefix.length === 0) return media.filename;

  return `${media.prefix}/${media.filename}`;
}
