import { revalidateSkillsCache } from '@/lib/revalidateCaches/revalidateSkillsCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Skill } from '../../../payload-types';

export const revalidateSkills: CollectionAfterChangeHook<Skill> = () => {
  revalidateSkillsCache();
};

export const revalidateSkillsAfterDelete: CollectionAfterDeleteHook<
  Skill
> = () => {
  revalidateSkillsCache();
};
