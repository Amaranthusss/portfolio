import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

import type { Locale } from './locale';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested: string | undefined = await requestLocale;

  const locale: Locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = (await import(`../../messages/${locale}/common.json`)).default;

  const layout = (await import(`../../messages/${locale}/layout.json`)).default;

  const homepage = (await import(`../../messages/${locale}/homepage.json`))
    .default;

  const coursesAndCertifications = (
    await import(`../../messages/${locale}/courses-and-certifications.json`)
  ).default;

  const experienceAndEducation = (
    await import(`../../messages/${locale}/experience-and-education.json`)
  ).default;

  const projectsAndRealisations = (
    await import(`../../messages/${locale}/projects-and-realisations.json`)
  ).default;

  const codeStyles = (await import(`../../messages/${locale}/code-style.json`))
    .default;

  return {
    locale,
    messages: {
      common: common,
      layout: layout,
      homepage: homepage,
      'code-style': codeStyles,
      'experience-and-education': experienceAndEducation,
      'projects-and-realisations': projectsAndRealisations,
      'courses-and-certifications': coursesAndCertifications,
    },
  };
});
