import { mapCoreTechnologies } from '@/lib/mappers/mapCoreTechnologies';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { CoreTechnologiesDTO } from '@/models/coreTechnologiesDto';
import type { CoreTechnology } from '../../payload-types';
import type { BasePayload } from 'payload';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export async function getCoreTechnologies(
  locale: Locale
): Promise<CoreTechnologiesDTO> {
  const coreTechnology: CoreTechnology = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      return await payload.findGlobal({
        slug: 'core-technologies',
        locale,
        fallbackLocale: defaultLocale,
      });
    },
    [CacheName.CoreTechnologies, locale],
    {
      revalidate: false,
      tags: [CacheName.CoreTechnologies],
    }
  )();

  return mapCoreTechnologies(coreTechnology);
}
