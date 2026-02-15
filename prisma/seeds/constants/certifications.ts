import type { Prisma } from "@/generated/prisma/client";

import { CertificationSlug } from "../slugs/certificationSlug";
import { Locale, SkillKey } from "@/generated/prisma/client";

export const certifications: Prisma.CertificationCreateInput[] = [
	{
		slug: CertificationSlug.NestJsMicroservicesScaleableBackend,
		issueDate: new Date('2025-05-31'),
		logoUrl: 'udemy',
		url: 'https://www.udemy.com/certificate/UC-9ef640b6-39b5-40b6-ac04-171756e6eebb/',
		credentialID: 'UC-9ef640b6-39b5-40b6-ac04-171756e6eebb',

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
					title: 'NestJS Mikroserwisy: Budowa i wdrażanie skalowalnego backendu',
					provider: 'Udemy - Instruktor: Michael Guay',
					description: 'Kurs budowy skalowalnych, produkcyjnych aplikacji backend z użyciem mikroserwisów NestJS.',
				},
				{
					locale: Locale.en,
					title: 'NestJS Microservices: Build & Deploy a Scaleable Backend',
					provider: 'Udemy - Instructors: Michael Guay',
					description: 'A course on building scalable, production-ready backend applications using NestJS microservices.',
				},
			]
		}
	},
	{
		slug: CertificationSlug.NestJsUltimateMasterclass,
		credentialID: 'UC-c7beeb38-645f-447a-910a-b8388c1bf355',
		issueDate: new Date('2025-04-28'),
		logoUrl: 'udemy',
		url: 'https://www.udemy.com/certificate/UC-c7beeb38-645f-447a-910a-b8388c1bf355/',

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
					title: 'Master NestJS – Kompleksowy Kurs Mistrzowski 2025',
					provider: 'Udemy - Instruktor: Piotr Jura',
					description: 'Kurs od podstaw, aż po deploy z wykorzystaniem NestJS API z TypeScript, TypeORM, PostgreSQL oraz Docker.',
				},
				{
					locale: Locale.en,
					title: 'Master NestJS Ultimate Masterclass 2025',
					provider: 'Udemy - Instructors: Piotr Jura',
					description: 'A course from the basics all the way to deployment using a NestJS API with TypeScript, TypeORM, PostgreSQL, and Docker.',
				},
			]
		}
	},
];