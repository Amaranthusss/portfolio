import { mapProfile } from "@/lib/mappers/mapProfile";
import { cache } from "react";
import prisma from "@/lib/prisma";

import type { ProfileDTO } from "@/models/profileDto";

import { currentLocale } from "@/lib/config";

export const getProfiles = cache(async (): Promise<ProfileDTO[]> => {
	const db = await prisma.profile.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapProfile);
});