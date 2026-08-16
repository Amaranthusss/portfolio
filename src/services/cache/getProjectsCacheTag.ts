import { CacheName } from '@/constants/CacheName';

import type { Locale } from '@/i18n/locale';

export const getProjectsCacheTag = (locale: Locale): string => {
  return `${CacheName.Projects}:${locale}`;
};
