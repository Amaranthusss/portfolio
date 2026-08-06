import type { Skill } from '../../payload-types';

export interface SkillDTO {
  id: number;
  key: Skill['key'];
  name: string;
  shortName?: string;
}
