import type { PropsWithChildren } from 'react';

export interface TitleProps extends PropsWithChildren {
  level?: 1 | 2 | 3;
  size?: 'md' | 'lg' | 'xl';
}
