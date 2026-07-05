import type { PropsWithChildren } from 'react';

import styles from './footer.module.scss';

export const Footer = ({ children }: PropsWithChildren): React.ReactNode => {
  return <footer className={styles.footer}>{children ?? <></>}</footer>;
};
