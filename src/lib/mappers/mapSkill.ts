import { mapTranslation } from "./mapTranslation";

import type { SkillWithTranslations } from "@/models/skillWithTranslations";
import type { SkillDTO } from "@/models/skillDto";

export function mapSkill(skill: SkillWithTranslations): SkillDTO {
	const { name, shortName } = mapTranslation(skill.translations, skill.key);

	return { id: skill.id, key: skill.key, name, shortName };
};