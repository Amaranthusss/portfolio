'use client';
import { Tag } from '@/components/tag/tag';

import { useEffect, useRef, useState } from 'react';
import { useClassName } from '@/hooks/useClassName';

import type { SkillTagListProps } from './skill-tag-list.interface';
import type { SkillDTO } from '@/models/skillDto';

import styles from './skill-tag-list.module.scss';

export function SkillTagList({
  skills,
  coreSkills = [],
  className,
}: SkillTagListProps): React.ReactNode {
  const [showAll, setShowAll] = useState<boolean>(
    coreSkills.length === 0 || false
  );

  const [isClosing, setIsClosing] = useState<boolean>(false);

  const skillTagListRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  const { cn, boolToClass } = useClassName();

  const coreSkillIds: Set<SkillDTO['id']> = new Set<SkillDTO['id']>(
    coreSkills.map((skill: SkillDTO): SkillDTO['id'] => skill.id)
  );

  const additionalSkills: SkillDTO[] = skills.filter(
    (skill: SkillDTO): boolean => !coreSkillIds.has(skill.id)
  );

  const allSkills: SkillDTO[] = [...coreSkills, ...additionalSkills];

  const skillsToDisplay: SkillDTO[] = showAll ? allSkills : coreSkills;

  const toggleShowMore = (): void => {
    if (showAll) return setIsClosing(true);
    setShowAll(true);
  };

  const style: CustomCSSProperties = {
    '--core-skills-count': coreSkills.length,
  };

  useEffect((): (() => void) => {
    if (!isClosing) return (): void => undefined;

    const container: HTMLDivElement | null = skillTagListRef.current;

    if (container == null) return (): void => undefined;

    const closingSkills: HTMLElement[] = Array.from(
      container.querySelectorAll<HTMLElement>(`.${styles.skill_closing}`)
    );

    const lastSkill: HTMLElement | undefined =
      closingSkills[closingSkills.length - 1];

    if (lastSkill == null) {
      setShowAll(false);
      setIsClosing(false);

      return (): void => undefined;
    }

    const handleAnimationEnd = (): void => {
      setShowAll(false);
      setIsClosing(false);
    };

    lastSkill.addEventListener('animationend', handleAnimationEnd);

    return (): void => {
      lastSkill.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isClosing]);

  return (
    <div
      ref={skillTagListRef}
      className={cn(
        styles.skill_tag_list,
        boolToClass(coreSkills.length === 0, styles.without_core_skills),
        className
      )}
      style={style}
    >
      {skillsToDisplay.map((skill: SkillDTO): React.ReactNode => (
        <div
          key={skill.key}
          className={cn(
            styles.skill,
            boolToClass(
              isClosing && !coreSkillIds.has(skill.id),
              styles.skill_closing
            )
          )}
        >
          <Tag>{skill.name}</Tag>
        </div>
      ))}

      {coreSkills.length > 0 && skills.length > coreSkills.length && (
        <button
          type={'button'}
          className={styles.toggle_button}
          onClick={toggleShowMore}
        >
          <Tag
            theme={{
              backgroundColor: 'var(--infill-darker-bg-color)',
            }}
            className={styles.toggle_button_tag}
          >
            {showAll ? 'Show core skills' : 'Show all skills'}
          </Tag>
        </button>
      )}
    </div>
  );
}
