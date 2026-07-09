'use server';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { unstable_cache } from 'next/cache';
import prisma from '@/lib/prisma';

import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getExperienceSteps = async (
  locale: Locale
): Promise<ExperienceStepDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.experienceStep.findMany({
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
    [CacheName.ExperienceSteps, locale],
    { revalidate: false }
  )();

  return db.map(mapExperienceStep);
};
