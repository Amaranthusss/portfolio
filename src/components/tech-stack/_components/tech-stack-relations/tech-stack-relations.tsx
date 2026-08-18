'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useId,
} from 'react';

import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';

import { TechStackGroup } from '../tech-stack-group/tech-stack-group';

import type {
  TechStackConnection,
  TechStackGroupLayout,
  TechStackLayout,
  TechStackPoint,
} from './tech-stack-relations.interface';

import type { TechStackRelationsProps } from './tech-stack-relations.interface';

import styles from './tech-stack-relations.module.scss';

const DESKTOP_BREAKPOINT = 1100;
const DESKTOP_GROUP_GAP = 72;
const DESKTOP_ROW_GAP = 42;
const DESKTOP_MIN_GROUP_WIDTH = 220;
const DESKTOP_MAX_GROUP_WIDTH = 320;
const DESKTOP_VERTICAL_PADDING = 56;

const MOBILE_GROUP_GAP = 52;
const MOBILE_HORIZONTAL_PADDING = 16;
const MOBILE_MAX_GROUP_WIDTH = 420;

const CONNECTION_OFFSET = 16;
const CONNECTION_CURVE = 0.42;
const CONNECTION_PORT_PADDING = 18;

interface MeasuredGroup {
  slug: string;
  width: number;
  height: number;
}

interface GroupLevel {
  level: number;
  groups: CoreTechnologiesGroupDTO[];
}

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function getGroupLevels(groups: CoreTechnologiesGroupDTO[]): GroupLevel[] {
  const groupsBySlug = new Map(groups.map((group) => [group.slug, group]));

  const levelCache = new Map<string, number>();
  const resolving = new Set<string>();

  const getLevel = (slug: string): number => {
    const cached = levelCache.get(slug);

    if (cached !== undefined) {
      return cached;
    }

    if (resolving.has(slug)) {
      return 0;
    }

    const group = groupsBySlug.get(slug);

    if (!group) {
      return 0;
    }

    resolving.add(slug);

    let level = 0;

    for (const reference of group.references) {
      if (!groupsBySlug.has(reference)) {
        continue;
      }

      level = Math.max(level, getLevel(reference) + 1);
    }

    resolving.delete(slug);

    levelCache.set(slug, level);

    return level;
  };

  const groupsByLevel = new Map<number, CoreTechnologiesGroupDTO[]>();

  for (const group of groups) {
    const level = getLevel(group.slug);

    const current = groupsByLevel.get(level) ?? [];

    current.push(group);

    groupsByLevel.set(level, current);
  }

  return [...groupsByLevel.entries()]
    .sort(([first], [second]) => first - second)
    .map(([level, levelGroups]) => ({
      level,
      groups: levelGroups,
    }));
}

function orderLevelGroups(
  levelGroups: CoreTechnologiesGroupDTO[],
  previousGroups: CoreTechnologiesGroupDTO[]
): CoreTechnologiesGroupDTO[] {
  if (previousGroups.length === 0) {
    return levelGroups;
  }

  const previousIndexes = new Map(
    previousGroups.map((group, index) => [group.slug, index])
  );

  return [...levelGroups].sort((first, second) => {
    const firstIndexes = first.references
      .map((reference) => previousIndexes.get(reference))
      .filter((index): index is number => index !== undefined);

    const secondIndexes = second.references
      .map((reference) => previousIndexes.get(reference))
      .filter((index): index is number => index !== undefined);

    const firstAverage =
      firstIndexes.length > 0
        ? firstIndexes.reduce((sum, index) => sum + index, 0) /
          firstIndexes.length
        : Number.POSITIVE_INFINITY;

    const secondAverage =
      secondIndexes.length > 0
        ? secondIndexes.reduce((sum, index) => sum + index, 0) /
          secondIndexes.length
        : Number.POSITIVE_INFINITY;

    return firstAverage - secondAverage;
  });
}

function calculateDesktopLayout(
  groups: CoreTechnologiesGroupDTO[],
  measuredGroups: Map<string, MeasuredGroup>,
  width: number
): TechStackLayout {
  const levels = getGroupLevels(groups);

  const levelCount = levels.length;

  if (levelCount === 0) {
    return {
      width,
      height: 0,
      groups: new Map(),
      ready: true,
    };
  }

  const availableWidth = width - DESKTOP_GROUP_GAP * (levelCount - 1);

  const groupWidth = Math.min(
    DESKTOP_MAX_GROUP_WIDTH,
    Math.max(DESKTOP_MIN_GROUP_WIDTH, availableWidth / levelCount)
  );

  const orderedLevels: GroupLevel[] = [];

  let previousGroups: CoreTechnologiesGroupDTO[] = [];

  for (const level of levels) {
    const ordered = orderLevelGroups(level.groups, previousGroups);

    orderedLevels.push({
      level: level.level,
      groups: ordered,
    });

    previousGroups = ordered;
  }

  const levelHeights = new Map<number, number>();

  for (const level of orderedLevels) {
    const height = level.groups.reduce((total, group) => {
      const measured = measuredGroups.get(group.slug);

      return total + (measured?.height ?? 240);
    }, 0);

    const gap = Math.max(0, level.groups.length - 1) * DESKTOP_ROW_GAP;

    levelHeights.set(level.level, height + gap);
  }

  const maxHeight = Math.max(...levelHeights.values());

  const canvasHeight = maxHeight + DESKTOP_VERTICAL_PADDING * 2;

  const totalGraphWidth =
    groupWidth * levelCount + DESKTOP_GROUP_GAP * (levelCount - 1);

  const leftOffset = Math.max(0, (width - totalGraphWidth) / 2);

  const layouts = new Map<string, TechStackGroupLayout>();

  for (const level of orderedLevels) {
    const columnHeight = levelHeights.get(level.level) ?? 0;

    let y = DESKTOP_VERTICAL_PADDING + (maxHeight - columnHeight) / 2;

    const x = leftOffset + level.level * (groupWidth + DESKTOP_GROUP_GAP);

    for (const group of level.groups) {
      const measured = measuredGroups.get(group.slug);

      const height = measured?.height ?? 240;

      layouts.set(group.slug, {
        x,
        y,
        width: groupWidth,
        height,
        level: level.level,
      });

      y += height + DESKTOP_ROW_GAP;
    }
  }

  return {
    width,
    height: canvasHeight,
    groups: layouts,
    ready: true,
  };
}

function calculateMobileLayout(
  groups: CoreTechnologiesGroupDTO[],
  measuredGroups: Map<string, MeasuredGroup>,
  width: number
): TechStackLayout {
  const levels = getGroupLevels(groups);

  const orderedGroups = levels.flatMap((level) =>
    orderLevelGroups(
      level.groups,
      levels.find((candidate) => candidate.level === level.level - 1)?.groups ??
        []
    )
  );

  const groupWidth = Math.min(
    MOBILE_MAX_GROUP_WIDTH,
    width - MOBILE_HORIZONTAL_PADDING * 2
  );

  const layouts = new Map<string, TechStackGroupLayout>();

  let y = MOBILE_HORIZONTAL_PADDING;

  for (const group of orderedGroups) {
    const measured = measuredGroups.get(group.slug);

    const height = measured?.height ?? 240;

    layouts.set(group.slug, {
      x: (width - groupWidth) / 2,
      y,
      width: groupWidth,
      height,
      level:
        levels.find((level) =>
          level.groups.some((candidate) => candidate.slug === group.slug)
        )?.level ?? 0,
    });

    y += height + MOBILE_GROUP_GAP;
  }

  return {
    width,
    height: y + MOBILE_HORIZONTAL_PADDING - MOBILE_GROUP_GAP,
    groups: layouts,
    ready: true,
  };
}

function createConnections(
  groups: CoreTechnologiesGroupDTO[],
  layouts: Map<string, TechStackGroupLayout>,
  mobile: boolean
): TechStackConnection[] {
  const incoming = new Map<string, string[]>();

  const outgoing = new Map<string, string[]>();

  for (const group of groups) {
    for (const reference of group.references) {
      if (!layouts.has(reference)) {
        continue;
      }

      const targetIncoming = incoming.get(reference) ?? [];

      targetIncoming.push(group.slug);

      incoming.set(reference, targetIncoming);

      const sourceOutgoing = outgoing.get(group.slug) ?? [];

      sourceOutgoing.push(reference);

      outgoing.set(group.slug, sourceOutgoing);
    }
  }

  const connections: TechStackConnection[] = [];

  for (const source of groups) {
    const sourceLayout = layouts.get(source.slug);

    if (!sourceLayout) {
      continue;
    }

    const targets = outgoing.get(source.slug) ?? [];

    for (const targetSlug of targets) {
      const targetLayout = layouts.get(targetSlug);

      if (!targetLayout) {
        continue;
      }

      const targetSources = incoming.get(targetSlug) ?? [];

      const sourceTargets = outgoing.get(source.slug) ?? [];

      const targetIndex = Math.max(0, targetSources.indexOf(source.slug));

      const sourceIndex = Math.max(0, sourceTargets.indexOf(targetSlug));

      let start: TechStackPoint;
      let end: TechStackPoint;

      if (mobile) {
        const sourceCount = Math.max(1, sourceTargets.length);

        const targetCount = Math.max(1, targetSources.length);

        const sourceRatio = (sourceIndex + 1) / (sourceCount + 1);

        const targetRatio = (targetIndex + 1) / (targetCount + 1);

        const sourceIsBelow = sourceLayout.y > targetLayout.y;

        if (sourceIsBelow) {
          start = {
            x: sourceLayout.x + sourceLayout.width * sourceRatio,
            y: sourceLayout.y,
          };

          end = {
            x: targetLayout.x + targetLayout.width * targetRatio,
            y: targetLayout.y + targetLayout.height,
          };
        } else {
          start = {
            x: sourceLayout.x + sourceLayout.width * sourceRatio,
            y: sourceLayout.y + sourceLayout.height,
          };

          end = {
            x: targetLayout.x + targetLayout.width * targetRatio,
            y: targetLayout.y,
          };
        }
      } else {
        const sourceCount = Math.max(1, sourceTargets.length);

        const targetCount = Math.max(1, targetSources.length);

        const sourceRatio = (sourceIndex + 1) / (sourceCount + 1);

        const targetRatio = (targetIndex + 1) / (targetCount + 1);

        const sourceIsRight = sourceLayout.x > targetLayout.x;

        if (sourceIsRight) {
          start = {
            x: sourceLayout.x,
            y: sourceLayout.y + sourceLayout.height * sourceRatio,
          };

          end = {
            x: targetLayout.x + targetLayout.width,
            y: targetLayout.y + targetLayout.height * targetRatio,
          };
        } else {
          start = {
            x: sourceLayout.x + sourceLayout.width,
            y: sourceLayout.y + sourceLayout.height * sourceRatio,
          };

          end = {
            x: targetLayout.x,
            y: targetLayout.y + targetLayout.height * targetRatio,
          };
        }
      }

      connections.push({
        id: `${source.slug}-${targetSlug}`,
        points: [start, end],
      });
    }
  }

  return connections;
}

function createPath(points: TechStackPoint[], mobile: boolean): string {
  const [start, end] = points;

  if (!start || !end) {
    return '';
  }

  if (mobile) {
    const direction = Math.sign(end.y - start.y) || -1;

    const distance = Math.abs(end.y - start.y);

    const controlOffset = Math.max(28, distance * CONNECTION_CURVE);

    const offset = direction * Math.min(CONNECTION_OFFSET, distance / 3);

    const middle = (start.y + end.y) / 2;

    return [
      `M ${start.x} ${start.y}`,
      `C ${start.x} ${middle + offset}`,
      `${end.x} ${middle - offset}`,
      `${end.x} ${end.y}`,
    ].join(' ');
  }

  const direction = Math.sign(end.x - start.x) || -1;

  const distance = Math.abs(end.x - start.x);

  const controlOffset = Math.max(36, distance * CONNECTION_CURVE);

  const offset = direction * Math.min(CONNECTION_OFFSET, distance / 3);

  const middle = (start.x + end.x) / 2;

  const firstControl = middle + offset;

  const secondControl = middle - offset;

  return [
    `M ${start.x} ${start.y}`,
    `C ${firstControl} ${start.y}`,
    `${secondControl} ${end.y}`,
    `${end.x} ${end.y}`,
  ].join(' ');
}

export function TechStackRelations({
  groups,
}: TechStackRelationsProps): React.ReactNode {
  const canvasRef = useRef<HTMLDivElement>(null);

  const groupRefs = useRef(new Map<string, HTMLDivElement>());

  const frameRef = useRef<number | null>(null);

  const markerId = useId().replace(/:/g, '');

  const [layout, setLayout] = useState<TechStackLayout>({
    width: 0,
    height: 0,
    groups: new Map(),
    ready: false,
  });

  const calculateLayout = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const width = canvas.clientWidth;

    if (width === 0) {
      return;
    }

    const measuredGroups = new Map<string, MeasuredGroup>();

    for (const group of groups) {
      const element = groupRefs.current.get(group.slug);

      if (!element) {
        continue;
      }

      measuredGroups.set(group.slug, {
        slug: group.slug,
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    }

    const levels = getGroupLevels(groups);

    const desktopAvailableWidth =
      width - DESKTOP_GROUP_GAP * Math.max(0, levels.length - 1);

    const shouldUseMobile =
      width < DESKTOP_BREAKPOINT ||
      desktopAvailableWidth < DESKTOP_MIN_GROUP_WIDTH * levels.length;

    const nextLayout = shouldUseMobile
      ? calculateMobileLayout(groups, measuredGroups, width)
      : calculateDesktopLayout(groups, measuredGroups, width);

    setLayout((current) => {
      const sameSize =
        current.width === nextLayout.width &&
        current.height === nextLayout.height;

      if (!sameSize) {
        return nextLayout;
      }

      if (current.groups.size !== nextLayout.groups.size) {
        return nextLayout;
      }

      for (const [slug, nextGroup] of nextLayout.groups) {
        const currentGroup = current.groups.get(slug);

        if (!currentGroup) {
          return nextLayout;
        }

        if (
          currentGroup.x !== nextGroup.x ||
          currentGroup.y !== nextGroup.y ||
          currentGroup.width !== nextGroup.width ||
          currentGroup.height !== nextGroup.height
        ) {
          return nextLayout;
        }
      }

      return current;
    });
  }, [groups]);

  const scheduleLayout = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      calculateLayout();
    });
  }, [calculateLayout]);

  useIsomorphicLayoutEffect(() => {
    scheduleLayout();
  }, [scheduleLayout]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      scheduleLayout();
    });

    resizeObserver.observe(canvas);

    for (const element of groupRefs.current.values()) {
      resizeObserver.observe(element);
    }

    window.addEventListener('resize', scheduleLayout);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener('resize', scheduleLayout);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [groups, scheduleLayout]);

  const mobile =
    layout.width < DESKTOP_BREAKPOINT ||
    (() => {
      const levels = getGroupLevels(groups);

      const availableWidth =
        layout.width - DESKTOP_GROUP_GAP * Math.max(0, levels.length - 1);

      return availableWidth < DESKTOP_MIN_GROUP_WIDTH * levels.length;
    })();

  const connections = layout.ready
    ? createConnections(groups, layout.groups, mobile)
    : [];

  return (
    <div
      ref={canvasRef}
      className={`${styles.relations} ${
        layout.ready ? styles.relations_ready : ''
      }`}
      style={{
        minHeight: layout.ready ? layout.height : 500,
      }}
    >
      <svg
        className={styles.relations__svg}
        width={layout.width}
        height={layout.height}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <marker
            id={markerId}
            className={styles.relations__marker}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M 0 0 L 8 4 L 0 8 Z" />
          </marker>
        </defs>

        <g className={styles.relations__paths}>
          {connections.map((connection) => (
            <path
              key={connection.id}
              className={styles.relations__path}
              d={createPath(connection.points, mobile)}
              markerEnd={`url(#${markerId})`}
            />
          ))}
        </g>
      </svg>

      <div className={styles.relations__groups}>
        {groups.map((group) => {
          const groupLayout = layout.groups.get(group.slug);

          const style = groupLayout
            ? {
                width: `${groupLayout.width}px`,
                transform: `translate3d(${groupLayout.x}px, ${groupLayout.y}px, 0)`,
              }
            : {
                width: 'min(320px, calc(100% - 32px))',
                transform: 'translate3d(0, 0, 0)',
              };

          return (
            <div
              key={group.slug}
              ref={(element) => {
                if (element) {
                  groupRefs.current.set(group.slug, element);
                } else {
                  groupRefs.current.delete(group.slug);
                }
              }}
              className={styles.relations__group}
              style={style}
              data-tech-stack-group={group.slug}
            >
              <TechStackGroup group={group} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
