import type { Locale } from '@/i18n/locale';
import type enCoursesAndCertifications from './messages/en/courses-and-certifications.json';
import type enProjectsAndRealisations from './messages/en/projects-and-realisations.json';
import type enExperienceAndEducation from './messages/en/experience-and-education.json';
import type enPublications from './messages/en/publications.json';
import type enCodeStyle from './messages/en/code-style.json';
import type enHomepage from './messages/en/homepage.json';
import type enHireMe from './messages/en/hire-me.json';
import type enCommon from './messages/en/common.json';
import type enLayout from './messages/en/layout.json';

type Messages = {
  common: typeof enCommon;
  layout: typeof enLayout;
  homepage: typeof enHomepage;
  publications: typeof enPublications
  'hire-me': typeof enHireMe
  'courses-and-certifications': typeof enCoursesAndCertifications;
  'experience-and-education': typeof enExperienceAndEducation;
  'projects-and-realisations': typeof enProjectsAndRealisations;
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
