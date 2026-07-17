import { IconName } from '@/components/icon/icon.config';
import { Route } from '@/constants/Route';

export interface NavMenuItem<Text extends string> {
  route: Route;
  text: Text;
  icon: IconName;
  decorated?: boolean;
}
