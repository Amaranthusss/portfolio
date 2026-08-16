import { revalidatePublicationCache } from '@/lib/revalidateCaches/revalidatePublicationCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Publication } from '../../../payload-types';

export const revalidatePublications: CollectionAfterChangeHook<
  Publication
> = () => {
  if (isPayloadSeed()) return;
  revalidatePublicationCache();
};

export const revalidatePublicationsAfterDelete: CollectionAfterDeleteHook<
  Publication
> = () => {
  if (isPayloadSeed()) return;
  revalidatePublicationCache();
};
