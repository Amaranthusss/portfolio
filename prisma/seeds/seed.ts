import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

import { experienceSteps } from "./constants/experienceSteps";
import { educationSteps } from "./constants/educationSteps";
import { certifications } from "./constants/certifications";
import { publications } from "./constants/publications";
import { imageFiles } from "./constants/imageFiles";
import { profiles } from "./constants/profiles";
import { projects } from "./constants/projects";
import { skills } from "./constants/skills";
import 'dotenv/config';

const adapter: PrismaPg = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});

const prisma: PrismaClient = new PrismaClient({ adapter });

export async function main() {
	for (const skill of skills) {
		await prisma.skill.upsert({
			where: { key: skill.key },
			update: {
				translations: {
					deleteMany: {},
					create: skill.translations?.create ?? [],
				},
			},
			create: skill,
		});
	}

	for (const profile of profiles) {
		await prisma.profile.upsert({
			where: { slug: profile.slug },
			update: {
				skills: {
					deleteMany: {},
					create: profile.skills?.create ?? [],
				},
				translations: {
					deleteMany: {},
					create: profile.translations?.create ?? [],
				},
			},
			create: profile,
		});
	};

	for (const project of projects) {
		await prisma.project.upsert({
			where: { slug: project.slug },
			update: {},
			create: project,
		});
	};

	for (const image of imageFiles) {
		await prisma.imageFile.upsert({
			where: { storageKey: image.storageKey },
			update: image,
			create: image,
		});
	}

	for (const certification of certifications) {
		await prisma.certification.upsert({
			where: { slug: certification.slug },
			update: {
				skills: {
					deleteMany: {},
					create: certification.skills?.create ?? [],
				},
				translations: {
					deleteMany: {},
					create: certification.translations?.create ?? [],
				},
			},
			create: certification,
		});
	};

	for (const publication of publications) {
		await prisma.publication.upsert({
			where: { slug: publication.slug },
			update: {
				skills: {
					deleteMany: {},
					create: publication.skills?.create ?? [],
				},
				authors: {
					deleteMany: {},
					create: publication.authors?.create ?? [],
				},
				translations: {
					deleteMany: {},
					create: publication.translations?.create ?? [],
				},
			},
			create: publication,
		});
	};

	for (const step of experienceSteps) {
		await prisma.experienceStep.upsert({
			where: { slug: step.slug },
			update: {
				skills: {
					deleteMany: {},
					create: step.skills?.create ?? [],
				},
				translations: {
					deleteMany: {},
					create: step.translations?.create ?? [],
				},
			},
			create: step,
		});
	}

	for (const step of educationSteps) {
		await prisma.educationStep.upsert({
			where: { slug: step.slug },
			update: {
				skills: { deleteMany: {}, create: step.skills?.create ?? [] },
				translations: { deleteMany: {}, create: step.translations?.create ?? [] },
				startDate: step.startDate,
				endDate: step.endDate,
				grade: step.grade,
				withHonors: step.withHonors ?? false,
			},
			create: step,
		});
	}

}


main()
	.catch((e: Error): void => {
		console.error(e);
		process.exit(1);
	})
	.finally((): Promise<void> => prisma.$disconnect());
