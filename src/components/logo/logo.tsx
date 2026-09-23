import { Icon } from '../icon/icon';

import { Route } from '@/constants/Route';

import { useClassName } from '@/hooks/useClassName';

import type { LogoProps } from './logo.interface';

import styles from './logo.module.scss';

export function Logo({ className }: LogoProps): React.ReactNode {
  const { cn } = useClassName();

  return (
    <a
      href={Route.Homepage}
      className={cn(styles.logo, className)}
      aria-label={'portfolio-logo'}
    >
      <Icon icon={Icon.All.OSzkurlat} className={styles.image} />
      <span className={styles.name}>Oskar Szkurłat</span>
      <span className={styles.app}>Portfolio</span>
    </a>
  );
}
