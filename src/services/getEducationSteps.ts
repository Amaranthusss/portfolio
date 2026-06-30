'use server';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { EducationStepDTO } from '@/models/educationStepDto';
import type { Locale } from '@/generated/prisma';

export const getEducationSteps = cache(
  async (): Promise<EducationStepDTO[]> => {
    const locale: Locale = await getLocale();

    const db = await prisma.educationStep.findMany({
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

    return db.map(mapEducationStep);
  }
);
