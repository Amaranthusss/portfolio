import type { SkillDTO } from "./skillDto";

export interface ProjectDTO {
	id: number;
	slug: string;
	category: string;
	startDate?: Date;
	endDate?: Date;
	isCurrent: boolean;
	name: string;
	subname?: string;
	description?: string;
	skills: SkillDTO[];
};