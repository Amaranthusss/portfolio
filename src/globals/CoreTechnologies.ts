import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { GlobalConfig } from 'payload';

export const CoreTechnologies: GlobalConfig = {
  slug: 'core-technologies',

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
