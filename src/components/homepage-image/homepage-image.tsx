'use client';
import Image from 'next/image';

import { useThemeHandler } from '@/hooks/useThemeHandler';

import { Theme } from '@/constants/Theme';

import styles from './homepage-image.module.scss';

export function HomepageImage(): React.ReactNode {
  const { getFinalTheme } = useThemeHandler();

  const theme: Theme.Dark | Theme.Light = getFinalTheme();

  const src =
    theme === Theme.Dark
      ? '/images/homepage-dark.png'
      : '/images/homepage-light.png';

  return (
    <Image
      priority
      className={styles.welcome_image}
      src={src}
      alt={'Homepage background image'}
      loading={'eager'}
      quality={100}
      width={1219}
      height={756}
    />
  );
}
