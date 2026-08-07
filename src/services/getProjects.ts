'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import { mapProject } from '@/lib/mappers/mapProject';

import type { BasePayload } from 'payload';
import type { ProjectDTO } from '@/models/projectDto';
import type { Locale } from '@/i18n/locale';
import type { Project } from '../../payload-types';

import { defaultLocale } from '@/i18n/locale';
import config from '@payload-config';

const getProjectsFromPayload = unstable_cache(
  async (locale: Locale): Promise<Project[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result = await payload.find({
      collection: 'projects',
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      pagination: false,
    });

    return result.docs;
  },
  ['projects'],
  {
    revalidate: false,
  }
);

export const getProjects = async (locale: Locale): Promise<ProjectDTO[]> => {
  const projects = await getProjectsFromPayload(locale);

  return projects.map(mapProject);
};
