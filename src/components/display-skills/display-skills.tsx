import type { DisplaySkillsProps } from './display-skills.interface';
import type { SkillDTO } from '@/models/skillDto';

import styles from './display-skills.module.scss';

export function DisplaySkills({
  skills,
  style,
  className,
}: DisplaySkillsProps): React.ReactNode {
  if (skills.length === 0) return null;

  const classNames = [className, styles.skill_list]
    .filter((c) => c != null)
    .join(' ');
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <span className={classNames} style={style}>
      Skills:
      {sortedSkills.map((s: SkillDTO): React.ReactNode => (
        <span key={s.id} className={styles.skill}>
          {s.name}
        </span>
      ))}
    </span>
  );
}
