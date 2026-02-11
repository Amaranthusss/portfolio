import type { Locale, Prisma } from "@/app/generated/prisma";

export type EducationStepWithRelations = Prisma.EducationStepGetPayload<{
	include: {
		translations: { where: { locale: Locale }, take: 1 };
		skills: { include: { skill: { include: { translations: { where: { locale: Locale }, take: 1 } } } } };
	};
}>;