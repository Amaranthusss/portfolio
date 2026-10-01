import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';
import type { Node } from '@xyflow/react';

export type CoreTechnologiesGraphDirection = 'LR' | 'TB';

export type CoreTechnologiesGraphNodeData = {
  group: CoreTechnologiesGroupDTO;
  direction: CoreTechnologiesGraphDirection;
};

export type CoreTechnologiesGraphNode = Node<
  CoreTechnologiesGraphNodeData,
  'technology'
>;
