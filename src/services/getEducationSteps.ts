'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import { mapEducationStep } from '@/lib/mappers/mapEducationStep';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { EducationStep } from '../../payload-types';
import type { EducationStepDTO } from '@/models/educationStepDto';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';

import config from '@payload-config';

const getEducationStepsFromPayload = unstable_cache(
  async (locale: Locale): Promise<EducationStepDTO[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result: PaginatedDocs<EducationStep> = await payload.find({
      collection: 'education-steps',
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      pagination: false,
      sort: '-startDate',
    });

    return result.docs.map(mapEducationStep);
  },
  ['education-steps'],
  {
    revalidate: false,
  }
);

export const getEducationSteps = async (
  locale: Locale
): Promise<EducationStepDTO[]> => {
  return getEducationStepsFromPayload(locale);
};
