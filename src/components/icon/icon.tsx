import type { ComponentType, SVGProps } from 'react';
import type { IconProps } from './icon.interface';

import { iconConfig, IconName } from './icon.config';

export function Icon({ icon, ...props }: IconProps): React.ReactNode {
  const Svg: ComponentType<SVGProps<SVGSVGElement>> = iconConfig[icon];

  return <Svg {...props} />;
}

Icon.All = IconName;
