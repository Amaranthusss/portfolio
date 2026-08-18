import type { MediaDTO } from './mediaDto';
import type { SkillDTO } from './skillDto';

export type CoreTechnologiesNodeDTO = {
  title: string;
  icon: MediaDTO;
  skills?: SkillDTO[];
};
