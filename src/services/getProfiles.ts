'use server';
import { mapProfile } from '@/lib/mappers/mapProfile';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { ProfileDTO } from '@/models/profileDto';
import type { Locale } from '@/generated/prisma';

export const getProfiles = cache(async (): Promise<ProfileDTO[]> => {
  const locale: Locale = await getLocale();

  const db = await prisma.profile.findMany({
    include: {
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

  return db.map(mapProfile);
});
