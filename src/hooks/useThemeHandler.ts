'use client';
import { useRouter } from 'next/navigation';
import { useCookie } from './useCookie';

import type { SystemThemeCookieValue } from '@/models/systemThemeCookieValue';
import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { constrastCookieValue } from '@/constants/ContrastCookieValue';
import { ThemeOption } from '@/constants/ThemeOption';
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

  const getThemeOption = (): ThemeOption => {
    const isSystemTheme: boolean =
      getCookie<SystemThemeCookieValue>(Cookie.SystemTheme) === 'true';

    if (isSystemTheme) return ThemeOption.System;

    const theme: Theme | undefined = getCookie<Theme>(Cookie.Theme);

    if (theme === Theme.Dark) return ThemeOption.Dark;
    if (theme === Theme.Light) return ThemeOption.Light;
    return ThemeOption.System;
  };

  const setTheme = (themeOption: ThemeOption): void => {
    if (themeOption === ThemeOption.System) {
      const mediaQuery: MediaQueryList = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );

      const systemTheme: Theme = mediaQuery.matches ? Theme.Dark : Theme.Light;

      document.cookie = `${Cookie.Theme}=${systemTheme}; path=/;`;
      document.cookie = `${Cookie.SystemTheme}=true; path=/;`;
      document.documentElement.dataset.theme = systemTheme;
      document.documentElement.dataset.systemTheme =
        'true' satisfies SystemThemeCookieValue;
    } else {
      document.cookie = `${Cookie.Theme}=${themeOption}; path=/;`;
      document.cookie = `${Cookie.SystemTheme}=; path=/; max-age=0`;
      delete document.documentElement.dataset.systemTheme;
      document.documentElement.dataset.theme = themeOption;
    }

    router.refresh();
  };

  return { getThemeOption, setTheme, isContrastTheme, setContrastTheme };
}
