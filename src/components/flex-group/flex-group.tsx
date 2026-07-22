'use client';
import { Button } from '../button/button';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useClassName } from '@/hooks/useClassName';

import { createPortal } from 'react-dom';
import { Children } from 'react';

import type { FlexGroupProps } from './flex-group.interface';
import type { CSSProperties } from 'react';

import styles from './flex-group.module.scss';

type Items = Array<Exclude<React.ReactNode, boolean | null | undefined>>;

export const FlexGroup = ({
  gap = 8,
  children,
  className,
  containerBgColor,
  dropdownClassName,
  dropdownTopMargin = 12,
  updateDropdownOnScroll = true
}: FlexGroupProps): React.ReactNode => {
  const items: Items = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState<number>(items.length);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const [dropdownAttributes, setDropdownAttributes] =
    useState<React.CSSProperties | null>(null);

  const { cn, boolToClass } = useClassName();

  const moreButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const MORE_WIDTH = 80;

  const measure = (): void => {
    const container: HTMLDivElement | null = containerRef.current;
    const measureBox: HTMLDivElement | null = measureRef.current;

    if (container == null || measureBox == null) return;

    const containerWidth: number = container.clientWidth;

    const widths: number[] = Array.from(itemRefs.current).map(
      (el: HTMLDivElement | null): number => el?.offsetWidth ?? 0
    );

    let used: number = 0;
    let count: number = 0;

    for (let i: number = 0; i < widths.length; i++) {
      const remaining: number = widths.length - i - 1;
      const reserve: 0 | typeof MORE_WIDTH = remaining > 0 ? MORE_WIDTH : 0;
      const widthWithGap: number = widths[i] + gap;
      const totalWidth: number = used + widthWithGap + reserve;

      if (totalWidth > containerWidth) break;

      used += widthWithGap;
      count++;
    }

    setVisibleCount(count);
    setIsLoading(false);
  };

  useLayoutEffect(() => {
    measure();

    const resizeObserver: ResizeObserver = new ResizeObserver(measure);

    if (containerRef.current != null) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [children]);

  const computeDropdownPosition = (rect: DOMRect): React.CSSProperties => {
    const PADDING = 24;
    const viewportWidth: number = window.innerWidth;
    const viewportHeight: number = window.innerHeight;
    const left: number = rect.right - MORE_WIDTH / 2;
    const top: number = rect.bottom + dropdownTopMargin;
    const maxHeight: number = viewportHeight - top - PADDING;
    const maxWidth: number = viewportWidth - PADDING * 2;

    const safeLeft: number = Math.min(
      Math.max(PADDING, left),
      viewportWidth - MORE_WIDTH - PADDING
    );

    const safeTop: number = Math.min(top, viewportHeight - PADDING);

    return {
      top: safeTop,
      left: safeLeft,
      maxHeight,
      maxWidth,
      transform: 'translateX(-50%)'
    };
  };

  const updatePosition = (): void => {
    const rect: DOMRect | undefined =
      moreButtonRef.current?.getBoundingClientRect();

    if (rect == null) return;

    setDropdownAttributes(computeDropdownPosition(rect));
  };

  const toggleDropdown = (): void => {
    if (open) closeDropdown();
    else openDropdown();
  };

  const openDropdown = (): void => {
    setOpen(true);
    updatePosition();
  };

  const closeDropdown = (): void => {
    setOpen(false);
    setDropdownAttributes(null);
  };

  useEffect(() => {
    const onMouseDown = (e: MouseEvent): void => {
      const target = e.target as Node;

      const clickedInsideDropdown =
        dropdownRef.current?.contains(target) ?? false;

      const clickedMore: boolean =
        moreButtonRef.current?.contains(target) ?? false;

      if (!clickedInsideDropdown && !clickedMore) setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onResize = (): void => updatePosition();
    const onScroll = (): void => updatePosition();

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    if (updateDropdownOnScroll) {
      window.addEventListener('scroll', onScroll, true);
    }

    return (): void => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);

      if (updateDropdownOnScroll) {
        window.removeEventListener('scroll', onScroll, true);
      }
    };
  }, [updateDropdownOnScroll]);

  const visibleItems: Items = items.slice(0, visibleCount);
  const overflowItems: Items = items.slice(visibleCount);

  const style: CSSProperties = {
    '--container-bg-color': containerBgColor,
    gap
  } as CSSProperties;

  return (
    <>
      <div ref={measureRef} className={styles.measure} style={{ gap }}>
        {items.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={styles.item}
          >
            {child}
          </div>
        ))}

        <div className={styles.moreMeasure} />
      </div>

      <div
        ref={containerRef}
        style={style}
        className={cn(
          className,
          styles.container,
          boolToClass(isLoading, styles.loading)
        )}
      >
        {(!isLoading ? visibleItems : items).map((child, i) => (
          <div key={i} className={styles.item}>
            {child}
          </div>
        ))}

        {!isLoading && overflowItems.length > 0 && (
          <Button
            ref={moreButtonRef}
            className={styles.more}
            aria-label={'show-more-hidden-flex-group-elements'}
            onClick={toggleDropdown}
          >
            ⋯
          </Button>
        )}
      </div>

      {open &&
        dropdownAttributes != null &&
        overflowItems.length > 0 &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownAttributes}
            className={cn(styles.dropdown, dropdownClassName)}
          >
            {overflowItems.map((child, i) => {
              return (
                <div key={i} className={styles.dropdownItem}>
                  {child}
                </div>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
};
