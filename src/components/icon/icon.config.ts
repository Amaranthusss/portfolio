import { AccessibilityIcon } from './_components/accessibility-icon/accessibility-icon';
import { SettingsIcon } from './_components/settings-icon/settings-icon';

import type { ComponentType, SVGProps } from 'react';

export enum IconName {
  Accessibility = 'accessibility',
  Settings = 'settings'
}

export const iconConfig: Record<
  IconName,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  [IconName.Accessibility]: AccessibilityIcon,
  [IconName.Settings]: SettingsIcon
};

export const defaultSvgProps: SVGProps<SVGSVGElement> = {
  stroke: 'currentColor',
  fill: 'currentColor',
  height: 'var(--font-size-lg)',
};
