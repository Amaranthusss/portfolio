import { revalidateExperienceStepCache } from '@/lib/revalidateCaches/revalidateExperienceStepCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { ExperienceStep } from '../../../payload-types';

export const revalidateExperienceSteps: CollectionAfterChangeHook<
  ExperienceStep
> = () => {
  if (isPayloadSeed()) return;
  revalidateExperienceStepCache();
};

export const revalidateExperienceStepsAfterDelete: CollectionAfterDeleteHook<
  ExperienceStep
> = () => {
  if (isPayloadSeed()) return;
  revalidateExperienceStepCache();
};
