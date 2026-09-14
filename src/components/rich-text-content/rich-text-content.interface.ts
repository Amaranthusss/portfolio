import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import type { ComponentProps } from 'react';
import type { RichText } from '@payloadcms/richtext-lexical/react';

export interface RichTextContentProps extends Omit<
  ComponentProps<typeof RichText>,
  'data'
> {
  content: SerializedEditorState;
}
