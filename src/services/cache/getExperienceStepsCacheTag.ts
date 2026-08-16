import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getExperienceStepsCacheTag = (locale: Locale): string => {
  return `${CacheName.ExperienceSteps}:${locale}`;
};
