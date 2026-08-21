import { useClassName } from '@/hooks/useClassName';

import type { TagProps } from './tag.interface';

import styles from './tag.module.scss';

export function Tag({
  theme,
  style,
  className,
  children,
}: TagProps): React.ReactNode {
  const { cn } = useClassName();

  return (
    <div style={{ ...theme, ...style }} className={cn(styles.tag, className)}>
      {children}
    </div>
  );
}
