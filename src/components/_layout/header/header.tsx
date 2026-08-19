import { DesktopHeader } from './_components/desktop-header/desktop-header';
import { MobileHeader } from './_components/mobile-header/mobile-header';

import type { _Translator, Messages } from 'next-intl';
import type { NavMenuItem } from './header.interface';

import { IconName } from '@/components/icon/icon.config';
import { Route } from '@/constants/Route';

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
  const menuItems: NavMenuItem<
    Parameters<_Translator<Messages, 'layout.header'>>[0]
  >[] = [
    { route: Route.Homepage, text: 'homepage', icon: IconName.Home },
    {
      route: Route.ExperienceAndEducation,
      text: 'experience-and-education',
      icon: IconName.Education,
    },
    {
      route: Route.CoursesAndCertifications,
      text: 'courses-and-certifications',
      icon: IconName.Certification,
    },
    {
      route: Route.ProjectsAndRealisations,
      text: 'projects-and-realisations',
      icon: IconName.Project,
    },
    {
      route: Route.CoreTechnologies,
      text: 'core-technologies',
      icon: IconName.TechStack,
    },
    {
      route: Route.Publications,
      text: 'publications',
      icon: IconName.Publication,
    },
    {
      route: Route.HireMe,
      text: 'hire-me',
      icon: IconName.Handshake,
      decorated: true,
    },
  ];

  return (
    <>
      <DesktopHeader menuItems={menuItems} className={styles.desktop} />
      <MobileHeader menuItems={menuItems} className={styles.mobile} />
    </>
  );
};
