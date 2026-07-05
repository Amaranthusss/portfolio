import type { PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren, CommonProps<HTMLButtonElement> {
  type?: 'primary' | 'default' | 'text';
  animated?: boolean;
  active?: boolean;
  centerContent?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
