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
    return getCookie<Theme>(Cookie.Theme) ?? Theme.System;
  };

  const getFinalTheme = (): Theme.Dark | Theme.Light => {
    const theme: Theme = getTheme();

    if (theme === Theme.Dark || theme === Theme.Light) return theme;

    const mediaQuery: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    return mediaQuery.matches ? Theme.Dark : Theme.Light;
  };

  const setTheme = (theme: Theme): void => {
    if (theme === Theme.System) {
      document.cookie = `${Cookie.Theme}=; path=/; max-age=0`;
      document.documentElement.dataset.theme = undefined;
    } else {
      document.cookie = `${Cookie.Theme}=${theme}; path=/;`;
      document.documentElement.dataset.theme = theme;
    }

    router.refresh();
  };

  return {
    getTheme,
    setTheme,
    getFinalTheme,
    isContrastTheme,
    setContrastTheme,
  };
}
