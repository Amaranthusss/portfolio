'use client';

import { useEffect, useState, type RefObject } from 'react';

import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';

import styles from './relationship-layer.module.scss';

interface RelationshipLayerProps {
  boardRef: RefObject<HTMLDivElement | null>;
  groups: CoreTechnologiesGroupDTO[];
}

interface Point {
  x: number;
  y: number;
}

interface Connection {
  id: string;
  points: Point[];
}

const HEX_DIRECTIONS = [
  { q: 1, r: 0 },
  { q: 1, r: -1 },
  { q: 0, r: -1 },
  { q: -1, r: 0 },
  { q: -1, r: 1 },
  { q: 0, r: 1 },
];

function getGroupCenter(board: HTMLElement, slug: string): Point | null {
  const element = board.querySelector<HTMLElement>(
    `[data-group-slug="${slug}"]`
  );

  if (!element) {
    return null;
  }

  const boardRect = board.getBoundingClientRect();
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left - boardRect.left + rect.width / 2,
    y: rect.top - boardRect.top + rect.height / 2,
  };
}

function createConnection(
  board: HTMLElement,
  source: CoreTechnologiesGroupDTO,
  target: CoreTechnologiesGroupDTO
): Connection | null {
  const sourcePoint = getGroupCenter(board, source.slug);

  const targetPoint = getGroupCenter(board, target.slug);

  if (!sourcePoint || !targetPoint) {
    return null;
  }

  const dx = targetPoint.x - sourcePoint.x;
  const dy = targetPoint.y - sourcePoint.y;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0) {
    return null;
  }

  const offset = Math.min(distance * 0.25, 70);

  const start = {
    x: sourcePoint.x + (dx / distance) * offset,
    y: sourcePoint.y + (dy / distance) * offset,
  };

  const end = {
    x: targetPoint.x - (dx / distance) * offset,
    y: targetPoint.y - (dy / distance) * offset,
  };

  const middle = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2,
  };

  const perpendicular = {
    x: -dy / distance,
    y: dx / distance,
  };

  const bend = Math.min(distance * 0.18, 40);

  return {
    id: `${source.slug}-${target.slug}`,
    points: [
      start,
      {
        x: middle.x + perpendicular.x * bend,
        y: middle.y + perpendicular.y * bend,
      },
      end,
    ],
  };
}

function getPath(points: Point[]): string {
  if (points.length === 0) {
    return '';
  }

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  return points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];

    const controlX = (previous.x + point.x) / 2;

    const controlY = (previous.y + point.y) / 2;

    return `${path} Q ${controlX} ${controlY} ${point.x} ${point.y}`;
  }, '');
}

export function RelationshipLayer({
  boardRef,
  groups,
}: RelationshipLayerProps): React.ReactNode {
  const [connections, setConnections] = useState<Connection[]>([]);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const board = boardRef.current;

    if (!board) {
      return;
    }

    const calculate = () => {
      const rect = board.getBoundingClientRect();

      setSize({
        width: rect.width,
        height: rect.height,
      });

      const result: Connection[] = [];

      for (const group of groups) {
        for (const reference of group.references ?? []) {
          const target = groups.find(
            (candidate) => candidate.slug === reference
          );

          if (!target) {
            continue;
          }

          const connection = createConnection(board, group, target);

          if (connection) {
            result.push(connection);
          }
        }
      }

      setConnections(result);
    };

    const frame = requestAnimationFrame(calculate);

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(calculate);
    });

    resizeObserver.observe(board);

    window.addEventListener('resize', calculate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();

      window.removeEventListener('resize', calculate);
    };
  }, [boardRef, groups]);

  if (!size.width || !size.height || !connections.length) {
    return null;
  }

  return (
    <svg
      className={styles.layer}
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      aria-hidden="true"
    >
      <g className={styles.connections}>
        {connections.map((connection) => (
          <path
            key={connection.id}
            d={getPath(connection.points)}
            className={styles.connection}
          />
        ))}
      </g>
    </svg>
  );
}
