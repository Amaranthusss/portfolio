import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

export function createEmptyEditorState(): DefaultTypedEditorState {
  return {
    root: {
      type: 'root',
      children: [],
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  };
}
