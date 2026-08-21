import type { MediaDTO } from '@/models/mediaDto';
import type { Media } from '../../../payload-types';

function getFileExtension(filename: string): string {
  const index: number = filename.lastIndexOf('.');

  return index >= 0 ? filename.slice(index) : '';
}

export function mapMedia(media: Media | number | null | undefined): MediaDTO {
  return media && typeof media !== 'number' && media != null
    ? {
        id: media.id,
        fileName: media.filename ?? '',
        extension: getFileExtension(media.filename ?? ''),
        mimeType: media.mimeType ?? 'application/octet-stream',
        size: media.filesize ?? 0,
        url: media.url ?? '/images/unknown.png',
        width: media.width ?? 0,
        height: media.height ?? 0,
      }
    : {
        id: -1,
        size: 22033,
        extension: '.png',
        fileName: 'unknown.png',
        mimeType: 'image/png',
        url: '/images/unknown.png',
        width: 512,
        height: 512,
      };
}
