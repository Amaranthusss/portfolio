import { isPopulatedSkill } from './isPopulatedSkill';
import { mapSkill } from './mapSkill';
import { mapMedia } from './mapMedia';

import type { EducationStepDTO } from '@/models/educationStepDto';
import type { EducationStep } from '../../../payload-types';
import type { SkillDTO } from '@/models/skillDto';
import type { MediaDTO } from '@/models/mediaDto';

export function mapEducationStep(step: EducationStep): EducationStepDTO {
  const skills: SkillDTO[] =
    step.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [];

  const image: MediaDTO = mapMedia(step.image);

  return {
    id: step.id,
    slug: step.slug,
    startDate: new Date(step.startDate),
    endDate: step.endDate ? new Date(step.endDate) : undefined,
    isCurrent: step.isCurrent ?? undefined,
    grade: step.grade ?? undefined,
    withHonors: step.withHonors ?? undefined,
    institution: step.institution ?? undefined,
    degree: step.degree ?? undefined,
    projectTitle: step.projectTitle ?? undefined,
    fieldOfStudy: step.fieldOfStudy ?? undefined,
    description: step.description ?? undefined,
    image,
    skills,
  };
}
