import { AdvancedSearch } from '@/components/advanced-search/advanced-search.server';
import { AppSettings } from '@/components/app-settings/app-settings';
import { NavMenu } from './_components/nav-menu/nav-menu';
import { Logo } from '@/components/logo/logo';

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />

      <div className={styles.right_side}>
        <AdvancedSearch />
        <AppSettings />
      </div>
    </header>
  );
};
