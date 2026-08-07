import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',

  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'slug',
      'category',
      'startDate',
      'endDate',
      'isCurrent',
    ],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'subname',
      type: 'text',
      localized: true,
    },

    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Mechatronics', value: 'Mechatronics' },
        { label: 'Hobby', value: 'Hobby' },
        { label: 'IT', value: 'IT' },
      ],
    },

    {
      name: 'startDate',
      type: 'date',
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'isCurrent',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
