import { RichText } from '@payloadcms/richtext-lexical/react';

import type { RichTextContentProps } from './rich-text-content.interface';

export function RichTextContent({
  content,
}: RichTextContentProps): React.ReactElement {
  return <RichText data={content} />;
}
