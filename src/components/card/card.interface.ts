import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export interface CardProps
  extends PropsWithChildren, StrictOmit<ComponentPropsWithoutRef<'div'>, 'id'> {
  slug: string;
}
