'use client';
import { useCookie } from './useCookie';

import type { ConstrastCookieValue } from '@/constants/ContrastCookieValue';

import { constrastCookieValue } from '@/constants/ContrastCookieValue';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function useThemeSetter() {
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

  const setTheme = (theme: Theme): void => {
    if (theme === Theme.System) {
      document.cookie = `${Cookie.Theme}=; path=/; max-age=0`;
      document.documentElement.dataset.theme = undefined;
      return;
    }

    document.cookie = `${Cookie.Theme}=${theme}; path=/;`;
    document.documentElement.dataset.theme = theme;
  };

  return { getTheme, setTheme, isContrastTheme, setContrastTheme };
}
