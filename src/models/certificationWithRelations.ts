import type { Locale, Prisma } from "@/generated/prisma";

export type CertificationWithRelations = Prisma.CertificationGetPayload<{
	include: {
		translations: { where: { locale: Locale }, take: 1 };
		skills: { include: { skill: { include: { translations: { where: { locale: Locale }, take: 1 } } } } };
	};
}>;