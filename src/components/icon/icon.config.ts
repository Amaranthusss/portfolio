import { AccessibilityIcon } from './_components/accessibility-icon/accessibility-icon';
import { CertificationIcon } from './_components/certification-icon/certification-icon';
import { MechatronicsIcon } from './_components/mechatronics-icon/mechatronics-icon';
import { PublicationIcon } from './_components/publication-icon/publication-icon';
import { HamburgerIcon } from './_components/hamburger-icon/hamburger-icon';
import { HandshakeIcon } from './_components/handshake-icon/handshake-icon';
import { TechStackIcon } from './_components/tech-stack-icon/tech-stack-icon';
import { EducationIcon } from './_components/education-icon/education-icon';
import { SettingsIcon } from './_components/settings-icon/settings-icon';
import { FeatherIcon } from './_components/feather-icon/feather-icon';
import { ProjectIcon } from './_components/project-icon/project-icon';
import { UnlockIcon } from './_components/unlock-icon/unlock-icon';
import { GithubIcon } from './_components/github-icon/github-icon';
import { SearchIcon } from './_components/search-icon/search-icon';
import { CloseIcon } from './_components/close-icon/close-icon';
import { HobbyIcon } from './_components/hobby-icon/hobby-icon';
import { BuildIcon } from './_components/build-icon/build-icon';
import { HomeIcon } from './_components/home-icon/home-icon';
import { LockIcon } from './_components/lock-icon/lock-icon';
import { BulbIcon } from './_components/bulb-icon/bulb-icon';
import { LinkIcon } from './_components/link-icon/link-icon';
import { ReadIcon } from './_components/read-icon/read-icon';
import { ItIcon } from './_components/it-icon/it-icon';

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
  Search = 'search',
  Close = 'close',
  Lock = 'lock',
  Unlock = 'unlock',
  Hamburger = 'hamburger',
  Build = 'build',
  Link = 'link',
  Read = 'read',
  Mechatronics = 'mechatronics',
  It = 'it',
  Github = 'github',
  Bulb = 'bulb',
  Hobby = 'hobby',
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
  [IconName.Search]: SearchIcon,
  [IconName.Close]: CloseIcon,
  [IconName.Lock]: LockIcon,
  [IconName.Unlock]: UnlockIcon,
  [IconName.Hamburger]: HamburgerIcon,
  [IconName.Build]: BuildIcon,
  [IconName.Link]: LinkIcon,
  [IconName.Read]: ReadIcon,
  [IconName.Mechatronics]: MechatronicsIcon,
  [IconName.It]: ItIcon,
  [IconName.Github]: GithubIcon,
  [IconName.Bulb]: BulbIcon,
  [IconName.Hobby]: HobbyIcon,
};

export const defaultSvgProps: SVGProps<SVGSVGElement> = {
  stroke: 'currentColor',
  fill: 'currentColor',
  height: 'var(--font-size-lg)',
};
