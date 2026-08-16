import { getExperienceStepsCacheTag } from '@/services/cache/getExperienceStepsCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import { locales } from '@/i18n/locale';

export function revalidateExperienceStepCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getExperienceStepsCacheTag(locale));
  }

  console.log('Revalidated experience step cache');
}
