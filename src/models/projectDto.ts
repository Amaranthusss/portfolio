import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { SkillDTO } from './skillDto';
import type { Project } from '../../payload-types';

export interface ProjectDTO {
  id: number;
  slug: string;
  category: Project['category'];
  startDate?: Date;
  endDate?: Date;
  isCurrent: boolean;
  name: string;
  subname?: string;
  description?: string;
  content: DefaultTypedEditorState;
  skills: SkillDTO[];
}
