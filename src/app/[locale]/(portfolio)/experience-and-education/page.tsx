import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { DisplaySkills } from '@/components/display-skills/display-skills';

import { getExperienceSteps } from '@/services/getExperienceSteps';
import { getEducationSteps } from '@/services/getEducationSteps';

import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { EducationStepDTO } from '@/models/educationStepDto';

import styles from './page.module.scss';

export default async function ExperienceAndEducation(): Promise<React.ReactNode> {
  const experienceSteps: ExperienceStepDTO[] = await getExperienceSteps();
  const educationSteps: EducationStepDTO[] = await getEducationSteps();

  return (
    <main>
      <h1>Education</h1>

      <div className={styles.cards_layout}>
        {educationSteps
          .sort(
            (e) => e.endDate?.getMilliseconds() ?? new Date().getMilliseconds()
          )
          .map((e) => (
            <div key={e.id} className={styles.card}>
              <strong className={styles.title}>
                {e.degree ?? e.projectTitle}
              </strong>
              {e.institution && (
                <span className={styles.institution}>{e.institution}</span>
              )}

              <DisplayDateRange
                startDate={e.startDate}
                endDate={e.endDate}
                isCurrent={e.isCurrent}
                className={styles.date_range}
              />

              {e.grade && (
                <span className={styles.description}>
                  Grade: {e.grade}
                  {e.withHonors && ', diploma with distinction'}
                </span>
              )}
              {e.projectTitle && (
                <span className={styles.projectTitle}>
                  Thesis: {e.projectTitle}
                </span>
              )}
              {e.description && (
                <span className={styles.description}>{e.description}</span>
              )}

              <DisplaySkills skills={e.skills} />
            </div>
          ))}
      </div>

      <h1>Experience</h1>

      <div className={styles.cards_layout}>
        {experienceSteps
          .sort(
            (e) => e.endDate?.getMilliseconds() ?? new Date().getMilliseconds()
          )
          .map((e) => (
            <div key={e.id} className={styles.card}>
              <strong>{e.position}</strong>
              {e.company && <span className={styles.company}>{e.company}</span>}
              {e.location && (
                <span className={styles.location}>{e.location}</span>
              )}

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

              {e.description && (
                <span className={styles.description}>{e.description}</span>
              )}

              {e.duties && e.duties.length > 0 && (
                <ul className={styles.duty_list}>
                  Duties:
                  {e.duties.map((d) => (
                    <li key={d} className={styles.duty}>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              <DisplaySkills skills={e.skills} />
            </div>
          ))}
      </div>
    </main>
  );
}
