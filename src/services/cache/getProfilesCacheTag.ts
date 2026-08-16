import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getProfilesCacheTag = (locale: Locale): string => {
  return `${CacheName.Profiles}:${locale}`;
};
