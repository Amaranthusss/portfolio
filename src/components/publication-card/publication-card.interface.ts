import type { PublicationDTO } from '@/models/publicationDto';
import type { _Translator } from 'next-intl';
import type { PersonDTO } from '@/models/personDto';
import type { Messages } from '../../../i18n';

export interface PublicationCardProps {
  publication: PublicationDTO;
  t: _Translator<Messages, 'publications'>;
  authorToString: (author: PersonDTO) => string;
}
