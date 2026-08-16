'use server';
import { getProjectsCacheTag } from './cache/getProjectsCacheTag';
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

export const getProjects = async (locale: Locale): Promise<ProjectDTO[]> => {
  const projects: ProjectDTO[] = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Project> = await payload.find({
        collection: 'projects',
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        pagination: false,
      });

      return result.docs.map(mapProject);
    },
    [CacheName.Projects, locale],
    {
      revalidate: false,
      tags: [getProjectsCacheTag(locale)],
    }
  )();

  return projects.map((project) => ({
    ...project,
    startDate:
      project.startDate != null ? new Date(project.startDate) : undefined,
    endDate: project.endDate != null ? new Date(project.endDate) : undefined,
  }));
};
