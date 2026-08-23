import type { LinkSeedData } from '../interfaces/linkSeedData';

import { IconName } from '@/components/icon/icon.config';
import { LinkKey } from './linkKey';

export const links: LinkSeedData[] = [
  {
    key: LinkKey.CurriculumVitaeGenerator,
    isExternal: true,
    icon: IconName.Build,
    sharedUrl: 'https://amaranthusss.github.io/curriculum-vitae-generator/',
    translations: {
      pl: { label: 'Aplikacja' },
      en: { label: 'Application' },
    },
  },

  {
    key: LinkKey.InvoiceGeneratorV1Github,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://github.com/Amaranthusss/invoice-generator',
    translations: {
      pl: { label: 'Repozytorium' },
      en: { label: 'Repository' },
    },
  },

  {
    key: LinkKey.AmaranthusAgvGithub,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://github.com/Amaranthusss/AutomatedGuidedVehicle',
    translations: {
      pl: { label: 'Repozytorium' },
      en: { label: 'Repository' },
    },
  },

  {
    key: LinkKey.PortfolioApplicationGithub,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://github.com/Amaranthusss/portfolio',
    translations: {
      pl: { label: 'Repozytorium' },
      en: { label: 'Repository' },
    },
  },

  {
    key: LinkKey.CurriculumVitaeGeneratorGithub,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://github.com/Amaranthusss/curriculum-vitae-generator',
    translations: {
      pl: { label: 'Repozytorium' },
      en: { label: 'Repository' },
    },
  },

  {
    key: LinkKey.FindingPathAiGithub,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://github.com/Amaranthusss/react-three-yuka-pathfinding',
    translations: {
      pl: { label: 'Repozytorium' },
      en: { label: 'Repository' },
    },
  },

  {
    key: LinkKey.NurseryWebAppBuild,
    isExternal: true,
    icon: IconName.Github,
    sharedUrl: 'https://zlobek-am-web.vercel.app/',
    translations: {
      pl: { label: 'Kopia aplikacji' },
      en: { label: 'Clone deploy' },
    },
  },

  {
    key: LinkKey.AutomatisationOfProductionSystemsWithUsageOfAgvRelatedExperience,
    isExternal: false,
    icon: IconName.WorkStation,
    sharedUrl: 'experience-and-education#aiut-plc-programmer',
    translations: {
      pl: { label: 'Powiązane stanowisko zawodowe' },
      en: { label: 'Related work station' },
    },
  },

  {
    key: LinkKey.UsingGestureRecognitionForAgvControlPublication,
    isExternal: false,
    icon: IconName.Publication,
    sharedUrl:
      'publications#using-gesture-recognition-for-agv-control-preliminary-research',
    translations: {
      pl: { label: 'Powiązana publikacja' },
      en: { label: 'Related publication' },
    },
  },
];
