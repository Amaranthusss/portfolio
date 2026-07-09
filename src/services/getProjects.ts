'use server';
import { unstable_cache } from 'next/cache';
import { mapProject } from '@/lib/mappers/mapProject';
import prisma from '@/lib/prisma';

import type { ProjectDTO } from '@/models/projectDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getProjects = async (locale: Locale): Promise<ProjectDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.project.findMany({
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
    [CacheName.Projects, locale],
    { revalidate: false }
  )();

  return db.map(mapProject);
};
