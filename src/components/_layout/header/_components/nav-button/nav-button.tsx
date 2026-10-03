'use client';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

import type { NavButtonProps } from './nav-button.interface';
import type { ButtonProps } from '@/components/button/button.interface';

export function NavButton({
  menuItem,
  className,
  defaultMode,
  onNavigate,
}: NavButtonProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const router: ReturnType<typeof useRouter> = useRouter();
  const pathname: string = usePathname();

  const { text, icon, route, decorated } = menuItem;

  const isActive: boolean = route === pathname;

  const mode: ButtonProps['mode'] = decorated ? 'primary' : defaultMode;

  const onClick = (): void => {
    router.push(route);
    onNavigate?.(menuItem);
  };

  return (
    <Button
      key={text}
      mode={mode}
      active={isActive}
      className={className}
      data-mode={mode ?? 'default'}
      data-active={isActive ? '' : undefined}
      contentStyle={{ justifyContent: 'flex-start', textAlign: 'left' }}
      aria-label={`navigation-button-${route.replace('/', '')}`}
      onClick={onClick}
    >
      <Icon icon={icon} />
      {t(text)}
    </Button>
  );
}
