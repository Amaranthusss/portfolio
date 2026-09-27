import type { SkillDTO } from './skillDto';
import type { MediaDTO } from './mediaDto';

export interface EducationStepDTO {
  id: number;
  slug: string;
  startDate: Date;
  image: MediaDTO;
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
