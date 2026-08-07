import { mapSkill } from './mapSkill';

import type { Publication, Person, Skill } from '../../../payload-types';
import type { PublicationDTO } from '@/models/publicationDto';

export function mapPublication(publication: Publication): PublicationDTO {
  return {
    id: publication.id,
    slug: publication.slug,
    publishDate: new Date(publication.publishDate),
    url: publication.url,
    title: publication.title ?? '',
    description: publication.description ?? '',
    publisher: publication.publisher ?? '',

    keywords:
      publication.keywords?.filter(isPopulatedKeyword).map((k) => k.value) ??
      [],

    authors:
      publication.authors?.filter(isPopulatedPerson).map((person) => ({
        id: person.id,
        name: person.name,
        surname: person.surname,
        publicationId: publication.id,
        academicDegree: person.academicDegree ?? undefined,
      })) ?? [],

    skills: publication.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}

function isPopulatedKeyword(
  keyword: NonNullable<Publication['keywords']>[number]
): keyword is { value: string } {
  return keyword != null;
}

function isPopulatedPerson(
  person: number | Person | null | undefined
): person is Person {
  return typeof person !== 'number' && person !== null && person !== undefined;
}

function isPopulatedSkill(
  skill: number | Skill | null | undefined
): skill is Skill {
  return typeof skill !== 'number' && skill !== null && skill !== undefined;
}
