'use server';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { unstable_cache } from 'next/cache';
import prisma from '@/lib/prisma';

import type { EducationStepDTO } from '@/models/educationStepDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getEducationSteps = async (
  locale: Locale
): Promise<EducationStepDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.educationStep.findMany({
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
    [CacheName.EducationSteps, locale],
    { revalidate: false }
  )();

  return db.map(mapEducationStep);
};
