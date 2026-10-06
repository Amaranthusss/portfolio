import type { CSSProperties } from 'react';

export interface MarqueeProps {
  label?: string;
  items: readonly MarqueeItem[];
  className?: string;
  onClick?: (key: string, index: number) => void;
}

export interface MarqueeItem {
  key: string;
  content: React.ReactNode;
}

export interface MarqueeTrackStyle extends CSSProperties {
  '--marquee-copy-count': number;
}
