import type { Category } from '@/app/generated/prisma'
import type { SkillDTO } from './skillDto'

import { mapSkill } from './skillDto'

export interface ProjectDTO {
	id: number
	slug: string
	category: Category
	startDate?: Date
	endDate?: Date
	isCurrent: boolean
	name: string
	subname?: string
	description?: string
	skills: SkillDTO[]
}

type ProjectWithRelations = {
	id: number
	slug: string
	category: Category
	startDate: Date | null
	endDate: Date | null
	isCurrent: boolean
	translations: {
		name: string
		subname: string | null
		description: string | null
	}[]
	skills: {
		skill: {
			id: number
			key: string
			translations: {
				name: string
				shortName: string | null
			}[]
		}
	}[]
}

export function mapProject(project: ProjectWithRelations): ProjectDTO {
	const translation = project.translations[0] ?? {
		name: project.slug,
		subname: null,
		description: null,
	}

	return {
		id: project.id,
		slug: project.slug,
		category: project.category,
		startDate: project.startDate ?? undefined,
		endDate: project.endDate ?? undefined,
		isCurrent: project.isCurrent,
		name: translation.name,
		subname: translation.subname ?? undefined,
		description: translation.description ?? undefined,
		skills: project.skills.map(ps => mapSkill(ps.skill)),
	}
}
