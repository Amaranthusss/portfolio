import type { CollectionConfig } from 'payload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'provider', 'issueDate'],
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
      localized: true,
    },

    {
      name: 'provider',
      type: 'text',
      localized: true,
    },

    {
      name: 'credentialID',
      type: 'text',
    },

    {
      name: 'issueDate',
      type: 'date',
      required: true,
    },

    {
      name: 'url',
      type: 'text',
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
