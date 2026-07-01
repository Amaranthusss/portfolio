import { getLocale } from 'next-intl/server';
import { redirect } from '@/i18n/navigation';

import type { Locale } from '@/i18n/locale';

import { Route } from '@/constants/Route';

export default async function Page() {
  const locale: Locale = await getLocale();

  redirect({ href: Route.Homepage, locale });
}
