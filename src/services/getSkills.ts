'use server';
import { mapSkill } from '@/lib/mappers/mapSkill';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { SkillDTO } from '@/models/skillDto';
import type { Locale } from '@/generated/prisma';

export const getSkills = cache(async (): Promise<SkillDTO[]> => {
  const locale: Locale = await getLocale();

  const db = await prisma.skill.findMany({
    include: { translations: { where: { locale }, take: 1 } }
  });

  return db.map(mapSkill);
});
