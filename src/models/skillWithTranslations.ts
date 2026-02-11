import type { Locale, Prisma } from "@/app/generated/prisma";

export type SkillWithTranslations = Prisma.SkillGetPayload<{
	include: { translations: { where: { locale: Locale }, take: 1 } };
}>;