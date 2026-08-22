import type { IconName } from '@/components/icon/icon.config';

export interface LinkDTO {
  key: string;
  label: string;
  url: string;
  icon?: IconName;
  isExternal: boolean;
}
