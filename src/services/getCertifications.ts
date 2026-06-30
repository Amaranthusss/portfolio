'use server';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { CertificationDTO } from '@/models/certificationDto';
import type { Locale } from '@/generated/prisma';

export const getCertifications = cache(
  async (): Promise<CertificationDTO[]> => {
    const locale: Locale = await getLocale();

    const db = await prisma.certification.findMany({
      include: {
        imageFile: true,
        translations: { where: { locale }, take: 1 },
        skills: {
          include: {
            skill: {
              include: {
                translations: { where: { locale }, take: 1 }
              }
            }
          }
        }
      }
    });

    return db.map(mapCertification);
  }
);
