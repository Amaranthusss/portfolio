'use server';
import { getProjectCacheTag } from './cache/getProjectCacheTag';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapProject } from '@/lib/mappers/mapProject';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { ProjectDTO } from '@/models/projectDto';
import type { Project } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getProject = async (
  slug: string,
  locale: Locale
): Promise<ProjectDTO | null> => {
  const project: ProjectDTO | null = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Project> = await payload.find({
        collection: 'projects',
        where: { slug: { equals: slug } },
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        limit: 1,
      });

      const project: Project | undefined = result.docs[0];

      return project != null ? mapProject(project) : null;
    },
    [CacheName.Project, slug, locale],
    {
      revalidate: false,
      tags: [getProjectCacheTag(slug, locale)],
    }
  )();

  if (project == null) {
    return null;
  }

  return {
    ...project,
    startDate:
      project.startDate != null ? new Date(project.startDate) : undefined,
    endDate: project.endDate != null ? new Date(project.endDate) : undefined,
  };
};
