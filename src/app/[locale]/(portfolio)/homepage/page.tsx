import { HomepageExtraCard } from '@/components/homepage-extra-card/homepage-extra-card';
import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { HomepageImage } from '@/components/homepage-image/homepage-image';
import { Title } from '@/components/title/title';

import { getPortfolioDocumentation } from '@/services/getPortfolioDocumentation';
import { getTranslations } from 'next-intl/server';
import { getAboutMe } from '@/services/getAboutMe';
import { getLocale } from 'next-intl/server';
import { getTheme } from '@/utils/getTheme';

import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { AboutMeDTO } from '@/models/aboutMeDto';
import type { Locale } from '@/i18n/locale';
import type { Theme } from '@/constants/Theme';

import styles from './page.module.scss';

export default async function Homepage(): Promise<React.ReactNode> {
  const t = await getTranslations('homepage');
  const locale: Locale = await getLocale();
  const aboutMe: AboutMeDTO = await getAboutMe(locale);
  const theme: Theme = await getTheme();
  const portfolioDocumentation: PortfolioDocumentationDTO =
    await getPortfolioDocumentation(locale);

  return (
    <section className={styles.homepage}>
      <div className={styles.welcome}>
        <div className={styles.header}>
          <h1 className={styles.full_name}>{t('full-name')}</h1>

          <h2 className={styles.marked}>
            {t('first-title')}
            <br />
            {t('second-title')}
          </h2>

          <h2 className={styles.description}>
            {t('first-description')}
            <br />
            {t('second-description')}
          </h2>
        </div>

        <HomepageImage theme={theme} />
      </div>

      <div className={styles.about_me}>
        <Title>{aboutMe.title}</Title>

        <RichTextContent content={aboutMe.content} />

        <p>📫 Email: {aboutMe.email}</p>
        <p>
          💼 LinkedIn: <a href={aboutMe.linkedin}>Oskar Szkurłat</a>
        </p>
      </div>

      <HomepageExtraCard
        aboutMe={aboutMe}
        className={styles.extra_card}
        portfolioDocumentation={portfolioDocumentation}
      />
    </section>
  );
}
