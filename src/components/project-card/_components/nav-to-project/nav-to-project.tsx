'use client';
import { Button } from '@/components/button/button';

import { useRouter } from '@/i18n/navigation';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { NavToProjectProps } from './nav-to-project.interface';

import { Route } from '@/constants/Route';

import styles from './nav-to-project.module.scss';
import { useTranslations } from 'next-intl';

export function NavToProject({ project }: NavToProjectProps): React.ReactNode {
  const router: AppRouterInstance = useRouter();
  const t = useTranslations('common');

  const onClick = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    router.push(Route.ProjectsAndRealisations + '/' + project.slug);
  };

  return (
    <Button className={styles.read_more} onClick={onClick}>
      {t('read-more')}
    </Button>
  );
}
