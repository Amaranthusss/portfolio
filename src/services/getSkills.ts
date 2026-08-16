'use server';
import { getSkillsCacheTag } from './cache/getSkillsCacheTag';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapSkill } from '@/lib/mappers/mapSkill';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { SkillDTO } from '@/models/skillDto';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../payload-types';

import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getSkills = async (locale: Locale): Promise<SkillDTO[]> => {
  return unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Skill> = await payload.find({
        collection: 'skills',
        locale,
        pagination: false,
        sort: 'key' satisfies keyof Skill,
      });

      return result.docs.map(mapSkill);
    },
    [CacheName.Skills, locale],
    {
      revalidate: false,
      tags: [getSkillsCacheTag(locale)],
    }
  )();
};
