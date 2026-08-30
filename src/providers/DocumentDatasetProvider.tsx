'use client';

import { useCookie } from '@/hooks/useCookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { PropsWithChildren } from 'react';
import type { SystemThemeFlag } from '@/models/systemThemeFlag';
import type { AppFontSize } from '@/constants/AppFontSize';

import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function DocumentDatasetProvider({
  children,
}: PropsWithChildren): React.ReactNode {
  const router: AppRouterInstance = useRouter();
  const { getCookie } = useCookie();

  const setDataset = (
    theme: Theme.Dark | Theme.Light,
    systemThemeFlag: SystemThemeFlag
  ): void => {
    const dataset: Map<Cookie, string | undefined> = new Map();

    dataset.set(Cookie.Theme, theme);
    dataset.set(Cookie.SystemTheme, systemThemeFlag);
    dataset.set(Cookie.AppFontSize, getCookie<AppFontSize>(Cookie.AppFontSize));
    dataset.set(
      Cookie.Contrast,
      getCookie<ConstrastCookieValue>(Cookie.Contrast)
    );

    dataset.forEach((value: string | undefined, cookie: Cookie): void => {
      if (value != null) document.documentElement.dataset[cookie] = value;
    });
  };

  const getSystemTheme = (
    mediaQuery: MediaQueryList
  ): Theme.Dark | Theme.Light => {
    return mediaQuery.matches ? Theme.Dark : Theme.Light;
  };

  useEffect((): void | (() => void) => {
    const themeCookie: Theme | undefined = getCookie<Theme>(Cookie.Theme);

    const mediaQuery: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const systemThemeFlag: SystemThemeFlag =
      getCookie<SystemThemeFlag>(Cookie.SystemTheme) ??
      (themeCookie == null ? 'true' : undefined);

    const isSystemTheme: boolean = systemThemeFlag === 'true';

    const theme: Theme.Dark | Theme.Light = isSystemTheme
      ? getSystemTheme(mediaQuery)
      : themeCookie === Theme.Dark
        ? Theme.Dark
        : Theme.Light;

    setDataset(theme, systemThemeFlag);

    if (!isSystemTheme) return;

    const updateSystemTheme = (): void => {
      const theme: Theme.Dark | Theme.Light = getSystemTheme(mediaQuery);

      document.cookie = `${Cookie.Theme}=${theme}; path=/;`;
      setDataset(theme, systemThemeFlag);
      router.refresh();
    };

    mediaQuery.addEventListener('change', updateSystemTheme);

    return (): void => {
      mediaQuery.removeEventListener('change', updateSystemTheme);
    };
  }, [getCookie, router]);

  return children;
}
