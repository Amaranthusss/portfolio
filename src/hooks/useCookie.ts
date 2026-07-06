'use client';
import type { Cookie } from '@/constants/Cookie';

export function useCookie() {
  const getCookie = <ExpectedType = string>(
    cookie: Cookie
  ): ExpectedType | undefined => {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${cookie}=`))
      ?.split('=')[1] as ExpectedType | undefined;
  };

  return { getCookie };
}
