import type { IconName } from '@/components/icon/icon.config';
import type { Route } from 'next';

export interface NavMenuItem<Text extends string> {
  route: Route;
  text: Text;
  icon: IconName;
  decorated?: boolean;
}
