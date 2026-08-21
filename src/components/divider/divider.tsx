import { useClassName } from '@/hooks/useClassName';

import type { DividerProps } from './divider.interface';

import styles from './divider.module.scss';

export function Divider({
  style,
  className,
  children,
  orientation,
}: DividerProps): React.ReactNode {
  const { cn } = useClassName();

  const classNames: string = cn(
    className,
    styles.divider,
    styles[orientation ?? 'horizontal']
  );

  return (
    <div style={style} className={classNames}>
      {children && children}
    </div>
  );
}
