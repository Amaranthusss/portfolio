import type { HeaderMenuItem } from '../../header.interface';
import type { ButtonProps } from '@/components/button/button.interface';

export interface NavButtonProps {
  menuItem: HeaderMenuItem;
  className?: string;
  defaultMode?: ButtonProps['mode'];
  onNavigate?: (menuItem: HeaderMenuItem) => void;
}
