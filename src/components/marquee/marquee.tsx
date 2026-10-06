'use client';
import { useEffect, useRef, useState } from 'react';
import { useClassName } from '@/hooks/useClassName';

import type { MarqueeTrackStyle } from './marquee.interface';
import type { MarqueeProps } from './marquee.interface';
import type { MarqueeItem } from './marquee.interface';

import styles from './marquee.module.scss';

export function Marquee({
  items,
  label,
  className,
  onClick,
}: MarqueeProps): React.ReactNode {
  const [copyCount, setCopyCount] = useState<number>(2);

  const { cn, boolToClass } = useClassName();

  const viewportRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  const firstGroupRef: React.RefObject<HTMLUListElement | null> =
    useRef<HTMLUListElement | null>(null);

  useEffect((): (() => void) | undefined => {
    if (items.length < 2) return undefined;

    const viewport: HTMLDivElement | null = viewportRef.current;
    const firstGroup: HTMLUListElement | null = firstGroupRef.current;

    if (viewport == null || firstGroup == null) return undefined;

    const updateCopyCount = (): void => {
      const groupWidth: number = firstGroup.getBoundingClientRect().width;
      const viewportWidth: number = viewport.clientWidth;

      if (groupWidth === 0 || viewportWidth === 0) return;

      setCopyCount(Math.max(2, Math.ceil(viewportWidth / groupWidth) + 1));
    };

    const resizeObserver: ResizeObserver = new ResizeObserver(updateCopyCount);

    resizeObserver.observe(viewport);
    resizeObserver.observe(firstGroup);
    updateCopyCount();

    return (): void => resizeObserver.disconnect();
  }, [items.length]);

  const copyIndexes: number[] = Array.from(
    { length: copyCount },
    (_: unknown, index: number): number => index
  );

  const trackStyle: MarqueeTrackStyle = {
    '--marquee-copy-count': copyCount,
  };

  return (
    <section aria-label={label} className={cn(styles.marquee, className)}>
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.track} style={trackStyle} aria-live={'off'}>
          {copyIndexes.map((copyIndex: number): React.ReactNode => (
            <ul
              key={copyIndex}
              ref={copyIndex === 0 ? firstGroupRef : undefined}
              className={cn(
                styles.group,
                boolToClass(copyIndex > 0, styles.group_duplicate)
              )}
              aria-hidden={copyIndex > 0 ? true : undefined}
              inert={copyIndex > 0}
            >
              {items.map(
                (item: MarqueeItem, itemIndex: number): React.ReactNode => (
                  <li
                    key={`${copyIndex}-${item.key}`}
                    className={styles.item}
                    onClick={
                      copyIndex === 0 && onClick != null
                        ? (): void => onClick(item.key, itemIndex)
                        : undefined
                    }
                  >
                    {item.content}
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
