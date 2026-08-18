import { isPopulatedSkill } from './isPopulatedSkill';
import { mapMedia } from './mapMedia';
import { mapSkill } from './mapSkill';

import type { CertificationDTO } from '@/models/certificationDto';
import type { Certification } from '../../../payload-types';
import type { MediaDTO } from '@/models/mediaDto';
import type { SkillDTO } from '@/models/skillDto';

export function mapCertification(
  certification: Certification
): CertificationDTO {
  const image: MediaDTO = mapMedia(certification.image);

  const skills: SkillDTO[] =
    certification.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [];

  return {
    id: certification.id,
    slug: certification.slug,
    credentialID: certification.credentialID ?? undefined,
    issueDate: new Date(certification.issueDate),
    url: certification.url ?? undefined,
    title: certification.title,
    description: certification.description ?? '',
    provider: certification.provider ?? '',
    skills,
    image,
  };
}
