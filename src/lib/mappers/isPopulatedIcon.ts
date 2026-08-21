import type { Link } from '../../../payload-types';

import { IconName } from '@/components/icon/icon.config';

const iconNames: IconName[] = Object.values(IconName);

export function isPopulatedIcon(icon: Link['icon']): icon is IconName {
  return (
    icon != null &&
    iconNames.some((iconName: IconName): boolean => iconName === icon)
  );
}
