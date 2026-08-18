import type { RefObject } from 'react';

import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';

export interface RelationshipLayerProps {
  boardRef: RefObject<HTMLDivElement | null>;
  groups: CoreTechnologiesGroupDTO[];
}
