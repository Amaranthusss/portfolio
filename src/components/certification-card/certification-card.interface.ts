import type { CertificationDTO } from '@/models/certificationDto';
import type { _Translator } from 'next-intl';
import type { Messages } from '../../../i18n';
import type { Theme } from '@/constants/Theme';

export interface CertificationCardProps {
  certification: CertificationDTO;
  theme: Theme;
  t: _Translator<Messages, 'courses-and-certifications'>;
}
