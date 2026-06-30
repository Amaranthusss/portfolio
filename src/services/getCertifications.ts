'use server';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { cache } from 'react';
import prisma from '@/lib/prisma';

import type { CertificationDTO } from '@/models/certificationDto';

import { currentLocale } from '@/lib/config';

export const getCertifications = cache(
  async (): Promise<CertificationDTO[]> => {
    const db = await prisma.certification.findMany({
      include: {
        imageFile: true,
        translations: { where: { locale: currentLocale }, take: 1 },
        skills: {
          include: {
            skill: {
              include: {
                translations: { where: { locale: currentLocale }, take: 1 },
              },
            },
          },
        },
      },
    });

    return db.map(mapCertification);
  }
);
