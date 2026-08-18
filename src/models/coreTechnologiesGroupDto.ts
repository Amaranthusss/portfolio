import type { CoreTechnologiesNodeDTO } from './coreTechnologiesNodeDto';
import type { CoreTechnology } from '../../payload-types';

export type CoreTechnologiesGroupDTO = {
  slug: CoreTechnology['groups'][number]['slug'];
  title: string;
  nodes: CoreTechnologiesNodeDTO[];
  references: CoreTechnology['groups'][number]['slug'][];
};
