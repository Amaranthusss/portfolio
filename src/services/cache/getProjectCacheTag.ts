import { CacheName } from '@/constants/CacheName';

import type { Locale } from '@/i18n/locale';

export const getProjectCacheTag = (slug: string, locale: Locale): string => {
  return `${CacheName.Project}:${slug}:${locale}`;
};
