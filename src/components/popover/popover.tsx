import { Button } from '../button/button';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useClassName } from '@/hooks/useClassName';
import { usePosition } from './_hooks/usePosition';

import { createPortal } from 'react-dom';

import type { PopoverProps } from './popover.interface';

import styles from './popover.module.scss';

export function Popover({
  children,
  triggerProps,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  popoverClassName,
  placement = 'bottom'
}: PopoverProps) {
  const [popoverAttributes, setPopoverAttributes] =
    useState<React.CSSProperties>({ display: 'none' });

  const [open, setOpen] = useState<boolean>(defaultOpen);

  const { getPosition } = usePosition();
  const { cn } = useClassName();

  const isControlled: boolean = controlledOpen !== undefined;
  const actualOpen: boolean = isControlled ? (controlledOpen ?? false) : open;

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const setOpenState = (v: boolean) => {
    if (!isControlled) setOpen(v);
    onOpenChange?.(v);
  };

  useLayoutEffect(() => {
    if (!actualOpen) return;
    if (!triggerRef.current || !contentRef.current) return;

    const update = () => {
      if (!triggerRef.current || !contentRef.current) return;

      const { top, left } = getPosition(
        triggerRef.current,
        contentRef.current,
        placement
      );

      setPopoverAttributes({ top, left });
    };

    requestAnimationFrame(update);

    const raf2 = requestAnimationFrame(update);

    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(raf2);
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [actualOpen, placement]);

  useEffect(() => {
    if (!actualOpen) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        triggerRef.current?.contains(target) ||
        contentRef.current?.contains(target)
      ) {
        return;
      }

      setOpenState(false);
    };

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpenState(false);
    };

    document.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [actualOpen]);

  const trigger = (
    <Button
      ref={triggerRef}
      onClick={(): void => setOpenState(true)}
      {...triggerProps}
    />
  );

  if (!actualOpen) return trigger;

  return (
    <>
      {trigger}

      {createPortal(
        <div
          ref={contentRef}
          className={cn(styles.popover_content, popoverClassName)}
          style={{ top: popoverAttributes.top, left: popoverAttributes.left }}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
}
