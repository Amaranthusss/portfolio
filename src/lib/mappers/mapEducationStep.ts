import { mapSkill } from "./mapSkill";

import type { EducationStepWithRelations } from "@/models/educationStepWithRelations";
import type { EducationStepDTO } from "@/models/educationStepDto";

export function mapEducationStep(step: EducationStepWithRelations): EducationStepDTO {
	const translation = step.translations[0] ?? {};

	return {
		id: step.id,
		slug: step.slug,
		startDate: step.startDate,
		endDate: step.endDate ?? undefined,
		isCurrent: step.isCurrent ?? undefined,
		grade: step.grade ?? undefined,
		withHonors: step.withHonors,
		institution: translation.institution,
		degree: translation.degree ?? undefined,
		projectTitle: translation.projectTitle ?? undefined,
		fieldOfStudy: translation.fieldOfStudy ?? undefined,
		description: translation.description ?? undefined,
		skills: step.skills.map(es => mapSkill(es.skill)),
	};
};