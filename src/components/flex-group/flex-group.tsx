'use client';
import { Button } from '../button/button';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useImperativeHandle, useLayoutEffect } from 'react';
import { useClassName } from '@/hooks/useClassName';

import { createPortal } from 'react-dom';

import { Children } from 'react';

import type { FlexGroupHandle } from './flex-group.interface';
import type { FlexGroupProps } from './flex-group.interface';
import type { FlexGroupItems } from './flex-group.interface';

import styles from './flex-group.module.scss';

export const FlexGroup = ({
  ref,
  gap = 8,
  children,
  className,
  containerBgColor,
  getActiveElement,
  dropdownClassName,
  dropdownTopMargin = 12,
  updateDropdownOnScroll = true,
}: WithRef<FlexGroupProps, FlexGroupHandle>): React.ReactNode => {
  const items: FlexGroupItems = Children.toArray(children);

  const [visibleCount, setVisibleCount] = useState<number>(items.length);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dropdownAttributes, setDropdownAttributes] =
    useState<React.CSSProperties | null>(null);

  const [activeIndicatorStyle, setActiveIndicatorStyle] =
    useState<React.CSSProperties | null>(null);

  const moreButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const visibleItems: FlexGroupItems = items.slice(0, visibleCount);
  const overflowItems: FlexGroupItems = items.slice(visibleCount);

  const isActiveIndicator: boolean = getActiveElement != null;

  const style: CustomCSSProperties = {
    '--container-bg-color': containerBgColor,
    gap,
  };

  const MORE_WIDTH = 80;

  const { cn, boolToClass } = useClassName();

  const updateActiveIndicator = useCallback((): void => {
    const container: HTMLDivElement | null = containerRef.current;

    if (getActiveElement == null || container == null) return;

    const activeButton: HTMLElement | null = getActiveElement(container);

    if (activeButton == null) return setActiveIndicatorStyle(null);

    const containerRect: DOMRect = container.getBoundingClientRect();
    const activeButtonRect: DOMRect = activeButton.getBoundingClientRect();

    setActiveIndicatorStyle({
      left: activeButtonRect.left - containerRect.left,
      width: activeButtonRect.width,
    });
  }, [getActiveElement]);

  const measure = useCallback((): void => {
    const container: HTMLDivElement | null = containerRef.current;
    const measureBox: HTMLDivElement | null = measureRef.current;

    if (container == null || measureBox == null) return;

    const containerWidth: number = container.clientWidth;

    if (containerWidth === 0) {
      setIsOpen(false);
      setDropdownAttributes(null);

      return;
    }

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
  }, [gap]);

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
      transform: 'translateX(-50%)',
    };
  };

  const updatePosition = (): void => {
    const rect: DOMRect | undefined =
      moreButtonRef.current?.getBoundingClientRect();

    if (rect == null) return;

    setDropdownAttributes(computeDropdownPosition(rect));
  };

  const toggleDropdown = (): void => {
    if (isOpen) closeDropdown();
    else openDropdown();
  };

  const openDropdown = (): void => {
    setIsOpen(true);
    updatePosition();
  };

  const closeDropdown = (): void => {
    setIsOpen(false);
    setDropdownAttributes(null);
  };

  const setItemRef = (el: HTMLDivElement | null, i: number): void => {
    itemRefs.current[i] = el;
  };

  useLayoutEffect((): (() => void) => {
    measure();

    const resizeObserver: ResizeObserver = new ResizeObserver(measure);

    if (containerRef.current != null) {
      resizeObserver.observe(containerRef.current);
    }

    if (isActiveIndicator) {
      updateActiveIndicator();
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children, isActiveIndicator, measure, updateActiveIndicator]);

  useLayoutEffect((): void => {
    updateActiveIndicator();
  }, [isActiveIndicator, updateActiveIndicator, visibleCount]);

  useEffect((): (() => void) => {
    const onMouseDown = (e: MouseEvent): void => {
      const target = e.target as Node;

      const clickedInsideDropdown =
        dropdownRef.current?.contains(target) ?? false;

      const clickedMore: boolean =
        moreButtonRef.current?.contains(target) ?? false;

      if (!clickedInsideDropdown && !clickedMore) setIsOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const onResize = (): void => {
      updatePosition();
      updateActiveIndicator();
    };
    const onScroll = (): void => {
      updatePosition();
      updateActiveIndicator();
    };

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
  }, [updateActiveIndicator, updateDropdownOnScroll]);

  useImperativeHandle(ref, () => ({ updateActiveIndicator }), [
    updateActiveIndicator,
  ]);

  return (
    <>
      <div ref={measureRef} className={styles.measure} style={{ gap }}>
        {items.map(
          (child: FlexGroupItems[number], i: number): React.ReactNode => {
            return (
              <div
                key={i}
                className={styles.item}
                ref={(el) => setItemRef(el, i)}
              >
                {child}
              </div>
            );
          }
        )}

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
        {(!isLoading ? visibleItems : items).map(
          (child: FlexGroupItems[number], i: number): React.ReactNode => {
            return (
              <div key={i} className={styles.item}>
                {child}
              </div>
            );
          }
        )}

        {isActiveIndicator && activeIndicatorStyle != null && (
          <span
            aria-hidden="true"
            className={styles.active_indicator}
            style={activeIndicatorStyle}
          />
        )}

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

      {isOpen &&
        dropdownAttributes != null &&
        overflowItems.length > 0 &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownAttributes}
            className={cn(styles.dropdown, dropdownClassName)}
          >
            {overflowItems.map(
              (child: FlexGroupItems[number], i: number): React.ReactNode => {
                return (
                  <div key={i} className={styles.dropdownItem}>
                    {child}
                  </div>
                );
              }
            )}
          </div>,
          document.body
        )}
    </>
  );
};
