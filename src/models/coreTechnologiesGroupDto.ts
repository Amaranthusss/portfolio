import type { CoreTechnologiesNodeDTO } from './coreTechnologiesNodeDto';
import type { CoreTechnology } from '../../payload-types';
import type { IconName } from '@/components/icon/icon.config';
import type { Color } from './color';

export type CoreTechnologiesGroupDTO = {
  slug: CoreTechnology['groups'][number]['slug'];
  title: string;
  description: string;
  icon: IconName;
  color: Color;
  nodes: CoreTechnologiesNodeDTO[];
  references: CoreTechnology['groups'][number]['slug'][];
};
