import type { PaginatedDocs, Payload } from 'payload';
import type { Media } from '../../../payload-types';

export async function getMediaId(
  payload: Payload,
  filename: string
): Promise<Media['id']> {
  const result: PaginatedDocs<Media> = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    depth: 0,
  });

  const media: Media | undefined = result.docs[0];

  if (media == null) {
    throw new Error(
      `Media "${filename}" was not found. Make sure media seed runs before certifications seed.`
    );
  }

  return media.id;
}
