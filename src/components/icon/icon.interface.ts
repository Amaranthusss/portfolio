import type { IconName } from './icon.config';
import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconName;
}
