import { revalidateProjectCache } from '@/lib/revalidateCaches/revalidateProjectCache';

import type { CollectionAfterChangeHook } from 'payload';
import type { CollectionAfterDeleteHook } from 'payload';
import type { Project } from '../../../payload-types';

export const revalidateProjects: CollectionAfterChangeHook<Project> = ({
  doc,
}) => {
  revalidateProjectCache(doc);
};

export const revalidateProjectsAfterDelete: CollectionAfterDeleteHook<
  Project
> = ({ doc }) => {
  revalidateProjectCache(doc);
};
