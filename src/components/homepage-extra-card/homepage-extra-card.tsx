'use client';
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

  return (
    <div className={cn(className, styles.extra_card)}>
      <RichTextContent content={aboutMe.welcome} />

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
