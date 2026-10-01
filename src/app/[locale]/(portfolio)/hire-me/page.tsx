import { DownloadCvButton } from '@/components/download-cv-button/download-cv-button';
import { ContactForm } from '@/components/contact-form/contact-form';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';

import { getTranslations } from 'next-intl/server';

import styles from './page.module.scss';

export default async function HireMe(): Promise<React.ReactNode> {
  const t = await getTranslations('common.contact-form');

  return (
    <ListModule className={styles.module}>
      <div className={styles.header}>
        <Title>{t('caption')}</Title>

        <DownloadCvButton
          disableTooltip
          className={styles.download_cv_button}
        />
      </div>

      <Card>
        <ContactForm />
      </Card>
    </ListModule>
  );
}
