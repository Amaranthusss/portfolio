'use client';
import { calculatePosition } from './_utils/calculatePosition';
import { createPortal } from 'react-dom';

import { useCallback, useEffect, useId, useRef, useState } from 'react';

import type { Position, TooltipProps, TooltipSize } from './tooltip.interface';
import type { CSSProperties, PointerEvent } from 'react';

import { TooltipPlacement } from './tooltip.interface';

import styles from './tooltip.module.scss';

export function Tooltip({
  title,
  placement = TooltipPlacement.Top,
  children,
  ...spanProps
}: TooltipProps) {
  const [position, setPosition] = useState<Position | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const tooltipId: string = useId();

  const updatePosition = useCallback((): void => {
    const trigger: HTMLSpanElement | null = triggerRef.current;
    const tooltip: HTMLDivElement | null = tooltipRef.current;

    if (trigger == null || tooltip == null) return;

    const triggerRect: DOMRect = trigger.getBoundingClientRect();

    const tooltipSize: TooltipSize = {
      width: tooltip.offsetWidth,
      height: tooltip.offsetHeight,
    };

    setPosition(
      calculatePosition(
        triggerRect,
        tooltipSize,
        placement,
        window.innerWidth,
        window.innerHeight
      )
    );
  }, [placement]);

  const handlePointerEnter = (event: PointerEvent<HTMLSpanElement>): void => {
    spanProps.onPointerEnter?.(event);
    if (event.pointerType === 'mouse') setIsOpen(true);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLSpanElement>): void => {
    spanProps.onPointerLeave?.(event);
    if (event.pointerType === 'mouse') setIsOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>): void => {
    spanProps.onClick?.(event);

    if (!window.matchMedia('(hover: hover)').matches) {
      setIsOpen((current: boolean): boolean => !current);
    }
  };

  useEffect((): (() => void) | void => {
    if (!isOpen) return setPosition(null);

    const handleResize = (): void => updatePosition();
    const handleScroll = (): void => updatePosition();

    updatePosition();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return (): void => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen, updatePosition]);

  useEffect((): (() => void) | void => {
    if (!isOpen) return;

    const handlePointerDown = (event: globalThis.PointerEvent): void => {
      const target: EventTarget | null = event.target;

      if (!(target instanceof Node)) return;

      const trigger: HTMLSpanElement | null = triggerRef.current;
      const tooltip: HTMLDivElement | null = tooltipRef.current;

      if (trigger?.contains(target) || tooltip?.contains(target)) return;

      setIsOpen(false);
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return (): void => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <span
        {...spanProps}
        ref={triggerRef}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        aria-describedby={isOpen ? tooltipId : undefined}
      >
        {children}
      </span>

      {isOpen &&
        createPortal(
          <div
            ref={tooltipRef}
            id={tooltipId}
            className={styles.tooltip}
            style={
              position != null
                ? ({
                    top: position.top,
                    left: position.left,
                  } satisfies CSSProperties)
                : undefined
            }
            role={'tooltip'}
          >
            {title}
          </div>,
          document.body
        )}
    </>
  );
}
