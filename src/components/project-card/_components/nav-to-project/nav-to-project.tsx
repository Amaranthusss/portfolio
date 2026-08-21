'use client';
import { Button } from '@/components/button/button';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

import type { NavToProjectProps } from './nav-to-project.interface';

import { Route } from '@/constants/Route';
import { Icon } from '@/components/icon/icon';

export function NavToProject({ project }: NavToProjectProps): React.ReactNode {
  const router = useRouter();
  const t = useTranslations('common');

  const onClick = (
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    router.push(Route.ProjectsAndRealisations + '/' + project.slug);
  };

  return (
    <Button name={`read-more-about-project-${project.slug}`} onClick={onClick}>
      {t('read-more')}
      <Icon icon={Icon.All.Read} />
    </Button>
  );
}
