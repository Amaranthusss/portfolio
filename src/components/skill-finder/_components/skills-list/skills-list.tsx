'use client'
import { Checkbox } from "@/components/checkbox/checkbox";

import type { SkillsListProps } from "./skills-list.interface";
import type { SkillDTO } from "@/models/skillDto";

import styles from './skills-list.module.scss';

export function SkillsList({
	skills,
	selectedSkillKeys,
	onToggleSkill,
}: SkillsListProps): React.ReactNode {
	return (
		<div className={styles.skillsList}>
			{skills
				.sort((s1, s2): number => s1.name.localeCompare(s2.name))
				.map((skill: SkillDTO): React.ReactNode => (
					<Checkbox
						key={skill.key}
						checked={selectedSkillKeys.has(skill.key)}
						onChange={(): void => onToggleSkill(skill)}
					>
						{skill.name}
					</Checkbox>
				))}
		</div>
	);
}