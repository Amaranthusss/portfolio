import { Button } from '@/components/button/button';
import { Title } from '@/components/title/title';
import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import styles from './page.module.scss';

export default async function Homepage(): Promise<React.ReactNode> {
  const t = await getTranslations('homepage');

  return (
    <main className={styles.homepage}>
      <div className={styles.welcome}>
        <div className={styles.header}>
          <h1>{t('full-name')}</h1>

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

        <Image
          className={styles.welcome_image}
          src={'/images/homepage.png'}
          alt={'Homepage background image'}
          loading={'eager'}
          quality={100}
          width={1219}
          height={756}
          priority
        />
      </div>

      <div className={`${styles.about_me}`}>
        <Title>Hi, I'm Oskar</Title>

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

      <div className={`${styles.shortcuts}`}>
        I build complex, performant and user-friendly web applications.
        <div>
          <Button mode={'primary'}>View Projects</Button>
          <Button mode={'default'}>Get in Touch</Button>
        </div>
      </div>
    </main>
  );
}
