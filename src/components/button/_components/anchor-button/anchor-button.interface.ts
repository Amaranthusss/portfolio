import type { ComponentPropsWithRef } from 'react';
import type { ButtonBaseProps } from '../../button.interface';

export type AnchorButtonProps = ButtonBaseProps & ComponentPropsWithRef<'a'>;
