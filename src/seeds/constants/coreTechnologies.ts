import type { CoreTechnologiesGroupSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { CoreTechnologiesSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { Locale } from '@/i18n/locale';

import { coreTechnologiesContentEN } from './coreTechnologiesContent';
import { coreTechnologiesContentPL } from './coreTechnologiesContent';
import { CoreTechnologiesSlug } from './coreTechnologiesSlug';

const groups: CoreTechnologiesGroupSeedData[] = [
  {
    title: 'Git',
    slug: CoreTechnologiesSlug.Git,
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
    references: [CoreTechnologiesSlug.JSLanguages],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.BuildTools],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.FrontendFrameworks],
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
    references: [CoreTechnologiesSlug.JSLanguages],
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
    references: [CoreTechnologiesSlug.BackendFrameworks],
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
    references: [CoreTechnologiesSlug.BackendFrameworks],
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
    references: [CoreTechnologiesSlug.Orm],
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
