import type { ComponentPropsWithRef } from 'react';

export type ValueExtension = string | number | readonly string[] | undefined;

export interface SelectProps<TValue extends ValueExtension> extends StrictOmit<
  ComponentPropsWithRef<'select'>,
  'value' | 'onChange' | 'id' | 'name'
> {
  value?: TValue;
  label?: string;
  error?: string;
  options?: SelectOption<TValue>[];
  onChange?: (value: TValue) => void;
}

export interface SelectOption<TValue extends ValueExtension> {
  label: string;
  value: TValue;
}
