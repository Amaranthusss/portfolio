import { AdvancedSearch } from '@/components/advanced-search/advanced-search.server';
import { AppSettings } from '@/components/app-settings/app-settings';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { NavButton } from '../nav-button/nav-button';
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

      <FlexGroup
        dropdownTopMargin={24}
        dropdownClassName={styles.dropdown}
        className={styles.menu_items}
        containerBgColor={'var(--layout-bg-color)'}
        updateDropdownOnScroll={false}
      >
        {menuItems.map((menuItem): React.ReactNode => (
          <NavButton
            key={menuItem.text}
            menuItem={menuItem}
            className={styles.nav_button}
          />
        ))}
      </FlexGroup>

      <div className={styles.right_side}>
        <AdvancedSearch />
        <AppSettings />
      </div>
    </header>
  );
}
