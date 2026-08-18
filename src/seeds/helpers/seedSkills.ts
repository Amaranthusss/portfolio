import type { BasePayload, PaginatedDocs } from 'payload';
import type { SkillTranslation } from '../interfaces/skillSeedData';
import type { Skill } from '../../../payload-types';

import { locales } from '@/i18n/locale';
import { skills } from '../constants/skills';

async function seedSkill(
  payload: BasePayload,
  skill: (typeof skills)[number],
  i: number
): Promise<void> {
  const existingSkill: PaginatedDocs<Skill> = await payload.find({
    collection: 'skills',
    where: {
      key: {
        equals: skill.key,
      },
    },
    limit: 1,
    depth: 0,
    locale: 'all',
  });

  if (existingSkill.docs.length > 0) {
    console.log(`[${i}] ✓ Updated skill: ${skill.key}`);

    const skillId: Skill['id'] = existingSkill.docs[0].id;

    for (const locale of locales) {
      const translation: SkillTranslation = skill.translations[locale];

      await payload.update({
        collection: 'skills',
        id: skillId,
        locale,
        data: {
          name: translation.name,
          ...(translation.shortName !== undefined && {
            shortName: translation.shortName,
          }),
          ...(translation.description !== undefined && {
            description: translation.description,
          }),
        },
        depth: 0,
      });
    }

    return;
  }

  console.log(`[${i}] ✓ Created skill: ${skill.key}`);

  const createdSkill: Skill = await payload.create({
    collection: 'skills',
    data: {
      key: skill.key,
      name: skill.translations.pl.name,
      ...(skill.translations.pl.shortName !== undefined && {
        shortName: skill.translations.pl.shortName,
      }),
      ...(skill.translations.pl.description !== undefined && {
        description: skill.translations.pl.description,
      }),
    },
    locale: 'pl',
    depth: 0,
  });

  for (const locale of locales) {
    if (locale === 'pl') continue;

    const translation: SkillTranslation = skill.translations[locale];

    await payload.update({
      collection: 'skills',
      id: createdSkill.id,
      locale,
      data: {
        name: translation.name,
        ...(translation.shortName !== undefined && {
          shortName: translation.shortName,
        }),
        ...(translation.description !== undefined && {
          description: translation.description,
        }),
      },
      depth: 0,
    });
  }

  return;
}

export async function seedSkills(payload: BasePayload): Promise<void> {
  let i: number = 1;

  console.log(`== Seeding skills ==`);
  for (const skill of skills) await seedSkill(payload, skill, i++);
  console.log(`[${i++}] Seeding skills completed`);
}
