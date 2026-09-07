'use client';
import Image from 'next/image';

import type { HomepageImageProps } from './homepage-image.interface';

import { Theme } from '@/constants/Theme';

import styles from './homepage-image.module.scss';

export function HomepageImage({ theme }: HomepageImageProps): React.ReactNode {
  const src =
    theme === Theme.Dark
      ? '/images/homepage-dark.png'
      : '/images/homepage-light.png';

  const quality = 100;
  const width = 1219;
  const height = 756;
  const loading = 'eager' satisfies 'eager' | 'lazy';

  if (theme === Theme.System) {
    return (
      <picture>
        <source
          media={'(prefers-color-scheme: dark)'}
          srcSet={'/images/homepage-dark.png'}
        />
        <Image
          priority
          src={'/images/homepage-light.png'}
          alt={'Homepage background image'}
          className={styles.welcome_image}
          loading={loading}
          quality={quality}
          width={width}
          height={height}
        />
      </picture>
    );
  }

  return (
    <Image
      priority
      src={src}
      alt={'Homepage background image'}
      className={styles.welcome_image}
      loading={loading}
      quality={quality}
      width={width}
      height={height}
    />
  );
}
