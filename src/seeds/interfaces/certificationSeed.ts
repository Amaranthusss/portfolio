import type { CertificationSlug } from '../constants/certificationSlug';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../../payload-types';

export interface CertificationSeed {
  slug: CertificationSlug;
  issueDate: string;
  url?: string;
  credentialID?: string;
  image: string;
  skills: Skill['key'][];

  translations: {
    [locale in Locale]: {
      title: string;
      provider?: string;
      description?: string;
    };
  };
}
