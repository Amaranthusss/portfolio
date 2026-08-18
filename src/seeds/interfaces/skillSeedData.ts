import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';
import type { Skill } from '../../../payload-types';

export type SkillTranslation = Pick<
  Skill,
  'name' | 'shortName' | 'description'
>;

export type SkillSeedData = {
  key: SkillKey;
  translations: { [locale in Locale]: SkillTranslation };
};
