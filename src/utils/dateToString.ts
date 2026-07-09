import type { Locale } from '@/i18n/locale';

export function dateToString(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short'
  });
}
