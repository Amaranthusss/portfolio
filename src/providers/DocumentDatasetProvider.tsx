'use client';
import { useEffect } from 'react';
import { useCookie } from '@/hooks/useCookie';

import type { SystemThemeCookieValue } from '@/models/systemThemeCookieValue';
import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';
import type { PropsWithChildren } from 'react';
import type { AppFontSize } from '@/constants/AppFontSize';

import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function DocumentDatasetProvider({ children }: PropsWithChildren) {
  const { getCookie } = useCookie();

  useEffect((): void => {
    const themeCookie: Theme | undefined = getCookie<Theme>(Cookie.Theme);

    const systemTheme: SystemThemeCookieValue =
      getCookie<SystemThemeCookieValue>(Cookie.SystemTheme) ??
      (themeCookie == null ? 'true' : undefined);

    const theme: Theme.Dark | Theme.Light =
      themeCookie === Theme.Dark || themeCookie === Theme.Light
        ? themeCookie
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? Theme.Dark
          : Theme.Light;

    const dataset: Map<Cookie, string | undefined> = new Map();

    dataset.set(Cookie.Theme, theme);
    dataset.set(Cookie.SystemTheme, systemTheme);
    dataset.set(Cookie.AppFontSize, getCookie<AppFontSize>(Cookie.AppFontSize));
    dataset.set(
      Cookie.Contrast,
      getCookie<ConstrastCookieValue>(Cookie.Contrast)
    );

    dataset.forEach((value: string | undefined, cookie: Cookie): void => {
      if (value != null) document.documentElement.dataset[cookie] = value;
    });
  }, [getCookie]);

  return children;
}
