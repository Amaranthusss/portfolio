'use server';
import { unstable_cache } from 'next/cache';
import { mapProject } from '@/lib/mappers/mapProject';
import prisma from '@/lib/prisma';

import type { ProjectDTO } from '@/models/projectDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getProject = async (
  slug: string,
  locale: Locale
): Promise<ProjectDTO | null> => {
  const db = await unstable_cache(
    async () => {
      return prisma.project.findFirst({
        where: { slug },
        include: {
          translations: { where: { locale }, take: 1 },
          skills: {
            include: {
              skill: {
                include: {
                  translations: { where: { locale }, take: 1 }
                }
              }
            }
          }
        }
      });
    },
    [CacheName.Project, locale, slug],
    { revalidate: false }
  )();

  return db != null ? mapProject(db) : null;
};
