import type { SkillDTO } from './skillDto';

export interface ExperienceStepDTO {
  id: number;
  slug: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  employmentType: string;
  locationType: string;
  position?: string;
  company?: string;
  location?: string;
  description?: string;
  duties?: string[];
  skills: SkillDTO[];
}
