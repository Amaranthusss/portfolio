import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { MediaDTO } from './mediaDto';
import type { SkillDTO } from './skillDto';
import type { Project } from '../../payload-types';
import type { LinkDTO } from './linkDto';

export interface ProjectDTO {
  id: number;
  slug: string;
  category: Project['category'];
  startDate?: Date;
  endDate?: Date;
  isCurrent: boolean;
  name: string;
  thumbnail?: MediaDTO;
  subname?: string;
  description?: string;
  content: DefaultTypedEditorState;
  skills: SkillDTO[];
  links: LinkDTO[];
}
