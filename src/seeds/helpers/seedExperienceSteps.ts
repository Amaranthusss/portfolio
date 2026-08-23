import type { BasePayload, PaginatedDocs } from 'payload';
import type { ExperienceStep, Skill } from '../../../payload-types';
import type { SkillKey } from '@/models/skillKey';

import { experienceSteps } from '../constants/experienceSteps';
import { locales } from '@/i18n/locale';
import { ExperienceStepTranslation } from '../interfaces/experienceStepSeedData';

async function getSkillMap(
  payload: BasePayload,
  skillKeys: SkillKey[]
): Promise<Map<SkillKey, number>> {
  const result: PaginatedDocs<Skill> = await payload.find({
    collection: 'skills',
    where: { key: { in: skillKeys } },
    depth: 0,
    pagination: false,
    locale: 'all',
  });

  return new Map(result.docs.map((skill) => [skill.key as SkillKey, skill.id]));
}

async function seedExperienceStep(
  payload: BasePayload,
  experienceStep: (typeof experienceSteps)[number],
  index: number
): Promise<void> {
  const existing: PaginatedDocs<ExperienceStep> = await payload.find({
    collection: 'experience-steps',
    where: { slug: { equals: experienceStep.slug } },
    limit: 1,
    depth: 0,
    locale: 'all',
  });

  const skillMap: Map<SkillKey, number> = await getSkillMap(
    payload,
    experienceStep.skills
  );

  const skillIds: Skill['id'][] = experienceStep.skills
    .map((skillKey) => skillMap.get(skillKey))
    .filter((id): id is number => id != null);

  if (skillIds.length !== experienceStep.skills.length) {
    const missingSkills: SkillKey[] = experienceStep.skills.filter(
      (skillKey) => !skillMap.has(skillKey)
    );

    throw new Error(
      `Missing skills for experience step "${experienceStep.slug}": ${missingSkills.join(', ')}`
    );
  }

  const data = {
    slug: experienceStep.slug,
    startDate: experienceStep.startDate,
    endDate: experienceStep.endDate,
    isCurrent: experienceStep.isCurrent,
    locationType: experienceStep.locationType,
    employmentType: experienceStep.employmentType,
    icon: experienceStep.icon,
    skills: skillIds,
  };

  if (existing.docs.length > 0) {
    const experienceStepId: ExperienceStep['id'] | string = existing.docs[0].id;

    console.log(`[${index}] ✓ Updated experience step: ${experienceStep.slug}`);

    await payload.update({
      collection: 'experience-steps',
      id: experienceStepId,
      data,
      depth: 0,
    });

    for (const locale of locales) {
      const translation: ExperienceStepTranslation =
        experienceStep.translations[locale];

      await payload.update({
        collection: 'experience-steps',
        id: experienceStepId,
        locale,
        data: {
          position: translation.position,
          company: translation.company,
          location: translation.location,
          description: translation.description,
          duties: translation.duties.map((value) => ({
            value,
          })),
        },
        depth: 0,
      });
    }

    return;
  }

  console.log(`[${index}] ✓ Created experience step: ${experienceStep.slug}`);

  const createdExperienceStep: ExperienceStep = await payload.create({
    collection: 'experience-steps',
    data: {
      ...data,
      position: experienceStep.translations.pl.position,
      company: experienceStep.translations.pl.company,
      location: experienceStep.translations.pl.location,
      description: experienceStep.translations.pl.description,
      duties: experienceStep.translations.pl.duties.map((value) => ({
        value,
      })),
    },
    locale: 'pl',
    depth: 0,
  });

  for (const locale of locales) {
    if (locale === 'pl') continue;

    const translation = experienceStep.translations[locale];

    await payload.update({
      collection: 'experience-steps',
      id: createdExperienceStep.id,
      locale,
      data: {
        position: translation.position,
        company: translation.company,
        location: translation.location,
        description: translation.description,
        duties: translation.duties.map((value) => ({
          value,
        })),
      },
      depth: 0,
    });
  }
}

export async function seedExperienceSteps(payload: BasePayload): Promise<void> {
  let i: number = 1;

  console.log('== Seeding experience steps ==');

  for (const experienceStep of experienceSteps) {
    await seedExperienceStep(payload, experienceStep, i++);
  }

  console.log(`[${i++}] Seeding experience steps completed`);
}
