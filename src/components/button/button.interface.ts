import type { ComponentPropsWithRef } from 'react';
import type { PropsWithChildren } from 'react';
import type { CSSProperties } from 'react';

export interface ButtonProps
  extends PropsWithChildren, ComponentPropsWithRef<'button'> {
  mode?: 'primary' | 'default' | 'text';
  animated?: boolean;
  square?: boolean;
  active?: boolean;
  centerVertical?: boolean;
  contentStyle?: CSSProperties;
}
