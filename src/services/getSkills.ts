'use server';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapSkill } from '@/lib/mappers/mapSkill';

import config from '@payload-config';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { SkillDTO } from '@/models/skillDto';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../payload-types';

const getSkillsFromPayload = unstable_cache(
  async (locale: Locale): Promise<Skill[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result: PaginatedDocs<Skill> = await payload.find({
      collection: 'skills',
      locale,
      pagination: false,
      sort: 'key',
    });

    return result.docs;
  },
  ['skills'],
  {
    revalidate: false,
  }
);

export const getSkills = async (locale: Locale): Promise<SkillDTO[]> => {
  const skills: Skill[] = await getSkillsFromPayload(locale);

  return skills.map(mapSkill);
};
