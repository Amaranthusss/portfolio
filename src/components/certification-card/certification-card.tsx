import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from '../skill-tag-list/skill-tag-list';
import { CardLayout } from '../card-layout/card-layout';
import { Image } from '../image/image';
import { Card } from '../card/card';

import type { CertificationCardProps } from './certification-card.interface';

import styles from './certification-card.module.scss';

export function CertificationCard({
  t,
  theme,
  certification,
}: CertificationCardProps): React.ReactNode {
  return (
    <Card
      key={certification.id}
      slug={certification.slug}
      className={styles.card}
    >
      <CardLayout>
        <CardLayout.Icon>
          <Image
            src={certification.image.url}
            alt={certification.title}
            width={64}
            height={64}
            theme={theme}
            className={styles.icon}
            darkThemeSrc={certification.imageDarkTheme?.url}
          />
        </CardLayout.Icon>

        <CardLayout.Header>
          <h1>{certification.title}</h1>

          <span className={styles.provider}>{certification.provider}</span>

          <DisplayDateRange
            endDate={certification.issueDate}
            className={styles.issue_date}
          />
        </CardLayout.Header>

        <CardLayout.Content>
          <span className={styles.description}>
            {certification.description}
          </span>

          {certification.credentialID && (
            <span className={styles.credential_id}>
              <span>{t('credential-id')}:</span>
              <span>{certification.credentialID}</span>
            </span>
          )}
        </CardLayout.Content>

        <CardLayout.Skills>
          <SkillTagList skills={certification.skills} />
        </CardLayout.Skills>
      </CardLayout>
    </Card>
  );
}
