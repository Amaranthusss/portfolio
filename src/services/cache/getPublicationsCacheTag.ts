import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getPublicationsCacheTag = (locale: Locale): string => {
  return `${CacheName.Publications}:${locale}`;
};
