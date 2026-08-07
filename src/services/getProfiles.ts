'use server';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapProfile } from '@/lib/mappers/mapProfile';

import type { ProfileDTO } from '@/models/profileDto';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import config from '@payload-config';

const getProfilesFromPayload = unstable_cache(
  async (locale: Locale): Promise<ProfileDTO[]> => {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: 'profiles',
      locale,
      fallbackLocale: defaultLocale,
      depth: 1,
      pagination: false,
      sort: 'orderNumber',
    });

    return result.docs.map(mapProfile);
  },
  ['profiles'],
  {
    revalidate: false,
  }
);

export const getProfiles = async (locale: Locale): Promise<ProfileDTO[]> => {
  return getProfilesFromPayload(locale);
};
