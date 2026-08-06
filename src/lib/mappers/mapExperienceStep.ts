import { mapSkill } from './mapSkill';

import type { ExperienceStep, Skill } from '../../../payload-types';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';

export function mapExperienceStep(step: ExperienceStep): ExperienceStepDTO {
  return {
    id: step.id,
    slug: step.slug,
    startDate: new Date(step.startDate),
    endDate: step.endDate != null ? new Date(step.endDate) : undefined,
    isCurrent: step.isCurrent ?? false,
    employmentType: step.employmentType,
    locationType: step.locationType,
    position: step.position ?? undefined,
    company: step.company ?? undefined,
    location: step.location ?? undefined,
    description: step.description ?? undefined,
    duties: step.duties?.filter(isPopulatedDuty).map((d) => d.value) ?? [],
    skills: step.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}

function isPopulatedDuty(
  duty: NonNullable<ExperienceStep['duties']>[number]
): duty is { value: string } {
  return duty != null;
}

function isPopulatedSkill(
  skill: number | Skill | null | undefined
): skill is Skill {
  return typeof skill !== 'number' && skill !== null && skill !== undefined;
}
