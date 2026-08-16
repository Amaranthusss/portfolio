import type { PublicationSlug } from '../constants/publicationSlug';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

export interface PublicationAuthorSeedData {
  name: string;
  surname: string;
  academicDegree:
    | 'Engineer'
    | 'MasterOfScienceInEngineering'
    | 'DoctorInEngineering'
    | 'HabilitatedDoctorInEngineering'
    | 'UniversityProfessor'
    | 'Professor';
}

export interface PublicationTranslationSeedData {
  title: string;
  publisher: string;
  keywords: string[];
  description: string;
}

export interface PublicationSeedData {
  slug: PublicationSlug;
  publishDate: string;
  url: string;
  authors: PublicationAuthorSeedData[];
  skills: SkillKey[];
  translations: { [locale in Locale]: PublicationTranslationSeedData };
}
