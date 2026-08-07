'use server';

import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import config from '@payload-config';

import { mapCertification } from '@/lib/mappers/mapCertification';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { mapProject } from '@/lib/mappers/mapProject';
import { mapPublication } from '@/lib/mappers/mapPublication';

import type { SkillAggregateDto } from '@/models/skillAggregateDto';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../payload-types';

export type SkillKey = Skill['key'];

const getSkillAggregate = unstable_cache(
  async (skillKeys: SkillKey[], locale: Locale): Promise<SkillAggregateDto> => {
    const payload = await getPayload({ config });

    /*
     * Payload stores relationships as Skill document IDs,
     * while the application searches by Skill.key.
     *
     * First resolve the requested keys to Skill IDs.
     */
    const skillsResult = await payload.find({
      collection: 'skills',
      where: {
        key: {
          in: skillKeys,
        },
      },
      depth: 0,
      pagination: false,
    });

    const skillIds = skillsResult.docs.map((skill) => skill.id);

    if (skillIds.length === 0) {
      return {
        certifications: [],
        publications: [],
        experience: [],
        education: [],
        projects: [],
      };
    }

    /*
     * All collections use the same relationship:
     *
     * skills: hasMany relationship -> skills collection
     *
     * `in` means that at least one related Skill ID
     * must be one of the requested IDs.
     */
    const [
      certificationsResult,
      projectsResult,
      educationResult,
      experienceResult,
      publicationsResult,
    ] = await Promise.all([
      payload.find({
        collection: 'certifications',
        where: {
          skills: {
            in: skillIds,
          },
        },
        locale,
        fallbackLocale: 'en',
        depth: 2,
        pagination: false,
      }),

      payload.find({
        collection: 'projects',
        where: {
          skills: {
            in: skillIds,
          },
        },
        locale,
        fallbackLocale: 'en',
        depth: 2,
        pagination: false,
      }),

      payload.find({
        collection: 'education-steps',
        where: {
          skills: {
            in: skillIds,
          },
        },
        locale,
        fallbackLocale: 'en',
        depth: 2,
        pagination: false,
      }),

      payload.find({
        collection: 'experience-steps',
        where: {
          skills: {
            in: skillIds,
          },
        },
        locale,
        fallbackLocale: 'en',
        depth: 2,
        pagination: false,
      }),

      payload.find({
        collection: 'publications',
        where: {
          skills: {
            in: skillIds,
          },
        },
        locale,
        fallbackLocale: 'en',
        depth: 2,
        pagination: false,
      }),
    ]);

    return {
      certifications: certificationsResult.docs.map(mapCertification),
      publications: publicationsResult.docs.map(mapPublication),
      experience: experienceResult.docs.map(mapExperienceStep),
      education: educationResult.docs.map(mapEducationStep),
      projects: projectsResult.docs.map(mapProject),
    };
  },
  ['skill-aggregates'],
  {
    revalidate: false,
  }
);

export const findBySkills = async (
  skillKeys: SkillKey[],
  locale: Locale
): Promise<SkillAggregateDto> => {
  const normalizedSkillKeys = [...new Set(skillKeys)].sort();

  return getSkillAggregate(normalizedSkillKeys, locale);
};
