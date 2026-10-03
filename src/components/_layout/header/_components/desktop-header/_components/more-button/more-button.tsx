import { Icon } from '@/components/icon/icon';

import type { MoreButtonProps } from './more-button.interface';

export function MoreButton({ text }: MoreButtonProps): React.ReactNode {
  return (
    <>
      <Icon icon={Icon.All.More} /> {text}
    </>
  );
}
