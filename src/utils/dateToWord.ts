import type { Locale } from '@/i18n/locale';

type Unit = 'year' | 'month' | 'day';

interface WordDictionary {
  one: string;
  few: string;
  many: string;
}

function toWord(value: number, dictionary: WordDictionary): string {
  if (value === 1) return dictionary.one;

  const lastTwoDigits: number = value % 100;
  const lastDigit: number = value % 10;

  if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return dictionary.few;
  }

  return dictionary.many;
}

export function dateToWord(value: number, unit: Unit, locale: Locale): string {
  const yearWordDict: WordDictionary | null =
    locale === 'pl'
      ? {
          one: 'rok',
          few: 'lata',
          many: 'lat',
        }
      : locale == 'en'
        ? {
            one: 'year',
            few: 'years',
            many: 'years',
          }
        : null;

  const monthWordDict: WordDictionary | null =
    locale === 'pl'
      ? {
          one: 'miesiąc',
          few: 'miesiące',
          many: 'miesięcy',
        }
      : locale == 'en'
        ? {
            one: 'month',
            few: 'months',
            many: 'months',
          }
        : null;

  const dayWordDict: WordDictionary | null =
    locale === 'pl'
      ? {
          one: 'dzień',
          few: 'dni',
          many: 'dni',
        }
      : locale == 'en'
        ? {
            one: 'day',
            few: 'days',
            many: 'days',
          }
        : null;

  if (yearWordDict == null || monthWordDict == null || dayWordDict == null) {
    console.error(
      'Met undefined locale, there is missing word dictionary definition'
    );

    return '-';
  }

  const word: string =
    unit === 'year'
      ? toWord(value, yearWordDict)
      : unit === 'month'
        ? toWord(value, monthWordDict)
        : toWord(value, dayWordDict);

  return `${value} ${word}`;
}
