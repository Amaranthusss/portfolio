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
      <span>Oskar Szkurłat</span>
      <span>Portfolio</span>
    </a>
  );
}
