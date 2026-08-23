import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',

  admin: { useAsTitle: 'filename' },

  upload: { mimeTypes: ['image/*'] },

  fields: [
    {
      name: 'prefix',
      type: 'text',
      admin: { hidden: true },
    },
  ],
};
