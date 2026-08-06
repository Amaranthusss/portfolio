'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import { mapPublication } from '@/lib/mappers/mapPublication';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { Publication } from '../../payload-types';
import type { PublicationDTO } from '@/models/publicationDto';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';

import config from '@payload-config';

const getPublicationsFromPayload = unstable_cache(
  async (locale: Locale): Promise<PublicationDTO[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result: PaginatedDocs<Publication> = await payload.find({
      collection: 'publications',
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      pagination: false,
      sort: '-publishDate',
    });

    return result.docs.map(mapPublication);
  },
  ['publications'],
  {
    revalidate: false,
  }
);

export const getPublications = async (
  locale: Locale
): Promise<PublicationDTO[]> => {
  return getPublicationsFromPayload(locale);
};
