import { useClassName } from '@/hooks/useClassName';
import { useId } from 'react';

import type { CheckboxProps } from './checkbox.interface';

import styles from './checkbox.module.scss';

export function Checkbox({
  id,
  children,
  className,
  container,
  ...inputProps
}: CheckboxProps): React.ReactNode {
  const { cn } = useClassName();
  const uncontrolledId: string = useId();
  const usedId: string = id ?? uncontrolledId;

  return (
    <div
      {...container}
      className={cn(container?.className, styles.checkboxWrapper)}
    >
      <input
        {...inputProps}
        id={usedId}
        type={'checkbox'}
        className={cn(className, styles.checkbox)}
      />

      {children && <label htmlFor={usedId}>{children}</label>}
    </div>
  );
}
