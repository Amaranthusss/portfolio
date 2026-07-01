import type { PropsWithChildren } from 'react';

export interface CheckboxProps
  extends PropsWithChildren, CommonProps<HTMLInputElement> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
