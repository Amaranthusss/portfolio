'use server';
import { getEducationStepsCacheTag } from './cache/getEducationStepsCacheTag';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { EducationStepDTO } from '@/models/educationStepDto';
import type { EducationStep } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getEducationSteps = async (
  locale: Locale
): Promise<EducationStepDTO[]> => {
  const educationSteps: EducationStepDTO[] = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<EducationStep> = await payload.find({
        collection: 'education-steps',
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        pagination: false,
        sort: 'startDate' satisfies keyof EducationStep,
      });

      return result.docs.map(mapEducationStep);
    },
    [CacheName.EducationSteps, locale],
    {
      revalidate: false,
      tags: [CacheName.EducationSteps, getEducationStepsCacheTag(locale)],
    }
  )();

  return educationSteps.map((step) => ({
    ...step,
    startDate: new Date(step.startDate),
    endDate: step.endDate != null ? new Date(step.endDate) : undefined,
  }));
};
