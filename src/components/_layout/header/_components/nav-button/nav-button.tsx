'use client';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

import type { NavButtonProps } from './nav-button.interface';

export function NavButton({
  menuItem,
  className,
  onNavigated,
}: NavButtonProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const router: ReturnType<typeof useRouter> = useRouter();
  const pathname: string = usePathname();

  const lastPathname = useRef<string>(pathname);

  const { text, icon, route, decorated } = menuItem;

  const isActive: boolean = route === pathname;

  const onClick = (): void => {
    router.push(route);
  };

  useEffect((): void => {
    if (!isActive) return;
    if (lastPathname.current === pathname) return;

    onNavigated?.(menuItem);
    lastPathname.current = pathname;
  }, [onNavigated, isActive, menuItem, pathname]);

  return (
    <Button
      key={text}
      active={isActive}
      className={className}
      data-active={isActive ? '' : undefined}
      mode={decorated ? 'primary' : undefined}
      contentStyle={{ justifyContent: 'flex-start' }}
      aria-label={`navigation-button-${route.replace('/', '')}`}
      onClick={onClick}
    >
      <Icon icon={icon} />
      {t(text)}
    </Button>
  );
}
