import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

export interface AboutMeDTO {
  title: string;
  email: string;
  mobile: string;
  linkedin: string;
  welcome: DefaultTypedEditorState;
  content: DefaultTypedEditorState;
}
