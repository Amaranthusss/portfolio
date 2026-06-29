'use server'
import { mapPublication } from "@/lib/mappers/mapPublication";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { PublicationDTO } from "@/models/publicationDto";

import { currentLocale } from "@/lib/config";

export const getPublications = cache(async (): Promise<PublicationDTO[]> => {
	const db = await prisma.publication.findMany({
		include: {
			authors: { include: { person: true } },
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapPublication);
});