import { useState } from "react";

import type { ProfileDTO } from "@/models/profileDto";
import type { SkillDTO } from "@/models/skillDto";
import type { SkillKey } from "@/generated/prisma";

export function useFindBySkills() {
	const [selectedSkills, setSelectedSkills] = useState<Set<SkillKey>>(new Set());

	const onToggleSkill = (skill: SkillDTO): void => {
		setSelectedSkills(prev => {
			const next: Set<SkillKey> = new Set(prev);

			if (next.has(skill.key)) next.delete(skill.key);
			else next.add(skill.key);

			return next;
		});
	}

	const isActiveProfile = (profile: ProfileDTO): boolean => {
		const profileSkillKeys: SkillKey[] = profile.skills.map(s => s.key);

		return profileSkillKeys.every(key => selectedSkills.has(key));
	}

	const onToggleProfile = (profile: ProfileDTO): void => {
		const profileSkillKeys: SkillKey[] = profile.skills.map(s => s.key);
		const isSomeMissing: boolean = !isActiveProfile(profile);

		setSelectedSkills(prev => {
			const next: Set<SkillKey> = new Set(prev);

			for (const skillKey of profileSkillKeys) {
				if (isSomeMissing) next.add(skillKey);
				else next.delete(skillKey);
			}

			return next;
		});
	}

	return { selectedSkills, isActiveProfile, onToggleSkill, onToggleProfile };
}