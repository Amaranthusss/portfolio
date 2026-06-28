import type { Locale, Prisma } from "@/generated/prisma";

export type PublicationWithRelations = Prisma.PublicationGetPayload<{
	include: {
		translations: { where: { locale: Locale }, take: 1 };
		authors: { include: { person: true } };
		skills: { include: { skill: { include: { translations: { where: { locale: Locale }, take: 1 } } } } };
	};
}>;