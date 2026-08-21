import { AppFontSizeSelector } from '../app-font-size-selector/app-font-size-selector';
import { ContrastThemeSwitch } from '../contrast-theme-switch/contrast-theme-switch';
import { LanguageSelector } from '../language-selector/language-selector';
import { ThemeSelector } from '../theme-selector/theme-selector';
import { Popover } from '../popover/popover';
import { Icon } from '../icon/icon';

import { useTranslations } from 'next-intl';

import type { AppSettingsProps } from './app-settings.interface';
import type { PopoverProps } from '../popover/popover.interface';

import styles from './app-settings.module.scss';

export function AppSettings({
  style,
  iconOnly = true,
}: AppSettingsProps): React.ReactNode {
  const t = useTranslations('common.app-settings');

  const children: React.ReactNode = iconOnly ? (
    <Icon icon={Icon.All.Settings} />
  ) : (
    <span className={styles.full_app_settings_button}>
      <Icon icon={Icon.All.Settings} />
      {t('menu-title')}
    </span>
  );

  const settingsPopoverProps: PopoverProps['triggerProps'] = {
    children,
    style,
    square: true,
    contentStyle: !iconOnly ? { justifyContent: 'flex-start' } : undefined,
    name: 'app-settings',
    'aria-label': 'app-settings-popover',
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
