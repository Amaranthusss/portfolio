import { Handle, Position } from '@xyflow/react';
import { Button } from '@/components/button/button';
import { Image } from '@/components/image/image';
import { Icon } from '@/components/icon/icon';

import type { CoreTechnologiesGraphNodeProps } from './core-technologies-graph-node.interface';
import type { CoreTechnologiesNodeDTO } from '@/models/coreTechnologiesNodeDto';

import styles from '../../core-technologies-graph.module.scss';

export function CoreTechnologiesGraphNode({
  data,
}: CoreTechnologiesGraphNodeProps): React.ReactNode {
  const { group, direction } = data;

  const sourcePosition: Position =
    direction === 'LR' ? Position.Right : Position.Bottom;

  const targetPosition: Position =
    direction === 'LR' ? Position.Left : Position.Top;

  return (
    <div className={styles.node} style={{ borderColor: group.color }}>
      <Handle
        type={'target'}
        position={targetPosition}
        className={styles.handle}
      />

      <div className={styles.header} style={{ color: group.color }}>
        <Icon className={styles.icon} icon={group.icon} />
        <h1 className={styles.title}>{group.title}</h1>
      </div>

      <div className={styles.buttons}>
        {group.nodes.map((node: CoreTechnologiesNodeDTO): React.ReactNode => (
          <Button key={node.title} mode={'text'} className={styles.node_button}>
            <Image
              src={node.icon.url}
              alt={node.title}
              width={node.icon.width}
              height={node.icon.height}
              style={{ height: 32, width: 'auto' }}
            />
            {node.title}
          </Button>
        ))}
      </div>

      <Handle
        type={'source'}
        position={sourcePosition}
        className={styles.handle}
      />
    </div>
  );
}
