import type { PropsWithChildren, ReactNode } from 'react';

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

export interface ModalProps extends PropsWithChildren {
  attachToBody?: boolean;
  title?: string;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  toolbarClassName?: string;
  toolbarOptionsClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
  toolbar?: ReactNode;
  footer?: ReactNode;
}
