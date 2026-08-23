import { parseMediaFilePath } from './parseMediaPath';

import type { PaginatedDocs, Payload } from 'payload';
import type { MediaFilePath } from '@/models/mediaFilePath';
import type { MediaFile } from '../interfaces/mediaFile';
import type { Media } from '../../../payload-types';

export async function getMediaId(
  payload: Payload,
  filePath: MediaFilePath
): Promise<Media['id']> {
  const mediaFile: MediaFile = parseMediaFilePath(filePath);

  const result: PaginatedDocs<Media> =
    mediaFile.prefix != null
      ? await payload.find({
          collection: 'media',
          where: {
            and: [
              { filename: { equals: mediaFile.filename } },
              { prefix: { equals: mediaFile.prefix } },
            ],
          },
          limit: 1,
          depth: 0,
        })
      : await payload.find({
          collection: 'media',
          where: { filename: { equals: mediaFile.filename } },
          limit: 1,
          depth: 0,
        });

  const media: Media | undefined = result.docs[0];

  if (media == null) {
    throw new Error(
      `Media "${filePath}" was not found. Make sure media seed runs before dependent seeds.`
    );
  }

  return media.id;
}
