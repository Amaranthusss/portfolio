'use client';
import { Switch } from '../switch/switch';

import { useThemeHandler } from '@/hooks/useThemeHandler';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { ContrastThemeSwitchProps } from './contrast-theme-switch.interface';
import type { ChangeEvent } from 'react';

export function ContrastThemeSwitch({
  showLabel = true,
}: ContrastThemeSwitchProps): React.ReactNode {
  const { isContrastTheme, setContrastTheme } = useThemeHandler();
  const [checked, setChecked] = useState<boolean>(isContrastTheme());
  const t = useTranslations('common.themes');

  const onChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ): void => {
    const value: boolean = e.target.checked;

    setChecked(value);
    setContrastTheme(value);
  };

  return (
    <>
      {showLabel && (
        <span style={{ marginRight: 'var(--space-4)' }}>
          {t('contrast-switch')}
        </span>
      )}

      <Switch checked={checked} onChange={onChange} />
    </>
  );
}
