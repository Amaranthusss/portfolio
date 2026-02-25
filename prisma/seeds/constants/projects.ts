import type { Prisma } from "../../../src/generated/prisma/client";

import { Category, Locale, SkillKey } from "../../../src/generated/prisma/client";
import { ProjectSlug } from "../slugs/projectSlug";

export const projects: Prisma.ProjectCreateInput[] = [
	{
		slug: ProjectSlug.ProductionSystemUtilizingAGV,
		category: Category.Mechatronics,
		startDate: new Date('2018-09-01'),
		endDate: new Date('2020-01-23'),

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.TiaPortal } } },
				{ skill: { connect: { key: SkillKey.PLCProgramming } } },
				{ skill: { connect: { key: SkillKey.AGV } } },
				{ skill: { connect: { key: SkillKey.CommunicationTCPIP } } },
				{ skill: { connect: { key: SkillKey.ModbusProtocol } } },
			],
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					name: 'System Automatyzacji Linii Produkcyjnej z Wykorzystaniem AGV',
				},
				{
					locale: Locale.en,
					name: 'Production Line Automation System Using AGV',
				},
			],
		},
	},

	{
		slug: ProjectSlug.AmaranthusAGVPlatform,
		category: Category.Mechatronics,
		startDate: new Date('2019-12-07'),
		endDate: new Date('2021-07-18'),

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.ReactJS } } },
				{ skill: { connect: { key: SkillKey.CRA } } },
				{ skill: { connect: { key: SkillKey.Print3D } } },
				{ skill: { connect: { key: SkillKey.TS } } },
				{ skill: { connect: { key: SkillKey.J5 } } },
				{ skill: { connect: { key: SkillKey.ExpressJS } } },
				{ skill: { connect: { key: SkillKey.Linux } } },
				{ skill: { connect: { key: SkillKey.AGV } } },
				{ skill: { connect: { key: SkillKey.PLCProgramming } } },
				{ skill: { connect: { key: SkillKey.TiaPortal } } },
				{ skill: { connect: { key: SkillKey.LabView } } },
				{ skill: { connect: { key: SkillKey.Fusion360 } } },
				{ skill: { connect: { key: SkillKey.Eagle } } },
				{ skill: { connect: { key: SkillKey.SCL } } },
				{ skill: { connect: { key: SkillKey.STL } } },
				{ skill: { connect: { key: SkillKey.LAD } } },
			],
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					name: 'Pojazd AGV "Amaranthus" - Platforma',
				},
				{
					locale: Locale.en,
					name: 'AGV vehicle "Amaranthus" - Platform',
				},
			],
		},
	},
];
