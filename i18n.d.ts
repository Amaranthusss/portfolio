import type { Locale } from '@/i18n/locale';
import type enCoursesAndCertifications from './messages/en/courses-and-certifications.json';
import type enProjectsAndRealisations from './messages/en/projects-and-realisations.json';
import type enExperienceAndEducation from './messages/en/experience-and-education.json';
import type enCommon from './messages/en/common.json';
import type enLayout from './messages/en/layout.json';

type Messages = {
  common: typeof enCommon;
  layout: typeof enLayout;
  'courses-and-certifications': typeof enCoursesAndCertifications;
  'experience-and-education': typeof enExperienceAndEducation;
	'projects-and-realisations': typeof enProjectsAndRealisations
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
