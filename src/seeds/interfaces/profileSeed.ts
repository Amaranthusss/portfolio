import type { ProfileSlug } from '../constants/profileSlug';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../../payload-types';

export interface ProfileSeedData {
  slug: ProfileSlug;
  orderNumber: number;
  skills: Skill['key'][];
  translations: { [locale in Locale]: string };
}
