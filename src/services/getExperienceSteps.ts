'use server';
import { getExperienceStepsCacheTag } from './cache/getExperienceStepsCacheTag';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { ExperienceStep } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getExperienceSteps = async (
  locale: Locale
): Promise<ExperienceStepDTO[]> => {
  const experienceSteps: ExperienceStepDTO[] = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<ExperienceStep> = await payload.find({
        collection: 'experience-steps',
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        pagination: false,
        sort: '-' + ('startDate' satisfies keyof ExperienceStep),
      });

      return result.docs.map(mapExperienceStep);
    },
    [CacheName.ExperienceSteps, locale],
    {
      revalidate: false,
      tags: [CacheName.ExperienceSteps, getExperienceStepsCacheTag(locale)],
    }
  )();

  return experienceSteps.map((step) => ({
    ...step,
    startDate: new Date(step.startDate),
    endDate: step.endDate != null ? new Date(step.endDate) : undefined,
  }));
};
