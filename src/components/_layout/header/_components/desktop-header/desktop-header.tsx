import { DownloadCvButton } from '@/components/download-cv-button/download-cv-button';
import { DesktopNavButtons } from './_components/desktop-nav-buttons/desktop-nav-buttons';
import { AdvancedSearch } from '@/components/advanced-search/advanced-search.server';
import { AppSettings } from '@/components/app-settings/app-settings';
import { Logo } from '@/components/logo/logo';

import { useClassName } from '@/hooks/useClassName';

import type { DesktopHeaderProps } from './desktop-header.interface';

import styles from './desktop-header.module.scss';

export function DesktopHeader({
  menuItems,
  className,
}: DesktopHeaderProps): React.ReactNode {
  const { cn } = useClassName();

  return (
    <header className={cn(styles.header, className)}>
      <Logo />
      <DesktopNavButtons menuItems={menuItems} />

      <div className={styles.right_side}>
        <DownloadCvButton mode={'default'} showText={false} />
        <AdvancedSearch />
        <AppSettings />
      </div>
    </header>
  );
}
