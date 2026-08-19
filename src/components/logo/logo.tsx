import { Route } from '@/constants/Route';
import styles from './logo.module.scss';

export function Logo(): React.ReactNode {
  return (
    <a
      href={Route.Homepage}
      className={styles.logo}
      aria-label={'portfolio-logo'}
    >
      <span>Oskar Szkurłat</span>
      <span>Portfolio</span>
    </a>
  );
}
