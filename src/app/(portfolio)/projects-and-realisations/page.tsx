import { DisplayDateRange } from "@/components/display-date-range/display-date-range";
import { DisplaySkills } from "@/components/display-skills/display-skills";

import { getProjects } from "@/services/getProjects";

import type { ProjectDTO } from "@/models/projectDto";

import styles from './page.module.scss';

export default async function ProjectsAndRealisations(): Promise<React.ReactNode> {
	const projects: ProjectDTO[] = await getProjects();

	return (
		<main>
			<h1 className={styles.page_title}>Projects and Realisations</h1>

			<div className={styles.cards_layout}>
				{projects.sort(p => p.endDate?.getMilliseconds() ?? new Date().getMilliseconds()).map(p => (
					<div key={p.id} className={styles.card}>
						<h2 className={styles.name}>{p.name}</h2>
						<span className={styles.category}>Category: {p.category}</span>

						<DisplayDateRange
							startDate={p.startDate}
							endDate={p.endDate}
							isCurrent={p.isCurrent}
							className={styles.date_range}
						/>

						{p.description && <span className={styles.description}>{p.description}</span>}
						<DisplaySkills skills={p.skills} />
					</div>
				))}
			</div>
		</main>
	);
};