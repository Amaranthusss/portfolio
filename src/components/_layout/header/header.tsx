'use client';
import { ContrastThemeSwitch } from '@/components/contrast-theme-switch/contrast-theme-switch';
import { AppFontSizeSelector } from '@/components/app-font-size-selector/app-font-size-selector';
import { LanguageSelector } from '@/components/language-selector/language-selector';
import { ThemeSelector } from '@/components/theme-selector/theme-selector';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { Popover } from '@/components/popover/popover';
import { Button } from '../../button/button';
import { Icon } from '@/components/icon/icon';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { useRouter } from 'next/navigation';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ButtonProps } from '@/components/button/button.interface';

import { IconName } from '@/components/icon/icon.config';
import { Route } from '@/constants/Route';

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const t = useTranslations('layout.menu');

  const menuItems: {
    route: Route;
    text: Parameters<typeof t>[0];
    icon: IconName;
    decorated?: boolean;
  }[] = [
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
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Oskar Szkurłat</span>
        <span>Portfolio</span>
      </div>

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

      <div className={styles.right_side}>
        <Popover
          triggerProps={{
            centerContent: true,
            name: 'app-settings',
            children: <Icon icon={Icon.All.Settings} />,
            'aria-label': 'app-settings-popover',
            style: { minWidth: 'var(--control-height)' }
          }}
          popoverClassName={styles.settings_popover}
        >
          <div>
            <LanguageSelector />
          </div>

          <div>
            <ThemeSelector />
          </div>

          <div>
            <AppFontSizeSelector />
          </div>

          <div>
            <ContrastThemeSwitch />
          </div>
        </Popover>
      </div>
    </header>
  );
};
