import { SkillKey, type Prisma } from "@/app/generated/prisma/client";

import { ProjectSlug } from "../mocks/projectSlug";

export const projectSkills: Prisma.ProjectSkillCreateInput[] = [
	// * Production System Utilizing AGV
	{
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		skill: { connect: { key: SkillKey.TiaPortal } }
	},
	{
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		skill: { connect: { key: SkillKey.PLCProgramming } }
	},
	{
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		skill: { connect: { key: SkillKey.AGV } }
	},
	{
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		skill: { connect: { key: SkillKey.CommunicationTCPIP } }
	},
	{
		project: { connect: { slug: ProjectSlug.ProductionSystemUtilizingAGV } },
		skill: { connect: { key: SkillKey.ModbusProtocol } }
	},

	// * Amaranthus AGV Platform
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.ReactJS } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.CRA } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.Print3D } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.TS } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.J5 } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.ExpressJS } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.Linux } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.AGV } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.PLCProgramming } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.TiaPortal } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.LabView } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.Fusion360 } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.Eagle } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.SCL } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.STL } }
	},
	{
		project: { connect: { slug: ProjectSlug.AmaranthusAGVPlatform } },
		skill: { connect: { key: SkillKey.LAD } }
	},
];