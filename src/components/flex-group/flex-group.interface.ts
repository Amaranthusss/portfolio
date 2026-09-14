import type { CSSProperties, PropsWithChildren } from 'react';

export interface FlexGroupHandle {
  updateActiveIndicator: () => void;
}

export interface FlexGroupProps extends PropsWithChildren {
  getActiveElement?: (container: HTMLDivElement) => HTMLElement | null;
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
