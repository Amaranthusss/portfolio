'use client';
import { useClassName } from '@/hooks/useClassName';
import { useId } from 'react';

import type { CheckboxProps } from './checkbox.interface';

import styles from './checkbox.module.scss';

export function Checkbox({
  style,
  rootRef,
  checked,
  children,
  rootStyle,
  className,
  rootClassName,
  onChange
}: CheckboxProps): React.ReactNode {
  const { cn } = useClassName();
  const id: string = useId();

  return (
    <div style={style} className={cn(className, styles.checkboxWrapper)}>
      <input
        id={id}
        ref={rootRef}
        checked={checked}
        type={'checkbox'}
        style={rootStyle}
        onChange={(e) => onChange?.(e.target.checked)}
        className={cn(rootClassName, styles.checkbox)}
      />

      {children && <label htmlFor={id}>{children}</label>}
    </div>
  );
}
