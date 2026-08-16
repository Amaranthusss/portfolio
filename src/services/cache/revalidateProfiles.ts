import { revalidateProfileCache } from '@/lib/revalidateCaches/revalidateProfileCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Profile } from '../../../payload-types';

export const revalidateProfiles: CollectionAfterChangeHook<Profile> = () => {
  if (isPayloadSeed()) return;
  revalidateProfileCache();
};

export const revalidateProfilesAfterDelete: CollectionAfterDeleteHook<
  Profile
> = () => {
  if (isPayloadSeed()) return;
  revalidateProfileCache();
};
