import { revalidateSkillsCache } from '@/lib/revalidateCaches/revalidateSkillsCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Skill } from '../../../payload-types';

export const revalidateSkills: CollectionAfterChangeHook<Skill> = () => {
  if (isPayloadSeed()) return;
  revalidateSkillsCache();
};

export const revalidateSkillsAfterDelete: CollectionAfterDeleteHook<
  Skill
> = () => {
  if (isPayloadSeed()) return;
  revalidateSkillsCache();
};
