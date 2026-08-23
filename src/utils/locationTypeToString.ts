import { getTranslations } from 'next-intl/server';

import type { LocationType } from '@/models/locationType';

export async function locationTypeToString(
  locationType: LocationType,
  defaultValue: string = ''
): Promise<string> {
  const t = await getTranslations('experience-and-education.location-type');

  switch (locationType) {
    case 'OnSite':
      return t('on-site');

    case 'Remote':
      return t('remote');

    case 'Hybrid':
      return t('hybrid');

    default:
      return defaultValue;
  }
}
