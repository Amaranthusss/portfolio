import type { BasePayload, PaginatedDocs } from 'payload';
import type { Media } from '../../../payload-types';

import { mediaFiles } from '../constants/media';

export async function seedMedia(payload: BasePayload): Promise<void> {
  let i: number = 1;
  console.log(`[${i++}] Seeding media`);

  for (const media of mediaFiles) {
    const existing: PaginatedDocs<Media> = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: media.filename,
        },
      },
      limit: 1,
      pagination: false,
    });

    if (existing.docs.length > 0) {
      console.log(`✓ Media already exists: ${media.filename}`);
      continue;
    }

    await payload.create({
      collection: 'media',
      data: {},
      filePath: media.filePath,
    });

    console.log(`[${i++}] Media created: ${media.filename}`);
  }

  console.log(`[${i++}] Media seeding finished`);
}
