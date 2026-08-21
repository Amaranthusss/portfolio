import type { CSSProperties, PropsWithChildren } from 'react';

export interface TagProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}
