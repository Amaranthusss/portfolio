import { revalidateEducationStepCache } from '@/lib/revalidateCaches/revalidateEducationStepCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { EducationStep } from '../../../payload-types';

export const revalidateEducationSteps: CollectionAfterChangeHook<
  EducationStep
> = () => {
  revalidateEducationStepCache();
};

export const revalidateEducationStepsAfterDelete: CollectionAfterDeleteHook<
  EducationStep
> = () => {
  revalidateEducationStepCache();
};
