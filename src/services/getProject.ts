'use server';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { mapProject } from '@/lib/mappers/mapProject';

import type { BasePayload } from 'payload';
import type { ProjectDTO } from '@/models/projectDto';
import type { Project } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import config from '@payload-config';

const getProjectFromPayload = unstable_cache(
  async (slug: string, locale: Locale): Promise<ProjectDTO | null> => {
    const payload: BasePayload = await getPayload({ config });

    const result = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
      },
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      limit: 1,
    });

    const project: Project | undefined = result.docs[0];

    return project != null ? mapProject(project) : null;
  },
  ['project'],
  {
    revalidate: false,
  }
);

export const getProject = async (
  slug: string,
  locale: Locale
): Promise<ProjectDTO | null> => {
  return getProjectFromPayload(slug, locale);
};
