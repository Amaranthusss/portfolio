import { useClassName } from '@/hooks/useClassName';

import type { ListModuleProps } from './list-module.interface';

import styles from './list-module.module.scss';

export function ListModule({
  children,
  className,
  ...mainProps
}: ListModuleProps): React.ReactNode {
  const { cn } = useClassName();

  return (
    <main {...mainProps} className={cn(styles.list_module, className)}>
      {children}
    </main>
  );
}
