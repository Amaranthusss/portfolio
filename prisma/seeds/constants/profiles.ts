import type { Prisma } from "../../../src/generated/prisma/client";

import { Locale, SkillKey } from "../../../src/generated/prisma/client";
import { ProfileSlug } from "../slugs/profileSlug";

const react = [
	SkillKey.ReactJS,
	SkillKey.Redux, SkillKey.Zustand,
	SkillKey.CRA, SkillKey.Vite, SkillKey.NextJS,
	SkillKey.AntDReact, SkillKey.MaterialUI, SkillKey.DevExtremeReact,
];

const angular = [
	SkillKey.Angular, SkillKey.Bootstrap, SkillKey.DevExtremeAngular,
];

const frontendJS = [
	...react,
	...angular,
	SkillKey.Leaflet, SkillKey.PdfMake, SkillKey.Sanity,
	SkillKey.ThreeJS, SkillKey.YukaJS,
	SkillKey.TS,
];

const backendJS = [
	SkillKey.NodeJS, SkillKey.ExpressJS, SkillKey.NestJS, SkillKey.NextJS,
	SkillKey.MongoDB, SkillKey.PostgreSQL, SkillKey.SQLite,
	SkillKey.GraphQL, SkillKey.GRPC, SkillKey.Microservices,
	SkillKey.TS,
];

const backendCSharp = [
	SkillKey.DotNet, SkillKey.CSharp,
	SkillKey.PostgreSQL, SkillKey.MongoDB, SkillKey.SQLite,
	SkillKey.Microservices,
];

const csharpFullstack = [
	...backendCSharp,
	SkillKey.Blazor,
	SkillKey.AntDBlazor, SkillKey.Bootstrap,
	SkillKey.TS,
	SkillKey.Leaflet,
];

const fullstackJS = [
	...frontendJS,
	...backendJS,
];

const deploy = [
	SkillKey.Docker, SkillKey.Linux,
	SkillKey.AWS, SkillKey.GCP, SkillKey.VPS,
];

const plcProgrammer = [
	SkillKey.TiaPortal, SkillKey.PLCProgramming, SkillKey.FactoryIO,
	SkillKey.CommunicationTCPIP, SkillKey.ModbusProtocol,
	SkillKey.SCL, SkillKey.STL, SkillKey.LAD,
];

const mechatronics = [
	...plcProgrammer,
	SkillKey.J5, SkillKey.IQRF,
	SkillKey.Eagle, SkillKey.Fusion360, SkillKey.CADCAM,
	SkillKey.AGV, SkillKey.Fanuc, SkillKey.Kuka,
	SkillKey.Print3D,
];

const profileSkills: Record<ProfileSlug, SkillKey[]> = {
	[ProfileSlug.FrontendJS]: frontendJS,
	[ProfileSlug.React]: react,
	[ProfileSlug.Angular]: angular,
	[ProfileSlug.BackendJS]: backendJS,
	[ProfileSlug.FullstackJS]: fullstackJS,
	[ProfileSlug.BackendCSharp]: backendCSharp,
	[ProfileSlug.CSharpFullstack]: csharpFullstack,
	[ProfileSlug.Deploy]: deploy,
	[ProfileSlug.PLCProgramming]: plcProgrammer,
	[ProfileSlug.Mechatronics]: mechatronics,
};

function getLabelBySlug(slug: ProfileSlug, locale: 'pl' | 'en'): string {
	const map: Record<ProfileSlug, { pl: string; en: string }> = {
		[ProfileSlug.FrontendJS]: {
			pl: 'Frontend JavaScript',
			en: 'Frontend JavaScript',
		},
		[ProfileSlug.React]: {
			pl: 'React Developer',
			en: 'React Developer',
		},
		[ProfileSlug.Angular]: {
			pl: 'Angular Developer',
			en: 'Angular Developer',
		},
		[ProfileSlug.BackendJS]: {
			pl: 'Backend JavaScript',
			en: 'Backend JavaScript',
		},
		[ProfileSlug.FullstackJS]: {
			pl: 'Fullstack JavaScript',
			en: 'Fullstack JavaScript',
		},
		[ProfileSlug.BackendCSharp]: {
			pl: 'Backend .NET / C#',
			en: 'Backend .NET / C#',
		},
		[ProfileSlug.CSharpFullstack]: {
			pl: 'Fullstack .NET',
			en: 'Fullstack .NET',
		},
		[ProfileSlug.Deploy]: {
			pl: 'DevOps / Deployment',
			en: 'DevOps / Deployment',
		},
		[ProfileSlug.PLCProgramming]: {
			pl: 'Programista PLC',
			en: 'PLC Programmer',
		},
		[ProfileSlug.Mechatronics]: {
			pl: 'Mechatronika / Automatyka',
			en: 'Mechatronics / Automation',
		},
	};

	return map[slug][locale];
}


export const profiles: Prisma.ProfileCreateInput[] = Object.entries(profileSkills)
	.map(([slug, skills]: [string, SkillKey[]]): Prisma.ProfileCreateInput => ({
		slug,

		skills: {
			create: [...new Set(skills)].map((key) => ({
				skill: { connect: { key } },
			})),
		},

		translations: {
			create: [
				{ locale: Locale.pl, name: getLabelBySlug(slug as ProfileSlug, 'pl') },
				{ locale: Locale.en, name: getLabelBySlug(slug as ProfileSlug, 'en') },
			],
		},
	}));
