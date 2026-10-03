'use client';
import { useCookie } from './useCookie';

import { CustomEventName } from '@/constants/CustomEventName';
import { AppFontSize } from '@/constants/AppFontSize';
import { Cookie } from '@/constants/Cookie';

export function useAppFontSizeSetter() {
  const { getCookie } = useCookie();

  const getAppFontSize = (): AppFontSize => {
    return getCookie<AppFontSize>(Cookie.AppFontSize) ?? AppFontSize.Standard;
  };

  const setAppFontSize = (fontSize: AppFontSize): void => {
    document.cookie = `${Cookie.AppFontSize}=${fontSize}; path=/;`;
    document.documentElement.dataset.appFontSize = fontSize;

    window.dispatchEvent(
      new CustomEvent<AppFontSize>(CustomEventName.AppFontSizeChanged, {
        detail: fontSize,
      })
    );
  };

  return { getAppFontSize, setAppFontSize };
}
