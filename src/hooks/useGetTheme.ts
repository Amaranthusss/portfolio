'use server';
import { cookies } from 'next/headers';

import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { AppFontSize } from '@/constants/AppFontSize';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export async function useGetTheme() {
  const cookiesData: ReadonlyRequestCookies = await cookies();

  const theme: Theme | undefined = cookiesData.get(Cookie.Theme)?.value as
    Theme | undefined;

  const appFontSize: AppFontSize | undefined = cookiesData.get(
    Cookie.AppFontSize
  )?.value as AppFontSize | undefined;

  const themeData: { [dataName: string]: string | undefined } = {
    ['data-' + Cookie.Theme]: theme,
    ['data-' + Cookie.AppFontSize]: appFontSize
  };

  return { themeData };
}
