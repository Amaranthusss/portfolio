'use client';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

import { useImperativeHandle, useRef, useState } from 'react';
import { useCallback, useEffect } from 'react';
import { useOpenAnimations } from './_hooks/useOpenAnimations';
import { useCloseShortcut } from './_hooks/useCloseShortcut';
import { useDragAndDrop } from './_hooks/useDragAndDrop';
import { useClassName } from '@/hooks/useClassName';

import { createPortal } from 'react-dom';

import type { ModalHandle, ModalProps } from './modal.interface';

import styles from './modal.module.scss';

export function Modal({
  ref,
  title,
  onOpen,
  onClose,
  children,
  className,
  footer,
  toolbar,
  bodyClassName,
  footerClassName,
  toolbarClassName,
  attachToBody = true
}: WithRef<ModalProps, ModalHandle>): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const { cn, boolToClass } = useClassName();

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

  const classNames: string = cn(
    className,
    styles.modal,
    boolToClass(footer != null, styles.with_footer)
  );

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
      className={classNames}
      aria-modal
      tabIndex={-1}
      role={'dialog'}
      aria-labelledby={title}
    >
      <div ref={toolbarRef} className={cn(styles.toolbar, toolbarClassName)}>
        {title != null && title.length > 0 && (
          <span className={styles.title}>{title}</span>
        )}

        <div>
          {toolbar && toolbar}

          <Button
            mode={'text'}
            centerVertical
            aria-label={'close-modal'}
            onClick={close}
          >
            <Icon icon={Icon.All.Close} />
          </Button>
        </div>
      </div>

      <div className={cn(styles.modal_body, bodyClassName)}>{children}</div>

      {footer && (
        <div className={cn(styles.modal_footer, footerClassName)}>{footer}</div>
      )}
    </div>
  );

  return attachToBody ? createPortal(content, document.body) : content;
}
