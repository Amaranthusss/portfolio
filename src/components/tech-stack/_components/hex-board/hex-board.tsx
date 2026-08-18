'use client';
import { GroupNode } from '../group-node/group-node';

import { useEffect, useRef, useState } from 'react';

import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';

import { RelationshipLayer } from '../relationship-layer/relationship-layer';

import styles from './hex-board.module.scss';

interface HexBoardProps {
  groups: CoreTechnologiesGroupDTO[];
}

export function HexBoard({ groups }: HexBoardProps): React.ReactNode {
  const boardRef = useRef<HTMLDivElement>(null);
  const [, setLayoutVersion] = useState(0);

  useEffect(() => {
    const board = boardRef.current;

    if (!board) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setLayoutVersion((version) => version + 1);
    });

    resizeObserver.observe(board);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={boardRef} className={styles.board}>
      <RelationshipLayer boardRef={boardRef} groups={groups} />

      <div className={styles.groups}>
        {groups.map((group) => (
          <GroupNode key={group.slug} group={group} />
        ))}
      </div>
    </div>
  );
}
