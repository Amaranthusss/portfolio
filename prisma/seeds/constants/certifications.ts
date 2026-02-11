import type { Prisma } from "@/app/generated/prisma/client";

export const projects: Prisma.CertificationCreateInput[] = [
	{
		issueDate: new Date('2025-05-31'),
		logoUrl: 'udemy',
		url: 'https://www.udemy.com/certificate/UC-9ef640b6-39b5-40b6-ac04-171756e6eebb/',
		credentialID: 'UC-9ef640b6-39b5-40b6-ac04-171756e6eebb'
	},
	{
		credentialID: 'UC-c7beeb38-645f-447a-910a-b8388c1bf355',
		issueDate: new Date('2025-04-28'),
		logoUrl: 'udemy',
		url: 'https://www.udemy.com/certificate/UC-c7beeb38-645f-447a-910a-b8388c1bf355/',
	},
];