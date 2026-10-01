import { Icon } from '../icon/icon';

import { useTranslations } from 'next-intl';

import type { ContactDataProps } from './contact-data.interface';

import styles from './contact-data.module.scss';

export function ContactData({
  email,
  mobile,
  linkedin,
}: ContactDataProps): React.ReactNode {
  const t = useTranslations('common.contact-data');

  return (
    <>
      <div className={styles.contact_data}>
        <span className={styles.caption}>
          <Icon icon={Icon.All.Mail} />
          &nbsp;{t('email')}:
        </span>{' '}
        {email}
      </div>

      <div className={styles.contact_data}>
        <span className={styles.caption}>
          <Icon icon={Icon.All.Phone} />
          &nbsp;{t('mobile')}:
        </span>{' '}
        {mobile}
      </div>

      <div className={styles.contact_data}>
        <span className={styles.caption}>
          <Icon icon={Icon.All.LinkedIn} />
          &nbsp;{t('linkedin')}:
        </span>{' '}
        <a href={linkedin} target={'_blank'}>
          Oskar Szkurłat
        </a>
      </div>
    </>
  );
}
