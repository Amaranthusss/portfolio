import { AccessibilityIcon } from './_components/accessibility-icon/accessibility-icon';
import { CertificationIcon } from './_components/certification-icon/certification-icon';
import { PublicationIcon } from './_components/publication-icon/publication-icon';
import { HandshakeIcon } from './_components/handshake-icon/handshake-icon';
import { TechStackIcon } from './_components/tech-stack-icon/tech-stack-icon';
import { EducationIcon } from './_components/education-icon/education-icon';
import { SettingsIcon } from './_components/settings-icon/settings-icon';
import { FeatherIcon } from './_components/feather-icon/feather-icon';
import { ProjectIcon } from './_components/project-icon/project-icon';
import { SearchIcon } from './_components/search-icon/search-icon';
import { HomeIcon } from './_components/home-icon/home-icon';

import type { ComponentType, SVGProps } from 'react';

export enum IconName {
  Accessibility = 'accessibility',
  Certification = 'certification',
  Education = 'education',
  Feather = 'feather',
  Handshake = 'handshake',
  Home = 'home',
  Project = 'project',
  Publication = 'publication',
  Settings = 'settings',
  TechStack = 'tech-stack',
  Search = 'search'
}

export const iconConfig: Record<
  IconName,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  [IconName.Accessibility]: AccessibilityIcon,
  [IconName.Certification]: CertificationIcon,
  [IconName.Education]: EducationIcon,
  [IconName.Feather]: FeatherIcon,
  [IconName.Handshake]: HandshakeIcon,
  [IconName.Home]: HomeIcon,
  [IconName.Project]: ProjectIcon,
  [IconName.Publication]: PublicationIcon,
  [IconName.Settings]: SettingsIcon,
  [IconName.TechStack]: TechStackIcon,
  [IconName.Search]: SearchIcon
};

export const defaultSvgProps: SVGProps<SVGSVGElement> = {
  stroke: 'currentColor',
  fill: 'currentColor',
  height: 'var(--font-size-lg)'
};
