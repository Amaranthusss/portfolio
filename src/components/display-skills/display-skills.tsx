import { createClassNames } from '@/utils/createClassNames';
import { getTranslations } from 'next-intl/server';

import type { DisplaySkillsProps } from './display-skills.interface';
import type { SkillDTO } from '@/models/skillDto';

import styles from './display-skills.module.scss';

export async function DisplaySkills({
  skills,
  style,
  className
}: DisplaySkillsProps): Promise<React.ReactNode> {
  if (skills.length === 0) return null;

  const { cn } = await createClassNames();
  const t = await getTranslations('common');

  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <span className={cn(className, styles.skill_list)} style={style}>
      {t('skills')}:
      {sortedSkills.map((s: SkillDTO): React.ReactNode => (
        <span key={s.id} className={styles.skill}>
          {s.name}
        </span>
      ))}
    </span>
  );
}
