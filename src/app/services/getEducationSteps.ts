import { mapEducationStep } from "@/lib/mappers/mapEducationStep";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { EducationStepDTO } from "@/models/educationStepDto";

import { currentLocale } from "@/lib/config";

export const getEducationSteps = cache(async (): Promise<EducationStepDTO[]> => {
	const db = await prisma.educationStep.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapEducationStep);
});