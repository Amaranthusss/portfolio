import type { Person } from '../../../payload-types';

export function isPopulatedPerson(
  person: number | Person | null | undefined
): person is Person {
  return typeof person !== 'number' && person != null;
}
