import type { Ref } from 'react';

declare global {
  type WithRef<P, R> = P & { ref?: Ref<R> };

  type StrictOmit<T, K extends keyof T> = Omit<T, K>;
}
