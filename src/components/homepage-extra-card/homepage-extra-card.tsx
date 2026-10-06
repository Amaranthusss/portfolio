'use client';
import { LighthouseCategory } from './_components/lighthouse-category/lighthouse-category';
import { TechStackMarquee } from './_components/tech-stack-marquee/tech-stack-marquee';
import { RichTextContent } from '../rich-text-content/rich-text-content';
import { ContactForm } from '../contact-form/contact-form';
import { Divider } from '../divider/divider';
import { Button } from '../button/button';

import { useTranslations } from 'next-intl';
import { useClassName } from '@/hooks/useClassName';
import { useState } from 'react';

import type { HomepageExtraCardProps } from './homepage-extra-card.interface';

import { ProjectSlug } from '@/seeds/constants/projectSlug';
import { MenuItem } from './homepage-extra-card.interface';
import { Route } from '@/constants/Route';

import styles from './homepage-extra-card.module.scss';

export function HomepageExtraCard({
  aboutMe,
  className,
  portfolioDocumentation,
}: HomepageExtraCardProps): React.ReactNode {
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem>(
    MenuItem.GetInTouch
  );

  const { cn } = useClassName();
  const tCommon = useTranslations('common');
  const t = useTranslations('homepage');

  const portfolioDetailsRoute: string =
    Route.ProjectsAndRealisations + '/' + ProjectSlug.PortfolioApplication;

  const lighthouseCategories: string[] = [
    t('lighthouse-category.performance'),
    t('lighthouse-category.accessibility'),
    t('lighthouse-category.best-practices'),
    t('lighthouse-category.seo'),
  ];

  return (
    <div className={cn(className, styles.extra_card)}>
      <RichTextContent className={styles.welcome} content={aboutMe.welcome} />

      <div className={styles.menu_buttons}>
        <Button
          mode={currentMenuItem === MenuItem.GetInTouch ? 'primary' : 'default'}
          onClick={(): void => setCurrentMenuItem(MenuItem.GetInTouch)}
        >
          {t('get-in-touch')}
        </Button>

        <Button
          mode={
            currentMenuItem === MenuItem.ApplicationDescrition
              ? 'primary'
              : 'default'
          }
          onClick={(): void =>
            setCurrentMenuItem(MenuItem.ApplicationDescrition)
          }
        >
          {portfolioDocumentation.title}
        </Button>
      </div>

      <Divider />

      {currentMenuItem === MenuItem.ApplicationDescrition && (
        <>
          <div className={styles.lighthouse_categories}>
            {lighthouseCategories.map((title: string): React.ReactNode => {
              return <LighthouseCategory key={title} title={title} />;
            })}
          </div>

          <TechStackMarquee />

          <RichTextContent content={portfolioDocumentation.description} />

          <Button.AnchorButton
            mode={'primary'}
            href={portfolioDetailsRoute}
            aria-label={`read-portfolio-application-details`}
          >
            {tCommon('read-more')}
          </Button.AnchorButton>
        </>
      )}

      {currentMenuItem === MenuItem.GetInTouch && <ContactForm />}
    </div>
  );
}
