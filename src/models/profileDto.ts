import type { SkillDTO } from "./skillDto";

export interface ProfileDTO {
	id: number;
	slug: string;
	name: string;
	skills: SkillDTO[];
};