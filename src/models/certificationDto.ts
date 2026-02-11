import type { SkillDTO } from "./skillDto";

export interface CertificationDTO {
	id: number;
	slug: string;
	credentialID?: string;
	issueDate: Date;
	logoUrl: string;
	url?: string;
	title?: string;
	description?: string;
	provider?: string;
	skills: SkillDTO[];
};