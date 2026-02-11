'use server';

import { mapProject } from '@/lib/dtos/projectDto';
import prisma from '@/lib/prisma';

import type { ProjectDTO } from '@/lib/dtos/projectDto';

import { Locale } from '@/app/generated/prisma';

const currentLocale: Locale = Locale.pl

export async function getProjects(): Promise<ProjectDTO[]> {
	const db = await prisma.project.findMany({
		include: {
			translations: {
				where: { locale: currentLocale },
				take: 1,
			},
			skills: {
				include: {
					skill: {
						include: {
							translations: {
								where: { locale: currentLocale },
								select: { name: true, shortName: true },
								take: 1,
							},
						},
					},
				},
			},
		},
	})

	return db.map(mapProject)
}