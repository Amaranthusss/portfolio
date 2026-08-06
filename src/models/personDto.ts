import type { AcademicDegree } from './academicDegree';

export interface PersonDto {
  id: number;
  name: string;
  surname: string;
  publicationId: number;
  academicDegree?: AcademicDegree;
}
