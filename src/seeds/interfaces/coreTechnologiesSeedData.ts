import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { CoreTechnology, Media } from '../../../payload-types';
import type { CoreTechnologiesSlug } from '../constants/coreTechnologiesSlug';
import type { SkillKey } from '@/models/skillKey';
import type { IconName } from '@/components/icon/icon.config';
import type { Locale } from '@/i18n/locale';
import type { Color } from '@/models/color';

export type CoreTechnologiesNodeSeedData = {
  title: CoreTechnology['groups'][number]['nodes'][number]['title'];
  iconFilename: NonNullable<Media['filename']>;
  skills?: SkillKey[];
};

export interface CoreTechnologiesGroupSeedData {
  title: CoreTechnology['title'];
  icon: IconName;
  color: Color;
  slug: CoreTechnologiesSlug;
  nodes: CoreTechnologiesNodeSeedData[];
  translations: { [locale in Locale]: { description: string } };
  references?: CoreTechnologiesSlug[];
}

export interface CoreTechnologiesSeedData {
  title: CoreTechnology['title'];
  content: DefaultTypedEditorState;
  groups: CoreTechnologiesGroupSeedData[];
}
