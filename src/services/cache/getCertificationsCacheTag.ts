import type { Locale } from '@/i18n/locale';

import { CacheName } from '@/constants/CacheName';

export const getCertificationsCacheTag = (locale: Locale): string => {
  return `${CacheName.Certifications}:${locale}`;
};
