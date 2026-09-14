import type { PropsWithChildren, ReactNode, RefObject } from 'react';
import type { ButtonProps } from '../button/button.interface';

export interface ModalHandle {
  bodyRef: RefObject<HTMLDivElement | null>;
  open: () => void;
  close: () => void;
}

export interface ModalProps extends PropsWithChildren {
  attachToBody?: boolean;
  title: string;
  footer?: ReactNode;
  toolbar?: ReactNode;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  toolbarClassName?: string;
  toolbarOptionsClassName?: string;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  onOpen?: () => void;
  onClose?: () => void;
}
