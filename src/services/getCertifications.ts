'use server';
import { mapCertification } from '@/lib/mappers/mapCertification';
import { unstable_cache } from 'next/cache';
import prisma from '@/lib/prisma';

import type { CertificationDTO } from '@/models/certificationDto';
import type { Locale } from '@/generated/prisma';

import { CacheName } from '@/constants/CacheName';

export const getCertifications = async (
  locale: Locale
): Promise<CertificationDTO[]> => {
  const db = await unstable_cache(
    async () => {
      return prisma.certification.findMany({
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
    },
    [CacheName.ExperienceSteps, locale],
    { revalidate: false }
  )();

  return db.map(mapCertification);
};
