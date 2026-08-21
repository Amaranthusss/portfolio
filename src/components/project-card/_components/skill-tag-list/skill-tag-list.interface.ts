import type { SkillDTO } from '@/models/skillDto';

export interface SkillTagListProps {
  skills: SkillDTO[];
  coreSkills: SkillDTO[];
  className?: string;
}
