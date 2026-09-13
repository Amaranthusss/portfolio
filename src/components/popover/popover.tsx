'use client';
import { Button } from '../button/button';

import { useLayoutEffect, useState } from 'react';
import { useEffect, useId, useRef } from 'react';
import { useClassName } from '@/hooks/useClassName';
import { usePosition } from './_hooks/usePosition';

import { createPortal } from 'react-dom';

import type { PopoverProps } from './popover.interface';

import styles from './popover.module.scss';

const animationDuration = 180;

export function Popover({
  children,
  triggerProps,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  popoverClassName,
  placement = 'bottom',
}: PopoverProps) {
  const [popoverAttributes, setPopoverAttributes] =
    useState<React.CSSProperties>({});

  const [isPositioned, setIsPositioned] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(defaultOpen);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const { cn, boolToClass } = useClassName();
  const { getPosition } = usePosition();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const triggerId: string = useId();
  const triggerElementId: string = triggerProps.id ?? triggerId;
  const contentId: string = `${triggerElementId}-popover`;
  const isControlled: boolean = controlledOpen !== undefined;
  const actualOpen: boolean = isControlled ? (controlledOpen ?? false) : isOpen;

  const setOpenState = (value: boolean) => {
    if (!isControlled) setIsOpen(value);
    onOpenChange?.(value);
  };

  useLayoutEffect((): void => {
    if (actualOpen) {
      setIsMounted(true);
      setIsClosing(false);
      setIsPositioned(false);
    } else if (isMounted) {
      setIsClosing(true);
    }
  }, [actualOpen]);

  useLayoutEffect((): (() => void) | void => {
    if (!actualOpen || !isMounted) return;
    if (!triggerRef.current || !contentRef.current) return;

    const update = (): void => {
      if (!triggerRef.current || !contentRef.current) return;

      const { top, left } = getPosition(
        triggerRef.current,
        contentRef.current,
        placement
      );

      setPopoverAttributes({ top, left });
      setIsPositioned(true);
    };

    const frame: number = requestAnimationFrame(update);
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);

    return (): void => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [actualOpen, isMounted, placement]);

  useEffect((): (() => void) | void => {
    if (actualOpen || !isMounted) return;

    const timeout: number = window.setTimeout((): void => {
      setIsMounted(false);
      setIsPositioned(false);
    }, animationDuration);

    return () => window.clearTimeout(timeout);
  }, [actualOpen, isMounted]);

  useEffect((): (() => void) | void => {
    if (!actualOpen) return;

    const onClick = (event: MouseEvent) => {
      const target: Node = event.target as Node;

      const isContained: boolean =
        (triggerRef.current?.contains(target) ||
          contentRef.current?.contains(target)) ??
        false;

      if (isContained) return;

      setOpenState(false);
    };

    const onKey = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      setOpenState(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);

    return (): void => {
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [actualOpen]);

  useEffect((): (() => void) | void => {
    const trigger: HTMLButtonElement | null = triggerRef.current;

    if (trigger == null) return;

    const resizeObserver: ResizeObserver = new ResizeObserver((): void => {
      if (trigger.clientWidth !== 0) return;

      setIsClosing(false);
      setIsPositioned(false);
      setIsMounted(false);
      setOpenState(false);
    });

    resizeObserver.observe(trigger);

    return (): void => resizeObserver.disconnect();
  }, []);

  const trigger = (
    <Button
      {...triggerProps}
      ref={triggerRef}
      id={triggerElementId}
      aria-controls={contentId}
      aria-expanded={actualOpen}
      aria-haspopup={'dialog'}
      onClick={(): void => setOpenState(!actualOpen)}
    />
  );

  return (
    <>
      {trigger}

      {isMounted && typeof document !== 'undefined'
        ? createPortal(
            <div
              ref={contentRef}
              id={contentId}
              role={'dialog'}
              aria-labelledby={triggerElementId}
              className={cn(
                popoverClassName,
                styles.popover_content,
                boolToClass(isPositioned && !isClosing, styles.is_open),
                boolToClass(isClosing, styles.is_closing)
              )}
              style={{
                ...popoverAttributes,
                visibility: isPositioned ? 'visible' : 'hidden',
              }}
            >
              {children}
            </div>,
            document.body
          )
        : null}
    </>
  );
}
