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
import type { MouseEvent } from 'react';

import styles from './modal.module.scss';

export function Modal({
  ref,
  title,
  footer,
  onOpen,
  onClose,
  toolbar,
  children,
  className,
  bodyClassName,
  footerClassName,
  toolbarClassName,
  closeButtonProps,
  toolbarOptionsClassName,
  attachToBody = true,
}: WithRef<ModalProps, ModalHandle>): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const { cn, boolToClass } = useClassName();

  const classNames: string = cn(
    className,
    styles.modal,
    boolToClass(footer != null, styles.with_footer)
  );

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

  const closeHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      closeButtonProps?.onClick?.(e);
      close();
    },
    [close, closeButtonProps]
  );

  useDragAndDrop(isVisible, modalRef, titleRef);
  useCloseShortcut(isOpen, close);
  useOpenAnimations(isOpen, isVisible, modalRef, setIsVisible);

  useEffect((): void => {
    if (!isOpen) return;
    modalRef.current?.focus();
  }, [isOpen]);

  useImperativeHandle(ref, () => ({ bodyRef, open, close }), [
    bodyRef,
    close,
    open,
  ]);

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
      <div className={cn(styles.toolbar, toolbarClassName)}>
        {title != null && title.length > 0 && (
          <span ref={titleRef} className={styles.title}>
            {title}
          </span>
        )}

        <div className={cn(styles.options, toolbarOptionsClassName)}>
          {toolbar && toolbar}

          <Button
            mode={'text'}
            centerVertical
            aria-label={'close-modal'}
            {...closeButtonProps}
            onClick={closeHandler}
          >
            <Icon icon={Icon.All.Close} />
          </Button>
        </div>
      </div>

      <div ref={bodyRef} className={cn(styles.modal_body, bodyClassName)}>
        {children}
      </div>

      {footer && (
        <div className={cn(styles.modal_footer, footerClassName)}>{footer}</div>
      )}
    </div>
  );

  return attachToBody ? createPortal(content, document.body) : content;
}
