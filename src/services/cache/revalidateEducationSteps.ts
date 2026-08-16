import { revalidateEducationStepCache } from '@/lib/revalidateCaches/revalidateEducationStepCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { EducationStep } from '../../../payload-types';

export const revalidateEducationSteps: CollectionAfterChangeHook<
  EducationStep
> = () => {
  if (isPayloadSeed()) return;
  revalidateEducationStepCache();
};

export const revalidateEducationStepsAfterDelete: CollectionAfterDeleteHook<
  EducationStep
> = () => {
  if (isPayloadSeed()) return;
  revalidateEducationStepCache();
};
