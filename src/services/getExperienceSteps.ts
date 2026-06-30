'use server';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { Locale } from '@/generated/prisma';

export const getExperienceSteps = cache(
  async (): Promise<ExperienceStepDTO[]> => {
    const locale: Locale = await getLocale();

    const db = await prisma.experienceStep.findMany({
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

    return db.map(mapExperienceStep);
  }
);
