import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren, ComponentPropsWithRef<'button'> {
  mode?: 'primary' | 'default' | 'text';
  animated?: boolean;
  active?: boolean;
  centerContent?: boolean;
}
