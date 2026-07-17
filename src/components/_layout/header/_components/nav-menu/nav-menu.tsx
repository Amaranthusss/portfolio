'use client';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ButtonProps } from '@/components/button/button.interface';
import type { NavMenuItem } from './nav-menu.interface';

import { IconName } from '@/components/icon/icon.config';
import { Route } from '@/constants/Route';

import styles from './nav-menu.module.scss';

export function NavMenu(): React.ReactNode {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const t = useTranslations('layout.header');

  const menuItems: NavMenuItem<Parameters<typeof t>[0]>[] = [
    { route: Route.Homepage, text: 'homepage', icon: IconName.Home },
    {
      route: Route.ExperienceAndEducation,
      text: 'experience-and-education',
      icon: IconName.Education
    },
    {
      route: Route.CoursesAndCertifications,
      text: 'courses-and-certifications',
      icon: IconName.Certification
    },
    {
      route: Route.ProjectsAndRealisations,
      text: 'projects-and-realisations',
      icon: IconName.Project
    },
    {
      route: Route.CoreTechnologies,
      text: 'core-technologies',
      icon: IconName.TechStack
    },
    {
      route: Route.CodeStyle,
      text: 'code-style',
      icon: IconName.Feather
    },
    {
      route: Route.Publications,
      text: 'publications',
      icon: IconName.Publication
    },
    {
      route: Route.HireMe,
      text: 'hire-me',
      icon: IconName.Handshake,
      decorated: true
    }
  ];

  return (
    <FlexGroup
      className={styles.menu_items}
      dropdownTopMargin={24}
      dropdownClassName={styles.dropdown}
      updateDropdownOnScroll={false}
    >
      {menuItems.map(({ route, icon, text, decorated }) => {
        const extraProps: Partial<ButtonProps> = decorated
          ? {
              mode: 'primary',
              style: { textTransform: 'uppercase' }
            }
          : {};

        return (
          <Button
            key={text}
            {...extraProps}
            centerContent
            active={route === pathname}
            onClick={(): void => router.push(route)}
            name={`navigation-button-${route.replace('/', '')}`}
          >
            <Icon icon={icon} style={{ marginRight: 'var(--space-4)' }} />
            {t(text)}
          </Button>
        );
      })}
    </FlexGroup>
  );
}
