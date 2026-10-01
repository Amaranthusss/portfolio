import { DownloadCvButton } from '@/components/download-cv-button/download-cv-button';
import { ContactForm } from '@/components/contact-form/contact-form';
import { ContactData } from '@/components/contact-data/contact-data';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';

import { getLocale, getTranslations } from 'next-intl/server';
import { getAboutMe } from '@/services/getAboutMe';

import type { AboutMeDTO } from '@/models/aboutMeDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function HireMe(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const aboutMe: AboutMeDTO = await getAboutMe(locale);
  const t = await getTranslations('hire-me');

  return (
    <ListModule className={styles.module}>
      <div className={styles.header}>
        <Title>{t('title')}</Title>

        <DownloadCvButton
          disableTooltip
          className={styles.download_cv_button}
        />
      </div>

      <Card
        className={styles.card}
        header={
          <div className={styles.contact_data}>
            <ContactData
              email={aboutMe.email}
              mobile={aboutMe.mobile}
              linkedin={aboutMe.linkedin}
            />
          </div>
        }
      >
        <ContactForm />
      </Card>
    </ListModule>
  );
}
