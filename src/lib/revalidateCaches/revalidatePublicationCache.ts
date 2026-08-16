import { getPublicationsCacheTag } from '@/services/cache/getPublicationsCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import { locales } from '@/i18n/locale';

export function revalidatePublicationCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getPublicationsCacheTag(locale));
  }

  console.log('Revalidated publication cache');
}
