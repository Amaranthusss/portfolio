'use server';
import { mapPublication } from '@/lib/mappers/mapPublication';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { PublicationDTO } from '@/models/publicationDto';
import type { Locale } from '@/generated/prisma';

export const getPublications = cache(async (): Promise<PublicationDTO[]> => {
  const locale: Locale = await getLocale();

  const db = await prisma.publication.findMany({
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

  return db.map(mapPublication);
});
