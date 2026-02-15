import { mapExperienceStep } from "@/lib/mappers/mapExperienceStep";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { ExperienceStepDTO } from "@/models/experienceStepDto";

import { currentLocale } from "@/lib/config";

export const getExperienceSteps = cache(async (): Promise<ExperienceStepDTO[]> => {
	const db = await prisma.experienceStep.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapExperienceStep);
});