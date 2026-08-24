import { ContactRequestType } from '@/constants/ContactRequestType';

export function isContactRequestType(
  value: unknown
): value is ContactRequestType {
  return (
    typeof value === 'number' &&
    Object.values(ContactRequestType).includes(value)
  );
}
