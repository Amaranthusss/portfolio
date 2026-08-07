import type { CollectionConfig } from 'payload';

export const EducationSteps: CollectionConfig = {
  slug: 'education-steps',

  admin: {
    useAsTitle: 'institution',
    defaultColumns: [
      'institution',
      'degree',
      'startDate',
      'endDate',
      'isCurrent',
    ],
  },

  fields: [
    {
      name: 'institution',
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
      name: 'degree',
      type: 'text',
      localized: true,
    },

    {
      name: 'projectTitle',
      type: 'text',
      localized: true,
    },

    {
      name: 'fieldOfStudy',
      type: 'text',
      localized: true,
    },

    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'startDate',
      type: 'date',
      required: true,
    },

    {
      name: 'endDate',
      type: 'date',
    },

    {
      name: 'isCurrent',
      type: 'checkbox',
    },

    {
      name: 'grade',
      type: 'number',
    },

    {
      name: 'withHonors',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
