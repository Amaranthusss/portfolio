import { revalidateProfileCache } from '@/lib/revalidateCaches/revalidateProfileCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Profile } from '../../../payload-types';

export const revalidateProfiles: CollectionAfterChangeHook<Profile> = () => {
  revalidateProfileCache();
};

export const revalidateProfilesAfterDelete: CollectionAfterDeleteHook<
  Profile
> = () => {
  revalidateProfileCache();
};
