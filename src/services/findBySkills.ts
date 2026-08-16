'use server';
import { getExperienceStepsCacheTag } from './cache/getExperienceStepsCacheTag';
import { getCertificationsCacheTag } from './cache/getCertificationsCacheTag';
import { getEducationStepsCacheTag } from './cache/getEducationStepsCacheTag';
import { getPublicationsCacheTag } from './cache/getPublicationsCacheTag';
import { getProjectsCacheTag } from './cache/getProjectsCacheTag';
import { mapExperienceStep } from '@/lib/mappers/mapExperienceStep';
import { mapEducationStep } from '@/lib/mappers/mapEducationStep';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { mapPublication } from '@/lib/mappers/mapPublication';
import { unstable_cache } from 'next/cache';
import { mapProject } from '@/lib/mappers/mapProject';
import { getPayload } from 'payload';

import type { SkillAggregateDTO } from '@/models/skillAggregateDto';
import type { BasePayload } from 'payload';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const findBySkills = async (
  skillKeys: SkillKey[],
  locale: Locale
): Promise<SkillAggregateDTO> => {
  const skillsCacheKey: string = [...skillKeys].sort().join('-');

  const aggregate: SkillAggregateDTO = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const [certifications, projects, education, experience, publications] =
        await Promise.all([
          payload.find({
            collection: 'certifications',
            where: { 'skills.key': { in: skillKeys } },
            locale,
            fallbackLocale: defaultLocale,
            depth: 2,
            pagination: false,
          }),

          payload.find({
            collection: 'projects',
            where: { 'skills.key': { in: skillKeys } },
            locale,
            fallbackLocale: defaultLocale,
            depth: 2,
            pagination: false,
          }),

          payload.find({
            collection: 'education-steps',
            where: { 'skills.key': { in: skillKeys } },
            locale,
            fallbackLocale: defaultLocale,
            depth: 2,
            pagination: false,
          }),

          payload.find({
            collection: 'experience-steps',
            where: { 'skills.key': { in: skillKeys } },
            locale,
            fallbackLocale: defaultLocale,
            depth: 2,
            pagination: false,
          }),

          payload.find({
            collection: 'publications',
            where: { 'skills.key': { in: skillKeys } },
            locale,
            fallbackLocale: defaultLocale,
            depth: 2,
            pagination: false,
          }),
        ]);

      return {
        certifications: certifications.docs.map(mapCertification),
        publications: publications.docs.map(mapPublication),
        experience: experience.docs.map(mapExperienceStep),
        education: education.docs.map(mapEducationStep),
        projects: projects.docs.map(mapProject),
      };
    },
    [CacheName.SkillAggregates, locale, skillsCacheKey],
    {
      revalidate: false,
      tags: [
        getCertificationsCacheTag(locale),
        getProjectsCacheTag(locale),
        getEducationStepsCacheTag(locale),
        getExperienceStepsCacheTag(locale),
        getPublicationsCacheTag(locale),
      ],
    }
  )();

  return {
    ...aggregate,
    certifications: aggregate.certifications.map((certification) => ({
      ...certification,
      issueDate: new Date(certification.issueDate),
    })),
    publications: aggregate.publications.map((publication) => ({
      ...publication,
      publishDate: new Date(publication.publishDate),
    })),
    experience: aggregate.experience.map((step) => ({
      ...step,
      startDate: new Date(step.startDate),
      endDate: step.endDate != null ? new Date(step.endDate) : undefined,
    })),
    education: aggregate.education.map((step) => ({
      ...step,
      startDate: new Date(step.startDate),
      endDate: step.endDate != null ? new Date(step.endDate) : undefined,
    })),
    projects: aggregate.projects.map((project) => ({
      ...project,
      startDate:
        project.startDate != null ? new Date(project.startDate) : undefined,
      endDate: project.endDate != null ? new Date(project.endDate) : undefined,
    })),
  };
};
