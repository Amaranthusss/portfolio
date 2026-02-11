export interface SkillDTO {
	id: number
	key: string
	name: string
	shortName?: string
}

type SkillWithTranslation = {
	id: number
	key: string
	translations: {
		name: string
		shortName: string | null
	}[]
}

export function mapSkill(skill: SkillWithTranslation): SkillDTO {
	const translation = skill.translations[0] ?? {
		name: skill.key,
		shortName: null,
	}

	return {
		id: skill.id,
		key: skill.key,
		name: translation.name,
		shortName: translation.shortName ?? undefined,
	}
}
