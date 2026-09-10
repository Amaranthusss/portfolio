'use client';
import Image from 'next/image';

import type { HomepageImageProps } from './homepage-image.interface';

import { Theme } from '@/constants/Theme';

import styles from './homepage-image.module.scss';

export function HomepageImage({ theme }: HomepageImageProps): React.ReactNode {
  const src =
    theme === Theme.Dark
      ? '/images/homepage-dark.webp'
      : '/images/homepage-light.webp';

  const quality = 100;
  const width = 1219;
  const height = 756;
  const sizes = '(max-width: 1280px) calc(100vw - 5rem), 1200px';
  const loading = 'eager' satisfies 'eager' | 'lazy';

  if (theme === Theme.System) {
    return (
      <picture>
        <source
          media={'(prefers-color-scheme: dark)'}
          srcSet={'/images/homepage-dark.webp'}
        />
        <Image
          priority
          src={'/images/homepage-light.webp'}
          alt={'Homepage background image'}
          className={styles.welcome_image}
          fetchPriority={'high'}
          loading={loading}
          quality={quality}
          width={width}
          height={height}
          sizes={sizes}
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
      fetchPriority={'high'}
      loading={loading}
      quality={quality}
      width={width}
      height={height}
      sizes={sizes}
    />
  );
}
