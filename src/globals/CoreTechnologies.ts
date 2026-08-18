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
    {
      name: 'groups',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'slug',
          type: 'text',
          unique: true,
          localized: false,
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'nodes',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'skills',
              type: 'relationship',
              relationTo: 'skills',
              hasMany: true,
              required: false,
            },
          ],
        },
        {
          name: 'references',
          type: 'text',
          hasMany: true,
          required: false,
        },
      ],
    },
  ],
};
