import type { BasePayload, getPayload } from 'payload';
import type { SeedMode } from '../_run';

import { locales } from '@/i18n/locale';
import { skills } from '../constants/skills';

async function seedSkill(
  payload: Awaited<ReturnType<typeof getPayload>>,
  mode: SeedMode,
  skill: (typeof skills)[number]
): Promise<void> {
  if (mode === 'diagnostics') {
    const existingSkill = await payload.find({
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
      console.log(`  → Updating ${skill.key}`);

      const skillId = existingSkill.docs[0].id;

      for (const locale of locales) {
        const translation = skill.translations[locale];

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

    console.log(`  → Creating ${skill.key}`);

    const createdSkill = await payload.create({
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
      if (locale === 'pl') {
        continue;
      }

      const translation = skill.translations[locale];

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

  await payload.update({
    collection: 'skills',
    where: {
      key: {
        equals: skill.key,
      },
    },
    data: {
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
}

export async function seedSkills(
  payload: BasePayload,
  mode: SeedMode
): Promise<void> {
  let i: number = 1;
  
  console.log(`[${i++}] Seeding skills...`);
  for (const skill of skills) await seedSkill(payload, mode, skill);
  console.log(`[${i++}] Seeding skills completed`);
}
