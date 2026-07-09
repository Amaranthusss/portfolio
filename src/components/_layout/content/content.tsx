import type { PropsWithChildren } from 'react';

import styles from './content.module.scss';

export const Content = ({ children }: PropsWithChildren): React.ReactNode => {
  return (
    <main tabIndex={0} className={styles.content}>
      {children}
    </main>
  );
};
