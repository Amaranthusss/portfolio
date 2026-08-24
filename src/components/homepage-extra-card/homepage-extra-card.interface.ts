import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';

export interface HomepageExtraCardProps {
  portfolioDocumentation: PortfolioDocumentationDTO;
  className?: string;
}

export enum MenuItem {
  GetInTouch = 'get-in-touch',
  ApplicationDescrition = 'application-description',
}
