import type { HeaderMenuItem } from '../../header.interface';

export interface NavButtonProps {
  menuItem: HeaderMenuItem;
  className?: string;
  onNavigate?: (menuItem: HeaderMenuItem) => void;
}
