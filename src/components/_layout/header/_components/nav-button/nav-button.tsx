'use client';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

import type { NavButtonProps } from './nav-button.interface';

export function NavButton({
  menuItem,
  className,
  onNavigate,
}: NavButtonProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const router = useRouter();
  const pathname: string = usePathname();

  const { text, icon, route, decorated } = menuItem;

  const onClick = (): void => {
    router.push(route);
    onNavigate?.();
  };

  return (
    <Button
      key={text}
      className={className}
      active={route === pathname}
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
