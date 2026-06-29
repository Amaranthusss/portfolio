import type { useFindBySkills as UseFindBySkills } from "../../_hooks/useFindBySkills";
import type { SkillDTO } from "@/models/skillDto";

export interface SkillsListProps {
	skills: SkillDTO[];
	selectedSkills: ReturnType<typeof UseFindBySkills>['selectedSkills'];
	onToggleSkill: ReturnType<typeof UseFindBySkills>['onToggleSkill'];
}