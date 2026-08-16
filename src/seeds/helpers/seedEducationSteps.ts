import type { BasePayload, PaginatedDocs } from 'payload';
import type { EducationStepTranslation } from '../interfaces/educationStepSeedData';
import type { EducationStepSeedData } from '../interfaces/educationStepSeedData';
import type { EducationStep, Skill } from '../../../payload-types';
import type { SkillKey } from '@/models/skillKey';

import { educationSteps } from '../constants/educationSteps';
import { locales } from '@/i18n/locale';

async function seedEducationStep(
  payload: BasePayload,
  educationStep: EducationStepSeedData,
  i: number
): Promise<void> {
  const existingEducationStep = await payload.find({
    collection: 'education-steps',
    where: { slug: { equals: educationStep.slug } },
    limit: 1,
    depth: 0,
    locale: 'all',
  });

  if (existingEducationStep.docs.length > 0) {
    return console.log(
      `[${i}] - Skipped education step: ${educationStep.slug}`
    );
  }

  const uniqueSkillKeys: SkillKey[] = [...new Set(educationStep.skills)];

  const skillsResult: PaginatedDocs<Skill> = await payload.find({
    collection: 'skills',
    where: { key: { in: uniqueSkillKeys } },
    limit: uniqueSkillKeys.length,
    depth: 0,
    locale: 'all',
  });

  const skillMap: Map<Skill['key'], Skill['id']> = new Map<
    Skill['key'],
    Skill['id']
  >(skillsResult.docs.map((skill) => [skill.key, skill.id]));

  const skillIds: Skill['id'][] = uniqueSkillKeys.map(
    (key: SkillKey): Skill['id'] => {
      const id: Skill['id'] | undefined = skillMap.get(key);

      if (id == null) {
        throw new Error(
          `Skill "${key}" required by education step "${educationStep.slug}" was not found.`
        );
      }

      return id;
    }
  );

  const plTranslation: EducationStepTranslation = educationStep.translations.pl;

  const createdEducationStep: EducationStep = await payload.create({
    collection: 'education-steps',
    data: {
      slug: educationStep.slug,
      startDate: educationStep.startDate,
      ...(educationStep.endDate !== undefined && {
        endDate: educationStep.endDate,
      }),
      ...(educationStep.grade !== undefined && {
        grade: educationStep.grade,
      }),
      ...(educationStep.withHonors !== undefined && {
        withHonors: educationStep.withHonors,
      }),
      institution: plTranslation.institution,
      ...(plTranslation.degree !== undefined && {
        degree: plTranslation.degree,
      }),
      ...(plTranslation.fieldOfStudy !== undefined && {
        fieldOfStudy: plTranslation.fieldOfStudy,
      }),
      ...(plTranslation.projectTitle !== undefined && {
        projectTitle: plTranslation.projectTitle,
      }),
      ...(plTranslation.description !== undefined && {
        description: plTranslation.description,
      }),
      skills: skillIds,
    },
    locale: 'pl',
    depth: 0,
  });

  for (const locale of locales) {
    if (locale === 'pl') continue;

    const translation: EducationStepTranslation =
      educationStep.translations[locale];

    await payload.update({
      collection: 'education-steps',
      id: createdEducationStep.id,
      locale,
      data: {
        institution: translation.institution,
        ...(translation.degree !== undefined && {
          degree: translation.degree,
        }),
        ...(translation.fieldOfStudy !== undefined && {
          fieldOfStudy: translation.fieldOfStudy,
        }),
        ...(translation.projectTitle !== undefined && {
          projectTitle: translation.projectTitle,
        }),
        ...(translation.description !== undefined && {
          description: translation.description,
        }),
      },
      depth: 0,
    });
  }

  console.log(`[${i}] ✓ Created education step: ${educationStep.slug}`);
}

export async function seedEducationSteps(payload: BasePayload): Promise<void> {
  let i: number = 1;

  console.log(`== Seeding education steps ==`);

  for (const educationStep of educationSteps) {
    await seedEducationStep(payload, educationStep, i++);
  }

  console.log(`[${i++}] Seeding education steps completed`);
}
