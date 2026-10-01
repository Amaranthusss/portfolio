import type { AnchorButtonProps } from '../button/_components/anchor-button/anchor-button.interface';

export interface DownloadCvButtonProps extends Omit<
  AnchorButtonProps,
  'href' | 'tooltip' | 'aria-label'
> {
  showText?: boolean;
  showIcon?: boolean;
  disableTooltip?: boolean;
}
