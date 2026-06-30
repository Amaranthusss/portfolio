import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { DisplaySkills } from '@/components/display-skills/display-skills';
import Image from 'next/image';

import { getCertifications } from '@/services/getCertifications';

import type { CertificationDTO } from '@/models/certificationDto';

import styles from './page.module.scss';

export default async function CoursesAndCertifications(): Promise<React.ReactNode> {
  const certifications: CertificationDTO[] = await getCertifications();

  return (
    <main>
      <h1>Courses and Certifications</h1>

      <div className={styles.cards_layout}>
        {certifications
          .sort((c1, c2) => c1.issueDate.getTime() - c2.issueDate.getTime())
          .map((c) => (
            <div key={c.id} className={styles.card}>
              <Image
                src={c.image.url}
                alt={c.title}
                width={64}
                height={64}
                className={styles.icon}
              />

              <div className={styles.caption}>
                <strong>{c.title}</strong>{' '}
                <DisplayDateRange
                  endDate={c.issueDate}
                  className={styles.issue_date}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.provider}>{c.provider}</span>
                <span className={styles.description}>{c.description}</span>
                {c.credentialID && (
                  <span className={styles.credential_id}>
                    Credential ID: {c.credentialID}
                  </span>
                )}

                <DisplaySkills skills={c.skills} />
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
