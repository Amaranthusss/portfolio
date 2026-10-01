import dagre from '@dagrejs/dagre';

import type { CoreTechnologiesGraphDirection } from '../core-technologies-graph.interface';
import type { CoreTechnologiesGraphNode } from '../core-technologies-graph.interface';
import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';
import type { Edge } from '@xyflow/react';

import { Position } from '@xyflow/react';

const NODE_WIDTH: number = 255;
const NODE_SEPARATION: number = 36;
const RANK_SEPARATION: number = 50;

export type CoreTechnologiesGraphLayout = {
  nodes: CoreTechnologiesGraphNode[];
  edges: Edge[];
};

function getNodeHeight(group: CoreTechnologiesGroupDTO): number {
  return 64 + group.nodes.length * 40;
}

export const getCoreTechnologiesGraphLayout = (
  groups: CoreTechnologiesGroupDTO[],
  direction: CoreTechnologiesGraphDirection
): CoreTechnologiesGraphLayout => {
  const graph = new dagre.graphlib.Graph();

  graph.setDefaultEdgeLabel((): Record<string, never> => ({}));

  graph.setGraph({
    rankdir: direction,
    nodesep: NODE_SEPARATION,
    ranksep: RANK_SEPARATION,
    marginx: 32,
    marginy: 32,
    ranker: 'network-simplex',
  });

  const groupSlugs: Set<string> = new Set(
    groups.map((group: CoreTechnologiesGroupDTO): string => group.slug)
  );

  groups.forEach((group: CoreTechnologiesGroupDTO): void => {
    graph.setNode(group.slug, {
      width: NODE_WIDTH,
      height: getNodeHeight(group),
    });
  });

  const edges: Map<string, Edge> = new Map();

  groups.forEach((group: CoreTechnologiesGroupDTO): void => {
    group.references.forEach((reference: string): void => {
      if (!groupSlugs.has(reference) || reference === group.slug) return;

      const source: string = reference;
      const target: string = group.slug;
      const id: string = [source, target].sort().join('--');

      if (edges.has(id)) return;

      graph.setEdge(source, target);

      edges.set(id, {
        id,
        source,
        target,
        type: 'smoothstep',
        style: {
          stroke: 'var(--border-color)', //group.color,
          strokeWidth: 2,
        },
      });
    });
  });

  dagre.layout(graph);

  const nodes: CoreTechnologiesGraphNode[] = groups.map(
    (group: CoreTechnologiesGroupDTO): CoreTechnologiesGraphNode => {
      const position: { x: number; y: number } = graph.node(group.slug);
      const nodeHeight: number = getNodeHeight(group);

      return {
        id: group.slug,
        type: 'technology',
        position: {
          x: position.x - NODE_WIDTH / 2,
          y: position.y - nodeHeight / 2,
        },
        sourcePosition: direction === 'LR' ? Position.Right : Position.Bottom,
        targetPosition: direction === 'LR' ? Position.Left : Position.Top,
        draggable: false,
        selectable: false,
        data: {
          group,
          direction,
        },
        style: {
          width: NODE_WIDTH,
          height: nodeHeight,
        },
      };
    }
  );

  return {
    nodes,
    edges: [...edges.values()],
  };
};
