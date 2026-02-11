import { mapSkill } from "@/lib/mappers/mapSkill";
import prisma from "@/lib/prisma";

import type { SkillDTO } from "@/models/skillDto";

import { currentLocale } from "@/lib/config";

export async function getSkills(): Promise<SkillDTO[]> {
	const db = await prisma.skill.findMany({
		include: { translations: { where: { locale: currentLocale }, take: 1 } },
	});

	return db.map(mapSkill);
};