import type { useFindBySkills as UseFindBySkills } from "../../_hooks/useFindBySkills";
import type { SkillDTO } from "@/models/skillDto";

export interface SkillsListProps {
	skills: SkillDTO[];
	selectedSkillKeys: ReturnType<typeof UseFindBySkills>['selectedSkillKeys'];
	onToggleSkill: ReturnType<typeof UseFindBySkills>['onToggleSkill'];
}