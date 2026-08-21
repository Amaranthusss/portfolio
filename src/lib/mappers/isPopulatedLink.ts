import type { Link } from '../../../payload-types';

export function isPopulatedLink(
  link: number | Link | null | undefined
): link is Link {
  return typeof link !== 'number' && link != null;
}
