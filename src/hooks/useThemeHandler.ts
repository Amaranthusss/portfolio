'use client';
import { useRouter } from 'next/navigation';
import { useCookie } from './useCookie';

import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { constrastCookieValue } from '@/constants/ContrastCookieValue';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function useThemeHandler() {
  const router: AppRouterInstance = useRouter();
  const { getCookie } = useCookie();

  const isContrastTheme = (): boolean => {
    return (
      getCookie<ConstrastCookieValue>(Cookie.Contrast) === constrastCookieValue
    );
  };

  const setContrastTheme = (contrast: boolean): void => {
    const cookieValue: string = contrast ? constrastCookieValue : '';
    const cookieMaxAge: string = !contrast ? 'max-age=0' : '';
    const datasetValue: string | undefined = contrast
      ? constrastCookieValue
      : undefined;

    document.cookie = `${Cookie.Contrast}=${cookieValue}; path=/; ${cookieMaxAge}`;
    document.documentElement.dataset.contrast = datasetValue;
  };

  const getTheme = (): Theme => {
    const theme: Theme | undefined = getCookie<Theme>(Cookie.Theme);

    if (theme === Theme.Dark || theme === Theme.Light) return theme;
    return Theme.System;
  };

  const setTheme = (theme: Theme): void => {
    document.cookie = `${Cookie.Theme}=${theme}; path=/;`;

    if (theme === Theme.System) {
      const mediaQuery: MediaQueryList = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );

      document.documentElement.dataset.theme = mediaQuery.matches
        ? Theme.Dark
        : Theme.Light;
    } else {
      document.documentElement.dataset.theme = theme;
    }

    router.refresh();
  };

  return { getTheme, setTheme, isContrastTheme, setContrastTheme };
}
