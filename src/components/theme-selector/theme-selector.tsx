'use client';
import { Select } from '../select/select';

import { useTranslations } from 'next-intl';
import { useThemeHandler } from '@/hooks/useThemeHandler';
import { useState } from 'react';

import type { ThemeSelectorProps } from './theme-selector.interface';
import type { SelectOption } from '../select/select.interface';

import { ThemeOption } from '@/constants/ThemeOption';

export function ThemeSelector({
  showLabel = true,
}: ThemeSelectorProps): React.ReactNode {
  const { getThemeOption, setTheme } = useThemeHandler();
  const [value, setValue] = useState<ThemeOption>(getThemeOption());
  const t = useTranslations('common.themes');

  const options: SelectOption<ThemeOption>[] = [
    { value: ThemeOption.Light, label: t('light') },
    { value: ThemeOption.Dark, label: t('dark') },
    { value: ThemeOption.System, label: t('system') },
  ];

  const onChange = (theme: ThemeOption): void => {
    setValue(theme);
    setTheme(theme);
  };

  return (
    <>
      {showLabel && (
        <span style={{ marginRight: 'var(--space-4)' }}>{t('selector')}</span>
      )}

      <Select<ThemeOption>
        value={value}
        options={options}
        onChange={onChange}
        aria-label={'theme-selector'}
      />
    </>
  );
}
