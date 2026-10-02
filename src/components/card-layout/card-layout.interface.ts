import type { PropsWithChildren, ReactNode } from 'react';

export interface CardLayoutProps extends PropsWithChildren {
  disableIcon?: boolean;
}

export interface CardLayoutSectionProps extends PropsWithChildren {}

export interface CardLayoutComponent {
  ({ children }: CardLayoutProps): ReactNode;
  Icon: ({ children }: CardLayoutSectionProps) => ReactNode;
  Header: ({ children }: CardLayoutSectionProps) => ReactNode;
  Skills: ({ children }: CardLayoutSectionProps) => ReactNode;
  Content: ({ children }: CardLayoutSectionProps) => ReactNode;
}
