import type { Prisma } from "../../../src/generated/prisma/client";

import { CertificationSlug } from "../slugs/certificationSlug";
import { Locale, SkillKey } from "../../../src/generated/prisma/client";

export const certifications: Prisma.CertificationCreateInput[] = [
	{
		slug: CertificationSlug.NestJsMicroservicesScaleableBackend,
		issueDate: new Date('2025-05-31'),
		url: 'https://www.udemy.com/certificate/UC-9ef640b6-39b5-40b6-ac04-171756e6eebb/',
		credentialID: 'UC-9ef640b6-39b5-40b6-ac04-171756e6eebb',
		imageFile: { connect: { storageKey: "images/udemy.jpg" } },

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.NestJS } } },
				{ skill: { connect: { key: SkillKey.Microservices } } },
				{ skill: { connect: { key: SkillKey.Docker } } },
				{ skill: { connect: { key: SkillKey.AWS } } },
				{ skill: { connect: { key: SkillKey.GCP } } },
				{ skill: { connect: { key: SkillKey.GRPC } } },
				{ skill: { connect: { key: SkillKey.GraphQL } } },
				{ skill: { connect: { key: SkillKey.MongoDB } } },
				{ skill: { connect: { key: SkillKey.TS } } },
			]
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Nest.js Mikroserwisy: Budowa i wdrażanie skalowalnego backendu',
					provider: 'Udemy - Instruktor: Michael Guay',
					description: 'Kurs budowy skalowalnych, produkcyjnych aplikacji backend z użyciem mikroserwisów Nest.js.',
				},
				{
					locale: Locale.en,
					title: 'Nest.js Microservices: Build & Deploy a Scaleable Backend',
					provider: 'Udemy - Instructors: Michael Guay',
					description: 'A course on building scalable, production-ready backend applications using Nest.js microservices.',
				},
			]
		}
	},
	{
		slug: CertificationSlug.NestJsUltimateMasterclass,
		credentialID: 'UC-c7beeb38-645f-447a-910a-b8388c1bf355',
		issueDate: new Date('2025-04-28'),
		url: 'https://www.udemy.com/certificate/UC-c7beeb38-645f-447a-910a-b8388c1bf355/',
		imageFile: { connect: { storageKey: "images/udemy.jpg" } },

		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.NestJS } } },
				{ skill: { connect: { key: SkillKey.PostgreSQL } } },
				{ skill: { connect: { key: SkillKey.Docker } } },
				{ skill: { connect: { key: SkillKey.TS } } },
			]
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Master Nest.js – Kompleksowy Kurs Mistrzowski 2025',
					provider: 'Udemy - Instruktor: Piotr Jura',
					description: 'Kurs od podstaw, aż po deploy z wykorzystaniem Nest.js API z TypeScript, TypeORM, PostgreSQL oraz Docker.',
				},
				{
					locale: Locale.en,
					title: 'Master Nest.js Ultimate Masterclass 2025',
					provider: 'Udemy - Instructors: Piotr Jura',
					description: 'A course from the basics all the way to deployment using a Nest.js API with TypeScript, TypeORM, PostgreSQL, and Docker.',
				},
			]
		}
	},

	{
		slug: CertificationSlug.BlazorDeepDiveDotNet8,
		credentialID: 'UC-22caa334-e40c-4e8e-96b8-d4bf617b7e98',
		issueDate: new Date('2025-03-27'),
		url: 'https://www.udemy.com/certificate/UC-22caa334-e40c-4e8e-96b8-d4bf617b7e98/',
		imageFile: { connect: { storageKey: "images/udemy.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.Blazor } } },
				{ skill: { connect: { key: SkillKey.CSharp } } },
				{ skill: { connect: { key: SkillKey.DotNet } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Blazor Deep Dive – Od początkującego do zaawansowanego w .NET 9',
					provider: 'Udemy - Instruktor: Frank Liu',
					description: 'Kompletny kurs ASP.NET Core Blazor z projektami.',
				},
				{
					locale: Locale.en,
					title: 'Blazor Deep Dive - From Beginner to Advanced in .NET 9',
					provider: 'Udemy - Instructors: Frank Liu',
					description: 'Ultimate ASP.NET Core Blazor course with projects.',
				},
			]
		}
	},

	{
		slug: CertificationSlug.DeployNodeJsOnVps,
		credentialID: 'UC-9ca9ca52-cf3b-4dfa-b192-7767788e60b2',
		issueDate: new Date('2025-02-06'),
		url: 'https://www.udemy.com/certificate/UC-9ca9ca52-cf3b-4dfa-b192-7767788e60b2/',
		imageFile: { connect: { storageKey: "images/udemy.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.TS } } },
				{ skill: { connect: { key: SkillKey.NodeJS } } },
				{ skill: { connect: { key: SkillKey.Docker } } },
				{ skill: { connect: { key: SkillKey.VPS } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Wdrażanie aplikacji Node.js na serwerze VPS',
					provider: 'Udemy - Instruktor: Adrian Bienias',
					description: 'Przejmij kontrolę nad uruchamianiem aplikacji Node.js, podłączając domeny do projektów i zarządzając serwerem VPS.',
				},
				{
					locale: Locale.en,
					title: 'Deploying a Node.js Application on a VPS Server',
					provider: 'Udemy - Instructors: Adrian Bienias',
					description: 'Take control of running Node.js applications by connecting domains to projects and managing a VPS server.',
				},
			]
		}
	},

	{
		slug: CertificationSlug.PostgreSqlDatabaseDesign,
		credentialID: 'UC-68bca8f0-67ad-437d-803b-2e34de5e33a4',
		issueDate: new Date('2025-01-06'),
		url: 'https://ude.my/UC-68bca8f0-67ad-437d-803b-2e34de5e33a4',
		imageFile: { connect: { storageKey: "images/udemy.jpg" } },
		skills: {
			create: [{ skill: { connect: { key: SkillKey.PostgreSQL } } }]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'PostgreSQL – Projektowanie baz danych',
					provider: 'Udemy - Instruktor: Rafał Mobilo',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'PostgreSQL - Database Design',
					provider: 'Udemy - Instructors: Rafał Mobilo',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.NodeJsCompleteCourse,
		credentialID: 'CERT61FAEFFB86876',
		issueDate: new Date('2022-02-02'),
		imageFile: { connect: { storageKey: "images/ts.jpg" } },
		skills: {
			create: [{ skill: { connect: { key: SkillKey.NodeJS } } }]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Node.js – Kompletny kurs',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Node.js – Complete Course',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.ReactJsCompleteCourse,
		credentialID: 'CERT6150D21240D7D',
		issueDate: new Date('2021-09-26'),
		imageFile: { connect: { storageKey: "images/ts.jpg" } },
		skills: {
			create: [{ skill: { connect: { key: SkillKey.ReactJS } } }]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'React.js – Kompletny kurs',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'React.js – Complete Course',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.SiemensS71500Advanced,
		credentialID: '47155',
		issueDate: new Date('2020-05-07'),
		imageFile: { connect: { storageKey: "images/emtSystems.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.PLCProgramming } } },
				{ skill: { connect: { key: SkillKey.TiaPortal } } },
				{ skill: { connect: { key: SkillKey.SCL } } },
				{ skill: { connect: { key: SkillKey.STL } } },
				{ skill: { connect: { key: SkillKey.LAD } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Kurs zaawansowany programowania Siemens Simatic S7-1500',
					provider: 'EMT-Systems Centrum Szkoleń Inżynierskich',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Siemens Simatic S7-1500 Programming - Advanced Course',
					provider: 'EMT-Systems Engineering Training Center',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.ModernMethodsOfPlcProgramming,
		issueDate: new Date('2019-04-09'),
		imageFile: { connect: { storageKey: "images/bAndR.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.PLCProgramming } } },
				{ skill: { connect: { key: SkillKey.SCL } } },
				{ skill: { connect: { key: SkillKey.LAD } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Nowoczesne metody programowania PLC',
					provider: 'B&R Industrial Automation',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Modern Methods of PLC Programming',
					provider: 'B&R Industrial Automation',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.IqrfWirelessProgramming,
		issueDate: new Date('2018-11-28'),
		imageFile: { connect: { storageKey: "images/iqrf.jpg" } },
		skills: {
			create: [{ skill: { connect: { key: SkillKey.IQRF } } }]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Programowanie i sieci przy użyciu technologii bezprzewodowej IQRF',
					provider: 'IQRF Tech',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Programming and Networking Using IQRF Wireless Technology',
					provider: 'IQRF Tech',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.PLCProgrammingAndDesigningProcessVisualizations,
		issueDate: new Date('2018-04-17'),
		imageFile: { connect: { storageKey: "images/aiut.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.PLCProgramming } } },
				{ skill: { connect: { key: SkillKey.TiaPortal } } },
				{ skill: { connect: { key: SkillKey.STL } } },
				{ skill: { connect: { key: SkillKey.LAD } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Podstawy programowania sterowników PLC rodziny SIMATIC S7 i projektowania wizualizacji procesów',
					provider: 'Aiut Sp. z o.o.',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Programming Simatic S7 PLC Controllers and Designing Process Visualizations',
					provider: 'Aiut Sp. z o.o.',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.ProgrammingMachineToolsInMTSSystemCNC,
		issueDate: new Date('2015-06-26'),
		imageFile: { connect: { storageKey: "images/mts.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.CADCAM } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Programowanie obrabiarek w systemie MTS - CNC CAD/CAM',
					provider: 'MTS Mathematisch Technische Software-Entwicklung GmbH',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'Programming Machine Tools in MTS System – CNC CAD/CAM',
					provider: 'MTS Mathematisch Technische Software-Entwicklung GmbH',
					description: '',
				},
			]
		}
	},

	{
		slug: CertificationSlug.HowToEarnFromWebsites,
		issueDate: new Date('2022-02-12'),
		imageFile: { connect: { storageKey: "images/ts.jpg" } },
		skills: {
			create: [
				{ skill: { connect: { key: SkillKey.Documentation } } },
				{ skill: { connect: { key: SkillKey.SalesSupport } } },
			]
		},
		translations: {
			create: [
				{
					locale: Locale.pl,
					title: 'Jak zarabiać na stronach internetowych i pracować jako Freelancer',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
				{
					locale: Locale.en,
					title: 'How to earn from websites and work as a Freelancer',
					provider: 'TS Code Sp. z o.o.',
					description: '',
				},
			]
		}
	},
];