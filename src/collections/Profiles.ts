import { revalidateProfilesAfterDelete } from '@/services/cache/revalidateProfiles';
import { revalidateProfiles } from '@/services/cache/revalidateProfiles';

import type { CollectionConfig } from 'payload';

export const Profiles: CollectionConfig = {
  slug: 'profiles',

  hooks: {
    afterChange: [revalidateProfiles],
    afterDelete: [revalidateProfilesAfterDelete],
  },

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'orderNumber'],
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
      name: 'orderNumber',
      type: 'number',
      required: true,
      unique: true,
    },

    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};
