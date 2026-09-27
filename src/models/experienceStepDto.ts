import type { EmploymentType } from './employmentType';
import type { LocationType } from './locationType';
import type { SkillDTO } from './skillDto';
import type { MediaDTO } from './mediaDto';

export interface ExperienceStepDTO {
  id: number;
  slug: string;
  image: MediaDTO;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  employmentType: EmploymentType;
  locationType: LocationType;
  position?: string;
  company?: string;
  location?: string;
  description?: string;
  duties?: string[];
  skills: SkillDTO[];
}
