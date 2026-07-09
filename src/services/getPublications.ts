'use server';
import { unstable_cache } from 'next/cache';
import { mapPublication } from '@/lib/mappers/mapPublication';
import prisma from '@/lib/prisma';

import type { PublicationDTO } from '@/models/publicationDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getPublications = async (
  locale: Locale
): Promise<PublicationDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.publication.findMany({
        include: {
          authors: { include: { person: true } },
          translations: { where: { locale }, take: 1 },
          skills: {
            include: {
              skill: {
                include: {
                  translations: { where: { locale }, take: 1 }
                }
              }
            }
          }
        }
      });
    },
    [CacheName.Publications, locale],
    { revalidate: false }
  )();

  return db.map(mapPublication);
};
