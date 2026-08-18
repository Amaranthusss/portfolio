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
        iconFilename: 'devops.png',
        skills: ['Git'],
      },
      {
        title: 'GitLab',
        iconFilename: 'gitlab.png',
        skills: ['Git'],
      },
      {
        title: 'GitHub',
        iconFilename: 'github.png',
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
        iconFilename: 'figma.png',
      },
      {
        title: 'Adobe Xd',
        iconFilename: 'adobe-xd.png',
      },
    ],
  },

  {
    title: 'Tasks & Docs',
    slug: CoreTechnologiesSlug.TasksAndDocs,
    nodes: [
      {
        title: 'Jira',
        iconFilename: 'jira.png',
      },
      {
        title: 'Confluence',
        iconFilename: 'confluence.png',
      },
    ],
  },

  {
    title: 'Programming Languages',
    slug: CoreTechnologiesSlug.JSLanguages,
    nodes: [
      {
        title: 'TypeScript',
        iconFilename: 'ts.jpg',
        skills: ['TS'],
      },
      {
        title: 'JavaScript',
        iconFilename: 'javascript.png',
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
        iconFilename: 'react.png',
        skills: ['ReactJS'],
      },
      {
        title: 'Angular.js',
        iconFilename: 'angular.png',
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
        iconFilename: 'sass.svg',
        skills: ['SASS'],
      },
      {
        title: 'LESS',
        iconFilename: 'less.png',
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
        iconFilename: 'cypress.svg',
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
        iconFilename: 'ant-design.svg',
        skills: ['AntDReact', 'AntDBlazor'],
      },
      {
        title: 'DevExtreme',
        iconFilename: 'dev-extreme.svg',
        skills: ['DevExtremeReact', 'DevExtremeAngular'],
      },
      {
        title: 'Material UI',
        iconFilename: 'material-ui.png',
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
        iconFilename: 'sanity.png',
        skills: ['SanityCMS', 'CMS'],
      },
      {
        title: 'Payload CMS',
        iconFilename: 'payload-cms.png',
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
        iconFilename: 'vite.png',
        skills: ['Vite'],
      },
      {
        title: 'Next.js',
        iconFilename: 'next.png',
        skills: ['NextJS'],
      },
      {
        title: 'Create React App',
        iconFilename: 'create-react-app.svg',
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
        iconFilename: 'eslint.png',
      },
      {
        title: 'Prettier',
        iconFilename: 'prettier.png',
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
        iconFilename: 'zustand.svg',
        skills: ['Zustand'],
      },
      {
        title: 'Redux Toolkit',
        iconFilename: 'redux-toolkit.svg',
        skills: ['Redux'],
      },
      {
        title: 'Jotai',
        iconFilename: 'jotai.png',
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
        iconFilename: 'leaflet.png',
        skills: ['Leaflet'],
      },
      {
        title: 'Three.js',
        iconFilename: 'three.png',
        skills: ['ThreeJS'],
      },
      {
        title: 'Lodash',
        iconFilename: 'lodash.png',
        skills: ['Lodash'],
      },
      {
        title: 'Socket.io',
        iconFilename: 'socket-io.svg',
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
        iconFilename: 'nest.svg',
        skills: ['NestJS'],
      },
      {
        title: 'Express.js',
        iconFilename: 'express.svg',
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
        iconFilename: 'jest.png',
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
        iconFilename: 'prisma.svg',
        skills: ['Prisma', 'ORM'],
      },
      {
        title: 'TypeORM',
        iconFilename: 'type-orm.png',
        skills: ['TypeORM', 'ORM'],
      },
      {
        title: 'Drizzle ORM',
        iconFilename: 'drizzle.png',
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
        iconFilename: 'postgresql.png',
        skills: ['PostgreSQL', 'DB'],
      },
      {
        title: 'SQLite',
        iconFilename: 'sqlite.svg',
        skills: ['SQLite', 'DB'],
      },
      {
        title: 'MySQL',
        iconFilename: 'mysql.png',
        skills: ['MySQL', 'DB'],
      },
      {
        title: 'MongoDB',
        iconFilename: 'mongo-db.svg',
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
