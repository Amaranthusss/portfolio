import type { PropsWithChildren } from 'react';
import type { ButtonProps } from '../button/button.interface';

export interface PopoverProps extends PropsWithChildren {
  triggerProps: Omit<ButtonProps, 'onClick' | 'rootRef'>;
  open?: boolean;
	popoverClassName?: string
  defaultOpen?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  onOpenChange?: (open: boolean) => void;
}
