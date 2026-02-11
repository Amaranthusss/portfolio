import type { Prisma } from "@/app/generated/prisma/client";

import { ProjectSlug } from "../mocks/projectSlug";
import { Category } from "@/app/generated/prisma/client";

export const projects: Prisma.ProjectCreateInput[] = [
	{
		slug: ProjectSlug.ProductionSystemUtilizingAGV,
		category: Category.Mechatronics,
		startDate: new Date('2018-09-01'),
		endDate: new Date('2020-01-23'),
		createdAt: new Date('2018-09-01'),
	},
	{
		slug: ProjectSlug.AmaranthusAGVPlatform,
		category: Category.Mechatronics,
		startDate: new Date('2019-12-07'),
		endDate: new Date('2021-07-18'),
		createdAt: new Date('2019-12-07'),
	},
];