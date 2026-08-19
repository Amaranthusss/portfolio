import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

export function createEmptyEditorState(): DefaultTypedEditorState {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: null,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: null,
          textFormat: 0,
          children: [],
        },
      ],
    },
  };
}
