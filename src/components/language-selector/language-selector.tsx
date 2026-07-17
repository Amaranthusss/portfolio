'use client';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

import { Select } from '../select/select';

import type { LanguageSelectorProps } from './language-selector.interface';
import type { SelectOption } from '../select/select.interface';
import type { Locale } from '@/i18n/locale';

export function LanguageSelector({
  showLabel = true
}: LanguageSelectorProps): React.ReactNode {
  const locale: Locale = useLocale();
  const pathname: string = usePathname();
  const router = useRouter();
  const t = useTranslations('common.language-selector');

  const options: SelectOption<Locale>[] = [
    { label: 'Polski (PL)', value: 'pl' },
    { label: 'English (GB)', value: 'en' }
  ];

  const onChange = (locale: Locale): void => {
    router.replace(pathname, { locale });
  };

  return (
    <>
      {showLabel && (
        <span style={{ marginRight: 'var(--space-4)' }}>{t('selector')}</span>
      )}

      <Select<Locale>
        value={locale}
        options={options}
        onChange={onChange}
        aria-label={'language-selector'}
      />
    </>
  );
}
