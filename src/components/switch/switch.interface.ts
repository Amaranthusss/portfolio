import type { ComponentPropsWithRef } from 'react';

export interface SwitchProps extends StrictOmit<
  ComponentPropsWithRef<'input'>,
  'type'
> {
  label?: ComponentPropsWithRef<'label'>;
  slider?: ComponentPropsWithRef<'span'>;
}
