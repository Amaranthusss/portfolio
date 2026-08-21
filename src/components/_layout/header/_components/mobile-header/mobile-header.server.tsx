import { MobileHeaderClient } from './mobile-header.client';
import { AdvancedSearch } from '@/components/advanced-search/advanced-search.server';

import type { MobileHeaderProps } from './mobile-header.interface';

export async function MobileHeader({
  menuItems,
  className,
}: MobileHeaderProps): Promise<React.ReactNode> {
  return (
    <MobileHeaderClient
      menuItems={menuItems}
      className={className}
      advancedSearch={<AdvancedSearch iconOnly={false} />}
    />
  );
}
