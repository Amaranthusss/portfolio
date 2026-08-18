import type { CoreTechnologiesGroupDTO } from './coreTechnologiesGroupDto';
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

export interface CoreTechnologiesDTO {
  title: string;
  content: DefaultTypedEditorState;
  groups: CoreTechnologiesGroupDTO[];
}
