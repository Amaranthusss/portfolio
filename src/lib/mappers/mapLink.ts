import { isPopulatedIcon } from './isPopulatedIcon';

import type { LinkDTO } from '@/models/linkDto';
import type { Link } from '../../../payload-types';

export function mapLink(link: Link): LinkDTO {
  return {
    label: link.label,
    url: link.url,
    icon: isPopulatedIcon(link.icon) ? link.icon : undefined,
  };
}
