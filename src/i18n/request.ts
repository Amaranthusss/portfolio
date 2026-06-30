import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

import type { Locale } from './locale';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested: string | undefined = await requestLocale;

  const locale: Locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = (await import(`../../messages/${locale}/common.json`)).default;
  const layout = (await import(`../../messages/${locale}/layout.json`)).default;

  return {
    locale,
    messages: { common, layout },
  };
});
