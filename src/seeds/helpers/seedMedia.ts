import type { BasePayload, PaginatedDocs } from 'payload';
import type { MediaFilePath } from '@/models/mediaFilePath';
import type { Media } from '../../../payload-types';

import { mediaFiles } from '../constants/media';

export async function seedMedia(payload: BasePayload): Promise<void> {
  console.log('== Seeding media ==');

  let i: number = 1;

  for (const media of mediaFiles) {
    const existing: PaginatedDocs<Media> = await payload.find({
      collection: 'media',
      where: {
        and: [
          { filename: { equals: media.filename } },
          ...(media.prefix != null
            ? [{ prefix: { equals: media.prefix } }]
            : []),
        ],
      },
      limit: 1,
      depth: 0,
      pagination: false,
    });

    const mediaPath: MediaFilePath | string = media.prefix
      ? `${media.prefix}/${media.filename}`
      : media.filename;

    if (existing.docs.length > 0) {
      console.log(`[${i++}] ✓ Media already exists: ${mediaPath}`);
      continue;
    }

    await payload.create({
      collection: 'media',
      data: { prefix: media.prefix },
      filePath: media.filePath,
    });

    console.log(`[${i++}] Media created: ${mediaPath}`);
  }

  console.log(`[${i++}] Media seeding completed`);
}
