import { mapSkill } from './mapSkill';

import type { Certification, Skill } from '../../../payload-types';
import type { CertificationDTO } from '@/models/certificationDto';
import type { MediaDto } from '@/models/mediaDto';
import type { SkillDTO } from '@/models/skillDto';

export function mapCertification(
  certification: Certification
): CertificationDTO {
  const image: MediaDto =
    certification.image && typeof certification.image !== 'number'
      ? {
          id: certification.image.id,
          fileName: certification.image.filename ?? '',
          extension: getFileExtension(certification.image.filename ?? ''),
          mimeType: certification.image.mimeType ?? 'application/octet-stream',
          size: certification.image.filesize ?? 0,
          url: certification.image.url ?? '/images/unknown.png',
        }
      : {
          id: -1,
          size: 22033,
          extension: '.png',
          fileName: 'unknown.png',
          mimeType: 'image/png',
          url: '/images/unknown.png',
        };

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

function isPopulatedSkill(
  skill: number | Skill | null | undefined
): skill is Skill {
  return typeof skill !== 'number' && skill !== null && skill !== undefined;
}

function getFileExtension(filename: string): string {
  const index = filename.lastIndexOf('.');

  return index >= 0 ? filename.slice(index) : '';
}
