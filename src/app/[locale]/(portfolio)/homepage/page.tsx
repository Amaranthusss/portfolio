import { Title } from '@/components/title/title';
import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import styles from './page.module.scss';

export default async function Home(): Promise<React.ReactNode> {
  const t = await getTranslations('homepage');
  const welcomeImageHeight = 800;

  return (
    <main className={styles.home_page}>
      <div className={styles.welcome}>
        <div className={styles.header}>
          <h1>{t('full-name')}</h1>

          <h2 className={styles.marked}>
            &bull; {t('first-title')}
            <br />
            &bull; {t('second-title')}
          </h2>

          <h2 className={styles.description}>{t('description')}</h2>
        </div>

        <Image
          className={styles.welcome_image}
          src={'/images/welcome.png'}
          alt={'Welcome image'}
          loading={'eager'}
          width={(welcomeImageHeight * 700) / 1050}
          height={welcomeImageHeight}
          sizes={`(max-width: ${(welcomeImageHeight * 700) / 1050}px) 100vw, {width}px`}
        />
      </div>

      <div className={`${styles.about_me} ${styles.card}`}>
        <Title>{t('about-me')}</Title>

        <p>{t('paragraph-1')}</p>
        <p>{t('paragraph-2')}</p>
        <p>{t('paragraph-3')}</p>
        <p>{t('paragraph-4')}</p>
        <p>{t('paragraph-5')}</p>
				
        <p>📫 Email: oskar.szkurlat@gmail.com</p>
        <p>
          💼 LinkedIn:{' '}
          <a
            href={'https://www.linkedin.com/in/oskar-szkur%C5%82at-597782305/'}
          >
            Oskar Szkurłat
          </a>
        </p>
      </div>
    </main>
  );
}
