import { getProjectsCacheTag } from '@/services/cache/getProjectsCacheTag';
import { getProjectCacheTag } from '@/services/cache/getProjectCacheTag';
import { revalidateCacheTag } from './_revalidateCacheTag';

import type { Project } from '../../../payload-types';

import { locales } from '@/i18n/locale';

export function revalidateProjectCache(project: Project): void {
  for (const locale of locales) {
    revalidateCacheTag(getProjectsCacheTag(locale));
    revalidateCacheTag(getProjectCacheTag(project.slug, locale));
  }

  console.log(`Revalidated project cache: ${project.slug}`);
}
