import type { CSSProperties, Ref } from 'react';

declare global {
  type WithRef<P, R> = P & { ref?: Ref<R> };

  type StrictOmit<T, K extends keyof T> = Omit<T, K>;

  type DateKey<T> = {
    [K in keyof T]-?: NonNullable<T[K]> extends Date ? K : never;
  }[keyof T];

  interface CustomCSSProperties extends CSSProperties {
    [customProperty: string]: unknown;
  }
}
