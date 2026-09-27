import ImageNext from 'next/image';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { ImageProps } from './image.interface';

import { Theme } from '@/constants/Theme';

export function Image({
  theme = Theme.System,
  darkThemeSrc,
  ...imageProps
}: ImageProps): React.ReactNode {
  const lightSrc: string | StaticImport = imageProps.src;

  if (
    theme === Theme.System &&
    darkThemeSrc != null &&
    darkThemeSrc.length > 0
  ) {
    return (
      <picture className={imageProps.className} style={imageProps.style}>
        <source media={'(prefers-color-scheme: dark)'} srcSet={darkThemeSrc} />
        <ImageNext {...imageProps} />
      </picture>
    );
  }

  const src: string | StaticImport =
    theme === Theme.Dark && darkThemeSrc != null ? darkThemeSrc : lightSrc;

  return <ImageNext {...imageProps} src={src} />;
}
