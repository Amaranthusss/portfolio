import { revalidateCertificationCache } from '@/lib/revalidateCaches/revalidateCertificationCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Certification } from '../../../payload-types';

export const revalidateCertifications: CollectionAfterChangeHook<
  Certification
> = () => {
  revalidateCertificationCache();
};

export const revalidateCertificationsAfterDelete: CollectionAfterDeleteHook<
  Certification
> = () => {
  revalidateCertificationCache();
};
