import type { ComponentPropsWithRef } from 'react';
import type { PropsWithChildren } from 'react';
import type { CSSProperties } from 'react';

export interface ButtonBaseProps extends PropsWithChildren {
  mode?: 'primary' | 'default' | 'text';
  animated?: boolean;
  square?: boolean;
  active?: boolean;
  centerVertical?: boolean;
  contentStyle?: CSSProperties;
}

export type ButtonProps = ButtonBaseProps & ComponentPropsWithRef<'button'>;
