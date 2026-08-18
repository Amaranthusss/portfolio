import { isPopulatedKeyword } from './isPopulatedKeyword';
import { isPopulatedPerson } from './isPopulatedPerson';
import { isPopulatedSkill } from './isPopulatedSkill';
import { mapSkill } from './mapSkill';

import type { PublicationDTO } from '@/models/publicationDto';
import type { Publication } from '../../../payload-types';

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
      publication.authors?.filter(isPopulatedPerson).map((p) => ({
        id: p.id,
        name: p.name,
        surname: p.surname,
        publicationId: publication.id,
        academicDegree: p.academicDegree ?? undefined,
      })) ?? [],

    skills: publication.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}
