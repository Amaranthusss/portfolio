import { getProjects } from "./services/getProjects";
import { getSkills } from "./services/getSkills";

import type { ProjectDTO } from "@/lib/dtos/projectDto";
import type { SkillDTO } from "@/lib/dtos/skillDto";

import { Category } from "./generated/prisma";

import styles from "./page.module.scss";

export default async function Home() {
	const skills: SkillDTO[] = await getSkills();
	const projects: ProjectDTO[] = await getProjects();

	return (
		<main className={styles.page}>
			<div className={styles.card}>
				<span className={styles.label}>
					Kategorie
				</span>

				<ul className={styles.list}>
					{Object.keys(Category).map((key: string) => (
						<li key={key}>
							•&nbsp;{key}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.card}>
				<span className={styles.label}>
					Umiejętności
				</span>

				<ul className={styles.list}>
					{skills.map((skill: SkillDTO) => (
						<li key={skill.id}>
							•&nbsp;{skill.name}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.card}>
				<span className={styles.label}>
					Projekty
				</span>

				<ul className={styles.list}>
					{projects.map((project: ProjectDTO) => (
						<li key={project.id}>
							•&nbsp;<b>{project.name}</b>
							<div style={{marginLeft: 24}}>Kategoria: {project.category}</div>
							<div style={{marginLeft: 24}}>Data rozpoczęcia: {project.startDate?.toLocaleDateString() ?? '-'}</div>
							<div style={{marginLeft: 24}}>Data zakończenia: {project.endDate?.toLocaleDateString() ?? '-'}</div>
							<div style={{marginLeft: 24}}>Umiejętności: {project.skills.map(s => s.name).join(', ')}</div>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
