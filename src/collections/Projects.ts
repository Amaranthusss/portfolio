import { revalidateProjectsAfterDelete } from '@/services/cache/revalidateProjects';
import { revalidateProjects } from '@/services/cache/revalidateProjects';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { validateUrl } from '@/lib/validators/validateUrl';

import type { CollectionConfig } from 'payload';
import { IconName } from '@/components/icon/icon.config';

export const Projects: CollectionConfig = {
  slug: 'projects',

  hooks: {
    afterChange: [revalidateProjects],
    afterDelete: [revalidateProjectsAfterDelete],
  },

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
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'links',
      type: 'relationship',
      relationTo: 'links',
      hasMany: true,
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
