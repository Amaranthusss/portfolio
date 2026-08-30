import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { AboutMeDTO } from '@/models/aboutMeDto';

export interface HomepageExtraCardProps {
  aboutMe: AboutMeDTO;
  portfolioDocumentation: PortfolioDocumentationDTO;
  className?: string;
}

export enum MenuItem {
  GetInTouch = 'get-in-touch',
  ApplicationDescrition = 'application-description',
}
