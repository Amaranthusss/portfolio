import type { CertificationSlug } from '../constants/certificationSlug';
import type { Skill } from '../../../payload-types';

export interface CertificationSeed {
  slug: CertificationSlug;
  issueDate: string;
  url?: string;
  credentialID?: string;
  image: string;
  skills: Skill['key'][];

  translations: {
    pl: {
      title: string;
      provider?: string;
      description?: string;
    };

    en: {
      title: string;
      provider?: string;
      description?: string;
    };
  };
}
