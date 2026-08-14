import type { BasePayload, PaginatedDocs } from 'payload';
import type { ProfileSeedData } from '../interfaces/profileSeed';
import type { Profile, Skill } from '../../../payload-types';

import { profileSkills } from '../constants/profiles';
import { locales } from '@/i18n/locale';

async function seedProfile(
  payload: BasePayload,
  data: ProfileSeedData,
  i: number
): Promise<void> {
  const existingProfile: PaginatedDocs<Profile> = await payload.find({
    collection: 'profiles',
    where: { slug: { equals: data.slug } },
    limit: 1,
    depth: 0,
    locale: 'all',
  });

  if (existingProfile.docs.length > 0) {
    return console.log(`[${i}] - Skipped profile: ${data.slug}`);
  }

  const skillsResult: PaginatedDocs<Skill> = await payload.find({
    collection: 'skills',
    where: { key: { in: [...new Set(data.skills)] } },
    limit: data.skills.length,
    depth: 0,
    locale: 'all',
  });

  const skillMap: Map<Skill['key'], Skill['id']> = new Map<
    Skill['key'],
    Skill['id']
  >(skillsResult.docs.map((skill) => [skill.key, skill.id]));

  const skillIds: Skill['id'][] = [...new Set(data.skills)].map((key) => {
    const id: Skill['id'] | undefined = skillMap.get(key);

    if (id == null) {
      throw new Error(
        `Skill "${key}" required by profile "${data.slug}" was not found.`
      );
    }

    return id;
  });

  const plName: string = data.translations.pl;

  const createdProfile: Profile = await payload.create({
    collection: 'profiles',
    data: {
      slug: data.slug,
      orderNumber: data.orderNumber,
      name: plName,
      skills: skillIds,
    },
    locale: 'pl',
    depth: 0,
  });

  for (const locale of locales) {
    if (locale === 'pl') continue;

    await payload.update({
      collection: 'profiles',
      id: createdProfile.id,
      locale,
      data: { name: data.translations[locale] },
      depth: 0,
    });
  }

  console.log(`[${i}] ✓ Created profile: ${data.slug}`);
}

export async function seedProfiles(payload: BasePayload): Promise<void> {
  let i = 1;

  console.log(`== Seeding profiles ==`);
  for (const profile of profileSkills) await seedProfile(payload, profile, i++);
  console.log(`[${i++}] Seeding profiles completed`);
}
