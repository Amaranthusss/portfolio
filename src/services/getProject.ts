'use server';
import { mapProject } from '@/lib/mappers/mapProject';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { ProjectDTO } from '@/models/projectDto';
import type { Locale } from '@/generated/prisma';

export const getProject = cache(
  async (slug: string): Promise<ProjectDTO | null> => {
    const locale: Locale = await getLocale();

    const db = await prisma.project.findFirst({
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

    return db != null ? mapProject(db) : null;
  }
);
