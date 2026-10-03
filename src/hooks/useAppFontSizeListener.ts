'use client';
import { useAppFontSizeSetter } from './useAppFontSizeSetter';
import { useEffect, useState } from 'react';

import type { AppFontSize } from '@/constants/AppFontSize';

import { CustomEventName } from '@/constants/CustomEventName';

export function useAppFontSizeListener() {
  const { getAppFontSize } = useAppFontSizeSetter();

  const [appFontSize, setAppFontSize] = useState<AppFontSize>(getAppFontSize);

  const handleAppFontSizeChanged = (event: Event): void => {
    setAppFontSize((event as CustomEvent<AppFontSize>).detail);
  };

  useEffect((): (() => void) => {
    window.addEventListener(
      CustomEventName.AppFontSizeChanged,
      handleAppFontSizeChanged
    );

    return (): void =>
      window.removeEventListener(
        CustomEventName.AppFontSizeChanged,
        handleAppFontSizeChanged
      );
  }, []);

  return { appFontSize };
}
