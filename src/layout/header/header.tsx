'use client';
import { LanguageSelector } from '@/components/language-selector/language-selector';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { Button } from '../../components/button/button';

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
      <div className={styles.leftSide} />
			
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
