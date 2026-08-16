import { revalidatePublicationCache } from '@/lib/revalidateCaches/revalidatePublicationCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Publication } from '../../../payload-types';

export const revalidatePublications: CollectionAfterChangeHook<
  Publication
> = () => {
  revalidatePublicationCache();
};

export const revalidatePublicationsAfterDelete: CollectionAfterDeleteHook<
  Publication
> = () => {
  revalidatePublicationCache();
};
