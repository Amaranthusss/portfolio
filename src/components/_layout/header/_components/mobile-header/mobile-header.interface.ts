import type { _Translator, Messages } from 'next-intl';
import type { NavMenuItem } from '../../header.interface';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export interface MobileHeaderProps {
  menuItems: NavMenuItem<
    Parameters<_Translator<Messages, 'layout.header'>>[0]
  >[];
  profiles: ProfileDTO[];
  skills: SkillDTO[];
  className: string;
}
