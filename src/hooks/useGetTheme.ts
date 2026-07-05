'use server';
import { cookies } from 'next/headers';

import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export async function useGetTheme() {
  const cookiesData: ReadonlyRequestCookies = await cookies();

  const theme: Theme =
    (cookiesData.get(Cookie.Theme)?.value as Theme | undefined) ?? Theme.System;

  return { theme };
}
