import type { PrimaryTextProps } from './primary-text.interface';

import styles from './primary-text.module.scss';

export function PrimaryText({
  style,
  children,
  className,
}: PrimaryTextProps): React.ReactNode {
  const classNames: string = [styles.primary_text, className]
    .filter((c) => c != null)
    .join(' ');

  return (
    <span style={style} className={classNames}>
      {children}
    </span>
  );
}
