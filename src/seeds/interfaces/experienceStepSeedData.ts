import type { ExperienceStepSlug } from '../constants/experienceStepSlug';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

export interface ExperienceStepTranslation {
  position: string;
  company: string;
  location: string;
  description: string;
  duties: string[];
}

export interface ExperienceStepSeedData {
  slug: ExperienceStepSlug;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  locationType: 'Hybrid' | 'OnSite';
  employmentType: 'FullTime' | 'Freelance';
  skills: SkillKey[];
  translations: { [locale in Locale]: ExperienceStepTranslation };
}
