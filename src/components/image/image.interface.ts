import type { ImageProps as ImageNextProps } from 'next/image';
import type { Theme } from '@/constants/Theme';

export interface ImageProps extends ImageNextProps {
  theme?: Theme;
  darkThemeSrc?: string;
}
