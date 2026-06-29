'use client'
import { ProfileButtons } from "./_components/profile-buttons/profile-buttons";
import { SkillsList } from "./_components/skills-list/skills-list";
import { Divider } from "../divider/divider";

import { useFindBySkills } from "./_hooks/useFindBySkills";

import type { SkillFinderClientProps } from "./skill-finder.client.interface";

export function SkillFinderClient({ skills, profiles }: SkillFinderClientProps): React.ReactNode {
	const {
		selectedSkills,
		isActiveProfile,
		onToggleSkill,
		onToggleProfile
	} = useFindBySkills();

	return (
		<>
			<ProfileButtons
				profiles={profiles}
				isActiveProfile={isActiveProfile}
				onToggleProfile={onToggleProfile}
			/>

			<Divider />

			<SkillsList
				skills={skills}
				selectedSkills={selectedSkills}
				onToggleSkill={onToggleSkill}
			/>
		</>
	);
}