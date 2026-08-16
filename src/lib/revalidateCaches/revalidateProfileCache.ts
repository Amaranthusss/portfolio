import { getProfilesCacheTag } from '@/services/cache/getProfilesCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import { locales } from '@/i18n/locale';

export function revalidateProfileCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getProfilesCacheTag(locale));
  }

  console.log('Revalidated profile cache');
}
