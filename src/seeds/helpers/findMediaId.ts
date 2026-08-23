import type { PaginatedDocs, Payload } from 'payload';
import type { MediaFilePath } from '@/models/mediaFilePath';
import type { Media } from '../../../payload-types';

export async function findMediaId(
  payload: Payload,
  filePath: MediaFilePath
): Promise<Media['id']> {
  const filename: string = filePath.split('/').at(-1) ?? filePath;

  const result: PaginatedDocs<Media> = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    depth: 0,
    limit: 1,
  });

  const media: Media | undefined = result.docs[0];

  if (media == null) {
    throw new Error(
      `Could not find media with filename "${filename}" for path "${filePath}".`
    );
  }

  return media.id;
}
