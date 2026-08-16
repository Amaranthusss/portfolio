'use server';
import { getCertificationsCacheTag } from './cache/getCertificationsCacheTag';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { CertificationDTO } from '@/models/certificationDto';
import type { Certification } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export const getCertifications = async (
  locale: Locale
): Promise<CertificationDTO[]> => {
  const certifications: CertificationDTO[] = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      const result: PaginatedDocs<Certification> = await payload.find({
        collection: 'certifications',
        locale,
        fallbackLocale: defaultLocale,
        depth: 2,
        pagination: false,
        sort: '-' + ('issueDate' satisfies keyof Certification),
      });

      return result.docs.map(mapCertification);
    },
    [CacheName.Certifications, locale],
    {
      revalidate: false,
      tags: [CacheName.Certifications, getCertificationsCacheTag(locale)],
    }
  )();

  return certifications.map((certification) => ({
    ...certification,
    issueDate: new Date(certification.issueDate),
  }));
};
