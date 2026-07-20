'use client';
import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';

import { useTranslations } from 'next-intl';

import type { ProfileButtonsProps } from './profile-buttons.interface';
import type { ProfileDTO } from '@/models/profileDto';

import styles from './profile-buttons.module.scss';

export function ProfileButtons({
  profiles,
  className,
  isActiveProfile,
  isActiveExactProfile,
  onToggleProfile
}: ProfileButtonsProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');

  return (
    <div className={className}>
      <Title size={'md'}>{t('profiles')}:</Title>

      <div className={styles.profile_buttons}>
        {profiles
          .sort((p1, p2): number => p1.orderNumber - p2.orderNumber)
          .map((profile: ProfileDTO): React.ReactNode => (
            <Button
              key={profile.slug}
              mode={isActiveExactProfile(profile) ? 'primary' : undefined}
              active={isActiveProfile(profile)}
              onClick={(): void => onToggleProfile(profile)}
              className={styles.profile_button}
              aria-label={`toggle-profile-${profile.slug}-selection`}
            >
              {profile.name}
            </Button>
          ))}
      </div>
    </div>
  );
}
