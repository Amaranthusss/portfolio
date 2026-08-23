import { revalidateExperienceStepsAfterDelete } from '@/services/cache/revalidateExperienceSteps';
import { revalidateExperienceSteps } from '@/services/cache/revalidateExperienceSteps';

import type { CollectionConfig } from 'payload';

import { IconName } from '@/components/icon/icon.config';

export const ExperienceSteps: CollectionConfig = {
  slug: 'experience-steps',

  hooks: {
    afterChange: [revalidateExperienceSteps],
    afterDelete: [revalidateExperienceStepsAfterDelete],
  },

  admin: {
    useAsTitle: 'position',
    defaultColumns: [
      'position',
      'company',
      'startDate',
      'endDate',
      'isCurrent',
    ],
  },

  fields: [
    {
      name: 'position',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'icon',
      type: 'select',
      options: Object.values(IconName),
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    {
      name: 'company',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'location',
      type: 'text',
      required: true,
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
      defaultValue: false,
    },

    {
      name: 'employmentType',
      type: 'select',
      required: true,
      options: [
        { label: 'Full time', value: 'FullTime' },
        { label: 'Half time', value: 'HalfTime' },
        { label: 'Quarter time', value: 'QuarterTime' },
        { label: 'Self employed', value: 'SelfEmployed' },
        { label: 'Internship', value: 'Internship' },
        { label: 'Freelance', value: 'Freelance' },
        { label: 'Apprenticeship', value: 'Apprenticeship' },
      ],
    },

    {
      name: 'locationType',
      type: 'select',
      required: true,
      options: [
        { label: 'On site', value: 'OnSite' },
        { label: 'Remote', value: 'Remote' },
        { label: 'Hybrid', value: 'Hybrid' },
      ],
    },

    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },

    {
      name: 'duties',
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
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
