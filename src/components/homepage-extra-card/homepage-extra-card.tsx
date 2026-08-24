'use client';
import { RichTextContent } from '../rich-text-content/rich-text-content';
import { ContactForm } from '../contact-form/contact-form';
import { Divider } from '../divider/divider';
import { Button } from '../button/button';

import { useClassName } from '@/hooks/useClassName';
import { useState } from 'react';

import type { HomepageExtraCardProps } from './homepage-extra-card.interface';

import { MenuItem } from './homepage-extra-card.interface';

import styles from './homepage-extra-card.module.scss';

export function HomepageExtraCard({
  className,
  portfolioDocumentation,
}: HomepageExtraCardProps): React.ReactNode {
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem>(
    MenuItem.GetInTouch
  );

  const { cn } = useClassName();

  return (
    <div className={cn(className, styles.extra_card)}>
      I build complex, performant and user-friendly web applications.
      <div className={styles.menu_buttons}>
        <Button
          mode={'primary'}
          active={currentMenuItem === MenuItem.ApplicationDescrition}
          onClick={(): void =>
            setCurrentMenuItem(MenuItem.ApplicationDescrition)
          }
        >
          {portfolioDocumentation.title}
        </Button>

        <Button
          mode={'default'}
          active={currentMenuItem === MenuItem.GetInTouch}
          onClick={(): void => setCurrentMenuItem(MenuItem.GetInTouch)}
        >
          Get in Touch
        </Button>
      </div>
      <Divider />
      {currentMenuItem === MenuItem.ApplicationDescrition && (
        <RichTextContent content={portfolioDocumentation.content} />
      )}
      {currentMenuItem === MenuItem.GetInTouch && <ContactForm />}
    </div>
  );
}
