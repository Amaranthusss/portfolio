import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getSkillsCacheTag = (locale: Locale): string => {
  return `${CacheName.Skills}:${locale}`;
};
