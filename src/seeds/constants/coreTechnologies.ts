import type { CoreTechnologiesGroupSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { CoreTechnologiesSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { Locale } from '@/i18n/locale';

import { coreTechnologiesContentEN } from './coreTechnologiesContent';
import { coreTechnologiesContentPL } from './coreTechnologiesContent';
import { CoreTechnologiesSlug } from './coreTechnologiesSlug';
import { IconName } from '@/components/icon/icon.config';

const groups: CoreTechnologiesGroupSeedData[] = [
  {
    title: 'Git',
    slug: CoreTechnologiesSlug.Git,
    color: 'gray',
    icon: IconName.Github,
    translations: {
      pl: { description: 'Kontrola wersji i współpraca nad kodem' },
      en: { description: 'Version control and code collaboration' },
    },
    nodes: [
      {
        title: 'DevOps',
        iconFilename: 'icons/devops.png',
        skills: ['Git'],
      },
      {
        title: 'GitLab',
        iconFilename: 'icons/gitlab.png',
        skills: ['Git'],
      },
      {
        title: 'GitHub',
        iconFilename: 'icons/github.png',
        skills: ['Git'],
      },
    ],
  },

  {
    title: 'UI Design',
    slug: CoreTechnologiesSlug.UiDesign,
    color: 'magenta',
    icon: IconName.Hamburger,
    translations: {
      pl: {
        description: 'Projektowanie interfejsów i doświadczeń użytkownika',
      },
      en: { description: 'User interface and experience design' },
    },
    nodes: [
      {
        title: 'Figma',
        iconFilename: 'icons/figma.png',
      },
      {
        title: 'Adobe Xd',
        iconFilename: 'icons/adobe-xd.png',
      },
    ],
  },

  {
    title: 'Tasks & Docs',
    slug: CoreTechnologiesSlug.TasksAndDocs,
    color: 'cornflowerblue',
    icon: IconName.Read,
    translations: {
      pl: { description: 'Zarządzanie zadaniami i dokumentacją projektową' },
      en: { description: 'Task and project documentation management' },
    },
    nodes: [
      {
        title: 'Jira',
        iconFilename: 'icons/jira.png',
      },
      {
        title: 'Confluence',
        iconFilename: 'icons/confluence.png',
      },
    ],
  },

  {
    title: 'Programming Languages',
    slug: CoreTechnologiesSlug.JSLanguages,
    color: '#0079db',
    icon: IconName.SoftwareProgramming,
    translations: {
      pl: { description: 'Języki programowania używane w projektach' },
      en: { description: 'Programming languages used across projects' },
    },
    nodes: [
      {
        title: 'TypeScript',
        iconFilename: 'icons/typescript.png',
        skills: ['TS'],
      },
      {
        title: 'JavaScript',
        iconFilename: 'icons/javascript.png',
        skills: ['JS', 'NodeJS'],
      },
    ],
  },

  {
    title: 'Front-end Frameworks',
    slug: CoreTechnologiesSlug.FrontendFrameworks,
    color: '#26EBF5',
    icon: IconName.Frontend,
    references: [CoreTechnologiesSlug.JSLanguages],
    translations: {
      pl: { description: 'Frameworki do tworzenia aplikacji webowych' },
      en: { description: 'Frameworks for building web applications' },
    },
    nodes: [
      {
        title: 'React.js',
        iconFilename: 'icons/react-js.png',
        skills: ['ReactJS'],
      },
      {
        title: 'Angular.js',
        iconFilename: 'icons/angular.png',
        skills: ['Angular'],
      },
    ],
  },

  {
    title: 'CSS Extensions',
    slug: CoreTechnologiesSlug.CssExtensions,
    color: '#EC7EAD',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Rozszerzenia i narzędzia usprawniające CSS' },
      en: { description: 'Extensions and tools for enhanced CSS development' },
    },
    nodes: [
      {
        title: 'SASS',
        iconFilename: 'icons/sass.svg',
        skills: ['SASS'],
      },
      {
        title: 'LESS',
        iconFilename: 'icons/less.png',
        skills: ['LESS'],
      },
    ],
  },

  {
    title: 'Testing',
    slug: CoreTechnologiesSlug.FrontendTesting,
    color: '#5FFDE6',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Testowanie aplikacji i interfejsów użytkownika' },
      en: { description: 'Application and user interface testing' },
    },
    nodes: [
      {
        title: 'Cypress',
        iconFilename: 'icons/cypress.svg',
        skills: ['Cypress'],
      },
    ],
  },

  {
    title: 'UI Components',
    slug: CoreTechnologiesSlug.UiComponents,
    color: '#39B5F5',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Biblioteki gotowych komponentów interfejsu' },
      en: { description: 'Libraries of ready-to-use interface components' },
    },
    nodes: [
      {
        title: 'AntDesign',
        iconFilename: 'icons/ant-design.svg',
        skills: ['AntDReact', 'AntDBlazor'],
      },
      {
        title: 'DevExtreme',
        iconFilename: 'icons/dev-extreme.svg',
        skills: ['DevExtremeReact', 'DevExtremeAngular'],
      },
      {
        title: 'Material UI',
        iconFilename: 'icons/material-ui.png',
        skills: ['MaterialUI'],
      },
    ],
  },

  {
    title: 'CMS',
    slug: CoreTechnologiesSlug.Cms,
    color: '#985AE7',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Systemy zarządzania treścią i danymi' },
      en: { description: 'Content and data management systems' },
    },
    nodes: [
      {
        title: 'Sanity CMS',
        iconFilename: 'icons/sanity.png',
        skills: ['SanityCMS', 'CMS'],
      },
      {
        title: 'Payload CMS',
        iconFilename: 'icons/payload-cms.png',
        skills: ['PayloadCMS', 'CMS'],
      },
    ],
  },

  {
    title: 'Build Tools',
    slug: CoreTechnologiesSlug.BuildTools,
    color: '#3c9eee',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Narzędzia do budowania i uruchamiania aplikacji' },
      en: { description: 'Tools for building and running applications' },
    },
    nodes: [
      {
        title: 'Vite',
        iconFilename: 'icons/vite.png',
        skills: ['Vite'],
      },
      {
        title: 'Next.js',
        iconFilename: 'icons/next-js.png',
        skills: ['NextJS'],
      },
      {
        title: 'Create React App',
        iconFilename: 'icons/create-react-app.svg',
        skills: ['CRA'],
      },
    ],
  },

  {
    title: 'Developer Tools',
    slug: CoreTechnologiesSlug.DeveloperTools,
    color: '#1B959C',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.BuildTools],
    translations: {
      pl: { description: 'Narzędzia wspierające jakość i rozwój kodu' },
      en: { description: 'Tools supporting code quality and development' },
    },
    nodes: [
      {
        title: 'ESLint',
        iconFilename: 'icons/eslint.png',
      },
      {
        title: 'Prettier',
        iconFilename: 'icons/prettier.png',
      },
    ],
  },

  {
    title: 'Global States',
    slug: CoreTechnologiesSlug.GlobalStates,
    color: '#E199FB',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Zarządzanie globalnym stanem aplikacji' },
      en: { description: 'Global application state management' },
    },
    nodes: [
      {
        title: 'Zustand',
        iconFilename: 'icons/zustand.svg',
        skills: ['Zustand'],
      },
      {
        title: 'Redux Toolkit',
        iconFilename: 'icons/redux-toolkit.svg',
        skills: ['Redux'],
      },
      {
        title: 'Jotai',
        iconFilename: 'icons/jotai.png',
      },
    ],
  },

  {
    title: 'Core Libraries',
    slug: CoreTechnologiesSlug.CoreLibraries,
    color: '#ff8c00',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.FrontendFrameworks],
    translations: {
      pl: { description: 'Biblioteki rozszerzające możliwości aplikacji' },
      en: { description: 'Libraries extending application capabilities' },
    },
    nodes: [
      {
        title: 'Leaflet',
        iconFilename: 'icons/leaflet.png',
        skills: ['Leaflet'],
      },
      {
        title: 'Three.js',
        iconFilename: 'icons/three.png',
        skills: ['ThreeJS'],
      },
      {
        title: 'Lodash',
        iconFilename: 'icons/lodash.png',
        skills: ['Lodash'],
      },
      {
        title: 'Socket.io',
        iconFilename: 'icons/socket-io.svg',
        skills: ['SocketIO', 'WS'],
      },
    ],
  },

  {
    title: 'Back-end Frameworks',
    slug: CoreTechnologiesSlug.BackendFrameworks,
    color: '#FDDD40',
    icon: IconName.Backend,
    references: [CoreTechnologiesSlug.JSLanguages],
    translations: {
      pl: { description: 'Frameworki do tworzenia aplikacji serwerowych' },
      en: { description: 'Frameworks for building server-side applications' },
    },
    nodes: [
      {
        title: 'Nest.js',
        iconFilename: 'icons/nest-js.svg',
        skills: ['NestJS'],
      },
      {
        title: 'Express.js',
        iconFilename: 'icons/express.svg',
        skills: ['ExpressJS'],
      },
    ],
  },

  {
    title: 'Testing',
    slug: CoreTechnologiesSlug.BackendTesting,
    color: '#35BB94',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.BackendFrameworks],
    translations: {
      pl: { description: 'Testowanie logiki i usług po stronie serwera' },
      en: { description: 'Server-side logic and service testing' },
    },
    nodes: [
      {
        title: 'Jest.js',
        iconFilename: 'icons/jest.png',
        skills: ['Jest'],
      },
    ],
  },

  {
    title: 'ORM',
    slug: CoreTechnologiesSlug.Orm,
    color: '#F2C439',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.BackendFrameworks],
    translations: {
      pl: { description: 'Mapowanie danych między kodem a bazą danych' },
      en: { description: 'Mapping data between code and databases' },
    },
    nodes: [
      {
        title: 'Prisma',
        iconFilename: 'icons/prisma.svg',
        skills: ['Prisma', 'ORM'],
      },
      {
        title: 'TypeORM',
        iconFilename: 'icons/type-orm.png',
        skills: ['TypeORM', 'ORM'],
      },
      {
        title: 'Drizzle ORM',
        iconFilename: 'icons/drizzle.png',
        skills: ['Drizzle', 'ORM'],
      },
    ],
  },

  {
    title: 'Databases',
    slug: CoreTechnologiesSlug.Databases,
    color: '#F2C439',
    icon: IconName.OSzkurlat,
    references: [CoreTechnologiesSlug.Orm],
    translations: {
      pl: { description: 'Systemy przechowywania i zarządzania danymi' },
      en: { description: 'Systems for storing and managing data' },
    },
    nodes: [
      {
        title: 'PostgreSQL',
        iconFilename: 'icons/postgresql.png',
        skills: ['PostgreSQL', 'DB'],
      },
      {
        title: 'SQLite',
        iconFilename: 'icons/sqlite.svg',
        skills: ['SQLite', 'DB'],
      },
      {
        title: 'MySQL',
        iconFilename: 'icons/mysql.png',
        skills: ['MySQL', 'DB'],
      },
      {
        title: 'MongoDB',
        iconFilename: 'icons/mongo-db.svg',
        skills: ['MongoDB', 'DB'],
      },
    ],
  },
];

export const coreTechnologies: {
  [locale in Locale]: CoreTechnologiesSeedData;
} = {
  pl: {
    title: 'Główne technologie',
    groups: groups,
    content: coreTechnologiesContentPL,
  },

  en: {
    title: 'Core Technologies',
    groups: groups,
    content: coreTechnologiesContentEN,
  },
};
