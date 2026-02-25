import Image from "next/image";

import { getCertifications } from "@/services/getCertifications";

import type { CertificationDTO } from "@/models/certificationDto";

import styles from './page.module.scss';

export default async function CoursesAndCertifications(): Promise<React.ReactNode> {
	const certifications: CertificationDTO[] = await getCertifications();

	return (
		<main>
			<h1 className={styles.page_title}>Courses and Certifications</h1>

			<div className={styles.cards_layout}>
				{certifications.map(c => (
					<div key={c.id} className={styles.card}>
						<Image
							src={c.image.url}
							alt={c.title}
							width={64}
							height={64}
							className={styles.icon}
						/>

						<h2 className={styles.caption}>
							<span className={styles.title}>{c.title}</span>
							&nbsp;
							<span className={styles.issue_date}>({c.issueDate.toLocaleDateString()})</span>
						</h2>

						<div className={styles.info}>
							<span className={styles.provider}>{c.provider}</span>
							<span className={styles.description}>{c.description}</span>
							{c.credentialID && <span className={styles.credential_id}>Credential ID: {c.credentialID}</span>}
							<span className={styles.skill_list}>
								Skills:
								{c.skills.map(s => <span key={s.id} className={styles.skill}>{s.name}</span>)}
							</span>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};