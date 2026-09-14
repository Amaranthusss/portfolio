import type { _Translator, Messages } from 'next-intl';
import type { IconName } from '@/components/icon/icon.config';
import type { Route } from 'next';

export interface NavMenuItem<Text extends string> {
  route: Route;
  text: Text;
  icon: IconName;
  decorated?: boolean;
}

export type HeaderMenuItem = NavMenuItem<
  Parameters<_Translator<Messages, 'layout.header'>>[0]
>;
