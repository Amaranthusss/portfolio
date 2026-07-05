'use client';
import { AppFontSize } from '@/constants/AppFontSize';
import { Cookie } from '@/constants/Cookie';

export function useAppFontSizeSetter() {
  const setAppFontSize = (fontSize: AppFontSize): void => {
    document.cookie = `${Cookie.AppFontSize}=${fontSize}; path=/;`;
    document.documentElement.dataset.appFontSize = fontSize;
  };

  return { setAppFontSize };
}
