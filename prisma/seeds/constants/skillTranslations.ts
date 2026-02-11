import type { Prisma } from "@/app/generated/prisma/client";

import { SkillKey, Locale } from "@/app/generated/prisma/client";

export const skillTranslations: Prisma.SkillTranslationCreateInput[] = [
	{ skill: { connect: { key: SkillKey.AGV } }, locale: Locale.pl, name: 'Wózek samojezdny AGV', shortName: 'AGV' },
	{ skill: { connect: { key: SkillKey.AGV } }, locale: Locale.en, name: 'Automated guided vehicle', shortName: 'AGV' },

	{ skill: { connect: { key: SkillKey.AI } }, locale: Locale.pl, name: 'Sztuczna inteligencja', shortName: 'AI' },
	{ skill: { connect: { key: SkillKey.AI } }, locale: Locale.en, name: 'Artificial intelligence', shortName: 'AI' },

	{ skill: { connect: { key: SkillKey.AWS } }, locale: Locale.pl, name: 'Amazon Web Services', shortName: 'AWS' },
	{ skill: { connect: { key: SkillKey.AWS } }, locale: Locale.en, name: 'Amazon Web Services', shortName: 'AWS' },

	{ skill: { connect: { key: SkillKey.Angular } }, locale: Locale.pl, name: 'Angular' },
	{ skill: { connect: { key: SkillKey.Angular } }, locale: Locale.en, name: 'Angular' },

	{ skill: { connect: { key: SkillKey.AntDBlazor } }, locale: Locale.pl, name: 'Ant Design (Blazor)', shortName: 'AntD Blazor' },
	{ skill: { connect: { key: SkillKey.AntDBlazor } }, locale: Locale.en, name: 'Ant Design (Blazor)', shortName: 'AntD Blazor' },

	{ skill: { connect: { key: SkillKey.AntDReact } }, locale: Locale.pl, name: 'Ant Design (React)', shortName: 'AntD React' },
	{ skill: { connect: { key: SkillKey.AntDReact } }, locale: Locale.en, name: 'Ant Design (React)', shortName: 'AntD React' },

	{ skill: { connect: { key: SkillKey.Blazor } }, locale: Locale.pl, name: 'Blazor' },
	{ skill: { connect: { key: SkillKey.Blazor } }, locale: Locale.en, name: 'Blazor' },

	{ skill: { connect: { key: SkillKey.Bootstrap } }, locale: Locale.pl, name: 'Bootstrap' },
	{ skill: { connect: { key: SkillKey.Bootstrap } }, locale: Locale.en, name: 'Bootstrap' },

	{ skill: { connect: { key: SkillKey.CADCAM } }, locale: Locale.pl, name: 'CADCAM' },
	{ skill: { connect: { key: SkillKey.CADCAM } }, locale: Locale.en, name: 'CADCAM' },

	{ skill: { connect: { key: SkillKey.CPlusPlus } }, locale: Locale.pl, name: 'C++' },
	{ skill: { connect: { key: SkillKey.CPlusPlus } }, locale: Locale.en, name: 'C++' },

	{ skill: { connect: { key: SkillKey.CRA } }, locale: Locale.pl, name: 'Create React App', shortName: 'CRA' },
	{ skill: { connect: { key: SkillKey.CRA } }, locale: Locale.en, name: 'Create React App', shortName: 'CRA' },

	{ skill: { connect: { key: SkillKey.CSharp } }, locale: Locale.pl, name: 'C#' },
	{ skill: { connect: { key: SkillKey.CSharp } }, locale: Locale.en, name: 'C#' },

	{ skill: { connect: { key: SkillKey.CommunicationTCPIP } }, locale: Locale.pl, name: 'Model TCP/IP', shortName: 'TCP/IP' },
	{ skill: { connect: { key: SkillKey.CommunicationTCPIP } }, locale: Locale.en, name: 'Internet protocol suite', shortName: 'TCP/IP' },

	{ skill: { connect: { key: SkillKey.DevExtremeAngular } }, locale: Locale.pl, name: 'DevExtreme Angular', shortName: 'DevEx Angular' },
	{ skill: { connect: { key: SkillKey.DevExtremeAngular } }, locale: Locale.en, name: 'DevExtreme Angular', shortName: 'DevEx Angular' },

	{ skill: { connect: { key: SkillKey.DevExtremeReact } }, locale: Locale.pl, name: 'DevExtreme React', shortName: 'DevEx React' },
	{ skill: { connect: { key: SkillKey.DevExtremeReact } }, locale: Locale.en, name: 'DevExtreme React', shortName: 'DevEx React' },

	{ skill: { connect: { key: SkillKey.Docker } }, locale: Locale.pl, name: 'Docker' },
	{ skill: { connect: { key: SkillKey.Docker } }, locale: Locale.en, name: 'Docker' },

	{ skill: { connect: { key: SkillKey.DotNet } }, locale: Locale.pl, name: '.NET' },
	{ skill: { connect: { key: SkillKey.DotNet } }, locale: Locale.en, name: '.NET' },

	{ skill: { connect: { key: SkillKey.Eagle } }, locale: Locale.pl, name: 'Autodesk Eagle', shortName: 'Eagle' },
	{ skill: { connect: { key: SkillKey.Eagle } }, locale: Locale.en, name: 'Autodesk Eagle', shortName: 'Eagle' },

	{ skill: { connect: { key: SkillKey.ExpressJS } }, locale: Locale.pl, name: 'Express.js' },
	{ skill: { connect: { key: SkillKey.ExpressJS } }, locale: Locale.en, name: 'Express.js' },

	{ skill: { connect: { key: SkillKey.FactoryIO } }, locale: Locale.pl, name: 'Factory I/O', shortName: 'FactoryIO' },
	{ skill: { connect: { key: SkillKey.FactoryIO } }, locale: Locale.en, name: 'Factory I/O', shortName: 'FactoryIO' },

	{ skill: { connect: { key: SkillKey.Fanuc } }, locale: Locale.pl, name: 'Fanuc' },
	{ skill: { connect: { key: SkillKey.Fanuc } }, locale: Locale.en, name: 'Fanuc' },

	{ skill: { connect: { key: SkillKey.Fusion360 } }, locale: Locale.pl, name: 'Autodesk Fusion 360', shortName: 'Fusion' },
	{ skill: { connect: { key: SkillKey.Fusion360 } }, locale: Locale.en, name: 'Autodesk Fusion 360', shortName: 'Fusion' },

	{ skill: { connect: { key: SkillKey.GCP } }, locale: Locale.pl, name: 'Google Cloud Platform', shortName: 'GCP' },
	{ skill: { connect: { key: SkillKey.GCP } }, locale: Locale.en, name: 'Google Cloud Platform', shortName: 'GCP' },

	{ skill: { connect: { key: SkillKey.GRPC } }, locale: Locale.pl, name: 'gRPC Remote Procedure Calls', shortName: 'gRPC' },
	{ skill: { connect: { key: SkillKey.GRPC } }, locale: Locale.en, name: 'gRPC Remote Procedure Calls', shortName: 'gRPC' },

	{ skill: { connect: { key: SkillKey.GraphQL } }, locale: Locale.pl, name: 'GraphQL' },
	{ skill: { connect: { key: SkillKey.GraphQL } }, locale: Locale.en, name: 'GraphQL' },

	{ skill: { connect: { key: SkillKey.IQRF } }, locale: Locale.pl, name: 'IQRF' },
	{ skill: { connect: { key: SkillKey.IQRF } }, locale: Locale.en, name: 'IQRF' },

	{ skill: { connect: { key: SkillKey.J5 } }, locale: Locale.pl, name: 'Johnny Five', shortName: 'J5' },
	{ skill: { connect: { key: SkillKey.J5 } }, locale: Locale.en, name: 'Johnny Five', shortName: 'J5' },

	{ skill: { connect: { key: SkillKey.Java } }, locale: Locale.pl, name: 'Java' },
	{ skill: { connect: { key: SkillKey.Java } }, locale: Locale.en, name: 'Java' },

	{ skill: { connect: { key: SkillKey.Kuka } }, locale: Locale.pl, name: 'Kuka' },
	{ skill: { connect: { key: SkillKey.Kuka } }, locale: Locale.en, name: 'Kuka' },

	{ skill: { connect: { key: SkillKey.LAD } }, locale: Locale.pl, name: 'Język drabinkowy LAD', shortName: 'LAD' },
	{ skill: { connect: { key: SkillKey.LAD } }, locale: Locale.en, name: 'Ladder Logic', shortName: 'LAD' },

	{ skill: { connect: { key: SkillKey.LabView } }, locale: Locale.pl, name: 'LabView' },
	{ skill: { connect: { key: SkillKey.LabView } }, locale: Locale.en, name: 'LabView' },

	{ skill: { connect: { key: SkillKey.Leaflet } }, locale: Locale.pl, name: 'Leaflet' },
	{ skill: { connect: { key: SkillKey.Leaflet } }, locale: Locale.en, name: 'Leaflet' },

	{ skill: { connect: { key: SkillKey.Linux } }, locale: Locale.pl, name: 'Linux' },
	{ skill: { connect: { key: SkillKey.Linux } }, locale: Locale.en, name: 'Linux' },

	{ skill: { connect: { key: SkillKey.MMF2Dev } }, locale: Locale.pl, name: 'Multimedia Fusion Developer 2', shortName: 'MMF2 Dev' },
	{ skill: { connect: { key: SkillKey.MMF2Dev } }, locale: Locale.en, name: 'Multimedia Fusion Developer 2', shortName: 'MMF2 Dev' },

	{ skill: { connect: { key: SkillKey.MaterialUI } }, locale: Locale.pl, name: 'Material UI' },
	{ skill: { connect: { key: SkillKey.MaterialUI } }, locale: Locale.en, name: 'Material UI' },

	{ skill: { connect: { key: SkillKey.Microservices } }, locale: Locale.pl, name: 'Mikroserwisy' },
	{ skill: { connect: { key: SkillKey.Microservices } }, locale: Locale.en, name: 'Microservices' },

	{ skill: { connect: { key: SkillKey.ModbusProtocol } }, locale: Locale.pl, name: 'Protokół MODBUS', shortName: 'MODBUS' },
	{ skill: { connect: { key: SkillKey.ModbusProtocol } }, locale: Locale.en, name: 'MODBUS protocol', shortName: 'MODBUS' },

	{ skill: { connect: { key: SkillKey.MongoDB } }, locale: Locale.pl, name: 'MongoDB' },
	{ skill: { connect: { key: SkillKey.MongoDB } }, locale: Locale.en, name: 'MongoDB' },

	{ skill: { connect: { key: SkillKey.NestJS } }, locale: Locale.pl, name: 'Nest.js' },
	{ skill: { connect: { key: SkillKey.NestJS } }, locale: Locale.en, name: 'Nest.js' },

	{ skill: { connect: { key: SkillKey.NextJS } }, locale: Locale.pl, name: 'Next.js' },
	{ skill: { connect: { key: SkillKey.NextJS } }, locale: Locale.en, name: 'Next.js' },

	{ skill: { connect: { key: SkillKey.NodeJS } }, locale: Locale.pl, name: 'Node.js' },
	{ skill: { connect: { key: SkillKey.NodeJS } }, locale: Locale.en, name: 'Node.js' },

	{ skill: { connect: { key: SkillKey.PLCProgramming } }, locale: Locale.pl, name: 'Programowanie PLC', shortName: 'PLC' },
	{ skill: { connect: { key: SkillKey.PLCProgramming } }, locale: Locale.en, name: 'PLC programming', shortName: 'PLC' },

	{ skill: { connect: { key: SkillKey.PdfMake } }, locale: Locale.pl, name: 'PdfMake' },
	{ skill: { connect: { key: SkillKey.PdfMake } }, locale: Locale.en, name: 'PdfMake' },

	{ skill: { connect: { key: SkillKey.PostgreSQL } }, locale: Locale.pl, name: 'PostgreSQL' },
	{ skill: { connect: { key: SkillKey.PostgreSQL } }, locale: Locale.en, name: 'PostgreSQL' },

	{ skill: { connect: { key: SkillKey.Print3D } }, locale: Locale.pl, name: 'Druk 3D' },
	{ skill: { connect: { key: SkillKey.Print3D } }, locale: Locale.en, name: '3D printing' },

	{ skill: { connect: { key: SkillKey.Python } }, locale: Locale.pl, name: 'Python' },
	{ skill: { connect: { key: SkillKey.Python } }, locale: Locale.en, name: 'Python' },

	{ skill: { connect: { key: SkillKey.ReactJS } }, locale: Locale.pl, name: 'React.js' },
	{ skill: { connect: { key: SkillKey.ReactJS } }, locale: Locale.en, name: 'React.js' },

	{ skill: { connect: { key: SkillKey.Redux } }, locale: Locale.pl, name: 'Redux' },
	{ skill: { connect: { key: SkillKey.Redux } }, locale: Locale.en, name: 'Redux' },

	{ skill: { connect: { key: SkillKey.SCL } }, locale: Locale.pl, name: 'SCL' },
	{ skill: { connect: { key: SkillKey.SCL } }, locale: Locale.en, name: 'SCL' },

	{ skill: { connect: { key: SkillKey.SQLite } }, locale: Locale.pl, name: 'SQLite' },
	{ skill: { connect: { key: SkillKey.SQLite } }, locale: Locale.en, name: 'SQLite' },

	{ skill: { connect: { key: SkillKey.STL } }, locale: Locale.pl, name: 'Lista stanów (STL)', shortName: 'STL' },
	{ skill: { connect: { key: SkillKey.STL } }, locale: Locale.en, name: 'Statement List (STL)', shortName: 'STL' },

	{ skill: { connect: { key: SkillKey.Sanity } }, locale: Locale.pl, name: 'Sanity CMS', shortName: 'Sanity' },
	{ skill: { connect: { key: SkillKey.Sanity } }, locale: Locale.en, name: 'Sanity CMS', shortName: 'Sanity' },

	{ skill: { connect: { key: SkillKey.TS } }, locale: Locale.pl, name: 'TypeScript', shortName: 'TS' },
	{ skill: { connect: { key: SkillKey.TS } }, locale: Locale.en, name: 'TypeScript', shortName: 'TS' },

	{ skill: { connect: { key: SkillKey.ThreeJS } }, locale: Locale.pl, name: 'Three.js' },
	{ skill: { connect: { key: SkillKey.ThreeJS } }, locale: Locale.en, name: 'Three.js' },

	{ skill: { connect: { key: SkillKey.TiaPortal } }, locale: Locale.pl, name: 'Siemens TIA Portal', shortName: 'TIA Portal' },
	{ skill: { connect: { key: SkillKey.TiaPortal } }, locale: Locale.en, name: 'Siemens TIA Portal', shortName: 'TIA Portal' },

	{ skill: { connect: { key: SkillKey.VPS } }, locale: Locale.pl, name: 'Prywatny wirtualny serwer (VPS)', shortName: 'VPS' },
	{ skill: { connect: { key: SkillKey.VPS } }, locale: Locale.en, name: 'Virtual private server (VPS)', shortName: 'VPS' },

	{ skill: { connect: { key: SkillKey.Vite } }, locale: Locale.pl, name: 'Vite' },
	{ skill: { connect: { key: SkillKey.Vite } }, locale: Locale.en, name: 'Vite' },

	{ skill: { connect: { key: SkillKey.YukaJS } }, locale: Locale.pl, name: 'Yuka.js' },
	{ skill: { connect: { key: SkillKey.YukaJS } }, locale: Locale.en, name: 'Yuka.js' },

	{ skill: { connect: { key: SkillKey.Zustand } }, locale: Locale.pl, name: 'Zustand' },
	{ skill: { connect: { key: SkillKey.Zustand } }, locale: Locale.en, name: 'Zustand' },
];