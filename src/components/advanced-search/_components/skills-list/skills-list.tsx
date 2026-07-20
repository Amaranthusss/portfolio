'use client';
import { Checkbox } from '@/components/checkbox/checkbox';
import { Title } from '@/components/title/title';

import { useTranslations } from 'next-intl';

import type { SkillsListProps } from './skills-list.interface';
import type { SkillDTO } from '@/models/skillDto';

import styles from './skills-list.module.scss';

export function SkillsList({
  skills,
  className,
  selectedSkillKeys,
  onToggleSkill
}: SkillsListProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');

  return (
    <div className={className}>
      <Title size={'md'}>{t('skill-set')}:</Title>
      <div className={styles.skills_list}>
        {skills
          .sort((s1, s2): number => s1.name.localeCompare(s2.name))
          .map((skill: SkillDTO): React.ReactNode => (
            <Checkbox
              key={skill.key}
              checked={selectedSkillKeys.has(skill.key)}
              container={{ className: styles.skill_checkbox }}
              onChange={(): void => onToggleSkill(skill)}
            >
              {skill.name}
            </Checkbox>
          ))}
      </div>
    </div>
  );
}
