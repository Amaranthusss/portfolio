'use server';
import { getPublicationsCacheTag } from './cache/getPublicationsCacheTag';
import { mapPublication } from '@/lib/mappers/mapPublication';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { PublicationDTO } from '@/models/publicationDto';
import type { Publication } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getPublications = async (
  locale: Locale
): Promise<PublicationDTO[]> => {
  const publications: PublicationDTO[] = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Publication> = await payload.find({
        collection: 'publications',
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        pagination: false,
        sort: '-' + ('publishDate' satisfies keyof Publication),
      });

      return result.docs.map(mapPublication);
    },
    [CacheName.Publications, locale],
    {
      revalidate: false,
      tags: [getPublicationsCacheTag(locale)],
    }
  )();

  return publications.map((publication) => ({
    ...publication,
    publishDate: new Date(publication.publishDate),
  }));
};
