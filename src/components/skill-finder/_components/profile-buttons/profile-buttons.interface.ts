import type { useFindBySkills as UseFindBySkills } from "../../_hooks/useFindBySkills";
import type { ProfileDTO } from "@/models/profileDto";

export interface ProfileButtonsProps {
	profiles: ProfileDTO[];
	isActiveProfile: ReturnType<typeof UseFindBySkills>['isActiveProfile'];
	onToggleProfile: ReturnType<typeof UseFindBySkills>['onToggleProfile'];
}
