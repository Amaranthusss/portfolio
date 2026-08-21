import { dateToWord } from './dateToWord';

import type { Locale } from '@/i18n/locale';

export function diffYearsMonths(
  startDate: Date,
  endDate: Date,
  locale: Locale
): string {
  const from: Date = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const to: Date = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

  let years: number = to.getFullYear() - from.getFullYear();
  let months: number = to.getMonth() - from.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) parts.push(dateToWord(years, 'year', locale));
  if (months > 0) parts.push(dateToWord(months, 'month', locale));

  if (years === 0 && months === 0) {
    const millisecondsPerDay: number = 1000 * 60 * 60 * 24;

    let days: number = Math.round(
      (endDate.getTime() - startDate.getTime()) / millisecondsPerDay
    );

    if (days === 0) days = 1;

    parts.push(dateToWord(days, 'day', locale));
  }

  return parts.join(' ');
}
