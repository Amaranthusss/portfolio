import type { PublicationTranslationSeedData } from '../interfaces/publicationSeedData';
import type { BasePayload, PaginatedDocs } from 'payload';
import type { PublicationAuthorSeedData } from '../interfaces/publicationSeedData';
import type { PublicationSeedData } from '../interfaces/publicationSeedData';
import type { Person, Publication } from '../../../payload-types';
import type { SkillKey } from '@/models/skillKey';
import type { Skill } from '../../../payload-types';

import { publications } from '../constants/publications';
import { locales } from '@/i18n/locale';

async function findOrCreatePerson(
  payload: BasePayload,
  author: PublicationAuthorSeedData
): Promise<Person['id']> {
  const existingPerson: PaginatedDocs<Person> = await payload.find({
    collection: 'persons',
    where: {
      and: [
        { name: { equals: author.name } },
        { surname: { equals: author.surname } },
      ],
    },
    limit: 1,
    depth: 0,
  });

  if (existingPerson.docs.length > 0) return existingPerson.docs[0].id;

  const createdPerson: Person = await payload.create({
    collection: 'persons',
    data: {
      name: author.name,
      surname: author.surname,
      academicDegree: author.academicDegree,
    },
    depth: 0,
  });

  return createdPerson.id;
}

async function seedPublication(
  payload: BasePayload,
  publication: PublicationSeedData,
  i: number
): Promise<void> {
  const existingPublication = await payload.find({
    collection: 'publications',
    where: { slug: { equals: publication.slug } },
    limit: 1,
    depth: 0,
    locale: 'all',
  });

  if (existingPublication.docs.length > 0) {
    return console.log(`[${i}] - Skipped publication: ${publication.slug}`);
  }

  const uniqueSkillKeys: SkillKey[] = [...new Set(publication.skills)];

  const skillsResult = await payload.find({
    collection: 'skills',
    where: { key: { in: uniqueSkillKeys } },
    limit: uniqueSkillKeys.length,
    depth: 0,
    locale: 'all',
  });

  const skillMap: Map<SkillKey, Skill['id']> = new Map(
    skillsResult.docs.map((skill) => [skill.key, skill.id])
  );

  const skillIds: Skill['id'][] = uniqueSkillKeys.map(
    (key: SkillKey): Skill['id'] => {
      const id: Skill['id'] | undefined = skillMap.get(key);

      if (id == null) {
        throw new Error(
          `Skill "${key}" required by publication "${publication.slug}" was not found.`
        );
      }

      return id;
    }
  );

  const authorIds: Person['id'][] = [];

  for (const author of publication.authors) {
    const personId: Person['id'] = await findOrCreatePerson(payload, author);

    authorIds.push(personId);
  }

  const plTranslation: PublicationTranslationSeedData =
    publication.translations.pl;

  const createdPublication: Publication = await payload.create({
    collection: 'publications',
    data: {
      slug: publication.slug,
      publishDate: publication.publishDate,
      url: publication.url,
      title: plTranslation.title,
      publisher: plTranslation.publisher,
      description: plTranslation.description,
      keywords: plTranslation.keywords.map((value) => ({
        value,
      })),
      authors: authorIds,
      skills: skillIds,
    },
    locale: 'pl',
    depth: 0,
  });

  for (const locale of locales) {
    if (locale === 'pl') continue;

    const translation: PublicationTranslationSeedData =
      publication.translations[locale];

    await payload.update({
      collection: 'publications',
      id: createdPublication.id,
      locale,
      data: {
        title: translation.title,
        publisher: translation.publisher,
        description: translation.description,
        keywords: translation.keywords.map((value) => ({
          value,
        })),
      },
      depth: 0,
    });
  }

  console.log(`[${i}] ✓ Created publication: ${publication.slug}`);
}

export async function seedPublications(payload: BasePayload): Promise<void> {
  let i: number = 1;

  console.log(`== Seeding publications ==`);

  for (const publication of publications) {
    await seedPublication(payload, publication, i++);
  }

  console.log(`[${i++}] Seeding publications completed`);
}
