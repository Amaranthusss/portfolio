'use server';

import { mapSkill } from '@/lib/dtos/skillDto';
import prisma from '@/lib/prisma';

import type { SkillDTO } from '@/lib/dtos/skillDto';

import { Locale } from '@/app/generated/prisma';

const currentLocale: Locale = Locale.pl

export async function getSkills(): Promise<SkillDTO[]> {
	const db = await prisma.skill.findMany({
		include: { translations: { where: { locale: currentLocale }, take: 1, } },
	});

	return db.map(mapSkill)
}