import { ContrastThemeSwitch } from '@/components/contrast-theme-switch/contrast-theme-switch';
import { AppFontSizeSelector } from '@/components/app-font-size-selector/app-font-size-selector';
import { LanguageSelector } from '@/components/language-selector/language-selector';
import { AdvancedSearch } from '@/components/advanced-search/advanced-search.server';
import { ThemeSelector } from '@/components/theme-selector/theme-selector';
import { NavMenu } from './_components/nav-menu/nav-menu';
import { Popover } from '@/components/popover/popover';
import { Icon } from '@/components/icon/icon';

import type { PopoverProps } from '@/components/popover/popover.interface';

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
  const settingsPopoverProps: PopoverProps['triggerProps'] = {
    centerContent: true,
    name: 'app-settings',
    children: <Icon icon={Icon.All.Settings} />,
    'aria-label': 'app-settings-popover',
    style: { marginLeft: 'var(--space-2)', minWidth: 'var(--control-height)' }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Oskar Szkurłat</span>
        <span>Portfolio</span>
      </div>

      <NavMenu />

      <div className={styles.right_side}>
        <AdvancedSearch />

        <Popover
          triggerProps={settingsPopoverProps}
          popoverClassName={styles.settings_popover}
        >
          <div>
            <LanguageSelector />
          </div>

          <div>
            <ThemeSelector />
          </div>

          <div>
            <AppFontSizeSelector />
          </div>

          <div>
            <ContrastThemeSwitch />
          </div>
        </Popover>
      </div>
    </header>
  );
};
