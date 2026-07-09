'use server';
import { unstable_cache } from 'next/cache';
import { mapProfile } from '@/lib/mappers/mapProfile';
import prisma from '@/lib/prisma';

import type { ProfileDTO } from '@/models/profileDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getProfiles = async (locale: Locale): Promise<ProfileDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.profile.findMany({
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
    },
    [CacheName.Profiles, locale],
    { revalidate: false }
  )();

  return db.map(mapProfile);
};
