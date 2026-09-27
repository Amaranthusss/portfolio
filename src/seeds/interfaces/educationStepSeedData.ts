import type { EducationStepSlug } from '../constants/educationStepSlug';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../../payload-types';

export interface EducationStepTranslation {
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  projectTitle?: string;
  description?: string;
}

export interface EducationStepSeedData {
  slug: EducationStepSlug;
  image: string;
  startDate: string;
  endDate?: string;
  grade?: number;
  isCurrent?: boolean;
  withHonors?: boolean;
  skills: Skill['key'][];
  translations: { [locale in Locale]: EducationStepTranslation };
}
