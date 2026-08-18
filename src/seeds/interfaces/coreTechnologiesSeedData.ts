import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { CoreTechnology, Media } from '../../../payload-types';
import type { CoreTechnologiesSlug } from '../constants/coreTechnologiesSlug';
import type { SkillKey } from '@/models/skillKey';

export type CoreTechnologiesNodeSeedData = {
  title: CoreTechnology['groups'][number]['nodes'][number]['title'];
  iconFilename: NonNullable<Media['filename']>;
  skills?: SkillKey[];
};

export interface CoreTechnologiesGroupSeedData {
  title: CoreTechnology['title'];
  slug: CoreTechnologiesSlug;
  nodes: CoreTechnologiesNodeSeedData[];
  references?: CoreTechnologiesSlug[];
}

export interface CoreTechnologiesSeedData {
  title: CoreTechnology['title'];
  content: DefaultTypedEditorState;
  groups: CoreTechnologiesGroupSeedData[];
}
