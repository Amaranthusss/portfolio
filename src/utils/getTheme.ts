import { cookies } from 'next/headers';

import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export async function getTheme(): Promise<Theme> {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const theme: string | undefined = cookieStore.get(Cookie.Theme)?.value;

  if (theme === Theme.Light || theme === Theme.Dark) return theme;
  return Theme.Dark;
}
