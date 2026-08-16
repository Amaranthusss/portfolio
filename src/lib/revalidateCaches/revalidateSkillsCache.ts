import { getExperienceStepsCacheTag } from '@/services/cache/getExperienceStepsCacheTag';
import { getCertificationsCacheTag } from '@/services/cache/getCertificationsCacheTag';
import { getEducationStepsCacheTag } from '@/services/cache/getEducationStepsCacheTag';
import { getPublicationsCacheTag } from '@/services/cache/getPublicationsCacheTag';
import { getProfilesCacheTag } from '@/services/cache/getProfilesCacheTag';
import { getProjectsCacheTag } from '@/services/cache/getProjectsCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';
import { getSkillsCacheTag } from '@/services/cache/getSkillsCacheTag';

import { locales } from '@/i18n/locale';

export function revalidateSkillsCache(): void {
  for (const locale of locales) {
    revalidateCacheTag(getSkillsCacheTag(locale));
    revalidateCacheTag(getProfilesCacheTag(locale));
    revalidateCacheTag(getCertificationsCacheTag(locale));
    revalidateCacheTag(getEducationStepsCacheTag(locale));
    revalidateCacheTag(getExperienceStepsCacheTag(locale));
    revalidateCacheTag(getProjectsCacheTag(locale));
    revalidateCacheTag(getPublicationsCacheTag(locale));
  }

  console.log('Revalidated skill cache');
}