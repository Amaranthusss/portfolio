'use client';
import { useImperativeHandle, useRef, useState } from 'react';
import { useCallback, useEffect } from 'react';
import { useOpenAnimations } from './_hooks/useOpenAnimations';
import { useCloseShortcut } from './_hooks/useCloseShortcut';
import { useDragAndDrop } from './_hooks/useDragAndDrop';
import { useClassName } from '@/hooks/useClassName';

import { createPortal } from 'react-dom';

import type { ModalHandle, ModalProps } from './modal.interface';

import styles from './modal.module.scss';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

export function Modal({
  ref,
  title,
  onOpen,
  onClose,
  children,
  className,
  bodyClassName,
  toolbarClassName,
  attachToBody = true
}: WithRef<ModalProps, ModalHandle>): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const { cn } = useClassName();

  const open = useCallback((): void => {
    if (isOpen) return;
    setIsVisible(true);
    setIsOpen(true);
    onOpen?.();
  }, [isOpen, onOpen]);

  const close = useCallback((): void => {
    if (!isOpen) return;
    setIsOpen(false);
    onClose?.();
  }, [isOpen, onClose]);

  useDragAndDrop(isVisible, modalRef, toolbarRef);
  useCloseShortcut(isOpen, close);
  useOpenAnimations(isOpen, isVisible, modalRef, setIsVisible);

  useEffect((): void => {
    if (!isOpen) return;
    modalRef.current?.focus();
  }, [isOpen]);

  useImperativeHandle(ref, () => ({ open, close }), [open, close]);

  if (!isVisible) return null;

  const content = (
    <div
      ref={modalRef}
      className={cn(styles.modal, className)}
      aria-modal
      tabIndex={-1}
      role={'dialog'}
      aria-labelledby={title}
    >
      <div ref={toolbarRef} className={cn(styles.toolbar, toolbarClassName)}>
        {title != null && title.length > 0 && (
          <span className={styles.title}>{title}</span>
        )}

        <Button
          mode={'text'}
          centerVertical
          aria-label={'close-modal'}
          onClick={close}
        >
          <Icon icon={Icon.All.Close} />
        </Button>
      </div>

      <div className={cn(styles.modal_body, bodyClassName)}>{children}</div>
    </div>
  );

  return attachToBody ? createPortal(content, document.body) : content;
}
