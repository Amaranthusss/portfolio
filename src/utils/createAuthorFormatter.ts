import { getLocale } from 'next-intl/server';

import type { PersonDto } from '@/models/personDto';
import type { Locale } from '@/i18n/locale';

export async function createAuthorFormatter() {
  const locale: Locale = await getLocale();

  const authorToString = (author: PersonDto): string => {
    const fullName: string = `${author.name} ${author.surname}`;

    switch (author.academicDegree) {
      case 'Engineer':
        return locale === 'pl' ? `inż. ${fullName}` : `${fullName}, Eng.`;

      case 'MasterOfScienceInEngineering':
        return locale === 'pl'
          ? `mgr inż. ${fullName}`
          : `${fullName}, MSc Eng.`;

      case 'DoctorInEngineering':
        return locale === 'pl' ? `dr inż. ${fullName}` : `${fullName}, PhD`;

      case 'HabilitatedDoctorInEngineering':
        return locale === 'pl'
          ? `dr hab. inż. ${fullName}`
          : `${fullName}, Dr. hab.`;

      case 'UniversityProfessor':
      case 'Professor':
        return locale === 'pl' ? `prof. ${fullName}` : `Prof. ${fullName}`;

      default:
        return fullName;
    }
  };

  return { authorToString };
}
