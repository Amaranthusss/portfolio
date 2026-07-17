'use client';
import { Select } from '../select/select';

import { useTranslations } from 'next-intl';
import { useThemeSetter } from '@/hooks/useThemeSetter';
import { useState } from 'react';

import type { ThemeSelectorProps } from './theme-selector.interface';
import type { SelectOption } from '../select/select.interface';

import { Theme } from '@/constants/Theme';

export function ThemeSelector({
  showLabel = true
}: ThemeSelectorProps): React.ReactNode {
  const { getTheme, setTheme } = useThemeSetter();
  const [value, setValue] = useState<Theme>(getTheme());
  const t = useTranslations('common.themes');

  const options: SelectOption<Theme>[] = [
    { value: Theme.Light, label: t('light') },
    { value: Theme.Dark, label: t('dark') },
    { value: Theme.System, label: t('system') }
  ];

  const onChange = (theme: Theme): void => {
    setValue(theme);
    setTheme(theme);
  };

  return (
    <>
      {showLabel && (
        <span style={{ marginRight: 'var(--space-4)' }}>{t('selector')}</span>
      )}

      <Select<Theme>
        value={value}
        options={options}
        onChange={onChange}
        aria-label={'theme-selector'}
      />
    </>
  );
}
