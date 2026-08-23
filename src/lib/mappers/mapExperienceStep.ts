import { isPopulatedSkill } from './isPopulatedSkill';
import { isPopulatedDuty } from './isPopulatedDuty';
import { isPopulatedIcon } from './isPopulatedIcon';
import { mapSkill } from './mapSkill';

import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { ExperienceStep } from '../../../payload-types';

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
    icon: isPopulatedIcon(step.icon) ? step.icon : undefined,
    duties: step.duties?.filter(isPopulatedDuty).map((d) => d.value) ?? [],
    skills: step.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}
