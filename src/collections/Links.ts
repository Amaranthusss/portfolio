import { revalidateProjectsAfterDelete } from '@/services/cache/revalidateProjects';
import { revalidateProjects } from '@/services/cache/revalidateProjects';
import { validateUrl } from '@/lib/validators/validateUrl';

import type { CollectionConfig } from 'payload';

import { IconName } from '@/components/icon/icon.config';

export const Links: CollectionConfig = {
  slug: 'links',

  hooks: {
    afterChange: [revalidateProjects],
    afterDelete: [revalidateProjectsAfterDelete],
  },

  admin: {
    useAsTitle: 'key',
  },

  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
    },

    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'url',
      type: 'text',
      required: true,
      localized: true,
      validate: validateUrl,
    },

    {
      name: 'isExternal',
      type: 'checkbox',
      required: true,
    },

    {
      name: 'icon',
      type: 'select',
      options: Object.values(IconName),
    },
  ],
};
