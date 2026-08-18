import type { Publication } from '../../../payload-types';

export function isPopulatedKeyword(
  keyword: NonNullable<Publication['keywords']>[number]
): keyword is { value: string } {
  return keyword != null;
}
