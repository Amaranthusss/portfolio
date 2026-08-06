import type { CollectionConfig } from 'payload';

export const Publications: CollectionConfig = {
  slug: 'publications',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publisher', 'publishDate'],
  },

  fields: [
    {
      name: 'title',
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
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },

    {
      name: 'publisher',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'keywords',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'publishDate',
      type: 'date',
      required: true,
    },

    {
      name: 'url',
      type: 'text',
      required: true,
    },

    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'persons',
      hasMany: true,
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
