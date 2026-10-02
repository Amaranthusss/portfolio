import { capitalize } from './capitalize';

import type { Locale } from '@/i18n/locale';

export function dateToString(date: Date, locale: Locale): string {
  return capitalize(
    date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
    })
  );
}
