import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

import type { Prisma, SkillKey } from "@/app/generated/prisma/client";

import { projectTranslations } from "./constants/projectTranslations";
import { skillTranslations } from "./constants/skillTranslations";
import { projectSkills } from "./constants/projectSkills";
import { projects } from "./constants/projects";
import { skills } from "./constants/skills";
import 'dotenv/config';

const adapter: PrismaPg = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});

const prisma: PrismaClient = new PrismaClient({ adapter });

export async function main() {
	/* ============================
		 SKILLS (ENUM → TABLE)
	============================ */

	await prisma.skill.createMany({ data: skills, skipDuplicates: true });

	const skillMap = await prisma.skill.findMany({ select: { id: true, key: true } });
	const skillIdByKey = new Map<SkillKey, number>(skillMap.map((s) => [s.key, s.id]));

	/* ============================
		 SKILL TRANSLATIONS
	============================ */

	const skillTranslationsData: Prisma.SkillTranslationCreateManyInput[] =
		skillTranslations.map(
			(skillTranslation: Prisma.SkillTranslationCreateInput): Prisma.SkillTranslationCreateManyInput => {
				const skillkey: SkillKey = skillTranslation.skill.connect!.key!

				return {
					skillId: skillIdByKey.get(skillkey)!,
					locale: skillTranslation.locale,
					name: skillTranslation.name,
					shortName: skillTranslation.shortName,
					description: skillTranslation.description,
				}
			}
		);

	await prisma.skillTranslation.createMany({ data: skillTranslationsData, skipDuplicates: true });

	/* ============================
		 PROJECTS
	============================ */

	await prisma.project.createMany({ data: projects, skipDuplicates: true });

	const projectsFromDb = await prisma.project.findMany({
		select: { id: true, slug: true },
	});

	const projectIdBySlug = new Map(
		projectsFromDb.map(p => [p.slug, p.id])
	);

	/* ============================
		 PROJECT SKILLS
	============================ */

	const projectSkillsData: Prisma.ProjectSkillCreateManyInput[] = projectSkills.map(ps => {
		const skillKey: SkillKey = ps.skill.connect!.key!;
		const projectSlug: string = ps.project.connect!.slug!;

		return {
			skillId: skillIdByKey.get(skillKey)!,
			projectId: projectIdBySlug.get(projectSlug)!,
		};
	});

	await prisma.projectSkill.createMany({ data: projectSkillsData, skipDuplicates: true });

	/* ============================
		 PROJECT TRANSLATIONS
	============================ */

	const projectTranslationsData: Prisma.ProjectTranslationCreateManyInput[] = projectTranslations.map(
		(pt): Prisma.ProjectTranslationCreateManyInput => {
			const projectSlug: string = pt.project.connect!.slug!;

			return {
				projectId: projectIdBySlug.get(projectSlug)!,
				locale: pt.locale,
				name: pt.name,
				description: pt.description,
			};
		}
	);

	await prisma.projectTranslation.createMany({ data: projectTranslationsData, skipDuplicates: true });
}


main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => prisma.$disconnect());
