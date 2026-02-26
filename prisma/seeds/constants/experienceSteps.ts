import type { Prisma } from "../../../src/generated/prisma/client";

import { EmploymentType, Locale, LocationType, SkillKey } from "../../../src/generated/prisma/client";
import { ExperienceStepSlug } from "../slugs/experienceStepSlug";

export const experienceSteps: Prisma.ExperienceStepCreateInput[] = [
	{
		slug: ExperienceStepSlug.AiutFrontendProgrammer,
		startDate: new Date('2021-07-01'),
		isCurrent: true,
		locationType: LocationType.Hybrid,
		employmentType: EmploymentType.FullTime,

		skills: {
			create: [
				SkillKey.ReactJS,
				SkillKey.Angular,
				SkillKey.Blazor,
				SkillKey.DotNet,
				SkillKey.CRA,
				SkillKey.Vite,
				SkillKey.CSharp,
				SkillKey.TS,
				SkillKey.AntDReact,
				SkillKey.AntDBlazor,
				SkillKey.MaterialUI,
				SkillKey.DevExtremeReact,
				SkillKey.DevExtremeAngular,
				SkillKey.Leaflet,
				SkillKey.PdfMake,
				SkillKey.ThreeJS,
				SkillKey.Redux,
				SkillKey.Zustand,
				SkillKey.Docker,
				SkillKey.PostgreSQL,
				SkillKey.Documentation,
				SkillKey.SalesSupport
			].map((key) => ({
				skill: { connect: { key } },
			})),
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					position: 'Programista Front-end',
					company: 'AIUT Sp. z o.o.',
					location: 'Gliwice, Woj. Śląskie, Polska',
					description:
						'Tworzenie aplikacji webowych z użyciem React, Angular oraz Blazor. Projektowanie API i integracja systemów przemysłowych.',
					duties: [
						'Tworzenie aplikacji webowych dla systemów przemysłowych związanych z zarządzaniem i monitoringiem urządzeń IoT.',
						'Budowanie współdzielonych bibliotek komponentów i modeli.',
						'Projektowanie struktur danych API.',
						'Konfiguracja narzędzi projektowych (TypeScript, Vite, CRA, Angular CLI, ESLint, Prettier).',
						'Code review i mentoring zespołu.',
						'Pisanie testów jednostkowych i e2e (Jest, Cypress).',
						'Udział w spotkaniach z klientami.',
						'Tworzenie dokumentacji technicznej.',
					],
				},
				{
					locale: Locale.en,
					position: 'Front-end Programmer',
					company: 'AIUT Sp. z o.o.',
					location: 'Gliwice, Silesia, Poland',
					description:
						'Developing web applications using React, Angular, and Blazor frameworks. Designing APIs and industrial system integrations.',
					duties: [
						'Developing web applications for industrial IoT management and monitoring systems.',
						'Creating shared component libraries and reusable models.',
						'Designing API data structures.',
						'Setting up project tooling (TypeScript, Vite, CRA, Angular CLI, ESLint, Prettier).',
						'Conducting code reviews and mentoring team members.',
						'Writing unit and end-to-end tests (Jest, Cypress).',
						'Participating in client meetings.',
						'Preparing technical documentation.',
					],
				},
			],
		},
	},
	{
		slug: ExperienceStepSlug.AiutPlcProgrammer,
		startDate: new Date('2018-07-01'),
		endDate: new Date('2021-07-01'),
		isCurrent: false,
		locationType: LocationType.OnSite,
		employmentType: EmploymentType.Freelance,

		skills: {
			create: [
				SkillKey.PLCProgramming,
				SkillKey.SCL,
				SkillKey.STL,
				SkillKey.LAD,
				SkillKey.Python,
				SkillKey.TiaPortal,
				SkillKey.FactoryIO,
				SkillKey.AGV,
				SkillKey.Fanuc,
				SkillKey.Documentation
			].map((key) => ({
				skill: { connect: { key } },
			})),
		},

		translations: {
			create: [
				{
					locale: Locale.pl,
					position: 'Programista PLC',
					company: 'AIUT Sp. z o.o.',
					location: 'Gliwice, Woj. Śląskie, Polska',
					description:
						'Programowanie sterowników PLC Siemens oraz systemów automatyki przemysłowej.',
					duties: [
						'Tworzenie oprogramowania PLC dla linii produkcyjnych.',
						'Symulacje projektów w środowisku Factory I/O.',
						'Programowanie AGV i robotów przemysłowych (Fanuc).',
						'Integracja systemów z pojazdami AGV.',
						'Prototypowanie rozwiązań elektronicznych IoT.',
						'Przygotowywanie dokumentacji i materiałów szkoleniowych.',
						'Szkolenie techników automatyki.',
					],
				},
				{
					locale: Locale.en,
					position: 'PLC Programmer',
					company: 'AIUT Sp. z o.o.',
					location: 'Gliwice, Silesia, Poland',
					description:
						'Developing Siemens PLC software and industrial automation systems.',
					duties: [
						'Developing PLC software for production lines.',
						'Simulating projects in Factory I/O.',
						'Programming AGVs and industrial robots (Fanuc).',
						'Integrating automation systems with AGV vehicles.',
						'Prototyping IoT electronic solutions.',
						'Preparing documentation and training materials.',
						'Training automation technicians.',
					],
				},
			],
		},
	},
	{
		slug: ExperienceStepSlug.TagraElectrician,
		startDate: new Date('2014-01-01'),
		endDate: new Date('2014-02-01'),
		isCurrent: false,
		locationType: LocationType.OnSite,
		employmentType: EmploymentType.Apprenticeship,

		skills: { create: [SkillKey.Documentation, SkillKey.SalesSupport].map((key) => ({ skill: { connect: { key } } })) },

		translations: {
			create: [
				{
					locale: Locale.pl,
					position: 'Elektryk (praktyki)',
					company: 'Usługi Elektryczno-Budowlane TAGRA',
					location: 'Bytom, Woj. Śląskie, Polska',
					description:
						'Praca jako pomocnik elektryka przy realizacji instalacji elektrycznych.',
					duties: [
						'Wykonywanie instalacji elektrycznych.',
						'Czytanie dokumentacji technicznej i schematów.',
						'Montaż i demontaż oświetlenia.',
						'Prace przy otwarciach sklepów.',
					],
				},
				{
					locale: Locale.en,
					position: 'Electrician (Apprenticeship)',
					company: 'Electrical and Construction Services TAGRA',
					location: 'Bytom, Silesia, Poland',
					description:
						'Working as an electrician assistant on-site.',
					duties: [
						'Executing electrical installations.',
						'Reading technical documentation and electrical diagrams.',
						'Installation and disassembly of lighting systems.',
						'On-site duties during store openings.',
					],
				},
			],
		},
	},
];
