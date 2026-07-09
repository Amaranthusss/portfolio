'use client';
import { useEffect } from 'react';
import { useCookie } from '@/hooks/useCookie';

import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';
import type { PropsWithChildren } from 'react';
import type { AppFontSize } from '@/constants/AppFontSize';
import type { Theme } from '@/constants/Theme';

import { Cookie } from '@/constants/Cookie';

export function DocumentDatasetProvider({ children }: PropsWithChildren) {
  const { getCookie } = useCookie();

  useEffect((): void => {
    const dataset: Map<Cookie, string | undefined> = new Map();

    dataset.set(Cookie.Theme, getCookie<Theme>(Cookie.Theme));
    dataset.set(Cookie.AppFontSize, getCookie<AppFontSize>(Cookie.AppFontSize));
    dataset.set(
      Cookie.Contrast,
      getCookie<ConstrastCookieValue>(Cookie.Contrast)
    );

    dataset.forEach((value: string | undefined, cookie: Cookie): void => {
      if (value != null) document.documentElement.dataset[cookie] = value;
    });
  }, []);

  return children;
}
