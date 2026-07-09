'use server';
import { unstable_cache } from 'next/cache';
import { mapSkill } from '@/lib/mappers/mapSkill';
import prisma from '@/lib/prisma';

import type { SkillDTO } from '@/models/skillDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getSkills = async (locale: Locale): Promise<SkillDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.skill.findMany({
        include: { translations: { where: { locale }, take: 1 } }
      });
    },
    [CacheName.Skills, locale],
    { revalidate: false }
  )();

  return db.map(mapSkill);
};
