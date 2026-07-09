import { createClassNames } from '@/utils/createClassNames';

import type { ListModuleProps } from './list-module.interface';

import styles from './list-module.module.scss';

export async function ListModule({
  children,
  className,
  ...mainProps
}: ListModuleProps): Promise<React.ReactNode> {
  const { cn } = await createClassNames();

  return (
    <section {...mainProps} className={cn(styles.list_module, className)}>
      {children}
    </section>
  );
}
