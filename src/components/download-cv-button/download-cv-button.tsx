import { Button } from '../button/button';
import { Icon } from '../icon/icon';

import { useTranslations } from 'next-intl';
import { useClassName } from '@/hooks/useClassName';

import type { DownloadCvButtonProps } from './download-cv-button.interface';

import styles from './download-cv-button.module.scss';

export function DownloadCvButton({
  showIcon = true,
  showText = true,
  disableTooltip = false,
  ...props
}: DownloadCvButtonProps): React.ReactNode {
  const t = useTranslations('common.download-cv');
  const { cn } = useClassName();

  const href = '/files/Oskar Szkurlat CV.pdf';

  return (
    <Button.AnchorButton
      mode={'primary'}
      target={'_blank'}
      tooltip={!disableTooltip ? t('tooltip') : undefined}
      aria-label={t('tooltip')}
      {...props}
      href={href}
      className={cn(styles.download_cv_button, props.className)}
    >
      {showIcon && <Icon icon={Icon.All.CurriculumVitae} />}

      {showText && t('button')}
    </Button.AnchorButton>
  );
}
