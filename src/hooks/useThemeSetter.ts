'use client';
import { Cookie } from '@/constants/Cookie';
import { Theme } from '@/constants/Theme';

export function useThemeSetter() {
  const setTheme = (theme: Theme): void => {
    if (theme === Theme.System) {
      document.cookie = `${Cookie.Theme}=; path=/; max-age=0`;
      document.documentElement.dataset.theme = undefined;
      return;
    }

    document.cookie = `${Cookie.Theme}=${theme}; path=/;`;
    document.documentElement.dataset.theme = theme;
  };

  return { setTheme };
}
