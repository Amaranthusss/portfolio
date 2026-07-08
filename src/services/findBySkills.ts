'use server';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { mapPublication } from '@/lib/mappers/mapPublication';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { mapProject } from '@/lib/mappers/mapProject';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { SkillAggregateDto } from '@/models/skillGraphDto';
import type { SkillKey } from '@/generated/prisma';
import type { Locale } from '@/generated/prisma';

export const findBySkills = cache(
  async (skillKeys: SkillKey[]): Promise<SkillAggregateDto> => {
    const locale: Locale = await getLocale();

    // ToDo Prepare materialized view at the database

    const [certifications, projects, education, experience, publications] =
      await Promise.all([
        prisma.certification.findMany({
          where: { skills: { some: { skill: { key: { in: skillKeys } } } } },
          include: {
            translations: { where: { locale }, take: 1 },
            skills: {
              include: {
                skill: {
                  include: {
                    translations: {
                      where: { locale },
                      take: 1
                    }
                  }
                }
              }
            },
            imageFile: true
          }
        }),

        prisma.project.findMany({
          where: { skills: { some: { skill: { key: { in: skillKeys } } } } },
          include: {
            translations: { where: { locale }, take: 1 },
            skills: {
              include: {
                skill: {
                  include: {
                    translations: {
                      where: { locale },
                      take: 1
                    }
                  }
                }
              }
            }
          }
        }),

        prisma.educationStep.findMany({
          where: { skills: { some: { skill: { key: { in: skillKeys } } } } },
          include: {
            translations: { where: { locale }, take: 1 },
            skills: {
              include: {
                skill: {
                  include: {
                    translations: {
                      where: { locale },
                      take: 1
                    }
                  }
                }
              }
            }
          }
        }),

        prisma.experienceStep.findMany({
          where: { skills: { some: { skill: { key: { in: skillKeys } } } } },
          include: {
            translations: { where: { locale }, take: 1 },
            skills: {
              include: {
                skill: {
                  include: {
                    translations: {
                      where: { locale },
                      take: 1
                    }
                  }
                }
              }
            }
          }
        }),

        prisma.publication.findMany({
          where: { skills: { some: { skill: { key: { in: skillKeys } } } } },
          include: {
            translations: { where: { locale }, take: 1 },
            authors: { include: { person: true } },
            skills: {
              include: {
                skill: {
                  include: {
                    translations: {
                      where: { locale },
                      take: 1
                    }
                  }
                }
              }
            }
          }
        })
      ]);

    return {
      certifications: certifications.map(mapCertification),
      publications: publications.map(mapPublication),
      experience: experience.map(mapExperienceStep),
      education: education.map(mapEducationStep),
      projects: projects.map(mapProject)
    };
  }
);
