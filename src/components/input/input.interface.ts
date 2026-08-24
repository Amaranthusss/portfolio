import type { ComponentPropsWithRef } from 'react';

export interface InputBaseProps {
  label?: React.ReactNode;
  error?: string;
  required?: boolean;
}

export type InputProps = InputBaseProps & ComponentPropsWithRef<'input'>;
