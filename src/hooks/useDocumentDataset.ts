'use server';
import { cookies } from 'next/headers';

import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { AppFontSize } from '@/constants/AppFontSize';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export async function useDocumentDataset() {
  const cookiesData: ReadonlyRequestCookies = await cookies();

  const theme: Theme | undefined = cookiesData.get(Cookie.Theme)?.value as
    Theme | undefined;

  const appFontSize: AppFontSize | undefined = cookiesData.get(
    Cookie.AppFontSize
  )?.value as AppFontSize | undefined;

  const contrast: 'true' | undefined = cookiesData.get(Cookie.Contrast)
    ?.value as 'true' | undefined;

  const dataset: { [dataName: string]: string | undefined } = {};

  if (theme != null) dataset['data-' + Cookie.Theme] = theme;
  if (appFontSize != null) dataset['data-' + Cookie.AppFontSize] = appFontSize;
  if (contrast != null) dataset['data-' + Cookie.Contrast] = contrast;

  return { dataset };
}
