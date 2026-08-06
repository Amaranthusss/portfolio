import type { SkillDTO } from './skillDto';

export interface EducationStepDTO {
  id: number;
  slug: string;
  startDate: Date;
  endDate?: Date;
  isCurrent?: boolean;
  grade?: number;
  withHonors?: boolean;
  institution?: string;
  degree?: string;
  projectTitle?: string;
  fieldOfStudy?: string;
  description?: string;
  skills: SkillDTO[];
}
