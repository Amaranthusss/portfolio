import { currentLocale } from '@/lib/config';

import type { PersonDto } from '@/models/personDto';

import { AcademicDegree } from '@/generated/prisma';

export const authorToString = (author: PersonDto): string => {
  const fullName: string = `${author.name} ${author.surname}`;

  switch (author.academicDegree) {
    case AcademicDegree.Engineer:
      return currentLocale == 'pl' ? `inż. ${fullName}` : `${fullName}, Eng.`;

    case AcademicDegree.MasterOfScienceInEngineering:
      return currentLocale == 'pl'
        ? `mgr inż. ${fullName}`
        : `${fullName}, MSc Eng.`;

    case AcademicDegree.DoctorInEngineering:
      return currentLocale == 'pl' ? `dr inż. ${fullName}` : `${fullName}, PhD`;

    case AcademicDegree.HabilitatedDoctorInEngineering:
      return currentLocale == 'pl'
        ? `dr hab. inż. ${fullName}`
        : `${fullName}, Dr. hab.`;

    case AcademicDegree.UniversityProfessor:
    case AcademicDegree.Professor:
      return currentLocale == 'pl' ? `prof. ${fullName}` : `Prof. ${fullName}`;

    default:
      return '-';
  }
};
