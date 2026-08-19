import { AppFontSizeSelector } from '../app-font-size-selector/app-font-size-selector';
import { ContrastThemeSwitch } from '../contrast-theme-switch/contrast-theme-switch';
import { LanguageSelector } from '../language-selector/language-selector';
import { ThemeSelector } from '../theme-selector/theme-selector';
import { Popover } from '../popover/popover';
import { Icon } from '../icon/icon';

import type { PopoverProps } from '../popover/popover.interface';

import styles from './app-settings.module.scss';

export function AppSettings(): React.ReactNode {
  const settingsPopoverProps: PopoverProps['triggerProps'] = {
    square: true,
    centerContent: true,
    name: 'app-settings',
    children: <Icon icon={Icon.All.Settings} />,
    'aria-label': 'app-settings-popover',
    style: { marginLeft: 'var(--space-2)' },
  };

  return (
    <Popover
      triggerProps={settingsPopoverProps}
      popoverClassName={styles.settings_popover}
    >
      <LanguageSelector />
      <ThemeSelector />
      <AppFontSizeSelector />
      <ContrastThemeSwitch />
    </Popover>
  );
}
