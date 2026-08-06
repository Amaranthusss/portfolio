import { getSkillIds } from './getSkillIds';
import { getMediaId } from './getMediaId';

import type { Certification, Media, Skill } from '../../../payload-types';
import type { PaginatedDocs, Payload } from 'payload';

import { certifications } from '../constants/certifications';

export async function seedCertifications(payload: Payload): Promise<void> {
  for (const certification of certifications) {
    const mediaId: Media['id'] = await getMediaId(payload, certification.image);

    const skillIds: Skill['id'][] = await getSkillIds(
      payload,
      certification.skills
    );

    const existing: PaginatedDocs<Certification> = await payload.find({
      collection: 'certifications',
      where: {
        slug: {
          equals: certification.slug,
        },
      },
      limit: 1,
      depth: 0,
    });

    let certificationId: Certification['id'];

    if (existing.docs[0]) {
      certificationId = existing.docs[0].id;

      await payload.update({
        collection: 'certifications',
        id: certificationId,
        locale: 'pl',
        data: {
          description: certification.translations.pl.description,
          provider: certification.translations.pl.provider,
          title: certification.translations.pl.title,
          credentialID: certification.credentialID,
          issueDate: certification.issueDate,
          slug: certification.slug,
          url: certification.url,
          skills: skillIds,
          image: mediaId,
        },
      });
    } else {
      const created: Certification = await payload.create({
        collection: 'certifications',
        locale: 'pl',
        data: {
          description: certification.translations.pl.description,
          provider: certification.translations.pl.provider,
          title: certification.translations.pl.title,
          credentialID: certification.credentialID,
          issueDate: certification.issueDate,
          slug: certification.slug,
          url: certification.url,
          skills: skillIds,
          image: mediaId,
        },
      });

      certificationId = created.id;
    }

    await payload.update({
      collection: 'certifications',
      id: certificationId,
      locale: 'en',
      data: {
        description: certification.translations.en.description,
        provider: certification.translations.en.provider,
        title: certification.translations.en.title,
      },
    });

    console.log(`✓ Certification: ${certification.slug}`);
  }
}
