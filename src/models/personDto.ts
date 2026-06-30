import type { AcademicDegree } from '@/generated/prisma';

export interface PersonDto {
  id: number;
  name: string;
  surname: string;
  publicationId: number;
  academicDegree?: AcademicDegree;
}
