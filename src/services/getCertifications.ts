'use server';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload, PaginatedDocs } from 'payload';
import type { CertificationDTO } from '@/models/certificationDto';
import type { Certification } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import config from '@payload-config';

const getCertificationsFromPayload = unstable_cache(
  async (locale: Locale): Promise<Certification[]> => {
    const payload: BasePayload = await getPayload({ config });

    const result: PaginatedDocs<Certification> = await payload.find({
      collection: 'certifications',
      locale,
      fallbackLocale: defaultLocale,
      depth: 2,
      pagination: false,
      sort: '-issueDate',
    });

    return result.docs;
  },
  ['certifications'],
  {
    revalidate: false,
  }
);

export const getCertifications = async (
  locale: Locale
): Promise<CertificationDTO[]> => {
  const certifications = await getCertificationsFromPayload(locale);

  return certifications.map(mapCertification);
};
