import type { Locale, Prisma } from "@/app/generated/prisma";

export type ExperienceStepWithRelations = Prisma.ExperienceStepGetPayload<{
	include: {
		translations: { where: { locale: Locale }, take: 1 };
		skills: { include: { skill: { include: { translations: { where: { locale: Locale }, take: 1 } } } } };
	};
}>;