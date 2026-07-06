'use client';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function useThemeSetter() {
  const setContrastTheme = (contrast: boolean): void => {
    const cookieValue: string = contrast ? 'true' : '';
    const cookieMaxAge: string = !contrast ? 'max-age=0' : '';
    const datasetValue: string | undefined = contrast ? 'true' : undefined;

    document.cookie = `${Cookie.Contrast}=${cookieValue}; path=/; ${cookieMaxAge}`;
    document.documentElement.dataset.contrast = datasetValue;
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

  return { setTheme, setContrastTheme };
}
