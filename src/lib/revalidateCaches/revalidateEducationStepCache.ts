import { getEducationStepsCacheTag } from '@/services/cache/getEducationStepsCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import { locales } from '@/i18n/locale';

export function revalidateEducationStepCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getEducationStepsCacheTag(locale));
  }

  console.log('Revalidated education step cache');
}
