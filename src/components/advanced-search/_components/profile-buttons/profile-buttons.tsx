'use client';
import { Button } from '@/components/button/button';

import type { ProfileButtonsProps } from './profile-buttons.interface';
import type { ProfileDTO } from '@/models/profileDto';

import styles from './profile-buttons.module.scss';

export function ProfileButtons({
  profiles,
  isActiveProfile,
  onToggleProfile
}: ProfileButtonsProps): React.ReactNode {
  return (
    <div className={styles.profileButtons}>
      {profiles
        .sort((p1, p2): number => p1.orderNumber - p2.orderNumber)
        .map((profile: ProfileDTO): React.ReactNode => (
          <Button
            key={profile.slug}
            active={isActiveProfile(profile)}
            onClick={(): void => onToggleProfile(profile)}
            aria-label={`toggle-profile-${profile.slug}-selection`}
          >
            {profile.name}
          </Button>
        ))}
    </div>
  );
}
