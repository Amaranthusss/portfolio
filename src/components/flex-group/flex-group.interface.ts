import type { CSSProperties, PropsWithChildren } from 'react';

export interface FlexGroupProps extends PropsWithChildren {
  activeIndicator?: boolean;
  updateDropdownOnScroll?: boolean;
  dropdownClassName?: string;
  containerBgColor?: CSSProperties['background'];
  className?: string;
  dropdownTopMargin?: number;
  gap?: number;
}

export type FlexGroupItems = Array<
  Exclude<React.ReactNode, boolean | null | undefined>
>;
