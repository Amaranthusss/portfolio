import { mapSkill } from './mapSkill';

import type { PublicationWithRelations } from '@/models/publicationWithRelations';
import type { PublicationDTO } from '@/models/publicationDto';

export function mapPublication(pub: PublicationWithRelations): PublicationDTO {
  const translation = pub.translations[0] ?? {};

  return {
    id: pub.id,
    slug: pub.slug,
    publishDate: pub.publishDate,
    url: pub.url,
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    publisher: translation.publisher,
    skills: pub.skills.map((cs) => mapSkill(cs.skill)),
    authors: pub.authors.map((a) => ({
      ...a.person,
      academicDegree: a.person.academicDegree ?? undefined,
      publicationId: a.publicationId,
    })),
  };
}
