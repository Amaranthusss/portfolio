import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { GlobalConfig } from 'payload';

export const PortfolioDocumentation: GlobalConfig = {
  slug: 'portfolio-documentation',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
  ],
};
