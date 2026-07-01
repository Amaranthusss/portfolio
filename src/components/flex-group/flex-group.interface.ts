import type { PropsWithChildren } from 'react';

export interface FlexGroupProps extends PropsWithChildren {
  updateDropdownOnScroll?: boolean;
  dropdownClassName?: string;
  className?: string;
  dropdownTopMargin?: number;
  gap?: number;
}
