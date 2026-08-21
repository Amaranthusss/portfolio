import { createEmptyEditorState } from '@/utils/createEmptyEditorState';

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

export function parseLexicalContent<Content>(
  content: Content
): DefaultTypedEditorState {
  if (!content || typeof content !== 'object' || Array.isArray(content)) {
    return createEmptyEditorState();
  }

  if (
    !('root' in content) ||
    !content.root ||
    typeof content.root !== 'object'
  ) {
    return createEmptyEditorState();
  }

  return content as DefaultTypedEditorState;
}
