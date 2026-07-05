'use client';
import { AppFontSizeSelector } from '@/components/app-font-size-selector/app-font-size-selector';
import { LanguageSelector } from '@/components/language-selector/language-selector';
import { ThemeSelector } from '@/components/theme-selector/theme-selector';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { Popover } from '@/components/popover/popover';
import { Button } from '../../components/button/button';
import { Icon } from '@/components/icon/icon';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ButtonProps } from '@/components/button/button.interface';

import { Route } from '@/constants/Route';

import styles from './header.module.scss';

export const Header = (): React.ReactNode => {
  const router: AppRouterInstance = useRouter();
  const t = useTranslations('layout.menu');

  const menuItems: {
    route: Route;
    text: Parameters<typeof t>[0];
    decorated?: boolean;
  }[] = [
    { route: Route.Homepage, text: 'homepage' },
    { route: Route.ExperienceAndEducation, text: 'experience-and-education' },
    {
      route: Route.CoursesAndCertifications,
      text: 'courses-and-certifications'
    },
    { route: Route.ProjectsAndRealisations, text: 'projects-and-realisations' },
    { route: Route.CoreTechnologies, text: 'core-technologies' },
    { route: Route.CodeStyle, text: 'code-style' },
    { route: Route.Publications, text: 'publications' },
    { route: Route.HireMe, text: 'hire-me', decorated: true }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <Popover
          triggerProps={{
            type: 'primary',
            centerContent: true,
            name: 'app-settings',
            children: <Icon icon={Icon.All.Settings} />,
            style: { minWidth: 'var(--control-height)' }
          }}
          popoverClassName={styles.settings_popover}
        >
          <div>
            <ThemeSelector />
          </div>

          <div>
            <AppFontSizeSelector />
          </div>
        </Popover>
      </div>

      <FlexGroup
        className={styles.menu_items}
        dropdownTopMargin={24}
        dropdownClassName={styles.dropdown}
        updateDropdownOnScroll={false}
      >
        {menuItems.map(({ route, text, decorated }) => {
          const extraProps: Partial<ButtonProps> = decorated
            ? {
                type: 'primary',
                style: { textTransform: 'uppercase' },
                animated: true
              }
            : {};

          return (
            <Button
              key={text}
              {...extraProps}
              onClick={(): void => router.push(route)}
              name={`navigation-button-${route.replace('/', '')}`}
            >
              {t(text)}
            </Button>
          );
        })}
      </FlexGroup>

      <LanguageSelector />
    </header>
  );
};
