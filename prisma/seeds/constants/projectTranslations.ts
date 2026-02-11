import type { Prisma } from "@/app/generated/prisma/client";

import { ProjectSlug } from "../mocks/projectSlug";
import { Locale } from "@/app/generated/prisma/client";

export const projectTranslations: Prisma.ProjectTranslationCreateInput[] = [
	{
		locale: Locale.pl,
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		name: 'System Automatyzacji Linii Produkcyjnej z Wykorzystaniem AGV',
	},
	{
		locale: Locale.en,
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		name: 'Production Line Automation System Using AGV',
	},

	{
		locale: Locale.pl,
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		name: 'Pojazd AGV "Amaranthus" - Platforma',
	},
	{
		locale: Locale.en,
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		name: 'AGV vehicle "Amaranthus" - Platform',
	},
];