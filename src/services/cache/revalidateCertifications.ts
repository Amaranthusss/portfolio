import { revalidateCertificationCache } from '@/lib/revalidateCaches/revalidateCertificationCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Certification } from '../../../payload-types';

export const revalidateCertifications: CollectionAfterChangeHook<
  Certification
> = () => {
  if (isPayloadSeed()) return;
  revalidateCertificationCache();
};

export const revalidateCertificationsAfterDelete: CollectionAfterDeleteHook<
  Certification
> = () => {
  if (isPayloadSeed()) return;
  revalidateCertificationCache();
};
