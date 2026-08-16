import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { GlobalConfig } from 'payload';

export const CodeStyle: GlobalConfig = {
  slug: 'code-style',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
  ],
};
