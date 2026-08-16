import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { GlobalConfig } from 'payload';

export const AboutMe: GlobalConfig = {
  slug: 'about-me',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      localized: false,
      required: true,
    },
    {
      name: 'mobile',
      type: 'text',
      localized: false,
      required: true,
    },
    {
      name: 'linkedin',
      type: 'text',
      localized: false,
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
