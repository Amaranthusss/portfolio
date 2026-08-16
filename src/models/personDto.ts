import type { AcademicDegree } from './academicDegree';

export interface PersonDTO {
  id: number;
  name: string;
  surname: string;
  publicationId: number;
  academicDegree?: AcademicDegree;
}
