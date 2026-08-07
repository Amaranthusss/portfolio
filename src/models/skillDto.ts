import type { SkillKey } from './skillKey';

export interface SkillDTO {
  id: number;
  key: SkillKey;
  name: string;
  shortName?: string;
}
