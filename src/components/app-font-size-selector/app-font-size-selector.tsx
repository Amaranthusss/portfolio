'use client';
import { Select } from '../select/select';

import { useAppFontSizeSetter } from '@/hooks/useAppFontSizeSetter';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { AppFontSizeSelectorProps } from './app-font-size-selector.interface';
import type { SelectOption } from '../select/select.interface';

import { AppFontSize } from '@/constants/AppFontSize';

export function AppFontSizeSelector({
  showLabel = true
}: AppFontSizeSelectorProps): React.ReactNode {
  const { getAppFontSize, setAppFontSize } = useAppFontSizeSetter();
  const [value, setValue] = useState<AppFontSize>(getAppFontSize());
  const t = useTranslations('common.app-font-size');

  const options: SelectOption<AppFontSize>[] = [
    { value: AppFontSize.Standard, label: t('standard') },
    { value: AppFontSize.Large, label: t('large') },
    { value: AppFontSize.ExtraLarge, label: t('extra-large') }
  ];

  const onChange = (appFontSize: AppFontSize): void => {
    setValue(appFontSize);
    setAppFontSize(appFontSize);
  };

  return (
    <>
      {showLabel && (
        <span style={{ marginRight: 'var(--space-4)' }}>{t('selector')}</span>
      )}

      <Select<AppFontSize>
        value={value}
        options={options}
        onChange={onChange}
        aria-label={'app-font-size-selector'}
      />
    </>
  );
}
