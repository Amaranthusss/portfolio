import type { ComponentPropsWithRef } from 'react';

export interface TooltipProps extends ComponentPropsWithRef<'span'> {
  title: string;
  placement?: TooltipPlacement;
}

export interface Position {
  top: number;
  left: number;
}

export interface TooltipSize {
  width: number;
  height: number;
}

export enum TooltipPlacement {
  Top = 'top',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  Bottom = 'bottom',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  Left = 'left',
  LeftStart = 'left-start',
  LeftEnd = 'left-end',
  Right = 'right',
  RightStart = 'right-start',
  RightEnd = 'right-end',
}
