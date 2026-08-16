import { revalidateProjectCache } from '@/lib/revalidateCaches/revalidateProjectCache';
import { isPayloadSeed } from '@/lib/revalidateCaches/_isPayloadSeed';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Project } from '../../../payload-types';

export const revalidateProjects: CollectionAfterChangeHook<Project> = ({
  doc,
}) => {
  if (isPayloadSeed()) return;
  revalidateProjectCache(doc);
};

export const revalidateProjectsAfterDelete: CollectionAfterDeleteHook<
  Project
> = ({ doc }) => {
  if (isPayloadSeed()) return;
  revalidateProjectCache(doc);
};
