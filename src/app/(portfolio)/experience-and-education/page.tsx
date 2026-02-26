import { DisplayDateRange } from "@/components/display-date-range/display-date-range";

import { getExperienceSteps } from "@/services/getExperienceSteps";
import { getEducationSteps } from "@/services/getEducationSteps";

import type { ExperienceStepDTO } from "@/models/experienceStepDto";
import type { EducationStepDTO } from "@/models/educationStepDto";

import styles from './page.module.scss';

export default async function ExperienceAndEducation(): Promise<React.ReactNode> {
	const experienceSteps: ExperienceStepDTO[] = await getExperienceSteps();
	const educationSteps: EducationStepDTO[] = await getEducationSteps();

	return (
		<main>
			<h1 className={styles.page_title}>Education</h1>

			<div className={styles.cards_layout}>
				{educationSteps.sort(e => e.endDate?.getMilliseconds() ?? new Date().getMilliseconds()).map(e => (
					<div key={e.id} className={styles.card}>
						<h2 className={styles.title}>{e.degree ?? e.projectTitle}</h2>
						{e.institution && <span className={styles.institution}>{e.institution}</span>}

						<DisplayDateRange
							startDate={e.startDate}
							endDate={e.endDate}
							isCurrent={e.isCurrent}
							className={styles.date_range}
						/>

						{e.grade && <span className={styles.description}>Grade: {e.grade}{e.withHonors && ', diploma with distinction'}</span>}
						{e.projectTitle && <span className={styles.projectTitle}>Thesis: {e.projectTitle}</span>}
						{e.description && <span className={styles.description}>{e.description}</span>}

						{e.skills.length > 0 && (
							<span className={styles.skill_list}>
								Skills:
								{e.skills.sort((s1, s2) => s1.name.localeCompare(s2.name)).map(s => <span key={s.id} className={styles.skill}>{s.name}</span>)}
							</span>
						)}
					</div>
				))}
			</div>

			<h1 className={`${styles.page_title} ${styles.experience_title}`}>Experience</h1>

			<div className={styles.cards_layout}>
				{experienceSteps.sort(e => e.endDate?.getMilliseconds() ?? new Date().getMilliseconds()).map(e => (
					<div key={e.id} className={styles.card}>
						<h2 className={styles.title}>{e.position}</h2>
						{e.company && <span className={styles.company}>{e.company}</span>}
						{e.location && <span className={styles.location}>{e.location}</span>}

						<DisplayDateRange
							startDate={e.startDate}
							endDate={e.endDate}
							isCurrent={e.isCurrent}
							className={styles.date_range}
						/>

						<span className={styles.types}>
							{e.employmentType && e.employmentType}
							{e.locationType && <>, {e.locationType}</>}
						</span>

						{e.description && <span className={styles.description}>{e.description}</span>}

						{e.duties && e.duties.length > 0 && (
							<ul className={styles.duty_list}>
								Duties:
								{e.duties.map(d => <li key={d} className={styles.duty}>{d}</li>)}
							</ul>
						)}

						{e.skills.length > 0 && (
							<span className={styles.skill_list}>
								Skills:
								{e.skills.sort((s1, s2) => s1.name.localeCompare(s2.name)).map(s => <span key={s.id} className={styles.skill}>{s.name}</span>)}
							</span>
						)}
					</div>
				))}
			</div>
		</main>
	);
};