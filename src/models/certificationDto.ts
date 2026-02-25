import type { ImageFileDTO } from "./imageFileDto";
import type { SkillDTO } from "./skillDto";

export interface CertificationDTO {
	id: number;
	slug: string;
	credentialID?: string;
	issueDate: Date;
	image?: ImageFileDTO;
	url?: string;
	title?: string;
	description?: string;
	provider?: string;
	skills: SkillDTO[];
};