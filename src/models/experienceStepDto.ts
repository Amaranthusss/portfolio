import type { EmploymentType } from './employmentType';
import type { LocationType } from './locationType';
import type { IconName } from '@/components/icon/icon.config';
import type { SkillDTO } from './skillDto';

export interface ExperienceStepDTO {
  id: number;
  slug: string;
  icon?: IconName;
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
