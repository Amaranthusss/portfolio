import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';

export interface TechStackRelationsProps {
  groups: CoreTechnologiesGroupDTO[];
}

export interface TechStackGroupLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  level: number;
}

export interface TechStackLayout {
  width: number;
  height: number;
  groups: Map<string, TechStackGroupLayout>;
  ready: boolean;
}

export interface TechStackPoint {
  x: number;
  y: number;
}

export interface TechStackConnection {
  id: string;
  points: TechStackPoint[];
}
