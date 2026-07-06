import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

export interface CheckboxProps
  extends
    PropsWithChildren,
    StrictOmit<ComponentPropsWithRef<'input'>, 'type'> {
  container?: ComponentPropsWithRef<'div'>;
}
