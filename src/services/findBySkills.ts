'use server';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { mapPublication } from '@/lib/mappers/mapPublication';
import { unstable_cache } from 'next/cache';
import { mapProject } from '@/lib/mappers/mapProject';
import prisma from '@/lib/prisma';

import type { SkillAggregateDto } from '@/models/skillGraphDto';
import type { SkillKey } from '@/generated/prisma';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const findBySkills = async (
  skillKeys: SkillKey[],
  locale: Locale
): Promise<SkillAggregateDto> => {
  const skillsCacheKey: string = [...skillKeys].sort().join('-');

  return unstable_cache(
    async () => {
      // ToDo Prepare materialized view at the database

      const [certifications, projects, education, experience, publications] =
        await Promise.all([
          prisma.certification.findMany({
            where: {
              skills: { some: { skill: { key: { in: skillKeys } } } }
            },
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
            where: {
              skills: { some: { skill: { key: { in: skillKeys } } } }
            },
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
            where: {
              skills: { some: { skill: { key: { in: skillKeys } } } }
            },
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
            where: {
              skills: { some: { skill: { key: { in: skillKeys } } } }
            },
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
            where: {
              skills: { some: { skill: { key: { in: skillKeys } } } }
            },
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
    },
    [CacheName.SkillAggregates, locale, skillsCacheKey],
    { revalidate: false }
  )();
};
