import { revalidateExperienceStepCache } from '@/lib/revalidateCaches/revalidateExperienceStepCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { ExperienceStep } from '../../../payload-types';

export const revalidateExperienceSteps: CollectionAfterChangeHook<
  ExperienceStep
> = () => {
  revalidateExperienceStepCache();
};

export const revalidateExperienceStepsAfterDelete: CollectionAfterDeleteHook<
  ExperienceStep
> = () => {
  revalidateExperienceStepCache();
};
