export const locales = ['pl', 'en'] as const;
export const localesAsString: string[] = ['pl', 'en'];
export const defaultLocale: Locale = 'en';

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
