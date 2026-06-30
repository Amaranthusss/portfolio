import type { SkillKey } from '@/generated/prisma';

export interface SkillDTO {
  id: number;
  key: SkillKey;
  name: string;
  shortName?: string;
}
