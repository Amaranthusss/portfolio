'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { defaultLocale } from '@/i18n/locale';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { ExperienceStep } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import config from '@payload-config';

const getExperienceStepsFromPayload = unstable_cache(
  async (locale: Locale): Promise<ExperienceStepDTO[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result: PaginatedDocs<ExperienceStep> = await payload.find({
      collection: 'experience-steps',
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      pagination: false,
      sort: '-startDate',
    });

    return result.docs.map(mapExperienceStep);
  },
  ['experience-steps'],
  {
    revalidate: false,
  }
);

export const getExperienceSteps = async (
  locale: Locale
): Promise<ExperienceStepDTO[]> => {
  return getExperienceStepsFromPayload(locale);
};
