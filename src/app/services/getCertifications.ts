import { mapCertification } from "@/lib/mappers/mapCertification";
import prisma from "@/lib/prisma";

import type { CertificationDTO } from "@/models/certificationDto";

import { currentLocale } from "@/lib/config";

export async function getCertifications(): Promise<CertificationDTO[]> {
	const db = await prisma.certification.findMany({
		include: {
			translations: { where: { locale: currentLocale }, take: 1 },
			skills: { include: { skill: { include: { translations: { where: { locale: currentLocale }, take: 1 } } } } },
		},
	});

	return db.map(mapCertification);
};