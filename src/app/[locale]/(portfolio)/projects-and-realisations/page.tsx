import { ProjectCard } from "@/components/project-card/project-card";

import { getProjects } from "@/services/getProjects";

import type { ProjectDTO } from "@/models/projectDto";

import styles from './page.module.scss';

export default async function ProjectsAndRealisations(): Promise<React.ReactNode> {
	const projects: ProjectDTO[] = await getProjects();

	return (
		<main>
			<h1>Projects and Realisations</h1>

			<div className={styles.cards_layout}>
				{projects.sort(p => p.endDate?.getMilliseconds() ?? new Date().getMilliseconds()).map(p => <ProjectCard key={p.slug} project={p} />)}
			</div>
		</main>
	);
};