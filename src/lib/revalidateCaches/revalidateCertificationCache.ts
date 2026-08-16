import { getCertificationsCacheTag } from '@/services/cache/getCertificationsCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import { locales } from '@/i18n/locale';

export function revalidateCertificationCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getCertificationsCacheTag(locale));
  }

  console.log('Revalidated certification cache');
}
