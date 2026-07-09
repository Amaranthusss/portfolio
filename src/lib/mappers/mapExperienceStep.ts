import { mapSkill } from './mapSkill';

import type { ExperienceStepWithRelations } from '@/models/experienceStepWithRelations';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';

export function mapExperienceStep(
  step: ExperienceStepWithRelations
): ExperienceStepDTO {
  const translation = step.translations[0] ?? {};

  return {
    id: step.id,
    slug: step.slug,
    startDate: new Date(step.startDate),
    endDate: step.endDate != null ? new Date(step.endDate) : undefined,
    isCurrent: step.isCurrent,
    employmentType: step.employmentType,
    locationType: step.locationType,
    position: translation.position,
    company: translation.company,
    location: translation.location,
    description: translation.description ?? undefined,
    duties: translation.duties ?? [],
    skills: step.skills.map((es) => mapSkill(es.skill))
  };
}
