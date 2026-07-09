import { getProjects } from '@/services/getProjects';

import type { MetadataRoute } from 'next';
import type { Locale } from '@/i18n/locale';

import { Route } from '@/constants/Route';

const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL!;
const locales: Locale[] = ['pl', 'en'];

const staticRoutes: Route[] = [
  Route.Homepage,
  Route.CoursesAndCertifications,
  Route.ExperienceAndEducation,
  Route.ProjectsAndRealisations,
  Route.CoreTechnologies,
  Route.CodeStyle,
  Route.Publications,
  Route.HireMe
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await Promise.all(
    locales.map(async (locale: Locale) => {
      return {
        locale,
        projects: await getProjects(locale)
      };
    })
  );

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale: Locale) =>
    staticRoutes.map((route: Route) => {
      return {
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            pl: `${siteUrl}/pl${route}`,
            en: `${siteUrl}/en${route}`
          }
        }
      };
    })
  );

  const projectPages: MetadataRoute.Sitemap = projects.flatMap(
    ({ locale, projects }) =>
      projects.map((project) => ({
        url: `${siteUrl}/${locale}${Route.ProjectsAndRealisations}/${project.slug}`,
        lastModified: project.endDate ?? project.startDate ?? new Date(),
        alternates: {
          languages: {
            pl: `${siteUrl}/pl${Route.ProjectsAndRealisations}/${project.slug}`,
            en: `${siteUrl}/en${Route.ProjectsAndRealisations}/${project.slug}`
          }
        }
      }))
  );

  return [...staticPages, ...projectPages];
}
