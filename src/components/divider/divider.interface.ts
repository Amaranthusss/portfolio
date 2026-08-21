import type { CSSProperties, PropsWithChildren } from 'react';

export interface DividerProps extends PropsWithChildren {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: CSSProperties;
}
