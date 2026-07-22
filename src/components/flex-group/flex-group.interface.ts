import type { CSSProperties, PropsWithChildren } from 'react';

export interface FlexGroupProps extends PropsWithChildren {
  updateDropdownOnScroll?: boolean;
  dropdownClassName?: string;
  containerBgColor?: CSSProperties['background'];
  className?: string;
  dropdownTopMargin?: number;
  gap?: number;
}
