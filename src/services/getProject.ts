import { mapProject } from "@/lib/mappers/mapProject";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { ProjectDTO } from "@/models/projectDto";

import { currentLocale } from "@/lib/config";

export const getProject = cache(async (slug: string): Promise<ProjectDTO | null> => {
	const db = await prisma.project.findFirst({
		where: { slug },
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db != null ? mapProject(db) : null;
});