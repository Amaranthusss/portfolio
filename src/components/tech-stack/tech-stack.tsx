import { HexBoard } from './_components/hex-board/hex-board';

import type { TechStackProps } from './tech-stack.interface';

export function TechStack({ groups }: TechStackProps): React.ReactNode {
  return <HexBoard groups={groups} />;
}
