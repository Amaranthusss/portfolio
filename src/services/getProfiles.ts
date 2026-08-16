'use server';
import { getProfilesCacheTag } from './cache/getProfilesCacheTag';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapProfile } from '@/lib/mappers/mapProfile';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { ProfileDTO } from '@/models/profileDto';
import type { Profile } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getProfiles = async (locale: Locale): Promise<ProfileDTO[]> => {
  return unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Profile> = await payload.find({
        collection: 'profiles',
        locale,
        fallbackLocale: defaultLocale,
        depth: 1,
        pagination: false,
        sort: 'orderNumber' satisfies keyof Profile,
      });

      return result.docs.map(mapProfile);
    },
    [CacheName.Profiles, locale],
    {
      revalidate: false,
      tags: [getProfilesCacheTag(locale)],
    }
  )();
};
