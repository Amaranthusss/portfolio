import { isPopulatedIcon } from './isPopulatedIcon';

import type { LinkDTO } from '@/models/linkDto';
import type { Link } from '../../../payload-types';

export function mapLink(link: Link): LinkDTO {
  return {
    key: link.key,
    url: link.url,
    label: link.label,
    isExternal: link.isExternal,
    icon: isPopulatedIcon(link.icon) ? link.icon : undefined,
  };
}
