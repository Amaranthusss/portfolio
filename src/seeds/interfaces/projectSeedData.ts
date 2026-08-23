import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { Project, Skill } from '../../../payload-types';
import type { MediaFilePath } from '@/models/mediaFilePath';
import type { LinkKey } from '../constants/linkKey';
import type { Locale } from '@/i18n/locale';

export interface ProjectTranslationSeedData {
  name: string;
  subname?: string;
  description?: string;
  content: DefaultTypedEditorState;
}

export interface ProjectSeedData {
  slug: string;
  category: Project['category'];
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  thumbnail?: MediaFilePath;
  skills: Skill['key'][];
  coreSkills: ProjectSeedData['skills'];
  links?: LinkKey[];
  translations: { [locale in Locale]: ProjectTranslationSeedData };
}
