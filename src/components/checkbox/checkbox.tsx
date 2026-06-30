'use client';
import { useId } from 'react';

import type { CheckboxProps } from './checkbox.interface';

import styles from './checkbox.module.scss';

export function Checkbox({
  children,
  checked,
  onChange,
}: CheckboxProps): React.ReactNode {
  const id: string = useId();

  return (
    <div className={styles.checkboxWrapper}>
      <input
        id={id}
        checked={checked}
        type={'checkbox'}
        onChange={(e) => onChange?.(e.target.checked)}
        className={styles.checkbox}
      />

      {children && <label htmlFor={id}>{children}</label>}
    </div>
  );
}
