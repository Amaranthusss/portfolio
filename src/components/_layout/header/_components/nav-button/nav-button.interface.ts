import type { _Translator, Messages } from 'next-intl';
import type { NavMenuItem } from '../../header.interface';

export interface NavButtonProps {
  menuItem: NavMenuItem<Parameters<_Translator<Messages, 'layout.header'>>[0]>;
  className?: string;
}
