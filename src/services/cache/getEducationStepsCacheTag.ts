import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getEducationStepsCacheTag = (locale: Locale): string => {
  return `${CacheName.EducationSteps}:${locale}`;
};
