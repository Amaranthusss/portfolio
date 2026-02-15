import { getExperienceSteps } from "./services/getExperienceSteps";
import { getCertifications } from "./services/getCertifications";
import { getEducationSteps } from "./services/getEducationSteps";
import { getProjects } from "./services/getProjects";
import { getProfiles } from "./services/getProfiles";
import { getSkills } from "./services/getSkills";

import type { ExperienceStepDTO } from "@/models/experienceStepDto";
import type { EducationStepDTO } from "@/models/educationStepDto";
import type { CertificationDTO } from "@/models/certificationDto";
import type { ProfileDTO } from "@/models/profileDto";
import type { ProjectDTO } from "@/models/projectDto";
import type { SkillDTO } from "@/models/skillDto";

import styles from "./page.module.scss";

export default async function Home() {
	const experienceSteps: ExperienceStepDTO[] = await getExperienceSteps();
	const educationSteps: EducationStepDTO[] = await getEducationSteps();
	const certifications: CertificationDTO[] = await getCertifications();
	const profiles: ProfileDTO[] = await getProfiles();
	const projects: ProjectDTO[] = await getProjects();
	const skills: SkillDTO[] = await getSkills();

	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<span className={styles.label}>
					Doświadczenie
				</span>

				<ul className={styles.list}>
					{experienceSteps.map((step: ExperienceStepDTO) => (
						<li key={step.id}>
							•&nbsp;{step.slug}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.card}>
				<span className={styles.label}>
					Edukacja
				</span>

				<ul className={styles.list}>
					{educationSteps.map((step: EducationStepDTO) => (
						<li key={step.id}>
							•&nbsp;{step.slug}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.card}>
				<span className={styles.label}>
					Edukacja
				</span>

				<ul className={styles.list}>
					{certifications.map((certification: CertificationDTO) => (
						<li key={certification.id}>
							•&nbsp;{certification.slug}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.card}>
				<span className={styles.label}>
					Profile
				</span>

				<ul className={styles.list}>
					{profiles.map((profile: ProfileDTO) => (
						<li key={profile.id}>
							•&nbsp;{profile.slug}
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
							<div style={{ marginLeft: 24 }}>Kategoria: {project.category}</div>
							<div style={{ marginLeft: 24 }}>Data rozpoczęcia: {project.startDate?.toLocaleDateString() ?? '-'}</div>
							<div style={{ marginLeft: 24 }}>Data zakończenia: {project.endDate?.toLocaleDateString() ?? '-'}</div>
							<div style={{ marginLeft: 24 }}>Umiejętności: {project.skills.map(s => s.name).join(', ')}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
