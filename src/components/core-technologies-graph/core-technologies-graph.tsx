'use client';
import { CoreTechnologiesGraphNode } from './_components/core-technologies-graph-node/core-technologies-graph-node';
import { ReactFlow } from '@xyflow/react';

import { useMemo, useRef } from 'react';

import type { CoreTechnologiesGraphDirection } from './core-technologies-graph.interface';
import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';
import type { NodeTypes } from '@xyflow/react';

import { getCoreTechnologiesGraphLayout } from './_utils/getCoreTechnologiesGraphLayout';

import { Background, Controls } from '@xyflow/react';

import styles from './core-technologies-graph.module.scss';

type CoreTechnologiesGraphProps = {
  groups: CoreTechnologiesGroupDTO[];
};

const nodeTypes: NodeTypes = {
  technology: CoreTechnologiesGraphNode,
};

export function CoreTechnologiesGraph({
  groups,
}: CoreTechnologiesGraphProps): React.ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);

  const direction = 'TB' satisfies CoreTechnologiesGraphDirection;

  const { nodes, edges } = useMemo(
    () => getCoreTechnologiesGraphLayout(groups, direction),
    [groups, direction]
  );

  if (groups.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className={styles.graph} data-direction={direction}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        edgesFocusable={false}
        fitView
        fitViewOptions={{
          padding: 0.15,
          minZoom: 0.2,
          maxZoom: 1,
        }}
        minZoom={0.15}
        maxZoom={1.5}
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background gap={24} size={1} />
        <Controls showInteractive={false} position={'bottom-right'} />
      </ReactFlow>
    </div>
  );
}
