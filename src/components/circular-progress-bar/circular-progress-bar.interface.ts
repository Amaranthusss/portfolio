import type { CSSProperties } from 'react';
import type { ReactNode } from 'react';

export interface CircularProgressBarProps {
  value: number;
  maxValue?: number;
  renderValue?: (value: number, maxValue: number) => string;
  color?: CSSProperties['color'];
  trackColor?: CSSProperties['stroke'];
  bgColor?: CSSProperties['backgroundColor'];
  titleClassName?: string;
  valueClassName?: string;
  title?: ReactNode;
  size?: CSSProperties['height'];
  ariaLabel?: string;
}
