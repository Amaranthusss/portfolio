'use server'
import { mapProject } from "@/lib/mappers/mapProject";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { ProjectDTO } from "@/models/projectDto";

import { currentLocale } from "@/lib/config";

export const getProjects = cache(async (): Promise<ProjectDTO[]> => {
	const db = await prisma.project.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapProject);
});