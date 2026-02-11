import { mapEducationStep } from "@/lib/mappers/mapEducationStep";
import prisma from "@/lib/prisma";

import type { EducationStepDTO } from "@/models/educationStepDto";

import { currentLocale } from "@/lib/config";

export async function getEducationSteps(): Promise<EducationStepDTO[]> {
	const db = await prisma.educationStep.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapEducationStep);
};