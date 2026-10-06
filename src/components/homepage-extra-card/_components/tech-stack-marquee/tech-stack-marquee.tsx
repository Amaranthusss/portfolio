import { Marquee } from '@/components/marquee/marquee';
import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import type { MarqueeItem } from '@/components/marquee/marquee.interface';

import styles from './tech-stack-marquee.module.scss';

export function TechStackMarquee(): React.ReactNode {
  const items: MarqueeItem[] = [
    {
      key: 'react.js',
      content: <Icon icon={Icon.All.React} height={'var(--font-size-xxl)'} />,
    },
    {
      key: 'next.js',
      content: <Icon icon={Icon.All.NextJs} height={'var(--font-size-xxl)'} />,
    },
    {
      key: 'postgress',
      content: (
        <Icon icon={Icon.All.Postgresql} height={'var(--font-size-xxl)'} />
      ),
    },
    {
      key: 'payload',
      content: (
        <Icon icon={Icon.All.PayloadCms} height={'var(--font-size-xxl)'} />
      ),
    },
    {
      key: 'vercel',
      content: <Icon icon={Icon.All.Vercel} height={'var(--font-size-xxl)'} />,
    },
    {
      key: 'resend',
      content: <Icon icon={Icon.All.Resend} height={'var(--font-size-xxl)'} />,
    },
    {
      key: 'drizzle',
      content: (
        <Icon icon={Icon.All.DrizzleOrm} height={'var(--font-size-xxl)'} />
      ),
    },
    {
      key: 'gsap',
      content: <Icon icon={Icon.All.Gsap} height={'var(--font-size-xxl)'} />,
    },
  ];

  return <Marquee items={items} className={styles.tech_stack_marquee} />;
}
