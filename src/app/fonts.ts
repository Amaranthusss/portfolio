import localFont from 'next/font/local';

import type { NextFont } from 'next/dist/compiled/@next/font';

export const magnatFont: NextFont = localFont({
  src: [
    {
      path: '../../public/fonts/magnat/Magnat-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/magnat/Magnat-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-RegularItalic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/magnat/Magnat-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/magnat/Magnat-SemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../public/fonts/magnat/Magnat-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/magnat/Magnat-ExtraBold.woff',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../../public/fonts/magnat/Magnat-ExtraBoldItalic.woff',
      weight: '800',
      style: 'italic'
    }
  ],
  display: 'swap'
});
