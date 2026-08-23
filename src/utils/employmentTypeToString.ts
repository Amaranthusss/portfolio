import { getTranslations } from 'next-intl/server';

import type { EmploymentType } from '@/models/employmentType';

export async function employmentTypeToString(
  employmentType: EmploymentType,
  defaultValue: string = ''
): Promise<string> {
  const t = await getTranslations('experience-and-education.employment-type');

  switch (employmentType) {
    case 'FullTime':
      return t('full-time');

    case 'HalfTime':
      return t('half-time');

    case 'QuarterTime':
      return t('quarter-time');

    case 'SelfEmployed':
      return t('self-employed');

    case 'Freelance':
      return t('freelance');

    case 'Apprenticeship':
      return t('apprenticeship');

    case 'Internship':
      return t('internship');

    default:
      return defaultValue;
  }
}
