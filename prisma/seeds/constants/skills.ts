import type { Prisma } from "@/generated/prisma/client";

import { Locale, SkillKey } from "@/generated/prisma/client";

export const skills: Prisma.SkillCreateInput[] = [
	{
		key: SkillKey.AGV,
		translations: {
			create: [
				{
					locale: Locale.pl,
					name: 'Wózek samojezdny AGV',
					shortName: 'AGV',
					description: 'Pojazd bezzałogowy sterowany za pomocą odpowiednich układów nawigacji bez potrzeby bezpośredniej obsługi operatora'
				},
				{
					locale: Locale.en,
					name: 'Automated guided vehicle',
					shortName: 'AGV',
					description: 'Portable robot that, unlike an autonomous mobile robot (AMR), follows along marked long lines or wires on the floor, or uses radio waves, vision cameras, magnets, or lasers for navigation'
				},
			],
		},
	},
	{
		key: SkillKey.AI,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Sztuczna inteligencja', shortName: 'AI' },
				{ locale: Locale.en, name: 'Artificial intelligence', shortName: 'AI' },
			],
		},
	},
	{
		key: SkillKey.AWS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Amazon Web Services', shortName: 'AWS' },
				{ locale: Locale.en, name: 'Amazon Web Services', shortName: 'AWS' },
			],
		},
	},
	{
		key: SkillKey.Angular,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Angular' },
				{ locale: Locale.en, name: 'Angular' },
			]
		},
	},
	{
		key: SkillKey.AntDBlazor,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Ant Design (Blazor)', shortName: 'AntD Blazor' },
				{ locale: Locale.en, name: 'Ant Design (Blazor)', shortName: 'AntD Blazor' },
			]
		},
	},
	{
		key: SkillKey.AntDReact,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Ant Design (React)', shortName: 'AntD React' },
				{ locale: Locale.en, name: 'Ant Design (React)', shortName: 'AntD React' },
			]
		},
	},
	{
		key: SkillKey.Blazor,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Blazor' },
				{ locale: Locale.en, name: 'Blazor' },
			]
		},
	},
	{
		key: SkillKey.Bootstrap,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Bootstrap' },
				{ locale: Locale.en, name: 'Bootstrap' },
			]
		},
	},
	{
		key: SkillKey.CADCAM,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'CADCAM' },
				{ locale: Locale.en, name: 'CADCAM' },
			]
		},
	},
	{
		key: SkillKey.CPlusPlus,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'C++' },
				{ locale: Locale.en, name: 'C++' },
			]
		},
	},
	{
		key: SkillKey.CRA,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Create React App', shortName: 'CRA' },
				{ locale: Locale.en, name: 'Create React App', shortName: 'CRA' },
			]
		},
	},
	{
		key: SkillKey.CSharp,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'C#' },
				{ locale: Locale.en, name: 'C#' },
			]
		},
	},
	{
		key: SkillKey.CommunicationTCPIP,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Model TCP/IP', shortName: 'TCP/IP' },
				{ locale: Locale.en, name: 'Internet protocol suite', shortName: 'TCP/IP' },
			]
		},
	},
	{
		key: SkillKey.DevExtremeAngular,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'DevExtreme Angular', shortName: 'DevEx Angular' },
				{ locale: Locale.en, name: 'DevExtreme Angular', shortName: 'DevEx Angular' },
			]
		},
	},
	{
		key: SkillKey.DevExtremeReact,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'DevExtreme React', shortName: 'DevEx React' },
				{ locale: Locale.en, name: 'DevExtreme React', shortName: 'DevEx React' },
			]
		},
	},
	{
		key: SkillKey.Docker,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Docker' },
				{ locale: Locale.en, name: 'Docker' },
			]
		},
	},
	{
		key: SkillKey.DotNet,
		translations: {
			create: [
				{ locale: Locale.pl, name: '.NET' },
				{ locale: Locale.en, name: '.NET' },
			]
		},
	},
	{
		key: SkillKey.Eagle,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Autodesk Eagle', shortName: 'Eagle' },
				{ locale: Locale.en, name: 'Autodesk Eagle', shortName: 'Eagle' },
			]
		},
	},
	{
		key: SkillKey.ExpressJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Express.js' },
				{ locale: Locale.en, name: 'Express.js' },
			]
		},
	},
	{
		key: SkillKey.FactoryIO,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Factory I/O', shortName: 'FactoryIO' },
				{ locale: Locale.en, name: 'Factory I/O', shortName: 'FactoryIO' },
			]
		},
	},
	{
		key: SkillKey.Fanuc,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Fanuc' },
				{ locale: Locale.en, name: 'Fanuc' },
			]
		},
	},
	{
		key: SkillKey.Fusion360,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Autodesk Fusion 360', shortName: 'Fusion' },
				{ locale: Locale.en, name: 'Autodesk Fusion 360', shortName: 'Fusion' },
			]
		},
	},
	{
		key: SkillKey.GCP,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Google Cloud Platform', shortName: 'GCP' },
				{ locale: Locale.en, name: 'Google Cloud Platform', shortName: 'GCP' },
			]
		},
	},
	{
		key: SkillKey.GRPC,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'gRPC Remote Procedure Calls', shortName: 'gRPC' },
				{ locale: Locale.en, name: 'gRPC Remote Procedure Calls', shortName: 'gRPC' },
			]
		},
	},
	{
		key: SkillKey.GraphQL,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'GraphQL' },
				{ locale: Locale.en, name: 'GraphQL' },
			]
		},
	},
	{
		key: SkillKey.IQRF,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'IQRF' },
				{ locale: Locale.en, name: 'IQRF' },
			]
		},
	},
	{
		key: SkillKey.J5,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Johnny Five', shortName: 'J5' },
				{ locale: Locale.en, name: 'Johnny Five', shortName: 'J5' },
			]
		},
	},
	{
		key: SkillKey.Java,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Java' },
				{ locale: Locale.en, name: 'Java' },
			]
		},
	},
	{
		key: SkillKey.Kuka,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Kuka' },
				{ locale: Locale.en, name: 'Kuka' },
			]
		},
	},
	{
		key: SkillKey.LAD,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Język drabinkowy LAD', shortName: 'LAD' },
				{ locale: Locale.en, name: 'Ladder Logic', shortName: 'LAD' },
			]
		},
	},
	{
		key: SkillKey.LabView,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'LabView' },
				{ locale: Locale.en, name: 'LabView' },
			]
		},
	},
	{
		key: SkillKey.Leaflet,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Leaflet' },
				{ locale: Locale.en, name: 'Leaflet' },
			]
		},
	},
	{
		key: SkillKey.Linux,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Linux' },
				{ locale: Locale.en, name: 'Linux' },
			]
		},
	},
	{
		key: SkillKey.MMF2Dev,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Multimedia Fusion Developer 2', shortName: 'MMF2 Dev' },
				{ locale: Locale.en, name: 'Multimedia Fusion Developer 2', shortName: 'MMF2 Dev' },
			]
		},
	},
	{
		key: SkillKey.MaterialUI,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Material UI' },
				{ locale: Locale.en, name: 'Material UI' },
			]
		},
	},
	{
		key: SkillKey.Microservices,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Mikroserwisy' },
				{ locale: Locale.en, name: 'Microservices' },
			]
		},
	},
	{
		key: SkillKey.ModbusProtocol,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Protokół MODBUS', shortName: 'MODBUS' },
				{ locale: Locale.en, name: 'MODBUS protocol', shortName: 'MODBUS' },
			]
		},
	},
	{
		key: SkillKey.MongoDB,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'MongoDB' },
				{ locale: Locale.en, name: 'MongoDB' },
			]
		},
	},
	{
		key: SkillKey.NestJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Nest.js' },
				{ locale: Locale.en, name: 'Nest.js' },
			]
		},
	},
	{
		key: SkillKey.NextJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Next.js' },
				{ locale: Locale.en, name: 'Next.js' },
			]
		},
	},
	{
		key: SkillKey.NodeJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Node.js' },
				{ locale: Locale.en, name: 'Node.js' },
			]
		},
	},
	{
		key: SkillKey.PLCProgramming,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Programowanie PLC', shortName: 'PLC' },
				{ locale: Locale.en, name: 'PLC programming', shortName: 'PLC' },
			]
		},
	},
	{
		key: SkillKey.PdfMake,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'PdfMake' },
				{ locale: Locale.en, name: 'PdfMake' },
			]
		},
	},
	{
		key: SkillKey.PostgreSQL,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'PostgreSQL' },
				{ locale: Locale.en, name: 'PostgreSQL' },
			]
		},
	},
	{
		key: SkillKey.Print3D,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Druk 3D' },
				{ locale: Locale.en, name: '3D printing' },
			]
		},
	},
	{
		key: SkillKey.Python,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Python' },
				{ locale: Locale.en, name: 'Python' },
			]
		},
	},
	{
		key: SkillKey.ReactJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'React.js' },
				{ locale: Locale.en, name: 'React.js' },
			]
		},
	},
	{
		key: SkillKey.Redux,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Redux' },
				{ locale: Locale.en, name: 'Redux' },
			]
		},
	},
	{
		key: SkillKey.SCL,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'SCL' },
				{ locale: Locale.en, name: 'SCL' },
			]
		},
	},
	{
		key: SkillKey.SQLite,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'SQLite' },
				{ locale: Locale.en, name: 'SQLite' },
			]
		},
	},
	{
		key: SkillKey.STL,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Lista stanów (STL)', shortName: 'STL' },
				{ locale: Locale.en, name: 'Statement List (STL)', shortName: 'STL' },
			]
		},
	},
	{
		key: SkillKey.Sanity,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Sanity CMS', shortName: 'Sanity' },
				{ locale: Locale.en, name: 'Sanity CMS', shortName: 'Sanity' },
			]
		},
	},
	{
		key: SkillKey.TS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'TypeScript', shortName: 'TS' },
				{ locale: Locale.en, name: 'TypeScript', shortName: 'TS' },
			]
		},
	},
	{
		key: SkillKey.ThreeJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Three.js' },
				{ locale: Locale.en, name: 'Three.js' },
			]
		},
	},
	{
		key: SkillKey.TiaPortal,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Siemens TIA Portal', shortName: 'TIA Portal' },
				{ locale: Locale.en, name: 'Siemens TIA Portal', shortName: 'TIA Portal' },
			]
		},
	},
	{
		key: SkillKey.VPS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Prywatny wirtualny serwer (VPS)', shortName: 'VPS' },
				{ locale: Locale.en, name: 'Virtual private server (VPS)', shortName: 'VPS' },
			]
		},
	},
	{
		key: SkillKey.Vite,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Vite' },
				{ locale: Locale.en, name: 'Vite' },
			]
		},
	},
	{
		key: SkillKey.YukaJS,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Yuka.js' },
				{ locale: Locale.en, name: 'Yuka.js' },
			]
		},
	},
	{
		key: SkillKey.Zustand,
		translations: {
			create: [
				{ locale: Locale.pl, name: 'Zustand' },
				{ locale: Locale.en, name: 'Zustand' },
			]
		},
	},
];
