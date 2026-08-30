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

  return (
    <Image
      priority
      src={src}
      alt={'Homepage background image'}
      className={styles.welcome_image}
      loading={'eager'}
      quality={100}
      width={1219}
      height={756}
    />
  );
}
